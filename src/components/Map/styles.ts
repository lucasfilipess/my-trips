import styled from 'styled-components'
import { MapContainer as ReactLeafletMapContainer } from 'react-leaflet'

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  .leaflet-container {
    background-color: ${({ theme }) => theme.colors.map};
  }
`

export const MapContainer = styled(ReactLeafletMapContainer)`
  height: 100%;
  width: 100%;
`
