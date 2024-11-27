/* eslint-disable @typescript-eslint/no-explicit-any */
// import { removeItem } from '@/app/store/slice/app';

import { useAppSelector } from "@/redux/store/hooks";

const ItineraryList = () => {
  const itinerary = useAppSelector((state) => state.app.items);

  return (
    <div>
      {itinerary.map((item: any) => (
        <div key={item.id} className="border p-2 rounded mb-2">
          <h4>{item.name}</h4>
          {/* <button
            onClick={() => dispatch(removeItem(item.id))}
            className="text-red-500 underline"
          >
            Remove
          </button> */}
        </div>
      ))}
    </div>
  );
};

export default ItineraryList;
