
export interface IFilterStation {
      limit: number
      type: string,
      value: string

}

export interface IDataRadios {
      data?: [
            {
                  changeuuid?: string | undefined,
                  stationuuid?: string | undefined,
                  serveruuid?: string | undefined,
                  name?: string | undefined,
                  url?: string | undefined,
                  url_resolved?: string | undefined,
                  homepage?: string | undefined,
                  favicon?: string | undefined,
                  tags?: string | undefined,
                  country?: string | undefined,
                  countrycode?: string | undefined,
                  iso_3166_2?: null | undefined,
                  state?: string | undefined,
                  language?: string | undefined,
                  languagecodes?: string | undefined,
                  votes?: number | undefined,
                  lastchangetime?: string | undefined,
                  lastchangetime_iso8601?: string | undefined,
                  codec?:  string | Date | undefined,
                  bitrate?: number | undefined,
                  hls?: number | undefined,
                  lastcheckok?: number | undefined,
                  lastchecktime?: string | undefined,
                  lastchecktime_iso8601?: string | undefined,
                  lastcheckoktime?: string | undefined,
                  lastcheckoktime_iso8601?: string | undefined,
                  lastlocalchecktime?: string | undefined,
                  lastlocalchecktime_iso8601?: string | undefined,
                  clicktimestamp?: string | undefined,
                  clicktimestamp_iso8601?: string | undefined,
                  clickcount?: number | undefined,
                  clicktrend?: number | undefined,
                  ssl_error?: number | undefined,
                  geo_lat?: any | undefined,
                  geo_long?: any | undefined,
                  has_extended_info?: boolean | undefined,
            }
      ]
}

export interface IDataRadiosItem {
                  changeuuid?: string,
                  stationuuid: string,
                  serveruuid?: string,
                  name?: string,
                  url?: string,
                  url_resolved?: string,
                  homepage?: string,
                  favicon?: string,
                  tags?: string,
                  country?: string,
                  countrycode?: string,
                  iso_3166_2?: null,
                  state?: string,
                  language?: string,
                  languagecodes?: string,
                  votes?: number,
                  lastchangetime?: string,
                  lastchangetime_iso8601?: string,
                  codec?:  string | Date,
                  bitrate?: number,
                  hls?: number,
                  lastcheckok?: number,
                  lastchecktime?: string,
                  lastchecktime_iso8601?: string,
                  lastcheckoktime?: string,
                  lastcheckoktime_iso8601?: string,
                  lastlocalchecktime?: string,
                  lastlocalchecktime_iso8601?: string,
                  clicktimestamp?: string,
                  clicktimestamp_iso8601?: string,
                  clickcount?: number,
                  clicktrend?: number,
                  ssl_error?: number,
                  geo_lat?: any,
                  geo_long?: any,
                  has_extended_info?: boolean,
}

export interface IPropsSideBar {
      sidebarOpen?: boolean
      handleSideBarOpen?: any
}