import React, { useState, useMemo } from "react";

export default function Bai2() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [sum, setSum] = useState(0); 

  function onChangeHandleA(e) {
    setA(parseInt(e.target.value) || 0);
  }

  function onChangeHandleB(e) {
    setB(parseInt(e.target.value) || 0);
  }

  function Sum() {
    setSum(a + b);  
  }

  const result = useMemo(() => a + b, [a, b]);

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <input type="text" onChange={onChangeHandleA} placeholder="Nhập a" />
      <br />
      <input type="text" onChange={onChangeHandleB} placeholder="Nhập b" />
      <br />
      <button onClick={Sum}>Tính tổng</button>
      <h3>Kết quả tính tổng: {sum}</h3> 
      <h3>Kết quả (tính bằng useMemo): {result}</h3> 
    </div>
  );
}
