import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import { NavLink } from "react-router-dom"
export default function Header(){
    return(
        <div className='Header'>
        <h1 className='text-center'>Chào mừng đến nhà hàng ABC</h1>
        <div className="d-flex gap-5 align-content-center justify-content-center w-100">

            <NavLink to="/" className="text-decoration-none active"  >Trang chủ</NavLink>
            <NavLink to="/menu" className="text-decoration-none active">Thực đơn</NavLink>
            <NavLink to="/contact" className="text-decoration-none acyive">Liên hệ</NavLink>
            <button>Book table</button>

        </div>

        </div>
    )
}