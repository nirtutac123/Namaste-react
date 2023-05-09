import { restaurantList } from "./constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
//What is state
//What is Hooks
//What is usestate
function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );

  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList); //   let searchTxt = "KFC";   // SearchText is a local variable  //   const [searchClicked, setSearchClicked] = useState("false"); //   const [searchInput, setSearchInput] = useState(""); //To create state variable
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />{" "}
        {/* <h1>{searchClicked}</h1> */}
        <button
          className="search_btn"
          onClick={() => {
            //need to filter the data    // update the state - restaurants
            const data = filterData(searchText, restaurants); //update the state - restaurants
            setRestaurants(data);
          }}
        >
          {/* {" "} */}
          Search
          {/* - {searchInput} */}
        </button>
      </div>
      <div className="resturant-list">
        {restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurantList[0].data} />;
        })}
      </div>
    </>
  );
};

export default Body;
