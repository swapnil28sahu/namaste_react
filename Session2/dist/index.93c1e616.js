const heading1 = React.createElement("h1", {
    id: "any1"
}, "print this 1st");
const heading2 = React.createElement("h2", {
    id: "any2"
}, "print this 2nd");
const container = React.createElement("div", {
    id: "contains"
}, [
    heading1,
    heading2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=index.93c1e616.js.map
