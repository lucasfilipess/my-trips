import type { NextPage } from 'next'
import ReactLoaderSpinner from 'react-loader-spinner'
import * as Styles from './styles'

const Loader: NextPage = () => {
  return (
    <Styles.Wrapper>
      <ReactLoaderSpinner type="Bars" height={100} width={100} visible={true} />
    </Styles.Wrapper>
  )
}

export default Loader
