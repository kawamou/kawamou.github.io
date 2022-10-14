import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

class Document extends NextDocument {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com'></link>
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700&display=swap'
            rel='stylesheet'
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
