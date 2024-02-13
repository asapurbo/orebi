import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Slice/counterSlice";
import { addToCard } from "../Slice/CardSlice";


const useAddToCart = () => {
  const data = useSelector((state) => state.addToCadeData.data);
  const dispatch = useDispatch();
  
  // ------------------------------- Minus Start -----------------------------------
  const handleMinusFn = (i) => {
    let t = data.map((it) => {
      if (it.bmtxt === i.bmtxt && it.count > 1) {
        dispatch(decrement());
        return {
          ...it,
          count: it.count - 1,
        };
      } else {
        return {
          ...it,
        };
      }
    });
    dispatch(addToCard(t));
  };
  // ------------------------------- Minus End ---------------------------------

  // ------------------------------- Plus Start --------------------------------
  const handlePlusFn = (y) => {
    const n = data.map((it) => {
      if (it.bmtxt === y.bmtxt) {
        dispatch(increment());
        return {
          ...it,
          count: it.count + 1,
        };
      }
      return it;
    });
    dispatch(addToCard(n));
  };
  // ------------------------------- Plus End -----------------------------------

  // ------------------------------- Delete End -----------------------------------
  const handleDeleteFn = (d) => {
    const m = data.map((it) => {
      if (it.bmtxt === d.bmtxt) {
        dispatch(decrement(it.count));
        return undefined;
      }
      return it;
    });
    const x = m.filter((z) => z !== undefined);
    dispatch(addToCard(x));
  };
  // ------------------------------- Delete End -----------------------------------

  return {
    handleMinusFn,
    handlePlusFn,
    handleDeleteFn,
  };
};

export default useAddToCart;
