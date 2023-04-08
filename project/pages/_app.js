import "../styles/globals.css";

import Script from "next/script";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=6fc83b40563fb2f6f8468c6b2a5670e1&libraries=services,clusterer&autoload=false"
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
