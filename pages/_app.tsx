import "../styles/globals.css";
import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../styles/emotions";
import { SessionProvider } from "next-auth/react";
import WithAuth from "../src/components/hoc/withAuth";
import initOneSignalNotification from "../src/services/onsignal";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../apollo/apolloClient";
import ApolloClientErrors from "../src/components/errors/apolloClinetErrors";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider as PreferredThemeProvider } from "next-themes";
import MuiThemeProvider from "../styles/themeProvider";
import { useRouter } from "next/router";
import AppLayout from "../src/containers/layouts/appLayout";
import { APP_ROUTES } from "../src/services/enums";
import { reactiveNavMenus } from "../apollo/reactiveState";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  session: any;
}

const clientSideEmotionCache = createEmotionCache();
const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const router = useRouter();
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    session,
  } = props;

  React.useMemo(
    () => reactiveNavMenus(pageProps?.navMenus),
    [pageProps?.navMenus]
  );

  React.useEffect(() => {
    initOneSignalNotification();
  }, []);

  return (
    <SessionProvider session={session}>
      <PreferredThemeProvider>
        <CacheProvider value={emotionCache}>
          <MuiThemeProvider>
            <ApolloProvider client={apolloClient}>
              <WithAuth>
                {router.asPath === APP_ROUTES.LOGIN ? (
                  <Component {...pageProps} />
                ) : (
                  <AppLayout navMenus={pageProps?.navMenus}>
                    <Component {...pageProps} />
                  </AppLayout>
                )}
              </WithAuth>
              <ApolloClientErrors error={apolloClient} />
            </ApolloProvider>
          </MuiThemeProvider>
        </CacheProvider>
      </PreferredThemeProvider>
    </SessionProvider>
  );
};

export default MyApp;
