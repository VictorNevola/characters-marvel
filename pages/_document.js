import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="https://www.marvel.com/static/images/favicon/favicon.ico" type="image/x-icon" sizes="16x16 32x32" />
          <link rel="icon" href="https://www.marvel.com/static/images/favicon/favicon-16x16.png" type="image/png" sizes="16x16" />
          <link rel="icon" href="https://www.marvel.com/static/images/favicon/favicon-32x32.png" type="image/png" sizes="32x32" />
          <link rel="icon" href="https://www.marvel.com/static/images/favicon/apple-touch-icon-57.png" type="image/png" sizes="57x57" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
