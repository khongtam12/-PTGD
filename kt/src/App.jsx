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

  // Thêm state cho searchTerm và filterCategory
  const [searchTerm, setSearchTerm] = useState('');  // Khai báo searchTerm
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

  // Cập nhật danh sách sản phẩm sau khi lọc theo searchTerm và filterCategory
  const filteredProducts = products.filter(product => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterCategory ? product.category === filterCategory : true)
    );
  });

  const totalStock = filteredProducts.reduce((sum, p) => sum + p.stock, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Quản lý sản phẩm</h1>

      <h3>{newProduct.id ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm mới"}</h3>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Tên sản phẩm"
          value={newProduct.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Giá"
          value={newProduct.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Danh mục"
          value={newProduct.category}
          onChange={handleChange}
        />
        <input
          type="number"
          name="stock"
          placeholder="Tồn kho"
          value={newProduct.stock}
          onChange={handleChange}
        />
        <button onClick={newProduct.id ? handleUpdateProduct : handleAddProduct}>
          {newProduct.id ? "Cập nhật sản phẩm" : "Thêm sản phẩm"}
        </button>
      </div>

      <h3>Tìm kiếm và lọc sản phẩm</h3>
      <input
        type="text"
        placeholder="Tìm sản phẩm theo tên"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}  // Cập nhật searchTerm
        style={{ marginBottom: "10px" }}
      />
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        style={{ marginBottom: "10px", marginLeft: "10px" }}
      >
        <option value="">Lọc theo danh mục</option>
        <option value="Thời trang">Thời trang</option>
        <option value="Công nghệ">Công nghệ</option>
        <option value="Gia dụng">Gia dụng</option>
      </select>

      <h3>Danh sách sản phẩm</h3>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Danh mục</th>
            <th>Tồn kho</th>
            <th>Hành động</th>
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
            <td colSpan="5" style={{ fontWeight: "bold", textAlign: "right" }}>
              Tổng số sản phẩm: {filteredProducts.length} | Tổng tồn kho: {totalStock}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default App;
