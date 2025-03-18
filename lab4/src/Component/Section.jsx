import { useEffect, useState } from "react";
import Item from "./Item";
import './Section.css';
import avatar from '../assets/avatar.png';
import share from '../assets/Share fat.png'

export default function Section() {
    const url = "https://67c83cad0acf98d070858a0d.mockapi.io/lab4/product";
    const [arr, setArr] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((r) => r.json())
            .then((data) => setArr(data));
    }, []);

    return (
        <div className="container">
            {/* Điều hướng */}
            <div className="breadcrumb">
                <h4>Home</h4>
                <span> &gt; </span>
                <h4 className="active">Your Recipe Box</h4>
            </div>

            {/* Tiêu đề */}
            <h2>Emma Gonzalez's Recipe Box</h2>
            <div className="profile-section">
                <img src={avatar} alt="Emma Gonzalez" className="avatar" />
                <div className="profile-info">
                    
                    <p>
                        Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at <strong>The Los Angeles Times</strong>. 
                        She is also an accomplished author, contributing to numerous cookbooks and food publications. 
                        Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.
                    </p>
                    <div className="info">
                        <span className="subscribers">6.5k Subscribers</span>
                        <button className="share-btn">Share <img src={share} alt="" /> </button>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="tabs">
                <button className="active">Saved Recipes</button>
                <button>Folders</button>
                <button>Recipes by Genevieve</button>
            </div>

            {/* Danh sách công thức */}
            <div className="recipe-grid">
                {arr.map((e, i) => (
                    <Item key={i} name={e.name} Image={e.Image} Fave={e.fave} />
                ))}
            </div>

            {/* Phân trang */}
            <div className="pagination">
                <button>&lt;</button>
                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
                <button>...</button>
                <button>11</button>
                <button>&gt;</button>
            </div>
        </div>
    );
}
