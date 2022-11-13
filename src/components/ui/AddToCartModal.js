import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToFinal,
  removeToCart,
} from "../../redux/actions/AddToCartAction";

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

class AddToCartModal extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      open: false,
    };
  }

  // mapStateToProps = (state) => ({
  //   cartItems: state.cartItems,
  // });

  // mapDispatchToProps = () => ({
  //   increment,
  //   decrement,
  // });
  // let dispatchData = [];
  // if (selector?.cartData) {
  //   dispatchData.push(...selector.cartData, { bookId, count });
  // } else {
  //   dispatchData.push({ bookId, count });
  // }

  addToCartHandler = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };
  removeToCartHandler = () => {
    this.setState((prev) => ({ count: prev.count - 1 }));
  };
  finalData = () => {
    let dispatchData = [];
    if (selector?.cartData) {
      dispatchData.push(...selector.cartData, { bookId, count });
    } else {
      dispatchData.push({ bookId, count });
    }
  };
  render() {
    return (
      <div>
        <Button
          sx={{ border: "2px solid #000", m: 5 }}
          onClick={() => this.setState({ open: true })}
        >
          Open modal
        </Button>
        <Modal
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add To Cart Section
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Number of Books : {this.state.count}
              <Button
                sx={{
                  border: "2px solid #000",
                  ml: 2,
                }}
                onClick={this.addToCartHandler}
              >
                +
              </Button>
              <Button
                sx={{
                  border: "2px solid #000",
                  ml: 2,
                }}
                onClick={this.removeToCartHandler}
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
                onClick={this.finalData}
              >
                Continue
              </Button>
            </Link>
          </Box>
        </Modal>
      </div>
    );
  }
}
// export default AddToCartModal;
const mapStateToProps = (state) => ({
  data: state.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  finalData: (data) => dispatch(addToFinal(data)),
  // addToCartHandler: (data) => dispatch(addToCart(data)),
  // removeToCartHandler: (data) => dispatch(removeToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartModal);

// export default function AddToCartModal({ bookId }) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const [count, setCount] = React.useState(0);

//   const dispatch = useDispatch();
//   // use store here ---> by useSelector ----> state

//   const selector = useSelector((state) => state.cartItems);
//   //   console.log("11111", selector);

//   const addToCartHandler = () => {
//     setCount(count + 1);
//   };

//   const removeToCartHandler = () => {
//     setCount(count - 1);
//   };
//   let dispatchData = [];
//   if (selector?.cartData) {
//     dispatchData.push(...selector.cartData, { bookId, count });
//   } else {
//     dispatchData.push({ bookId, count });
//   }

//   return (
//     <div>
//       <Button sx={{ border: "2px solid #000", m: 5 }} onClick={handleOpen}>
//         Open modal
//       </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Add To Cart Section
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Number of Books : {count}
//             <Button
//               sx={{
//                 border: "2px solid #000",
//                 ml: 2,
//               }}
//               onClick={addToCartHandler}
//             >
//               +
//             </Button>
//             <Button
//               sx={{
//                 border: "2px solid #000",
//                 ml: 2,
//               }}
//               onClick={removeToCartHandler}
//             >
//               -
//             </Button>
//           </Typography>
//           <Link to="/cart">
//             <Button
//               sx={{
//                 border: "2px solid #000",
//                 mt: 3,
//                 display: "flex",
//                 float: "right",
//               }}
//               onClick={() => {
//                 dispatch({
//                   type: "ADD_TO_CART",
//                   payload: dispatchData, // send payload into array
//                 });
//               }}
//             >
//               Continue
//             </Button>
//           </Link>
//         </Box>
//       </Modal>
//     </div>
//   );
// }
