import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'
import { NextSeo } from 'next-seo'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { DoneAllOutline } from '@styled-icons/evaicons-outline/DoneAllOutline'
import LinkWrapper from 'components/LinkWrapper'
import Loader from 'components/Loader'
import * as Styles from './styles'

export type GalleryProps = {
  id: string
  url: string
  height: number
  width: number
}

export type DescriptionProps = {
  html: string
  text: string
}

export type PlaceProps = {
  id: string
  slug: string
  name: string
  visited: boolean
  description?: DescriptionProps
  gallery: GalleryProps[]
}

export type Props = {
  place: PlaceProps
}

const PlacesTemplate: NextPage<Props> = ({ place }) => {
  const { isFallback } = useRouter()
  if (isFallback) return <Loader />
  return (
    <>
      <NextSeo
        title={`${place.name} - My Trips`}
        description={
          place.description?.text ||
          'A simple project to show in a map the places that I went and show more information and photos when clicked.'
        }
        canonical="https://mytrips.com"
        openGraph={{
          url: 'https://mytrips.com',
          title: `${place.name} - My Trips`,
          description:
            place.description?.text ||
            'A simple project to show in a map the places that I went and show more information and photos when clicked.',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />
      <Styles.Wrapper>
        <Styles.Container>
          <LinkWrapper position="medium" href="/">
            <CloseOutline size={32} aria-label="close" />
          </LinkWrapper>
          <Styles.Heading>
            {place.visited ? (
              <DoneAllOutline size={57} aria-label="checked" color="#0d7445" />
            ) : (
              <CloseOutline size={57} aria-label="close" color="#EE3840" />
            )}
            <h1>{place.name}</h1>
          </Styles.Heading>
          <Styles.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html ?? '' }}
          />
          <Styles.Gallery>
            {place.gallery.map(({ id, url }) => (
              <Image
                key={`photo-${id}`}
                alt={place.name}
                height={600}
                src={url}
                quality={75}
                width={1000}
              />
            ))}
          </Styles.Gallery>
        </Styles.Container>
      </Styles.Wrapper>
    </>
  )
}

export default PlacesTemplate
