'use client'

import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";

const useReduxToolkit = () => {
  const dispatch = useAppDispatch();

  const state = useAppSelector((state) => {
    return state.app;
  });

  return { dispatch, state };
};

export default useReduxToolkit;
