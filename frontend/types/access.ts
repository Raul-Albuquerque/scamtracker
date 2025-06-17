export type Access = {
  "id": number,
  "os": string,
  "platform": string,
  "city": string,
  "country": string,
  "location": string,
  "net_provider": string,
  "postal": string,
  "region": string,
  "hostname": string,
  "access_timestamp": number,
}

export type AccessList = Access[]