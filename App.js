/*
(HMR)hot module reloading
File Watcher algorithm - C++
parcel(- BiNDLING
MINIFY
Cleaning our Code
Dev abd Production Build
Super Fast build algorithm
Clean
Caching while development
Compression
Compatable with older version of browser
HTTPS on dev
port Number
We should put in parcel.cash in our gitignore
Consistent Hashing Algorithm
Zero Config Bundler
Transitive dependencies
Tree Shaking -(removing unwanted code)


*/
import { func } from "prop-types";
import React, { createElement } from "react";
import ReactDOM, { createRoot } from "react-dom/client";

// React.createElement gived an object -html(DOM)
// console.log(heading);
const heading = createElement(
  "h1",
  { id: "title" },

  "Heading 1 from parcel1"
);

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHFEw0UHfi9LSK0QK5Dnh42SHlRezOZbFDQskXAxs&s"
    ></img>
    //{" "}
    <h1 id="Title" key="h2">
      // Food Villa //{" "}
    </h1>
  </a>
);
//React Component= 1. Functional
//                 2. Class Based Component

//1st functional component
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
//config driven UI
const config = [
  {
    type: "carousel",
    cards: [],
  },
  {
    type: "reusturants",
    cards: [
      {
        name: "Burger King",
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger",
        cusines: ["Burger", "American"],
        rating: 4.2,
      },
      {
        name: "KFC",
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger",
        cusines: ["Burger", "American"],
        rating: 4.2,
      },
    ],
  },
];

const restrauList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "496677",
      name: "Uncle Ji Restaurant",
      uuid: "a84f2ffb-c563-419f-b109-49c95c89dbdf",
      city: "22",
      area: "Majra",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "kx2ghnwagcnqjtmd5jbc",
      cuisines: ["North Indian", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 38,
      minDeliveryTime: 38,
      maxDeliveryTime: 38,
      slaString: "38 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "uncle-ji-restaurant-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address: "348 santosh tower, majra road gram majra dehradun 248001",
      locality: "Ashwani Enclave",
      parentId: 298209,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "496677",
        deliveryTime: 38,
        minDeliveryTime: 38,
        maxDeliveryTime: 38,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
];
//Optional Chaining
//body
const RestaurantCard = () => {
  const burgerKing = {
    name: "Burger King",
    image:
      "https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
    cusines: ["American", "Fast Food"],
    rating: 4.2,
  };
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          restrauList[0].data?.cloudinaryImageId
        }
      />
      <h2>{restrauList[0].data?.name}</h2>
      <h3>{restrauList[0].data?.cuisines.join(",")}</h3>
      <h4>{restrauList[0].lastMileTravelString} minutes</h4>
    </div>
  );
};
//kx2ghnwagcnqjtmd5jbc
const Body = () => {
  return (
    <div className="resturant-list">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />

      <RestaurantCard />
      <RestaurantCard />

      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
};
const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
//React.Fragment
const styleObj = {
  backgroundColor: "red",
};

const jsx = (
  <>
    <div style={styleObj}>
      <h1>JSX</h1>
      <h1>Second JSX</h1>
    </div>
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root

root.render(<AppLayout />);
//jsx code is not an html but html like syntax
//jsx= React.createElement =object=HTML(DOM)
/**
 * <div class="header">
    <h1>Namaste React</h1>
    <ul>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Home</li>
    </ul>
    
</div>
 */
/** 
const container = React.createElement("div", { id: "container" }, [
  React.createElement("h1", { id: "title" }, "Heading 1 from parcel"),
  React.createElement("ul", {}, [
    React.createElement(
      "ul",
      {},
      React.createElement("li", {}, "About Us"),
      React.createElement("li", {}, "Contact Us"),
      React.createElement("li", {}, "Home")
    ),
  ]),
]);

console.log(heading);
*/

/**
 * <div id = "parent">
 *   <div id = "child">
 *       <h1>I/m an h1 tag.</h1>
 *       <h2>I/m an h2 tag.</h2>
 *      </div>
 *<div id = "child">
 *   <h1>I/m an h1 tag.</h1>
 *   <h2>I/m an h2 tag.</h2>
 * </div>
 * ReactElement(Object) => HTML(Browser understands )
 */

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I/m an h1 tag!"),
//     React.createElement("h2", {}, "I/m an h2 tag!"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I/m an h1 tag!"),
//     React.createElement("h2", {}, "I/m an h2 tag!"),
//   ]),
// ]);
// console.log(parent); //returns object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
