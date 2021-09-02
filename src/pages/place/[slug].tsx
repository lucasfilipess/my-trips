import type { GetStaticProps, NextPage } from 'next'
import client from 'graphql/client'
import { useRouter } from 'next/dist/client/router'
import PlacesTemplate, { Props as PlaceProps } from 'templates/Places'
import Loader from 'components/Loader'
import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphql/queries'
import { GetPlaceBySlugQuery, GetPlacesQuery } from 'graphql/generated/graphql'

const Place: NextPage<PlaceProps> = ({ place }) => {
  const { isFallback } = useRouter()
  if (isFallback) return <Loader />
  return <PlacesTemplate place={place} />
}

export const getStaticPaths = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 3
  })
  const paths = places.map(({ slug }) => ({
    params: { slug }
  }))
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: params?.slug
    }
  )
  if (!place) return { notFound: true }
  return {
    revalidate: 5,
    props: {
      place
    }
  }
}

export default Place
