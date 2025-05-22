import "./RestaurantCard.css";
import { Rate } from "antd";

const RestaurantCard = ({ name, imageUrl, rating, cuisine }) => {
  return (
    <div className="restaurant-card">
      <img src={imageUrl} alt={name} className="restaurant-image" />
      <div className="restaurant-info">
        <h2 className="restaurant-name">{name}</h2>
        <p className="restaurant-cuisine">{cuisine}</p>
        <div className="rating">
          <Rate disabled defaultValue={rating} allowHalf />
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
