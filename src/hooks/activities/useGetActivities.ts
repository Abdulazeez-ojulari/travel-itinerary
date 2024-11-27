/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetDataQuery } from "@/redux/store";
import { endpoints } from "@/redux/store/api/endpoints";

const useGetActivities = ({params}: {
  limit?: number;
  page?: number;
  params: any;
}) => {
  const allActivities = useGetDataQuery({
    getUrl: `${endpoints.activities.getActivities}`,
    params: params
  });

  return { allActivities };
};

export default useGetActivities;
