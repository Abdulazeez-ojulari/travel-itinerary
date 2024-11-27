'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import { Menu } from "antd";
// import logo from "../../assets/images/logo.png";
import MenuItems from "./MenuItems";
import { useCallback } from "react";
import { setAllAppKeys } from "@/redux/store";
import useReduxToolkit from "@/hooks/useReduxToolkit";

interface AsideProp {
  openDrawer?: boolean;
  setOpenDrawer: (value: boolean) => void;
}

const Aside: React.FC<AsideProp> = ({ openDrawer, setOpenDrawer }) => {
  const { state, dispatch } = useReduxToolkit();

  const onMenuCLick = useCallback(() => {
    setOpenDrawer(false);
    console.log(state)
    dispatch(
      setAllAppKeys({
        ...state,
        currentSelectedTabKey: "0",
        page: 1,
      })
    );
  }, [dispatch, state]);

  return (
    <aside
      className={`w-[16.5rem] lg:ml-[1rem] bg-[#FFFFFF] fixed left-0 h-full overflow-y-auto ${
        openDrawer ? "" : "hidden lg:block"
      }`}
    >
      <div className="m-8 lg:my-10">
        {/* <img src={logo} alt="" /> */}
      </div>

      <div>
        <div className="flex-1 mt-10 mx-2">
          <Menu
            defaultSelectedKeys={[state.selectedKey as string]}
            selectedKeys={[state.selectedKey as string]}
            className={`bg-[#FFFFFF] font-[satoshi-medium] text-[0.8rem] font-medium`}
            mode="inline"
            items={MenuItems()}
            onClick={onMenuCLick}
          />
        </div>
      </div>
    </aside>
  );
};

export default Aside;
