'use client'
import { ActivityIcon, FlightIcon, HotelIcon } from "@/assets/icons/icons";
import ActivityCard from "@/common/components/ActivityCard";
import FlightCard from "@/common/components/FlightCard";
import HotelCard from "@/common/components/HotelCard";
import PageView from "@/common/components/PageView";
import { Apiresponse } from "@/model/client/response";
import { MENU_KEYS, PAGE_NAMES, ROUTES } from "@/utils/helpers";
import { Button, Card, Collapse, Space } from "antd";
import { Content } from "antd/es/layout/layout";
import Link from "next/link";
import { useEffect, useState } from "react";

const LandingPage = () =>{ 
  const { Panel } = Collapse;
  const [itineraryHotels, setItineraryHotels] = useState<Apiresponse.GetHotelsResponseType[]>([]);
  const [itineraryFlights, setItineraryFlights] = useState<Apiresponse.GetFlightsResponseType[]>([]);
  const [itineraryActivities, setItineraryActivities] = useState<Apiresponse.GetActivitiesResponseType[]>([]);

  useEffect(() => {
    const itineraryHotels = localStorage.getItem("hotels")
    const itineraryFlights = localStorage.getItem("flights")
    const itineraryActivities = localStorage.getItem("activities")

    if(itineraryHotels){
      const hotels = JSON.parse(itineraryHotels)
      setItineraryHotels(hotels)
    }
    if(itineraryFlights){
      const flights = JSON.parse(itineraryFlights)
      setItineraryFlights(flights)
    }
    if(itineraryActivities){
      const activities = JSON.parse(itineraryActivities)
      setItineraryActivities(activities)
    }
  }, [])

  return (
    <PageView
      selectedKey={MENU_KEYS.DASHBOARD}
      pageTitle={PAGE_NAMES.DASHBOARD}
    >
      <Content className="p-6 bg-gray-50">
        <img src={'/banner.png'} className="w-full" alt="banner" />
        <Card className="mb-6">
          <h2 className="text-xl font-bold">Bahamas Family Trip</h2>
          <p>Add flights, hotels, or activities to your trip itinerary.</p>
        </Card>

        <Space className="mb-6">
          <Card className="bg-[#000031] w-64 h-64 text-[#FFFFFF] grid">
            <div className="grid content-between h-full">
              <div>
                <h3 className="font-bold">Activities</h3>
                <p>Build, personalize, and optimize your itineraries with our trip planner.</p>
              </div>
              <Link href={ROUTES.ACTIVITIES}>
                <Button color="primary" className="bg-[#0D6EFD] w-full text-[#FFFFFF] h-12 border-0">Add Activities</Button>
              </Link>
            </div>
          </Card>
          <Card className="bg-[#E7F0FF] w-64 h-64 text-[#FFFFFF] grid">
            <div className="grid content-between h-full">
              <div>
                <h3 className="font-bold text-[#000000]">Hotels</h3>
                <p className="text-[#1D2433]">Build, personalize, and optimize your itineraries with our trip planner.</p>
              </div>
              <Link href={ROUTES.HOTELS}>
                <Button color="primary" className="bg-[#0D6EFD] w-full text-[#FFFFFF] h-12 border-0">Add Hotels</Button>
              </Link>
            </div>
          </Card>
          <Card className="bg-[#0D6EFD] w-64 h-64 text-[#FFFFFF] grid">
            <div className="grid content-between h-full">
              <div>
                <h3 className="font-bold">Flights</h3>
                <p>Build, personalize, and optimize your itineraries with our trip planner.</p>
              </div>
              <Link href={ROUTES.FLIGHTS}>
                <Button color="primary" className="bg-[#FFFFFF] w-full text-[#0D6EFD] h-12 border-0">Add Flights</Button>
              </Link>
            </div>
          </Card>
        </Space>

        <Card className="mt-10 mb-6">
          <h2 className="text-xl font-bold">Trip itineraries</h2>
          <p>Your trip itineraries are placed here</p>
        </Card>

        <Collapse defaultActiveKey={["1"]}>
          <Panel style={{backgroundColor: '#F0F2F5'}}
          showArrow={false}
           header={
            <div className="flex justify-between">
              <div className="flex text-[#344054] items-center gap-2">
                <FlightIcon style="fill-[#647995]" /> <p>Flights</p>
              </div>
              {itineraryFlights.length > 0 &&
              <div>
                <Link href={ROUTES.FLIGHTS}>
                <Button color="primary" variant="link" className="bg-[#fff]" >Add Flight</Button>
                </Link>
              </div>
              }
            </div>
            } 
            key="1">
              {itineraryFlights.length <= 0 && 
                <Card className="grid">
                  <div className="grid content-center justify-items-center gap-3" >
                    <FlightIcon style="fill-[#647995]"  />
                    <p>No request yet</p>
                    <Link href={ROUTES.FLIGHTS}>
                      <Button color="primary" className="bg-[#0054E4] w-full text-[#FFFFFF] h-12">Add Flight</Button>
                    </Link>
                  </div>
                </Card>
              }
              {itineraryFlights.length > 0 &&
                <div className="grid gap-4">
                {itineraryFlights.map((flight) => <FlightCard key={flight.key} flight={flight} /> )}
                </div>
              }
          </Panel>

          <Panel style={{backgroundColor: '#344054'}} 
          showArrow={false}
          header={
            <div className="flex justify-between">
              <div className="flex text-[#FFFFFF] items-center gap-2">
                <HotelIcon style="fill-[#FFFFFF]" /> <p>Hotels</p>
              </div>
              {itineraryHotels.length > 0 &&
              <div>
                <Link href={ROUTES.HOTELS}>
                <Button color="default" variant="link" className="bg-[#FFFFFF]" >Add Hotel</Button>
                </Link>
              </div>
              }
            </div>
          } 
          key="2">
            {itineraryHotels.length <= 0 && 
              <Card className="grid">
                <div className="grid content-center justify-items-center gap-3" >
                  <HotelIcon style="fill-[#647995]"  />
                  <p>No request yet</p>
                  <Link href={ROUTES.HOTELS}>
                    <Button color="primary" className="bg-[#0054E4] w-full text-[#FFFFFF] h-12">Add Hotel</Button>
                  </Link>
                </div>
              </Card>
            }
            {itineraryHotels.length > 0 &&
              <div className="grid gap-4">
              {itineraryHotels.map((hotel) => <HotelCard key={hotel.hotel_id} hotel={hotel}/> )}
              </div>
              }
          </Panel>

          <Panel style={{backgroundColor: '#0054E4'}}
          showArrow={false}
          header={
            <div className="flex justify-between">
              <div className="flex text-[#FFFFFF] items-center gap-2">
                <ActivityIcon style="fill-[#FFFFFF]" /> <p>Activities</p>
              </div>
              {itineraryActivities.length > 0 &&
              <div>
                <Link href={ROUTES.ACTIVITIES}>
                <Button color="primary" variant="link" className="bg-[#FFFFFF]" >Add Activity</Button>
                </Link>
              </div>
              }
            </div>
          }  
          key="3">
            {itineraryActivities.length <= 0 && 
              <Card className="grid">
                <div className="grid content-center justify-items-center gap-3" >
                  <ActivityIcon style="fill-[#647995]"  />
                  <p>No request yet</p>
                  <Link href={ROUTES.ACTIVITIES}>
                    <Button color="primary" className="bg-[#0054E4] w-full text-[#FFFFFF] h-12">Add Activity</Button>
                  </Link>
                </div>
              </Card>
            }
            {itineraryActivities.length > 0 &&
              <div className="grid gap-4">
              {itineraryActivities.map((activity) => <ActivityCard key={activity.id} activity={activity} /> )}
              </div>
            }
          </Panel>
        </Collapse>
      </Content>

    </PageView>
  );
}

export default LandingPage;
