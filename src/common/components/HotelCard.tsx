import React from "react";
import { Button, Image, Rate } from "antd";
import { EnvironmentOutlined, CalendarOutlined, DeleteOutlined } from "@ant-design/icons";
import { Apiresponse } from "@/model/client/response";

interface HotelCardProps {
    hotel: Apiresponse.GetHotelsResponseType;
}

const HotelCard: React.FC<HotelCardProps> = ({hotel}) => {
    return (
        <div className="border rounded-lg shadow-md bg-white flex">
        <div className="flex-grow space-y-4 p-4">
            <div className="flex justify-between">
                <div className="w-1/4">
                <Image
                    src={hotel.property.photoUrls[0]}
                    alt="Hotel"
                    className="rounded-lg w-full object-cover h-full"
                />
                </div>

                <div className="flex-1 px-4">
                <h3 className="text-lg font-semibold">{hotel.property.name}</h3>
                <p className="text-gray-500 text-sm">
                    18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way, Lekki Phase1
                </p>
                <div className="flex items-center text-blue-500 text-sm space-x-2 mt-2">
                    <EnvironmentOutlined />
                    <a href="#">Show in map</a>
                </div>

                <div className="flex items-center mt-2 space-x-2">
                    <Rate allowHalf defaultValue={4.5} className="text-yellow-500 text-sm" />
                    <span className="text-gray-500 text-sm">(436)</span>
                    <span className="text-gray-500 text-sm">• King size room</span>
                </div>

                <div className="flex text-sm text-gray-500 space-x-4 mt-2">
                    <span>Facilities:</span>
                    <span>🏊 Pool</span>
                    <span>🍸 Bar</span>
                </div>

                <div className="flex text-sm text-gray-500 mt-2 space-x-4">
                    <CalendarOutlined />
                    <span>Check In: {hotel.property.checkinDate}</span>
                    <CalendarOutlined />
                    <span>Check Out: {hotel.property.checkoutDate}</span>
                </div>
                </div>

                <div className="text-right">
                <h3 className="text-xl font-semibold">{new Intl.NumberFormat('en-US', {style: 'currency', currency: hotel.property.priceBreakdown.grossPrice.currency}).format(hotel.property.priceBreakdown.grossPrice.value)}</h3>
                <p className="text-gray-500 text-sm">Total Price: NGN 560,000</p>
                <p className="text-gray-500 text-sm">1 room x 10 nights incl. taxes</p>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex gap-4">
                <Button type="link">Hotel details</Button>
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

export default HotelCard;
