import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query getPages($first: Int) {
    page(first: $first) {
      id
      heading
      slug
      body
    }
  }
`

export const GET_PAGE_BY_SLUG = gql`
  query getPagesBySlug($slug: String) {
    page(slug: $slug) {
      id
      heading
      slug
      body
    }
  }
`

export const GET_PLACES = gql`
  query getPlaces($first: Int) {
    place(first: $first) {
      id
      slug
      name
      visited
      location {
        latitude
        longitude
      }
      description
      gallery {
        id
        url
      }
    }
  }
`

export const GET_PLACE_BY_SLUG = gql`
  query getPlacesBySlug($slug: String) {
    place(slug: $slug) {
      id
      slug
      name
      visited
      location {
        latitude
        longitude
      }
      description
      gallery {
        id
        url
      }
    }
  }
`
