import "./Home.css";
import React, { useEffect, useState } from "react";
import Meals from "../Meals/Meals";
import useReviews from "../../hooks/useReview";
import SingleReview from "../SingleReview/SingleReview";
import { Link } from "react-router-dom";

const Hone = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);

  const [reviews, setReviews] = useReviews();

  return (
    <div className="main">
      <div className="home-component">
        <h2 className="burger-hunt">
          Welcome to The <small>Burger Hunt</small> Clube
        </h2>
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
        <div>
          <h1 className="customer-review text-4xl">
            Just Eat And Feel The <small className="Burger">Burger</small>
          </h1>
        </div>

        <div className="meal-parents">
          {meals.map((me) => (
            <Meals key={me.id} me={me}></Meals>
          ))}
        </div>
      </div>

      <div className="cart crt-container">
        <h1 className="text-3xl my-10">
          <small className="text-6xl">Customer</small> Rewiew
        </h1>

        <div className="user">
          {reviews.map((re) => (
            <SingleReview key={re.id} re={re}></SingleReview>
          ))}

         
        </div>
        <Link to="reviews">Reviews</Link>
      </div>
    </div>
  );
};

export default Hone;
