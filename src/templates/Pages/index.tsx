import type { NextPage } from 'next'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'
import * as Styles from './styles'

export type Props = {
  body: string
  heading: string
}

const PagesTemplate: NextPage<Props> = ({ body, heading }) => {
  return (
    <Styles.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="close" />
      </LinkWrapper>
      <Styles.Heading>{heading}</Styles.Heading>
      <Styles.Body>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </Styles.Body>
    </Styles.Content>
  )
}

export default PagesTemplate
