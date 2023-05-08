import GifItem from "@/root/components/gif-item/GifItem";
import { selectGifsCart } from "@/root/redux/selectors/cart-selector/cartSelector";
import { Gif } from "@/root/types/Gif.type";
import React from "react";
import { useSelector } from "react-redux";


function CartStore() {
    
    const gifFoundList = useSelector(selectGifsCart);
    return (
        <div className="grid grid-cols-3 gap-4 justify-center">
            {gifFoundList.map((gif: Gif) => (
                <GifItem
                key={gif.id}
                item = {gif}
                />
            ))}
    </div>
    );
}

export default CartStore;