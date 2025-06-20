"use client"

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin
} from "@vis.gl/react-google-maps"

type GoogleMapsProps = {
  lat: number
  lng: number
}

export function GoogleMaps({ lat, lng }: GoogleMapsProps) {
  const position = { lat: lat, lng: lng }
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID

  if (!apiKey) {
    throw new Error("API key is missing. Check environment variables.");
  }

  return (
    <APIProvider apiKey={apiKey}>
      <div className="w-85 md:w-100 h-100">
        <Map
          defaultZoom={16}
          center={position}
          mapId={mapId}>
          <AdvancedMarker
            position={position}>
            <Pin />
          </AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  )
}