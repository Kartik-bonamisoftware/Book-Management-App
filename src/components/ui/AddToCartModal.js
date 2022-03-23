import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddToCartModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //   const [count, setCount] = React.useState(0);

  return (
    <div>
      <Button sx={{ border: "2px solid #000", m: 5 }} onClick={handleOpen}>
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add To Cart Section
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Number of Books : {count}
            <Button
              sx={{
                border: "2px solid #000",
                ml: 2,
              }}
              onClick={() => props.addToCartHandler()}
            >
              +
            </Button>
            <Button
              sx={{
                border: "2px solid #000",
                ml: 2,
              }}
              onClick={() => props.removeToCartHandler()}
            >
              -
            </Button>
          </Typography>
          <Link to="/cart">
            <Button
              sx={{
                border: "2px solid #000",
                mt: 3,
                display: "flex",
                float: "right",
              }}
            >
              Continue
            </Button>
          </Link>
        </Box>
      </Modal>
    </div>
  );
}
