/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from "react";
import useReduxToolkit from "./useReduxToolkit";
import { setAllAppKeys } from "@/redux/store";

const useToggle = () => {
  const { dispatch, state } = useReduxToolkit();

  const onNext = useCallback(() => {
    dispatch(
      setAllAppKeys({
        ...state,
        current: (state.current as number) + 1,
      })
    );
  }, [dispatch, state]);
  const onPrev = useCallback(() => {
    dispatch(
      setAllAppKeys({
        ...state,
        current: (state.current as number) - 1,
      })
    );
  }, [dispatch, state]);

  return {
    onNext,
    onPrev,
  };
};

export default useToggle;
