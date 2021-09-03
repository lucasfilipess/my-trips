import type { NextPage } from 'next'
import { TileLayer, Marker, MapConsumer } from 'react-leaflet'
import { useRouter } from 'next/dist/client/router'
import useTheme from 'hooks/useTheme'
import L from 'leaflet'
import * as Styles from './styles'

export type LocationProps = {
  latitude: number
  longitude: number
}

export type PlaceProps = {
  id: string
  name: string
  slug: string
  visited: boolean
  location: LocationProps
}

export type Props = {
  places?: PlaceProps[]
}

const Map: NextPage<Props> = ({ places }) => {
  const router = useRouter()
  const { theme } = useTheme()
  const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
  const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
  const MAPBOX_LIGHT_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_LIGHT_STYLEID
  const MAPBOX_DARK_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_DARK_STYLEID
  const MAPBOX_STYLEID =
    theme === 'light'
      ? MAPBOX_LIGHT_STYLEID
      : theme === 'dark' && MAPBOX_DARK_STYLEID

  const getScreenWidth = (): number =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth

  const visitedIcon = new L.Icon({
    iconUrl: 'img/pin-success.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
  })

  const notVisitedIcon = new L.Icon({
    iconUrl: 'img/pin-danger.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
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
        {places?.map(({ id, name, location, slug, visited }) => (
          <Marker
            key={`place-${id}`}
            icon={visited ? visitedIcon : notVisitedIcon}
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
