import React, { useState, useEffect } from 'react';

function App() {
  // Khởi tạo state cho sản phẩm từ localStorage nếu có
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem("products");
    return stored ? JSON.parse(stored) : [
      { id: 1, name: "Áo thun", price: 120000, category: "Thời trang", stock: 10 },
      { id: 2, name: "Laptop", price: 15000000, category: "Công nghệ", stock: 5 },
      { id: 3, name: "Máy xay sinh tố", price: 800000, category: "Gia dụng", stock: 15 },
    ];
  });

  // Trạng thái cho form nhập liệu
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: '',
    stock: ''
  });

  // Trạng thái cho tìm kiếm và lọc sản phẩm
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  // Cập nhật form khi nhập
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Hàm thêm sản phẩm mới
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
    setNewProduct({ name: '', price: '', category: '', stock: '' });
  };

  // Hàm xoá sản phẩm
  const handleDeleteProduct = (id) => {
    const confirmDelete = confirm("Bạn có chắc chắn muốn xoá sản phẩm này?");
    if (!confirmDelete) return;

    const updatedProducts = products.filter(product => product.id !== id);
    updateProducts(updatedProducts);
  };

  // Hàm cập nhật và lưu vào localStorage
  const updateProducts = (newList) => {
    setProducts(newList);
    localStorage.setItem("products", JSON.stringify(newList));
  };

  // Hàm tìm kiếm sản phẩm theo tên
  const filteredProducts = products.filter(product => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterCategory ? product.category === filterCategory : true)
    );
  });

  // Hiển thị tổng số sản phẩm và tồn kho
  const totalStock = filteredProducts.reduce((sum, p) => sum + p.stock, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Quản lý sản phẩm</h1>

      <h3>Thêm sản phẩm mới</h3>
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
        <button onClick={handleAddProduct}>Thêm sản phẩm</button>
      </div>

      <h3>Tìm kiếm và lọc sản phẩm</h3>
      <input
        type="text"
        placeholder="Tìm sản phẩm theo tên"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price.toLocaleString('vi-VN')} đ</td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
              <td>
                <button onClick={() => handleDeleteProduct(product.id)}>Xoá</button>
              </td>
            </tr>
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
