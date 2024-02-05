import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../Redux/CartSlice";
import "./Style.css";
import { Address } from "../../Components/Address/Address";

const Cart = () => {
  const cartCount = useSelector((state) => state.cart.cart);
  let c = 0;
  cartCount.map((item) => {
    c += item.count;
  });

  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    // Assuming you want to remove all items in the cart
    dispatch(removeFromCart({}));
  };

  const handleIncreaseQuantity = () => {
    // Assuming you want to increase the quantity of all items in the cart
    if (c < 20) {
      dispatch(increaseQuantity({}));
    }
  };

  const handleDecreaseQuantity = () => {
    if (cartCount.length > 0) {
      dispatch(decreaseQuantity({})); // Provide the id of the item
    }
  };

  return (
    <div style={{ backgroundColor: "#F7F6F6" }}>
      <MDBContainer className="h-100 vh-100 ">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <h2 className="text-center mb-4">Your Cart</h2>
            <MDBCard className="cart-card shadow">
              <MDBCardBody>
                <div className="d-md-flex justify-content-between">
                  <div className="d-flex  align-items-center">
                    <div>
                      <MDBCardImage
                        src="Images/kit.png"
                        fluid
                        className="product-image"
                        alt="Shopping item"
                      />
                      <h4 tag="h5 " className="kit_text mt-3">
                        Women Essentially Kit <br />
                      </h4>
                    </div>

                    <div className="product-details">
                      <h4 tag="h5">
                        <small className="price">Price : ₹349.00</small>
                        <div className="d-flex flex-row align-items-center quantity-buttons  mt-3">
                          <div>
                            <div tag="h5">
                              <span className="quantity_text">Quantity : </span>
                              <button
                                size="sm"
                                onClick={handleDecreaseQuantity}
                                className="quantity-button"
                              >
                                -
                              </button>{" "}
                              <span style={{ fontSize: "0.8em" }}>{c}</span>{" "}
                              <button
                                size="sm"
                                onClick={handleIncreaseQuantity}
                                className="quantity-button"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="d-grid mt-2">
                          <button
                            onClick={handleRemoveFromCart}
                            className="remove-button btn btn-danger"
                          >
                            Remove
                          </button>
                        </div>
                      </h4>
                    </div>
                  </div>
                  <div className="subtotal mt-2.5">Subtotal : ₹{c * 349}</div>
                </div>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="mt-4 shadow cart-card">
              <MDBCardBody>
                <div className="d-flex justify-content-center align-items-center">
                  {/* Left side for payment method */}

                  <h5 className="text-dark">Payment Method : COD only</h5>
                </div>

                <div className="text-center">
                  <a href="/address" className="address_btn btn btn-primary">
                    Continue
                  </a>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Cart;
