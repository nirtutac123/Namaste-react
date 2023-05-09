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
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

// import Title from "./components/Title";
// React.createElement gived an object -html(DOM)
// console.log(heading);
const heading = createElement(
  "h1",
  { id: "title" },

  "Heading 1 from parcel1"
);
//React Component= 1. Functional
//                 2. Class Based Component

//1st functional component

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

//Optional Chaining
//body

//kx2ghnwagcnqjtmd5jbc
//props-properties

const AppLayout = () => {
  return (
    <>
      {/* //<Header /> */}
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
