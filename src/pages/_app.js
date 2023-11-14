import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Layout from '@components/Layout';
import Layout2 from '@components/Layout2';
import { storeWrapper } from '@store/store';
import '@styles/general.less'
import Head from 'next/head';
import Script from 'next/script'
import { polyfill } from 'interweave-ssr';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { YMInitializer } from 'react-yandex-metrika'
import { initGA4 } from '@helpers/metrics';
import { setOnline, setRetina } from "@store/checks/checksAction"
import { useDispatch } from 'react-redux';
import { isRetina } from '@helpers/functions';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import Layout3 from '@components/Layout3';
import { useRouter } from 'next/router'

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    integrations: [
      new Integrations.BrowserTracing(),
    ],
    tracesSampleRate: 1.0,
  });
}

const layouts = {
  L1: Layout,
  L2: Layout2,
  L3: Layout3
}


const WrappedApp = ({ Component, pageProps }) => {
  const CheckLayout = layouts[Component.layout] || layouts["L1"]
  polyfill();
  const dispatch = useDispatch();

  const ym_id = +process.env.NEXT_PUBLIC_YANDEX_ANLYTICS_ID
  const ga4_id = process.env.NEXT_PUBLIC_GA4_ID
  const gtm_id = process.env.NEXT_PUBLIC_GTM_ID
  const roistat_id = process.env.NEXT_PUBLIC_ROISTAT_ID
  const vk_pixel_id = process.env.NEXT_PUBLIC_VK_ID
  const new_vk_pixel_id = process.env.NEXT_PUBLIC_NEW_VK_ID

  useEffect(() => {
    initGA4(ga4_id)
    dispatch(setRetina(isRetina()))

    if (typeof window !== 'undefined' && 'ononline' in window && 'onoffline' in window) {
      dispatch(setOnline(window.navigator.onLine))

      if (!window.ononline) {
        window.addEventListener('online', () => {
          dispatch(setOnline(true))
        })
      }
      if (!window.onoffline) {
        window.addEventListener('offline', () => {
          dispatch(setOnline(false))
        })
      }
    }
  }, [])

  useEffect(() => {
    function preventTouchZoom(event) {
      if (event.touches.length > 1) {
        event.preventDefault()
      }
    }

    function preventTrackpadZoom(event) {
      if (event.ctrlKey) {
        event.preventDefault()
      }
    }

    window.addEventListener("touchstart", preventTouchZoom, false);
    window.addEventListener('wheel', preventTrackpadZoom, { passive: false })
    return () => {
      window.removeEventListener("touchstart", preventTouchZoom, false);
      window.removeEventListener('wheel', preventTrackpadZoom, { passive: false })
    }
  }, [])

  const router = useRouter()

  useEffect(() => {

    const query = router.query;
    let utmLabels = {};

    for (let key of Object.keys(query)) {
      if (key.startsWith("utm_")) {
        utmLabels[key] = query[key];
      }
    }
    sessionStorage.setItem('utmLabels', JSON.stringify(utmLabels))

  }, [])

  useEffect(() => {

    window.AMOPIXEL_IDENTIFIER_PARAMS = window.AMOPIXEL_IDENTIFIER_PARAMS || {};
    window.AMOPIXEL_IDENTIFIER_PARAMS.onload = function (pixel_identifier) {
      var visitor_uid = pixel_identifier.getVisitorUid();
      if (visitor_uid) {
        window.AMOPIXEL_IDENTIFIER_ID = visitor_uid;
      }
    };

  }, [])



  return (
    <React.Fragment>
      <Head>
        <title>Главная</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
        <meta name="cmsmagazine" content="1cd6935865cc6a576666014d574bb408" />
        {
          process.env.NODE_ENV !== 'production' && <meta name="robots" content="noindex" />
        }
        <link rel="icon" type="image/svg+xml" sizes="any" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="msapplication-TileImage" content="mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="mstile-310x310.png" />
        <meta name="msapplication-square310x310logo" content="mstile-310x150.png" />
        <meta name="msapplication-config" content="browserconfig.xml" />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        
      </Head>
      {/* webvisor */}
      <YMInitializer accounts={[ym_id]} options={{ webvisor: true, clickmap: true, trackLinks: true, accurateTrackBounce: true }} version="2" />
      {
        roistat_id && <Script
          id="roistat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w, d, s, h, id) {
              w.roistatProjectId = id; w.roistatHost = h;
              var p = d.location.protocol == "https:" ? "https://" : "http://";
              var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);
              var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
            })(window, document, 'script', 'cloud.roistat.com', '${roistat_id}');
          `,
          }}
        />
      }
      {
        vk_pixel_id && <Script
          id="vk_pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(){
              var t = document.createElement("script");
              t.type = "text/javascript", t.async = !0, t.src = 'https://vk.com/js/api/openapi.js?169', t.onload = function () {
                VK.Retargeting.Init("${vk_pixel_id}"), VK.Retargeting.Hit()
              }, document.head.appendChild(t)
            }();
          `,
          }}
        />
      }

      {
        new_vk_pixel_id && <Script
          id="new_vk_pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            var _tmr = window._tmr || (window._tmr = []);
            _tmr.push({id: "${new_vk_pixel_id}", type: "pageView", start: (new Date()).getTime()});
            (function (d, w, id) {
              if (d.getElementById(id)) return;
              var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
              ts.src = "https://top-fwz1.mail.ru/js/code.js";
              var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
              if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
            })(document, window, "tmr-code");
            `,
          }}
        />
      }

      {
          gtm_id && <Script
            id="gtm_id"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtm_id}');
            `,
            }}
          />
        }

      <Script
        type="text/javascript" id="amo_pixel_identifier_js" async="async"
        src="https://piper.amocrm.ru/pixel/js/identifier/pixel_identifier.js"
      />

      {
        vk_pixel_id && <noscript><img src={`https://vk.com/rtrg?p=${vk_pixel_id}`} style={{ position: 'fixed', left: '-999px' }} alt="" /></noscript>
      }

      <CheckLayout>
        <Component {...pageProps} />
      </CheckLayout>
    </React.Fragment>
  )
}

WrappedApp.propTypes = {
  pageProps: PropTypes.instanceOf(Object).isRequired,
  Component: PropTypes.elementType.isRequired
};

export default Sentry.withProfiler(storeWrapper.withRedux(WrappedApp))
