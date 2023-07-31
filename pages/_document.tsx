import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "../styles/emotions";
//import muiTheme from "../styles/theme/muiTheme";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          {/* <meta name="theme-color" content={muiTheme.palette.common.white} /> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500&display=swap"
            rel="stylesheet"
          />
          <script
            async
            src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) => (props) =>
        <App emotionCache={cache} {...props} />,
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style: any) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  };
};
