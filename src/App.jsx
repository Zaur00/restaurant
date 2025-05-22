import { useState } from "react";
import RestaurantCard from "./Components/RestaurantCard";
import { nanoid } from "nanoid";

const App = () => {
  const [restaurants] = useState([
    {
      id: nanoid(),
      imageUrl:
        "https://www.royal-riviera.com/wp-content/uploads/2023/03/IMG_3505-scaled.jpg",
      name: "Riviera",
      cuisine: "Azərbaycan və Aralıq dənizi mətbəxi",
      rating: 5,
    },
    {
      id: nanoid(),
      imageUrl:
        "https://www.pizzaexpress.com/-/media/2024-Images/Jun/PizzaExpress_Ruislip_Exterior_01.ashx",
      name: "Pizza Express",
      cuisine: "İtalyan mətbəxi",
      rating: 4.7,
    },
    {
      id: nanoid(),
      imageUrl:
        "https://static.wixstatic.com/media/5dd41f_3f054789d1074cac942fd9b6b59098f5~mv2.jpg/v1/crop/x_0,y_336,w_6048,h_3351/fill/w_560,h_310,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Plan_restaurant-3.jpg",
      name: "Saray Restoranı",
      cuisine: "Azərbaycan mətbəxi",
      rating: 4.5,
    },
    {
      id: nanoid(),
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/e7/9f/ca/getlstd-property-photo.jpg?w=900&h=500&s=1",
      name: "La Parisienne",
      cuisine: "Fransız mətbəxi",
      rating: 4.6,
    },
    {
      id: nanoid(),
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/38/68/a9/2.jpg?w=1200&h=900&s=1",
      name: "Tandoori House",
      cuisine: "Hind mətbəxi",
      rating: 4.2,
    },
    {
      id: nanoid(),
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/65/24/79/fariz-quliyev.jpg",
      name: "Sushi World",
      cuisine: "Yapon mətbəxi",
      rating: 4.7,
    },
  ]);

  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          name={restaurant.name}
          imageUrl={restaurant.imageUrl}
          rating={restaurant.rating}
          cuisine={restaurant.cuisine}
        />
      ))}
    </div>
  );
};

export default App;
