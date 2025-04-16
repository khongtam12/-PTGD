import React from 'react';
import avt1 from "./assets/Avatar (1).png";
import avt2 from "./assets/Avatar (2).png";
import avt3 from "./assets/Avatar (3).png";
import avt4 from "./assets/Avatar (4).png";
import search from "./assets/search.png"
import iconbutton from "./assets/Icon Button 73.png"
import group from "./assets/Group 9.png"
import bean from "./assets/Bean, shrimp, and potato salad.png";
import background from "./assets/Image 73.png";
import italian from "./assets/Italian-style tomato.png";
import lotussalad01 from "./assets/Lotus delight salad_01.png";
import lotussalad from "./assets/Lotus delight salad.png";
import saladcabage from "./assets/Salad with cabbage.png";
import snack from "./assets/Snack cakes.png";
import sunny from "./assets/Sunny-side up fried eggs.png";
import vegeta from "./assets/Vegetable and shrimp spaghetti.png";

function App() {
  return (
    <div className="min-h-screen bg-white w-[1400px] m-auto">
      {/* Navigation */}
      <nav className="px-6 py-4 border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={group} alt="" />

          </div>

          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center">
                <img src={search} alt="search" className="w-5 h-5 text-gray-500" />
              </span>

              <input
                type="text"
                placeholder="What would you like to cook?"
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>


          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">What to Cook</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Recipes</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Ingredients</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Occasions</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
            <button className="text-pink-500 font-medium">Login</button>
            <button className="bg-pink-500 text-white px-6 py-2 rounded-full font-medium">Subscribe</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="relative h-[800px] bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0  bg-opacity-10 flex items-center justify-center w-[550px] text-center">
          <div className="max-w-xl p-8 bg-white rounded-lg  absolute top-1/2 left-24 transform -translate-y-1/2 ">
            <div className=" font-medium mb-2 bg-yellow-500 w-60 p-2 rounded-lg  text-gray-500 absolute top-[-5%] left-[25%]">Recipe of the day</div>
            <h2 className="text-2xl font-bold text-pink-500 mb-2">Salad Caprese</h2>

            <p className="text-gray-600 mb-20">
              Classic Italian Salad Caprese - ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar
              create a refreshing dish for lunch or appetizer.
            </p>
            <div className="flex items-center justify-center gap-2 mb-4">
              <img src={avt1} alt="Chef" className="w-8 h-8 rounded-full" />
            </div>
            <p className="text-gray-600 mb-5">Salad Caprese</p>

            <button className="bg-pink-500 text-white px-6 py-2 rounded-full">View now →</button>
          </div>
        </div>
      </div>


      {/* Summer Recipes Section */}
      <div className="max-w-7xl mx-auto py-16">
        <h2 className="text-3xl font-bold text-center text-pink-500 mb-2">This Summer Recipes</h2>
        <p className="text-center text-gray-600 mb-8">We have all your Independence Day sweets covered.</p>

        <div className="grid grid-cols-4 gap-6">
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <img src={italian} alt="Italian-style tomato" className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Italian-style tomato</h3>
                <img src={iconbutton} alt="" />
              </div>
              <div className="text-sm text-pink-500 bg-pink-50 w-20 rounded-lg">15 minutes</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <img src={vegeta} alt="Spaghetti with vegetables" className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Spaghetti with vegetables</h3>
                <img src={iconbutton} alt="" />

              </div>
              <div className="text-sm text-pink-500 bg-pink-50 w-20 rounded-lg">20 minutes</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <img src={lotussalad} alt="Lotus delight salad" className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Lotus delight salad</h3>
                <img src={iconbutton} alt="" />

              </div>
              <div className="text-sm text-pink-500 bg-pink-50 w-20 rounded-lg">20 minutes</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <img src={snack} alt="Snack cakes" className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Snack cakes</h3>
                <img src={iconbutton} alt="" />

              </div>
              <div className="text-sm text-pink-500 bg-pink-50 w-20 rounded-lg">25 minutes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recipes With Videos Section */}
      <div className="max-w-7xl mx-auto py-16">
        <h2 className="text-3xl font-bold text-center text-pink-500 mb-2">Recipes With Videos</h2>
        <p className="text-center text-gray-600 mb-8">Cooking Up Culinary Creations with Step-by-Step Videos</p>

        <div className="grid grid-cols-4 gap-6">
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <img src={saladcabage} alt="Salad with cabbage" className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Salad with cabbage and shrimp</h3>
                <img src={iconbutton} alt="" />

              </div>
              <div className="text-sm text-pink-500 bg-pink-50 w-20 rounded-lg">52 minutes</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <img src={bean} alt="Bean salad" className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Salad of cove beans, shrimp and potatoes</h3>
                <img src={iconbutton} alt="" />

              </div>
              <div className="text-sm text-pink-500 bg-pink-50 w-20 rounded-lg">20 minutes</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <img src={sunny} alt="Sunny-side up eggs" className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Sunny-side up fried eggs</h3>
                <img src={iconbutton} alt="" />

              </div>
              <div className="text-sm text-pink-500 bg-pink-50 w-20 rounded-lg">15 minutes</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <img src={lotussalad01} alt="Lotus delight salad" className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Lotus delight salad</h3>
                <img src={iconbutton} alt="" />

              </div>
              <div className="text-sm text-pink-500 bg-pink-50 w-20 rounded-lg">20 minutes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Editor's Pick Section */}
      <div className="max-w-7xl mx-auto py-16">
        <h2 className="text-3xl font-bold text-center text-pink-500 mb-2">Editor's pick</h2>
        <p className="text-center text-gray-600 mb-8">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex gap-4">
              <img src="https://images.unsplash.com/photo-1558024920-b41e1887dc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Stuffed sticky rice ball"
                className="w-40 h-40 object-cover rounded-lg"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium">Stuffed sticky rice ball</h3>
                  <img src={iconbutton} alt="" />

                </div>
                <div className="text-sm text-gray-500 mb-2">34 minutes</div>
                <div className="flex items-center gap-2 mb-2">
                  <img src={avt2} alt="Jennifer King" className="w-6 h-6 rounded-full" />
                  <span className="text-sm">Jennifer King</span>
                </div>
                <p className="text-sm text-gray-600">
                  Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex gap-4">
              <img src="https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Strawberry smoothie"
                className="w-40 h-40 object-cover rounded-lg"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium">Strawberry smoothie</h3>
                  <img src={iconbutton} alt="" />

                </div>
                <div className="text-sm text-gray-500 mb-2">40 minutes</div>
                <div className="flex items-center gap-2 mb-2">
                  <img src={avt3} alt="Matthew Martinez" className="w-6 h-6 rounded-full" />
                  <span className="text-sm">Matthew Martinez</span>
                </div>
                <p className="text-sm text-gray-600">
                  Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex gap-4">
              <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Latte Art"
                className="w-40 h-40 object-cover rounded-lg"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium">Latte Art</h3>
                  <img src={iconbutton} alt="" />

                </div>
                <div className="text-sm text-gray-500 mb-2">19 minutes</div>
                <div className="flex items-center gap-2 mb-2">
                  <img src={avt1} alt="Sarah Hill" className="w-6 h-6 rounded-full" />
                  <span className="text-sm">Sarah Hill</span>
                </div>
                <p className="text-sm text-gray-600">
                  Latte art is the skillful craft of creating captivating designs on the surface of a latte...
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex gap-4">
              <img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Butter fried noodles"
                className="w-40 h-40 object-cover rounded-lg"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium">Butter fried noodles</h3>
                  <img src={iconbutton} alt="" />

                </div>
                <div className="text-sm text-gray-500 mb-2">16 minutes</div>
                <div className="flex items-center gap-2 mb-2">
                  <img src={avt4} alt="Julia Lopez" className="w-6 h-6 rounded-full" />
                  <span className="text-sm">Julia Lopez</span>
                </div>
                <p className="text-sm text-gray-600">
                  Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <div className="flex justify-between gap-40">
            <div>
              <h3 className="font-bold mb-4">About Us</h3>
              <p className="text-gray-400 text-sm mb-4">
                Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
              </p>
              <div className="relative flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-white text-gray-500"
                />
                <button className=" bg-pink-500 text-white px-4 py-1 rounded-lg text-sm">
                  Send
                </button>
              </div>
            </div>
            <div>
              <div>
                <h3 className="font-bold mb-4">Learn More</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Our Cooks</li>
                  <li>See Our Features</li>
                  <li>FAQ</li>
                </ul>
              </div>
              <div className='mt-10'>
                <h3 className="font-bold mb-4">Shop</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Gift Subscription</li>
                  <li>Send Us Feedback</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Recipes</h3>
              <ul className="space-y-2 text-gray-400">
                <li>What to Cook This Week</li>
                <li>Pasta</li>
                <li>Dinner</li>
                <li>Healthy</li>
                <li>Vegetarian</li>
                <li>Vegan</li>
                <li>Christmas</li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-800 flex items-center gap-10">
            <div className="flex items-center gap-2">
              <img src={group} alt="" />

            </div>
            <div className="text-sm text-gray-400">
              2023 Chefify Company | Terms of Service | Privacy Policy
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;