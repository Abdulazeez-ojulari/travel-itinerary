/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuProps } from "antd";
import Link from 'next/link';
import { getItem } from "./menu.config";
import DashboardIcon from "@/assets/icons/menu/Dashboard";
import { MENU_KEYS, PAGE_NAMES, ROUTES } from "@/utils/helpers";
import { ActivityIcon, FlightIcon, HotelIcon } from "@/assets/icons/icons";

const MenuItems = () => {
  const menu: MenuProps["items"] = [
    getItem(
      <Link href={ROUTES.DASHBOARD} className="!text-[#647995] !ml-4">
        {PAGE_NAMES.DASHBOARD}
      </Link>,
      MENU_KEYS.DASHBOARD,
      <DashboardIcon />
    ),
    getItem(
      <Link href={ROUTES.ACTIVITIES} className="!text-[#647995] !ml-4">
        {PAGE_NAMES.ACTIVITIES}
      </Link>,
      MENU_KEYS.ACTIVITIES,
      <ActivityIcon style="fill-[#647995]" />
    ),
    getItem(
      <Link href={ROUTES.HOTELS} className="!text-[#647995] !ml-4">
        {PAGE_NAMES.HOTELS}
      </Link>,
      MENU_KEYS.HOTELS,
      <HotelIcon style="fill-[#647995]" />
    ),
    getItem(
      <Link href={ROUTES.FLIGHTS} className="!text-[#647995] !ml-4">
        {PAGE_NAMES.FLIGHTS}
      </Link>,
      MENU_KEYS.FLIGHTS,
      <FlightIcon style="fill-[#647995]" />
    ),
    getItem(
      <Link href={ROUTES.STUDY} className="!text-[#647995] !ml-4">
        {PAGE_NAMES.STUDY}
      </Link>,   
      MENU_KEYS.STUDY,
      <ActivityIcon style="fill-[#647995]" />
    ),
    getItem(
      <Link href={ROUTES.VISA} className="!text-[#647995] !ml-4">
        {PAGE_NAMES.VISA}
      </Link>,
      MENU_KEYS.VISA,
      <FlightIcon style="fill-[#647995]" />
    ),
    getItem(
      <Link
        href={ROUTES.IMMIGRATION}
        className="!text-[#647995] !ml-4"
      >
        {PAGE_NAMES.IMMIGRATION}
      </Link>,
      MENU_KEYS.IMMIGRATION,
      <FlightIcon style="fill-[#647995]" />
    ),
    getItem(
      <Link
        href={ROUTES.MEDICAL}
        className="!text-[#647995] !ml-4"
      >
        {PAGE_NAMES.MEDICAL}
      </Link>,
      MENU_KEYS.MEDICAL,
      <ActivityIcon style="fill-[#647995]" />
    ),
    getItem(
      <Link
        href={ROUTES.VACATION_PACKAGES}
        className="!text-[#647995] !ml-4"
      >
        {PAGE_NAMES.VACATION_PACKAGES}
      </Link>,
      MENU_KEYS.VACATION_PACKAGES,
      <ActivityIcon style="fill-[#647995]" />
    )
  ];
  return menu;
};

export default MenuItems;
