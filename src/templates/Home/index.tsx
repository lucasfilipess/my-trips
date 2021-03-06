import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { NextSeo } from 'next-seo'
import LinkWrapper from 'components/LinkWrapper'
import Overlay from 'components/Overlay'
import StickyNote from 'components/StickyNote'
import { Props as MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

const HomeTemplate: NextPage<MapProps> = ({ places }) => {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show in a map the places that I went and show more information and photos when clicked."
        canonical="http://my-trips.lucasfilipess.me"
        openGraph={{
          url: 'https://my-trips.lucasfilipess.me',
          title: 'My Trips',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: 'https://my-trips.lucasfilipess.me/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <Overlay />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
      <StickyNote />
    </>
  )
}
export default HomeTemplate
