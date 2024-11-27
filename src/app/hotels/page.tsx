/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import PageView from "@/common/components/PageView";
import { MENU_KEYS, PAGE_NAMES } from "../../utils/helpers";
import { PageTable } from "@/common/components/PageTable";
import useReduxToolkit from "@/hooks/useReduxToolkit";
import { Apiresponse } from "@/model/client/response";
import { Button, DatePicker, Image, Input, Popover, Select, Space } from "antd";
import MoreIcon from "@/assets/icons/MoreIcon";
import useFilter from "@/hooks/useFilter";
import useGetHotels from "@/hooks/hotels/useGetHotels";
import { setAppKey } from "@/redux/store";
import search from "../../assets/icons/search.svg";
import { useState } from "react";
import { SearchOutlined } from '@ant-design/icons';
import type { TableColumnType } from 'antd';
import useGetHotelsDestination from "@/hooks/hotels/useGetHotelsDestination";
import { useToast } from "@/hooks/useToast";

const Hotels = () => {
  const { state, dispatch } = useReduxToolkit();
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [params, setParams] = useState<Record<string, any>>({});
  const { success } = useToast();

  const [destinationParams, setDestinationParams] = useState<Record<string, any>>({
    query: '',
  });
  
  const { allHotels } = useGetHotels({
    limit: state.limit,
    page: state.page,
    params: params
  });

  const { allHotelsDestination } = useGetHotelsDestination({
    params: destinationParams
  });

  const applyFliters = () => {
    setParams((prevParams) => ({ ...prevParams, ...filters}));
  };

  const handleSearch = (key: string, value: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
  };

  const handleReset = (key: string) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      delete newFilters[key];
      return newFilters;
    });
  }

  const transformData: any = (data: any) => {
    return data?.map((item: any) => {
      const transformedItem = {
        value: `${item.dest_id}/${item.dest_type}`,
        label: item.label,
      };
      return transformedItem;
    });
  }

  const getColumnSearchProps = (
    dataIndex: string,
    inputType: string
  ): TableColumnType<Apiresponse.GetHotelsResponseType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }: any) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        {inputType === "text" &&
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>{
              setSelectedKeys(e.target.value ? [e.target.value] : [])
              handleSearch(dataIndex, e.target.value)
            }
          }
          onPressEnter={() =>
            handleSearch(dataIndex, selectedKeys[0] as string)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        }
        {inputType === "date" &&
        <DatePicker style={{ marginBottom: 8, display: "block" }} onChange={(e) =>{
            setSelectedKeys(e.format('YYYY-MM-DD') ? [e.format('YYYY-MM-DD')] : [])
            handleSearch(dataIndex, e.format('YYYY-MM-DD'))
          }} 
        />
        }
        {
          inputType === "select" && 
          <Select
            showSearch
            style={{ marginBottom: 8, display: "block" }}
            placeholder="Select a destination"
            optionFilterProp="label"
            onChange={(e) =>{
              const des = e.split('/')
              setSelectedKeys(e ? [e] : [])
              handleSearch("dest_id", des[0] as string)
              handleSearch("search_type", des[1].toUpperCase())
            }}
            onSearch={(value) => {
              setDestinationParams({query: value})
            } }
            options={transformData(allHotelsDestination?.data?.data)}
          />
        }
        <Space>
          <Button
            type="primary"
            onClick={() => {
              confirm();
            }}
            size="small"
            style={{ width: 90 }}
          >
            Add to filter
          </Button>
          <Button
            onClick={() => {
              clearFilters();
              handleReset(dataIndex);
            }}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    )
  });
  
  const columns = [
    {
      title: () => {
        return (
          <p className="text-xs font-medium font-[satoshi-regular] text-[#6A7682]">
            Destination
          </p>
        );
      },
      key: "Destination",
      fixed: "left",
      width: 100,
      render: (_: any, record: Apiresponse.GetHotelsResponseType) => {
        return (
          <span className="">
            <p className="">
              {record?.property.name ?? "-"}{" "}
            </p>
          </span>
        );
      },
      ...getColumnSearchProps("Destination", "select"),
    },
    {
      title: () => {
        return (
          <p className="text-xs font-medium font-[satoshi-regular] text-[#6A7682]">
            Name
          </p>
        );
      },
      key: "name",
      fixed: "left",
      width: 100,
      render: (_: any, record: Apiresponse.GetHotelsResponseType) => {
        return (
          <span className="">
            <p className="">
              {record?.property.name ?? "-"}{" "}
            </p>
          </span>
        );
      },
    },
    {
      title: () => {
        return (
          <p className="text-xs font-medium font-[satoshi-regular] text-[#6A7682]">
            CheckinDate
          </p>
        );
      },
      key: "arrival_date",
      render: (_: any, record: Apiresponse.GetHotelsResponseType) => {
        return (
          <span className="">
            <p className="">
              {record?.property.checkinDate ?? "-"}{" "}
            </p>
          </span>
        );
      },
      ...getColumnSearchProps("arrival_date", "date"),
    },
    {
      title: () => {
        return (
          <p className="text-xs font-medium font-[satoshi-regular] text-[#6A7682]">
            CheckoutDate
          </p>
        );
      },
      key: "departure_date",
      render: (_: any, record: Apiresponse.GetHotelsResponseType) => {
        return (
          <span className="">
            <p className="">
              {record?.property.checkoutDate ?? "-"}{" "}
            </p>
          </span>
        );
      },
      ...getColumnSearchProps("departure_date", "date"),
    },
    {
      title: () => {
        return (
          <p className="text-xs font-medium font-[satoshi-regular] text-[#6A7682]">
            Image
          </p>
        );
      },
      key: "image",
      render: (_: any, record: Apiresponse.GetHotelsResponseType) => {
        return (
          <span className="text-right">
            <Image src={record?.property.photoUrls[0]} width="90px" height="90px" alt={record?.property.name} />
          </span>
        );
      },
    },
    {
        title: () => {
          return (
            <p className="text-xs font-medium font-[satoshi-regular] text-[#6A7682]">
              ACTION
            </p>
          );
        },
        key: "4",
        fixed: "right",
        width: 80,
        render: (_: any, record: any) => {
          return (
            <div>
              <Popover
                trigger={"hover"}
                placement="topLeft"
                content={
                  <div className="grid gap-3 w-[12rem]">
                    <Button
                      className=" w-full flex items-center justify-center h-[2.5rem] text-base font-medium font-[satoshi-medium] text-[#102E34] hover:!bg-[#102E34] border-none hover:!text-white transition-all hover:scale-95"
                      onClick={() => {
                        const itineraryHotels = localStorage.getItem("hotels")

                        if(itineraryHotels){
                          const hotels = JSON.parse(itineraryHotels)
                          hotels.push(record)
                          localStorage.setItem("hotels", JSON.stringify(hotels))
                        }else{
                          localStorage.setItem("hotels", JSON.stringify([record]))
                        }
                        success("Added to Itinerary");
                      }}
                    >
                      Add to Itinerary
                    </Button>
                  </div>
                }
              >
                <div>
                  <MoreIcon />
                </div>
              </Popover>
            </div>
          );
        },
      },
  ];

  const { dataSource } = useFilter(allHotels?.data?.data?.hotels);

  return (
    <PageView
      selectedKey={MENU_KEYS.HOTELS}
      pageTitle={PAGE_NAMES.HOTELS}
    >
      <>
        <PageTable
          onRowSelect={() => {}}
          column={columns}
          dataSource={dataSource}
          extraItem={
            <div className="my-4 flex items-center justify-between">
              <Input
                placeholder="Search..."
                prefix={<img src={search} alt="" />}
                className="hidden lg:flex lg:w-[18rem] border-[#6A7682] placeholder:text-[#6A7682!important]"
                onChange={(e) =>
                  dispatch(
                    setAppKey({
                      key: "searchTerm",
                      value: e.target.value,
                    })
                  )
                }
              />
              {
                <Button
                  className=" flex items-center justify-center h-[2.5rem] text-base font-medium font-[satoshi-medium] text-white hover:!bg-[#102E34] !bg-[#102E34] border-none hover:!text-white transition-all hover:scale-95"
                  onClick={() => {
                    applyFliters();
                  }}
                >
                  Apply filter
                </Button>
              }
            </div>
          }
          loading={allHotels.isLoading || allHotels.isFetching}
          total={allHotels?.data?.data?.total}
          pageSize={state.limit}
        />
      </>
    </PageView>
  );
};

export default Hotels;
