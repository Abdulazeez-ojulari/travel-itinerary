/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-namespace */

import { FORM_ACTION } from "../../utils/helpers";

interface ItineraryItem {
  id: string;
  name: string;
  type: 'flight' | 'hotel' | 'activity';
}

export namespace State {
  export interface App {
    items: ItineraryItem[]
    request: any;
    response: any;
    current: number;
    showSteps: boolean;
    isUpperCase: boolean;
    isLowerCase: boolean;
    hasNumber: boolean;
    isSpecialChar: boolean;
    showSuccessModal?: boolean;
    selectUrl?: string;
    menuCollapsed: boolean;
    selectedKey: string;
    openKey?: string;
    pageTitle: string;
    breadcrumb: string;
    openMenuDrawer: boolean;
    searchTerm?: any;
    action: FORM_ACTION;
    postUrl: string;
    getUrl: string;
    updateUrl: string;
    getPostUrl?: string;
    deleteUrl: string;
    currentSelectedTabKey: string;
    page: number;
    limit: number;
  }
}
