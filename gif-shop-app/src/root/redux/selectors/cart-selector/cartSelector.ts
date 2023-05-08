import  { RootState }  from  '@/root/redux/store';

export  const  selectGifsCart  =  (state:  RootState)  =>  state.cartStore.gifs;
