/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetDataQuery } from "@/redux/store";
import { endpoints } from "@/redux/store/api/endpoints";

const useGetFlights = ({params}: {
  limit?: number;
  page?: number;
  params: any;
}) => {
  const allFlights = useGetDataQuery({
    getUrl: `${endpoints.flights.getFlights}`,
    params: params
  });

  return { allFlights };
};

export default useGetFlights;
