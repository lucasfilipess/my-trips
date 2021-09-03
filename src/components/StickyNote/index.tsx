import type { NextPage } from 'next'
import * as Styles from './styles'

const StickyNote: NextPage = () => {
  return (
    <Styles.Wrapper>
      <p>
        Want to take a look at what {`I've`} been studying? Access my GitHub{' '}
        <a href="https://github.com/lucasfilipess">lucasfilipess</a>
      </p>
    </Styles.Wrapper>
  )
}

export default StickyNote
