import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyle from 'styles/global'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Boilerplate" />
        <meta name="theme-color" content="#06092b" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
