import './footer.css'
import img from '../assets/chefifywhite.png';

function Footer(){
    return (
        <>
           <div className="footer">
            <div className="innerLeft">
                <h4>About us</h4>
                <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro</p>
                <div className='search'>
                    <input type="text" placeholder='Enter your email'/>
                    <button>Send</button>
                </div>
                <div className='box chefify-box'>
                    <img src={img} alt="" />
                    <li>2023 Chefify Company</li>
                    <li>Terms of Servicel Privacy Policy</li>
                </div>
            </div>
            <div className="innerCenter">
                <div className='learn box'>
                    <h4>Learn more</h4>
                    <li>Our Cooks</li>
                    <li>See Our Features</li>
                    <li>FAQ</li>
                </div>

                <div className='shop box'>
                    <h4>Learn more</h4>
                    <li>Our Cooks</li>
                    <li>See Our Features</li>
                    <li>FAQ</li>
                </div>

            </div>
            <div className="innerRight">
            <div className='recipes box'>
                    <h4>Recipes</h4>
                    <li>What to Cook This Week</li>
                    <li>Pasta</li>
                    <li>Dinner</li>
                    <li>Healthy</li>
                    <li>Vegetarian</li>
                    <li>Vegan</li>
                    <li>Chirismas</li>
                </div>
            </div>
           </div>
        </>
    )
}

export default Footer