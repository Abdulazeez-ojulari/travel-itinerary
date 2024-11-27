/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-namespace */
export namespace Apiresponse {
  export class API<T> {
    responseCode?: string | number = "";
    responseMessage: string = "";
    message: string = "";
    msg: string = "";
    data?: T;
  }

  export interface GetHotelsResponseType {
    accessibilityLabel: string;
    hotel_id: number,
    property: HotelProperty;
  }

  export interface HotelProperty {
    reviewScoreWord: string,
    accuratePropertyClass: number,
    reviewCount: number,
    ufi: number,
    isPreferred: boolean,
    isFirstPage: boolean,
    checkin: any,
    qualityClass: number,
    rankingPosition: number,
    reviewScore: number,
    countryCode: string,
    propertyClass: number,
    photoUrls: string[],
    checkoutDate: string,
    position: number,
    latitude: number,
    checkout: any,
    priceBreakdown: any,
    optOutFromGalleryChanges: number,
    wishlistName: string,
    blockIds: any,
    currency: string,
    checkinDate: string,
    id: number,
    mainPhotoId: number,
    name: string,
    longitude: number,
  }

  export interface GetFlightsResponseType {
    token: string,
    segments: FlightSegmentType[],
    priceBreakdown: any,
    travellerPrices: any,
    priceDisplayRequirements: any,
    pointOfSale: string,
    tripType: string,
    posMismatch: any,
    key: number,
    includedProducts: any,
    extraProducts: any,
    offerExtras: any,
    ancillaries: any,
    appliedDiscounts: any,
    offerKeyToHighlight: string,
    seatAvailability: any,
    extraProductDisplayRequirements: any,
    aggregation?: any
  }

  export interface FlightSegmentType {
    departureAirport: any,
    arrivalAirport: any,
    departureTime: string,
    arrivalTime: string,
    legs: FlightLegType[],
    totalTime: number,
    travellerCheckedLuggage: any,
    travellerCabinLuggage: any,
    isAtolProtected: boolean,
    showWarningDestinationAirport: boolean,
    showWarningOriginAirport: boolean,
  }
  
  export interface FlightLegType {
    departureTime: string,
    arrivalTime: string,
    departureAirport: any,
    arrivalAirport: any,
    cabinClass: string,
    flightInfo: any,
    carriers: string[],
    carriersData: any,
    totalTime: number,
    flightStops: any,
  }

  export interface GetActivitiesResponseType {
    __typename: string,
    cancellationPolicy: any,
    id: string,
    name: string,
    slug: string,
    shortDescription: string,
    representativePrice: any,
    primaryPhoto: any,
    reviewsStats: any,
    ufiDetails: any,
    offers: any,
    supportedFeatures: any,
    flags: any
  }

}
