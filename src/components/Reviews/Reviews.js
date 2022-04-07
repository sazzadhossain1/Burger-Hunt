import React from "react";
import useReviews from "../../hooks/useReview";
import SingleReview from "../SingleReview/SingleReview";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useReviews([]);

  return (
    <div className="container">
      
      <div>
      
      <div className="crt-container ctcn">
      
      <div className="user userName">
          
        {" "}
        
        {reviews.map((re) => (
          <SingleReview key={re.id} re={re}></SingleReview>
        ))}
      </div>
    </div>
      </div>
      
    </div>
  );
};

export default Reviews;
