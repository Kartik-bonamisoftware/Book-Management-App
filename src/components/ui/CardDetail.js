import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";

const CardDetail = ({ item }) => {
  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 345, m: 8 }}>
        <CardMedia
          component="img"
          height="350"
          image={item.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.bookName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* {item.description} */}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            to={{
              pathname: `/booklist/author`,
              userProps: { ...item },
            }}
          >
            Info
          </Link>
        </CardActions>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {item.quantity}
        </Box>
        {/* <button
          onClick={dispatch({
            type: "ADD_TO_CART",
            payload: dispatchData,
          })}
        >
          Remove
        </button> */}
      </Card>
    </React.Fragment>
  );
};
export default CardDetail;
