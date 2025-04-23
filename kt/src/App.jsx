import React, { useState } from 'react';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Áo thun", price: 120000, category: "Thời trang", stock: 10 },
    { id: 2, name: "Laptop", price: 15000000, category: "Công nghệ", stock: 5 },
    { id: 3, name: "Máy xay sinh tố", price: 800000, category: "Gia dụng", stock: 15 },
  ]);

  // Trạng thái cho form nhập liệu
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: '',
    stock: ''
  });

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

    setProducts([...products, productToAdd]);

    // Reset form
    setNewProduct({ name: '', price: '', category: '', stock: '' });
  };

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
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price.toLocaleString('vi-VN')} đ</td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
              <td>
                <button>Xoá</button> {/* sẽ xử lý ở bước sau */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
