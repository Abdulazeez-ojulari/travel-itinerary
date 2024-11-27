import React from "react";
import { Button, Image, Rate, Tag } from "antd";
import { EnvironmentOutlined, ClockCircleOutlined, DownOutlined } from "@ant-design/icons";
import { Apiresponse } from "@/model/client/response";

interface ActivityCardProps {
    activity: Apiresponse.GetActivitiesResponseType;
}

const ActivityCard: React.FC<ActivityCardProps>  = ({activity}) => {
    return (
        <div className="flex justify-between items-start p-4 shadow-md bg-white rounded-lg">
        <div className="flex">
            <div className="relative">
            <Image
                src={activity.primaryPhoto.small}
                alt="Museum"
                className="w-48 h-32 rounded-lg object-cover"
            />
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-2">
                <Button shape="circle" className="bg-white shadow-md">
                &lt;
                </Button>
                <Button shape="circle" className="bg-white shadow-md">
                &gt;
                </Button>
            </div>
            </div>

            <div className="ml-4">
            <h3 className="text-xl font-bold">{activity.name}</h3>
            <p className="text-gray-500">
                {activity.shortDescription}
            </p>
            <div className="flex items-center space-x-2 mt-2">
                <Button
                type="link"
                icon={<EnvironmentOutlined />}
                className="text-blue-500"
                >
                Directions
                </Button>
                <Rate disabled defaultValue={4.5} allowHalf />
                <span className="text-gray-500">(436)</span>
                <ClockCircleOutlined className="text-gray-500" />
                <span className="text-gray-500">1 Hour</span>
            </div>
            <div className="flex items-center space-x-2 mt-2">
                <span className="text-gray-500">What&apos;s Included:</span>
                <span className="font-medium text-gray-900">
                Admission to the Empire State Building
                </span>
                <Button type="link" className="text-blue-500">
                See more
                </Button>
            </div>
            </div>
        </div>

        <div className="text-right">
            <h3 className="text-2xl font-bold text-gray-900">{new Intl.NumberFormat('en-US', {style: 'currency', currency: activity.representativePrice.currency}).format(activity.representativePrice.publicAmount)}</h3>
            <p className="text-gray-500">10:30 AM on Mar 19</p>
            <div className="mt-2">
            <Tag color="blue" className="text-sm">
                Day 1
            </Tag>
            <Button shape="circle" icon={<DownOutlined />} className="ml-2" />
            </div>
            <Button type="link" className="text-blue-500 mt-4">
            Edit details
            </Button>
        </div>
        </div>
    );
};

export default ActivityCard;
