import type { NextPage } from 'next'
import Link from 'next/link'
import { ReactNode } from 'react'
import * as Styles from './styles'

export type Props = {
  href: string
  children: ReactNode
  position?: 'large' | 'medium'
}

const LinkWrapper: NextPage<Props> = ({
  children,
  href,
  position = 'large'
}) => {
  return (
    <Styles.Wrapper position={position}>
      <Link href={href}>{children}</Link>
    </Styles.Wrapper>
  )
}

export default LinkWrapper
