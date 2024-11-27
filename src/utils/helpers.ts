/* eslint-disable @typescript-eslint/no-explicit-any */
// import { FormProps } from "antd";

export type FORM_ACTION =
  | "CREATE"
  | "UPDATE"
  | "DELETE"
  | "READ"
  | "GET_DATA_BY_POST_METHOD";

export const appName = " - Travel Itinerary";

export const ROUTES = {
  DASHBOARD: "/",
  ACTIVITIES: "/activities",
  HOTELS: "/hotels",
  FLIGHTS: "/flights",
  STUDY: "/study",
  VISA: "/visa",
  IMMIGRATION: "/immigration",
  MEDICAL: "/medical",
  VACATION_PACKAGES: "/vacation-packages",
};

export const PAGE_NAMES = {
  DASHBOARD: "Dashboard",
  ACTIVITIES: "Activities",
  HOTELS: "Hotels",
  FLIGHTS: "Flights",
  STUDY: "Study",
  VISA: "Visa",
  IMMIGRATION: "Immigration",
  MEDICAL: "Medical",
  VACATION_PACKAGES: "Vacation-packages",
};

export const MENU_KEYS = {
  DASHBOARD: "1",
  ACTIVITIES: "2",
  HOTELS: "3",
  FLIGHTS: "4",
  STUDY: "5",
  VISA: "6",
  IMMIGRATION: "7",
  MEDICAL: "8",
  VACATION_PACKAGES: "9",
};

// export const formConfig: FormProps = {
//   autoComplete: "off",
//   layout: "vertical",
//   labelCol: { span: 24 },
//   wrapperCol: { span: 24 },
//   requiredMark: "optional",
// };

export const FORM_METHODS = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

export const AUTHMODAL_STEPS = {
  CHANGE_PASSWORD: "1",
  RESET_PASSWORD: "2",
  DISABLE_ACCOUNT: "3",
};

export const RESPONSE_CODE = {
  successful: "200",
  badRequest: "400",
  noData: "201",
  internalServerError: "500",
  dataDuplication: " 230",
  unAuthorized: "401",
  invalidToken: "400",
};
