import React from "react";
import "../Styles/FoodSummary.css";

const FoodSummary = ({ dailyIntake }) => {
  return (
    <div className="food-summarary">
      <h1 className="Summary-heading">Nutrition Summary</h1>
      <p className="paragraph">Calories: {dailyIntake.calories} Cal</p>
      <p className="paragraph">Protein: {dailyIntake.protein} grams</p>
      <p className="pragraph">Fats: {dailyIntake.fat} grams</p>
      <p className="pragraph">Carbs: {dailyIntake.carbs} grams</p>
    </div>
  );
};

export default FoodSummary;
