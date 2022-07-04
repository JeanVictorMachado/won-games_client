/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const AnyComponent = Component as any

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Won Games</title>
        <link rel="shortcut icon" href="/img/favicon.png" />
        <link rel="apple-touch-icon" href="/img/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Syled Components"
        />
      </Head>
      <GlobalStyles />
      <AnyComponent {...pageProps} />
    </ThemeProvider>
  )
}

export default App
