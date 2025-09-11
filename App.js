const heading = React.createElement("div", { id: "parent" },
   [ React.createElement("div", { id: "child1" },
       [React.createElement("h1", {}, "Nested React Elements1"),
           React.createElement("h1", {}, "This is the element 1")
            
       ]),
       React.createElement("div", { id: "child2" },
           [React.createElement("h1", {}, "Nested React Elements2"),
               React.createElement("h1", {}, "This is the element2 ")])
   ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);