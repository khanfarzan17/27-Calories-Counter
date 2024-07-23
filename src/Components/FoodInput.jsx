import { useState } from "react";
import { foodData } from "/src/Data/Data.js";
import "../Styles/FoodInput.css";
const FoodInputForm = ({ addFood, reset }) => {
  const [foodItem, setFoodItem] = useState("");
  const [portionSize, setPortionSize] = useState("");
  const [mealTime, setMealTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const food = foodData.find((item) => item.name === foodItem);
    if (food) {
      addFood({ ...food, portionSize: Number(portionSize) });
    }
    setFoodItem("");
    setPortionSize("");
    setMealTime("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-caontainer">
      <label className="form-label">
        Food Item:
        <input
          type="text"
          list="foodItem"
          value={foodItem}
          onChange={(e) => setFoodItem(e.target.value)}
          className="input-field"
        />
        <datalist id="foodItem" className="data-list">
          {foodData.map((item) => (
            <option value={item.name} key={item.id} />
          ))}
        </datalist>
      </label>

      <label className="form-label">
        Portion Size:
        <input
          type="number"
          value={portionSize}
          onChange={(e) => setPortionSize(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
        />
      </label>

      <label className="form-label">
        Meal Time:
        <select
          value={mealTime}
          onChange={(e) => setMealTime(e.target.value)}
          className="drop-down"
        >
          <option value="">Select Meal Time</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
        </select>
      </label>

      <button type="submit" className="add-food-btn">
        Add Food
      </button>

      <button onClick={reset} className="add-food-btn">
        Clear Summary
      </button>
    </form>
  );
};

export default FoodInputForm;
