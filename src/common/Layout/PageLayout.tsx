'use client'
import { Suspense } from "react";
import Aside from "./Aside";
import Header from "./Header";
import { App, ConfigProvider } from "antd";
import { getThemeConfig } from "@/utils/theme.config";
import LazyLoader from "../components/LazyLoader";
// import { retrieveUserInfoFromStorage } from "../../hooks/useRetrieveUserInfoFromStorage";
// import { useLayoutEffect } from "react";
// import { ROUTES } from "../../utils/helpers";
// import useReduxToolkit from "../../hooks/useReduxToolkit";
// import { setAllAppKeys } from "../../store";

const PageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  return (
    <App>
      <ConfigProvider theme={getThemeConfig}>
        <Suspense fallback={<LazyLoader />}>
          <div className="min-h-[100svh]">
            <Header />
            <div className="p-5 bg-[#F0F2F5]">
              <Aside setOpenDrawer={() => {}} />
              <main className="lg:ml-[18rem]">
                <section className="section bg-[#FFFFFF]">
                  {children}
                </section>
              </main>
            </div>
          </div>
        </Suspense>
      </ConfigProvider>
    </App>
  );
};

export default PageLayout;
