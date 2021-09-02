import type { GetStaticProps, NextPage } from 'next'
import client from 'graphql/client'
import { useRouter } from 'next/dist/client/router'
import PagesTemplate, { Props as PageProps } from 'templates/Pages'
import Loader from 'components/Loader'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import { GetPageBySlugQuery, GetPagesQuery } from 'graphql/generated/graphql'

const Page: NextPage<PageProps> = ({ body, heading }) => {
  const { isFallback } = useRouter()

  if (isFallback) return <Loader />

  return <PagesTemplate body={body} heading={heading} />
}

export const getStaticPaths = async () => {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, { first: 3 })
  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: params?.slug
  })
  if (!page) return { notFound: true }
  return {
    props: {
      body: page.body.html,
      heading: page.heading
    }
  }
}

export default Page
