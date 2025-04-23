// src/ProductItem.jsx

import React from 'react';

function ProductItem({ product, onEdit, onDelete }) {
  return (
    <tr key={product.id}>
      <td>{product.name}</td>
      <td>{product.price.toLocaleString('vi-VN')} đ</td>
      <td>{product.category}</td>
      <td>{product.stock}</td>
      <td>
        <button onClick={() => onEdit(product.id)}>Sửa</button>
        <button onClick={() => onDelete(product.id)}>Xoá</button>
      </td>
    </tr>
  );
}

export default ProductItem;
