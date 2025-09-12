import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("div", { id: "parent" },
   [ React.createElement("div", { id: "child1" ,key:"child1"},
       [React.createElement("h1", {id:"h1",key:"h1-1"}, "Nested React Elements1"),
           React.createElement("h2", {id:"h2",key:"h2-1"}, "This is the element 1")
            
       ]),
       React.createElement("div", { id: "child2",key:"child2" },
           [React.createElement("h1", {id:"h1",key:"h1-1"}, "Nested React Elements2"),
               React.createElement("h2", {id:"h2",key:"h2-1"}, "This is the element2 ")])
   ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);