import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Gif } from "@/root/types/Gif.type";

interface GifStateCard {
  gifs: Gif[];
}

export const initialState: GifStateCard = {
  gifs: [],
};

type GifAction = {
  type: string
  Gif?: GifStateCard
}
export type DispatchType = (args: GifAction) => GifAction

export const Cart = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addItem: (state, action: PayloadAction<Gif>) => {
      return {...state, gifs: [...state.gifs, action.payload] };
      },
  },
});

export const { addItem } = Cart.actions;

export const cartReducer = Cart.reducer;