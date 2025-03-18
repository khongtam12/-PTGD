import './header.css'
import h1 from '../assets/chefify.png'
import h2 from '../assets/avatar.png'

function Header(){
    return (
        <>
        <div className="header">
            <div className="logo">
                <img src = {h1} alt="" />
            </div>
            <div className="search">
                <input type="text" placeholder='cakescascae' />
                <button>SEARCH</button>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="">What to cook</a></li>
                    <li><a href="">Recipes</a></li>
                    <li><a href="">Ingredients</a></li>
                    <li><a href="">Occasions</a></li>
                    <li><a href="">About us</a></li>
                </ul>
            </div>
            <div className="avatar">
                <div className="box">
                    <span>You Recipe Box</span>
                </div>
                <div className="img">
                    <img src={h2} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}


export default Header