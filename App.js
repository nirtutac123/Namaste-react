const heading = React.createElement("h1", { id: "title" }, "Heading 1");

const heading2 = React.createElement("h2", { id: "title" }, "Heading 2");

const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);

console.log(heading);

const root = ReactDOM.createRoot(createElement.getElementById("root"));
//passing a react element inside the root

root.render(container);

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
