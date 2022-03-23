import React from "react";
import { useLocation } from "react-router-dom";

const Author = () => {
  // console.log(props);
  // const { search } = useLocation();
  // const id = new URLSearchParams(search).get("id");
  // console.log("id", id);
  // const authorData = data.find((item) => item.id === id);
  // console.log("idddd", authorData);

  let location = useLocation();
  console.log(location.userProps);
  console.log(location.pathname);

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          <h1>Author : {location.userProps.author}</h1>
        </li>
        <li className="list-group-item">
          <h3>Book Name : {location.userProps.bookName} </h3>
        </li>
        <li className="list-group-item">
          <h3>Publisher : {location.userProps.publisher} </h3>
        </li>
        <li className="list-group-item">
          <h3>Description : {location.userProps.description} </h3>
        </li>
      </ul>
    </div>
  );
};

export default Author;
