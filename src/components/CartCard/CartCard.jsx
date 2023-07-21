import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import {
  decreaseItem,
  deleteItem,
  increaseItem,
} from "../../features/CartSlice";

const CartCard = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-white rounded-lg shadow-md h-32 p-6 flex gap-4 relative">
      <div className="basis-20 sm:basis-24 md:basis-30 h-20 sm:h-24 md:h-30 shrink-0">
        <img src={data?.image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="space-y-3 w-full">
        <h1 className="text-sm font-bold whitespace-nowrap text-ellipsis w-32 overflow-hidden md:w-full md:overflow-auto md:whitespace-normal">
          {data?.title}
        </h1>
        <div className="flex items-center justify-between">
          <div className="w-20 h-6 bg-gray-300 rounded-full flex items-center">
            <button
              onClick={() => dispatch(increaseItem(data?.id))}
              className="h-full w-1/3 text-md font-bold text-white"
            >
              +
            </button>
            <input
              type="text"
              readOnly={true}
              value={data?.quantity}
              className="text-xs text-center h-full w-1/3 outline-none focus:outline-none"
            />
            <button
              onClick={() => dispatch(decreaseItem(data?.id))}
              className="h-full w-1/3 text-md font-bold text-white"
            >
              -
            </button>
          </div>
          <span className="text-sm text-orange-400 font-semibold">
            ${data?.price.toFixed(2)}
          </span>
        </div>
      </div>
      <div
        className="absolute top-3 right-3 text-sm cursor-pointer"
        onClick={() => dispatch(deleteItem(data?.id))}
      >
        <RxCross1 />
      </div>
    </div>
  );
};

export default CartCard;
