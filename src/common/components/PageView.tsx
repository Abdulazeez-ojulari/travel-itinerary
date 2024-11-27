'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import useReduxToolkit from "../../hooks/useReduxToolkit"
import { AppProps } from "@/model/application/props";
import { setAllAppKeys } from "@/redux/store";

const PageView: React.FC<AppProps.PageViewProps> = ({
  selectedKey,
  pageTitle,
  children,
}) => {
  const { dispatch, state } = useReduxToolkit();

  useEffect(() => {
    dispatch(
      setAllAppKeys({
        ...state,
        selectedKey,
        pageTitle: pageTitle as string,
      })
    );
  }, [dispatch, pageTitle, selectedKey]);

  return (
    <div className="p-4 md:p-6 py-10 h-full">
      <h2 className="text-[#8593A3] tracking-[1.5px] text-[0.8rem] font-medium font-[satoshi-medium]">
        {pageTitle?.toUpperCase()}
      </h2>
      <section className="rounded-xl border p-3 overflow-auto h-full mt-5 min-h-[70svh]">
        {children}
      </section>
    </div>
  );
};

export default PageView;
