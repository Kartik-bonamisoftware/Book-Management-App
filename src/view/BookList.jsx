import CardDetail from "../components/ui/CardDetail";
import React from "react";
import data from "../components/data/data.json";
import Box from "@mui/material/Box";

const BookList = () => {
  // let { path, url } = useRouteMatch();
  // console.log("url111111", url);
  // console.log("path22222", path);

  return (
    <React.Fragment>
      <h1>BookList</h1>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {data &&
          data.map((item) => {
            return <CardDetail item={item} key={item.id} />;
          })}
      </Box>
    </React.Fragment>
  );
};

export default BookList;
