/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetDataQuery } from "@/redux/store";
import { endpoints } from "@/redux/store/api/endpoints";

const useGetHotels = ({params}: {
  limit?: number;
  page?: number;
  params: any;
}) => {
  const allHotels = useGetDataQuery({
    getUrl: `${endpoints.hotels.getHotels}`,
    params: params
  });

  return { allHotels };
};

export default useGetHotels;
