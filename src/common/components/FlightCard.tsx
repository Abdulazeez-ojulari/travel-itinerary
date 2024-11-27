import React from "react";
import { Tag, Button, Image } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Apiresponse } from "@/model/client/response";

interface FlightCardProps {
    flight: Apiresponse.GetFlightsResponseType;
}

const FlightCard: React.FC<FlightCardProps> = ({flight}) => {

    function formatDateTime(dateString: string) {
        const date = new Date(dateString);
      
        const time = date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });

        const formattedDate = date.toLocaleDateString("en-US", {
          weekday: "short",
          day: "2-digit",
          month: "short",
        });
      
        return {time, formattedDate};
      
    }

    return (
        <div className="border rounded-lg shadow-md bg-white flex">
            <div className="flex-grow space-y-4 p-4">
                <div className="flex gap-7 items-center">
                    <div className="flex-none flex items-center gap-2 space-y-1">
                        <Image
                            src={flight.aggregation.logoUrl}
                            alt="Flight"
                            className="rounded-lg object-cover h-full"
                            width={"20px"}
                            height={"20px"}
                        />
                        <div>
                            <h3 className="text-lg font-semibold">{flight.aggregation.name}</h3>
                            <span className="text-gray-500 text-sm mr-[1rem]">AA-829</span>
                            <Tag color="#0A369D" className="mt-1">
                                {flight.segments[0].legs[0].cabinClass}
                            </Tag>
                        </div>
                    </div>

                    <div className="flex-grow flex justify-between items-center">
                        <div className="text-center">
                            <h3 className="font-semibold text-lg">{formatDateTime(flight.segments[0].departureTime).time}</h3>
                            <p className="text-gray-500 text-sm">{formatDateTime(flight.segments[0].departureTime).formattedDate}</p>
                            <p className="text-gray-500 text-sm">{flight.segments[0].departureAirport.city}</p>
                        </div>

                        <div className="flex flex-col items-center">
                        <p className="text-gray-500 text-sm">Duration: 1h 45m</p>
                        <div className="w-36 h-1 bg-gray-300 rounded-full my-2 relative">
                            <div className="absolute top-0 left-0 bg-blue-500 h-1 rounded-full w-1/2"></div>
                        </div>
                        <p className="text-gray-500 text-sm">Direct</p>
                        </div>

                        <div className="text-center">
                            <h3 className="font-semibold text-lg">{formatDateTime(flight.segments[0].arrivalTime).time}</h3>
                            <p className="text-gray-500 text-sm">{formatDateTime(flight.segments[0].arrivalTime).formattedDate}</p>
                            <p className="text-gray-500 text-sm">{flight.segments[0].arrivalAirport.city}</p>
                        </div>
                    </div>

                    <div className="flex-none text-right">
                        <h3 className="text-xl font-semibold">{new Intl.NumberFormat('en-US', {style: 'currency', currency: flight.priceBreakdown.total.currencyCode}).format(flight.priceBreakdown.total.units)}</h3>
                    </div>
                </div>

                <div className="text-gray-500 text-sm flex gap-4 flex-wrap">
                    <span>Facilities:</span>
                    <span>🧳 Baggage: {flight.segments[0].travellerCheckedLuggage[0].luggageAllowance.maxWeightPerPiece + flight.segments[0].travellerCheckedLuggage[0].luggageAllowance.massUnit}</span>
                    <span>Cabin Baggage: {flight.segments[0].travellerCabinLuggage[0].luggageAllowance.maxWeightPerPiece + flight.segments[0].travellerCabinLuggage[0].luggageAllowance.massUnit}</span>
                    <span>🎥 In-flight entertainment</span>
                    <span>🍴 In-flight meal</span>
                    <span>🔌 USB Port</span>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                    <Button type="link">Flight details</Button>
                    <Button type="link">Price details</Button>
                    </div>
                </div>
            </div>
            <div className="flex-none bg-[#FBEAE9]" >
                <div className="grid items-center h-full">
                <Button type="link" danger icon={<DeleteOutlined />} />
                </div>
            </div>
        </div>
    );
};

export default FlightCard;
