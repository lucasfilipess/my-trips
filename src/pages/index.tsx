import type { GetStaticProps, NextPage } from 'next'
import client from 'graphql/client'
import HomeTemplate from 'templates/Home'
import { Props as MapProps } from 'components/Map'
import { GetPlacesQuery } from 'graphql/generated/graphql'
import { GET_PLACES } from 'graphql/queries'

const Home: NextPage<MapProps> = ({ places }) => {
  return <HomeTemplate places={places} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { place } = await client.request<GetPlacesQuery>(GET_PLACES)
  return {
    revalidate: 5,
    props: {
      places: place
    }
  }
}

export default Home
