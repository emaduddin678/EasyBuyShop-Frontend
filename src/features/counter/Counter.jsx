import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks.js";
import {
  increment,
  incrementAsync,
  incrementByAmount,
  selectCount,
  selectStatus,
} from "./counterSlice.js";

const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const status = useAppSelector(selectStatus);

  return <div></div>;
};

export default Counter;
