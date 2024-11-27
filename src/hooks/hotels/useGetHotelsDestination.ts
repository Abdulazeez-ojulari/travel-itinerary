/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetDataQuery } from "@/redux/store";
import { endpoints } from "@/redux/store/api/endpoints";

const useGetHotelsDestination = ({params}: {
  params: any;
}) => {
  const allHotelsDestination = useGetDataQuery({
    getUrl: `${endpoints.hotels.getHotelsDestination}`,
    params: params
  });

  return { allHotelsDestination };
};

export default useGetHotelsDestination;
