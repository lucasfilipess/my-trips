import type { NextPage } from 'next'
import * as Styles from './styles'

const Main: NextPage = () => {
  return (
    <Styles.Wrapper>
      <Styles.Logo
        src="/img/logo.svg"
        alt='"Image of an atom and written "React Avançado" on the side."'
      />
      <Styles.Title>Advanced React</Styles.Title>
      <Styles.Description>
        Typescript, ReactJS, NextJS, e Styled Components
      </Styles.Description>
      <Styles.Illustration
        src="/img/hero-illustration.svg"
        alt="Developer facing a screen with code."
      />
    </Styles.Wrapper>
  )
}
export default Main
