import React from "react";
import Image from "next/image";

import RatingStars from "./components/rating-stars/RatingStars";
import { selectGifsCart } from "@/root/redux/selectors/cart-selector/cartSelector";
import { Gif } from "@/root/types/Gif.type";
import { promotionPrice } from "@/root/constants/common.constants";
import { addItem } from "@/root/redux/reducers/cart-reducer/cartReducer";
import { useDispatch, useSelector } from "react-redux";
export interface GiftItemProps {
  item:Gif
}

export const GifItem = ({ item }: GiftItemProps) => {
  const dispatchCart = useDispatch();
  function handelAddCart() {
    const cartList : Gif[] = [item]

    dispatchCart(addItem(item));
    console.log(cartList.length)
  }


  return (
    <div className="  w-full   max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
              <Image
                  priority={false}
                  width={300}
                  height={300}
          className="p-8 rounded-t-lg"
          src={item.url}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {item.title}
          </h5>
        </a>
        <RatingStars />
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-red-900 dark:text-white">
            ${promotionPrice}
          </span>
          <a
            href="#"
            className="btn-primary"
            onClick={handelAddCart}
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default GifItem;



