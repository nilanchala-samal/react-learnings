import React from "react";

export default function Button() {
  const styles = {
    backgroundColor: "hsl(196, 92%, 49%)",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };
  // return <button className="button">Click me</button>;
  return <button style={styles}>Click me</button>;
}
