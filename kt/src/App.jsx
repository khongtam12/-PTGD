// src/App.jsx

import React, { useState, useEffect } from 'react';
import ProductItem from './components/ProductItem';

function App() {
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem("products");
    return stored ? JSON.parse(stored) : [
      { id: 1, name: "Áo thun", price: 120000, category: "Thời trang", stock: 10 },
      { id: 2, name: "Laptop", price: 15000000, category: "Công nghệ", stock: 5 },
      { id: 3, name: "Máy xay sinh tố", price: 800000, category: "Gia dụng", stock: 15 },
    ];
  });

  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    price: '',
    category: '',
    stock: ''
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.category || !newProduct.stock) {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;

    const productToAdd = {
      id: newId,
      name: newProduct.name,
      price: parseInt(newProduct.price),
      category: newProduct.category,
      stock: parseInt(newProduct.stock)
    };

    updateProducts([...products, productToAdd]);
    setNewProduct({ id: '', name: '', price: '', category: '', stock: '' });
  };

  const handleDeleteProduct = (id) => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xoá sản phẩm này?");
    if (!confirmDelete) return;

    const updatedProducts = products.filter(product => product.id !== id);
    updateProducts(updatedProducts);
  };

  const handleEditProduct = (id) => {
    const productToEdit = products.find(product => product.id === id);
    setNewProduct({ ...productToEdit });
  };

  const handleUpdateProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.category || !newProduct.stock) {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    const updatedProducts = products.map(product =>
      product.id === newProduct.id
        ? { ...product, name: newProduct.name, price: parseInt(newProduct.price), category: newProduct.category, stock: parseInt(newProduct.stock) }
        : product
    );

    updateProducts(updatedProducts);
    setNewProduct({ id: '', name: '', price: '', category: '', stock: '' });
  };

  const updateProducts = (newList) => {
    setProducts(newList);
    localStorage.setItem("products", JSON.stringify(newList));
  };

  const filteredProducts = products.filter(product => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterCategory ? product.category === filterCategory : true)
    );
  });

  const totalStock = filteredProducts.reduce((sum, p) => sum + p.stock, 0);

  return (
    <div className="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-semibold mb-8 text-center text-indigo-600">Quản lý sản phẩm</h1>

      <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8">
        <h3 className="text-2xl mb-4 text-center text-gray-700">{newProduct.id ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm mới"}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Tên sản phẩm"
            value={newProduct.name}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md shadow-sm w-full"
          />
          <input
            type="number"
            name="price"
            placeholder="Giá"
            value={newProduct.price}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md shadow-sm w-full"
          />
          <input
            type="text"
            name="category"
            placeholder="Danh mục"
            value={newProduct.category}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md shadow-sm w-full"
          />
          <input
            type="number"
            name="stock"
            placeholder="Tồn kho"
            value={newProduct.stock}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md shadow-sm w-full"
          />
        </div>
        <div className="flex justify-center mt-6">
          <button
            onClick={newProduct.id ? handleUpdateProduct : handleAddProduct}
            className="bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition duration-200"
          >
            {newProduct.id ? "Cập nhật sản phẩm" : "Thêm sản phẩm"}
          </button>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
        <h3 className="text-2xl mb-4 text-center text-gray-700">Tìm kiếm và lọc sản phẩm</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Tìm sản phẩm theo tên"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-3 border border-gray-300 rounded-md shadow-sm w-full"
          />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="p-3 border border-gray-300 rounded-md shadow-sm w-full"
          >
            <option value="">Lọc theo danh mục</option>
            <option value="Thời trang">Thời trang</option>
            <option value="Công nghệ">Công nghệ</option>
            <option value="Gia dụng">Gia dụng</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <h3 className="text-2xl mb-4 text-center text-gray-700">Danh sách sản phẩm</h3>
        <table className="w-full table-auto border-collapse shadow-md">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="p-3 text-left">Tên sản phẩm</th>
              <th className="p-3 text-left">Giá</th>
              <th className="p-3 text-left">Danh mục</th>
              <th className="p-3 text-left">Tồn kho</th>
              <th className="p-3 text-left">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <ProductItem
                key={product.id}
                product={product}
                onEdit={handleEditProduct}
                onDelete={handleDeleteProduct}
              />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5" className="p-3 text-right font-semibold">
                Tổng số sản phẩm: {filteredProducts.length} | Tổng tồn kho: {totalStock}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default App;
