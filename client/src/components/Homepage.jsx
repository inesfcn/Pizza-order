import React from "react";
import wallpaper from "../assets/wallpaper.jpg"

const  Homepage = () => {
  return (
    <div className="homepage" style={{backgroundImage: `url(${wallpaper})`}}>
      <h1>Welcome to Amazing Pizzas</h1>
      <button>Order</button>
    </div>
  );
}

export default Homepage;
