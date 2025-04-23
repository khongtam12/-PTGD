import React, { useState } from 'react';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Áo thun", price: 120000, category: "Thời trang", stock: 10 },
    { id: 2, name: "Laptop", price: 15000000, category: "Công nghệ", stock: 5 },
    { id: 3, name: "Máy xay sinh tố", price: 800000, category: "Gia dụng", stock: 15 },
    { id: 4, name: "Quần jeans", price: 350000, category: "Thời trang", stock: 20 },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: '',
    stock: ''
  });

  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

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

    setProducts([...products, productToAdd]);
    setNewProduct({ name: '', price: '', category: '', stock: '' });
  };

  const handleDeleteProduct = (id) => {
    const confirmDelete = confirm("Bạn có chắc chắn muốn xoá sản phẩm này?");
    if (!confirmDelete) return;

    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  // Tạo danh sách danh mục duy nhất
  const categories = ['Tất cả', ...new Set(products.map(p => p.category))];

  // Lọc theo tên + danh mục
  const filteredProducts = products.filter(product => {
    const matchName = product.name.toLowerCase().includes(searchKeyword.toLowerCase());
    const matchCategory = selectedCategory === 'Tất cả' || product.category === selectedCategory;
    return matchName && matchCategory;
  });

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

      <h3>Tìm kiếm và lọc</h3>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Tìm theo tên sản phẩm"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          style={{ padding: "5px", width: "250px" }}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: "5px" }}
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>
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
      </table>
    </div>
  );
}

export default App;
