/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetDataQuery } from "@/redux/store";
import { endpoints } from "@/redux/store/api/endpoints";

const useGetFlightsLocation = ({params}: {
  params: any;
}) => {
  const allFlightsLocation = useGetDataQuery({
    getUrl: `${endpoints.flights.getFlightsLocation}`,
    params: params
  });

  return { allFlightsLocation };
};

export default useGetFlightsLocation;
