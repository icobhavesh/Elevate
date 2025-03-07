
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from './ReactRedux/CardSlice/Cardslice'; // Update the path

const AddToCart = () => {
  const cartItems = useSelector((state) => state.Cart.items);
  const dispatch = useDispatch();
  console.log(cartItems);
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart({ id }));
  };
  const updateQuantityHandler = (id, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };
  // const updateQuantityHandler = (id, quantity) => {
  //   dispatch(updateQuantity({ id, quantity }));
  // };
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };
  return (

    <div>
      <section className="text-black body-font overflow-hidden shadow-2xl ~shadow-white ">
        <div className="container px-5 py-24 mx-auto ">
          {cartItems.map((data, idx) => (
            <div key={idx} className="lg:w-4/5 mx-auto flex flex-wrap gap-10 justify-center items-center shadow-xl shadow-gray-200 ">
              <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto object-contain max-w-[100px] object-center rounded" src={data.image} />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm flex items-center text-black  font-semibold  tracking-widest capitalize">{data.category}</h2>
                <div className="flex mb-4">
                  {/* Rating and reviews */}
                </div>

                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">₹{(data.price * data.quantity).toFixed(1)}</span>
                  <div className="flex ml-auto space-x-4">
                    <button
                      onClick={() => updateQuantityHandler(data.id, data.quantity - 1)}
                      className="bg-purple-800 text-white font-extralight rounded-full w-8 h-8 focus:outline-none">
                      -
                    </button>
                    <span className="text-gray-700">{data.quantity}</span>
                    <button
                      onClick={() => updateQuantityHandler(data.id, data.quantity + 1)}
                      className="bg-purple-800 text-white rounded-full w-8 h-8 focus:outline-none">
                      +
                    </button>
                    <button
                      onClick={() => removeFromCartHandler(data.id)}
                      className="bg-red-600 text-white rounded-full w-8 h-8 focus:outline-none">
                      X
                    </button>
                  </div>
                </div>

                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex">
                    {/* Color selection */}
                  </div>
                  <div className="flex ml-6 items-center">
                    {/* Size selection */}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className=" text-center mt-8">
            <h2 className="text-xl  text-black font-semibold">Total Price: ₹{calculateTotalPrice().toFixed(1)}</h2>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AddToCart;



