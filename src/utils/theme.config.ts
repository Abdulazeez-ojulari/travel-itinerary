import { ThemeConfig } from "antd";

export const getThemeConfig: ThemeConfig = {
  token: {
    colorPrimary: "#102E34",
  },
  components: {
    Checkbox: {
      colorBorder: "#C4C4C4",
      controlInteractiveSize: 25,
    },
    Input: {
      colorPrimaryHover: "#c4c4c4",
      lineHeight: 3.5,
      colorTextPlaceholder: "#c4c4c4",
      controlHeight: 50,
    },
    Menu: {
      itemSelectedBg: "#F0F2F5",
      itemSelectedColor: "#647995",
      itemBorderRadius: 5,
      itemColor: "#ffffff",
      itemHoverColor: "#006f01",
      controlHeightLG: 50,
      subMenuItemBorderRadius: 20,
      lineWidth: 0,
      itemHeight: 50,
    },
    Table: {
      headerBg: "transparent",
      headerSplitColor: "transparent",
      rowSelectedBg: "#DCFFD9",
      rowSelectedHoverBg: "#0D6EFD",
    },
    DatePicker: {},
    Select: {
      boxShadow: "none",
      multipleItemBg: "#DCFFD9",
      optionSelectedBg: "#DCFFD9",
    },
  },
};
