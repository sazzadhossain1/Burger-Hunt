import "./Home.css";
import React, { useEffect, useState } from "react";
import Meals from "../Meals/Meals";

const Hone = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);

  return (
    <div className="">
      <div className="home-component">
        <input className="input" type="text" placeholder="Search Meals" />

        <h2 className="text-4xl ">Free Home Delivery 24 Hours</h2>
        <h4 className="mt-4 text-2xl">THE DELIGHT BURGER</h4>
        <h3 className="mt-4 text-3xl font-bold">Your best Food</h3>
        <p className="peragraph mt-5 ml-20 mr-20 ">
          Sink your teeth into a delicious restaurant-style, hamburger recipe
          made from lean beef. Skip the prepackaged patties and take the extra
          time to craft up your own, and that little extra effort will be worth
          it. To make cheeseburgers, about 1 minute before burgers are done, top
          with sliced cheese; continue cooking until cheese begins to melt.
        </p>
      </div>
      <div className="cart">
        <h1 className="customer-review text-4xl mt-10">Just Eat And Feel It</h1>
        <div className="meal-parents">
          {meals.map((me) => (
            <Meals key={me.id} me={me}></Meals>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hone;
