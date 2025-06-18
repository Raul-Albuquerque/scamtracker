export type Access = {
  "id": number,
  "os": string,
  "browser": string,
  "ip": string,
  "city": string,
  "state": string,
  "country": string,
  "country_flag_url": string,
  "latitude": string,
  "longitude": string,
  "postal": string,
  "access_timestamp": number,
  "url_id": number
}

export type AccessList = Access[]