// src/ProductItem.jsx

import React from 'react';

function ProductItem({ product, onEdit, onDelete }) {
  return (
    <tr key={product.id} className="hover:bg-gray-100 transition-colors">
      <td className="p-2 text-left">{product.name}</td>
      <td className="p-2 text-left">{product.price.toLocaleString('vi-VN')} đ</td>
      <td className="p-2 text-left">{product.category}</td>
      <td className="p-2 text-left">{product.stock}</td>
      <td className="p-2 flex gap-2">
        <button
          onClick={() => onEdit(product.id)}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
        >
          Sửa
        </button>
        <button
          onClick={() => onDelete(product.id)}
          className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors"
        >
          Xoá
        </button>
      </td>
    </tr>
  );
}

export default ProductItem;
