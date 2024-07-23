import React, { useState } from "react";
import Heading from "../Components/Heading";
import FoodInputForm from "../Components/FoodInput";
import FoodSummary from "../Components/FoodSummary";

const Form = () => {
  const [fooditem, setFooditem] = useState([]);

  const addFood = (food) => {
    setFooditem([...fooditem, food]);
  };

  const reset = () => {
    setFooditem([]);
  };


  const totalCaloriesIntake = () => {
    return fooditem.reduce(
      (acc, item) => {
        acc.calories += item.calories * item.portionSize;
        acc.protein += item.protein * item.portionSize;
        acc.carbs += item.carbs * item.portionSize;
        acc.fat += item.fat * item.portionSize;
        return acc;
      },
      { calories: 0, protein: 0, carbs: 0, fat: 0 }
    );
  };

  
  const formatNutrientValue = (value) => parseFloat(value.toFixed(2));

  const dailyIntake = (() => {
    const intake = totalCaloriesIntake();
    intake.calories = formatNutrientValue(intake.calories);
    intake.protein = formatNutrientValue(intake.protein);
    intake.carbs = formatNutrientValue(intake.carbs);
    intake.fat = formatNutrientValue(intake.fat);
    return intake;
  })();

  return (
    <div>
      <Heading />
      <FoodInputForm addFood={addFood} reset={reset} />
      <FoodSummary dailyIntake={dailyIntake} />
    </div>
  );
};

export default Form;
