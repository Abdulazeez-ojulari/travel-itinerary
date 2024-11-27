/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetDataQuery } from "@/redux/store";
import { endpoints } from "@/redux/store/api/endpoints";

const useGetActivitiesDestination = ({params}: {
  params: any;
}) => {
  const allActivitiesDestination = useGetDataQuery({
    getUrl: `${endpoints.activities.getActivitiesDestination}`,
    params: params
  });

  return { allActivitiesDestination };
};

export default useGetActivitiesDestination;
