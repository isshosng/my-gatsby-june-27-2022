console.clear();

import React, { useState, useEffect } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

/*
const Layout = (args) => {
  const msg = args.msg;
  const msg2 = args.msg2;
  const children = args.children;
*/

/*
const Layout = ({msg, msg2, children}) => {
*/

const Layout = ({ children }) => {
  return (
    <div style={{ color: "blue", border: "1px soild red", padding: 10 }}>
      {children}
    </div>
  );
};

function App() {
  return (
    <>
      <Layout>하하하1</Layout>
      <Layout>하하하1</Layout>
      <Layout>하하하2</Layout>
      <Layout>하하하3</Layout>
      <div>내용</div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
