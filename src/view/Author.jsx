import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import AddToCartModal from "../components/ui/AddToCartModal";

const Author = () => {
  // console.log(props);
  // const { search } = useLocation();
  // const id = new URLSearchParams(search).get("id");
  // console.log("id", id);
  // const authorData = data.find((item) => item.id === id);
  // console.log("idddd", authorData);

  const history = useHistory();

  let data = useLocation();

  // on refreshing the page it will redirect to booklist page
  if (!data?.userProps) {
    history.push("/booklist");
    return null;
  }

  let { id, author, bookName, publisher, description } = data.userProps;
  console.log("1111", author);
  console.log("2222", id);

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          <h1>Author : {author}</h1>
        </li>
        <li className="list-group-item">
          <h3>Book Name : {bookName} </h3>
        </li>
        <li className="list-group-item">
          <h3>Publisher : {publisher} </h3>
        </li>
        <li className="list-group-item">
          <h3>Description : {description} </h3>
        </li>
      </ul>
      <div>
        <AddToCartModal bookId={id} />
      </div>
    </div>
  );
};

export default Author;
