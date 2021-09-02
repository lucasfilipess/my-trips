import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { TileLayer, Marker, MapConsumer } from 'react-leaflet'
import L from 'leaflet'
import * as Styles from './styles'

export type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}
export type Props = {
  places?: Place[]
}

const Map: NextPage<Props> = ({ places }) => {
  const router = useRouter()
  const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
  const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
  const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID

  const getScreenWidth = (): number =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth

  const markerIcon = new L.Icon({
    iconUrl: 'img/icon-192.png',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -40]
  })

  const CustomTileLayer = () =>
    MAPBOX_API_KEY ? (
      <TileLayer
        attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
      />
    ) : (
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    )

  return (
    <Styles.Wrapper>
      <Styles.MapContainer
        center={[0, 0]}
        zoom={2}
        minZoom={2}
        maxBounds={[
          [-180, 180],
          [180, -180]
        ]}
      >
        <MapConsumer>
          {(map) => {
            if (getScreenWidth() < 768) map.setMinZoom(1)
            return null
          }}
        </MapConsumer>
        <CustomTileLayer />
        {places?.map(({ id, name, location, slug }) => (
          <Marker
            key={`place-${id}`}
            icon={markerIcon}
            position={[location.latitude, location.longitude]}
            title={name}
            eventHandlers={{
              click: () => router.push(`/place/${slug}`)
            }}
          />
        ))}
      </Styles.MapContainer>
    </Styles.Wrapper>
  )
}

export default Map
