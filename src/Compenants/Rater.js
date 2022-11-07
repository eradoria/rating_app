import React, { useState } from "react";
import star from "../Images/icon-star.svg";
import reciept from "../Images/illustration-thank-you.svg";

export default function Rater() {
  const [rated, setRated] = useState(true);
  const [rating, setRating] = useState(0);
  const [activeRating, setActiveRating] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });

  const handleSubmit = () => {
    setRated(false);
  };

  return (
    <div className="rating_container">
      {rated ? (
        <>
          <div className="star_img">
            <img src={star} className="star" alt="star-logo" />
          </div>
          <div className="main">
            <h1>How Did we do?</h1>
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
          <div className="rating">
            <div
              className={activeRating ? "one" : "one active"}
              onClick={() => {
                setRating(1);
                setActiveRating({
                  one: false,
                  two: false,
                  three: false,
                  four: false,
                  five: false,
                });
              }}
            >
              <h3>1</h3>
            </div>
            <div
              className={activeRating ? "two" : "two active"}
              onClick={() => {
                setRating(1);
                setActiveRating({
                  one: true,
                  two: false,
                  three: false,
                  four: false,
                  five: false,
                });
              }}
            >
              <h3>2</h3>
            </div>
            <div
              className="three"
              onClick={() => {
                setRating(1);
                setActiveRating({
                  one: false,
                  two: true,
                  three: false,
                  four: false,
                  five: false,
                });
              }}
            >
              <h3>3</h3>
            </div>
            <div
              className="four"
              onClick={() => {
                setRating(1);
                setActiveRating({
                  one: false,
                  two: false,
                  three: true,
                  four: false,
                  five: false,
                });
              }}
            >
              <h3>4</h3>
            </div>
            <div
              className="five"
              onClick={() => {
                setRating(1);
                setActiveRating({
                  one: false,
                  two: false,
                  three: false,
                  four: true,
                  five: false,
                });
              }}
            >
              <h3>5</h3>
            </div>
          </div>
          <div className="button_container">
            <button onClick={handleSubmit}>submit</button>
          </div>
        </>
      ) : (
        <div className="checkout">
          <div className="thank-you-logo">
            <img src={reciept} className="reciept" alt="thank-you logo" />
          </div>
          <div className="rated-score">
            <h5 class="score-text">You have select {rating} out of 5</h5>
          </div>
          <div className="checkout-text">
            <h1>Thank You</h1>
            <p>
              We appreciate you taking the time to give a rating if you ever
              need more support, dont hesitate to get in touch!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
