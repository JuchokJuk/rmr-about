import { clientsClaim } from 'workbox-core'
import { ExpirationPlugin } from 'workbox-expiration'
import { NetworkOnly, NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies'
import { registerRoute, setDefaultHandler, setCatchHandler } from 'workbox-routing'
import { matchPrecache, precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching'

self.skipWaiting()
clientsClaim()

// must include following lines when using inject manifest module from workbox
// https://developers.google.com/web/tools/workbox/guides/precache-files/workbox-build#add_an_injection_point

const WB_MANIFEST = self.__WB_MANIFEST

// Precache fallback route

WB_MANIFEST.push(
  {
    url: '/fallback',
    revision: `o3c64oe566`
  }
)
precacheAndRoute(WB_MANIFEST)

cleanupOutdatedCaches()

const matchImages = ({ url }) => {
  const check = url.pathname.match(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i) 
  return !!check
}

const matchApi = ({ url }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const check = url.href.match(new RegExp(apiUrl))
  return !!check
}

const matchSearch = ({ url }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + "searches"
  const check = url.href.match(new RegExp(apiUrl))
  return !!check
}

registerRoute(
  '/',
  new StaleWhileRevalidate({
    cacheName: 'start-url',
    plugins: [new ExpirationPlugin({ maxEntries: 1, maxAgeSeconds: 86400, purgeOnQuotaError: false })]
  }),
  'GET'
)

registerRoute(
  /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
  new StaleWhileRevalidate({
    cacheName: 'static-font-assets',
    plugins: [new ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 86400 * 7, purgeOnQuotaError: false })]
  }),
  'GET'
)

registerRoute(
  /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
  new StaleWhileRevalidate({
    cacheName: 'static-image-assets',
    plugins: [new ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 * 7, purgeOnQuotaError: true })]
  }),
  'GET'
)

registerRoute(
  matchImages,
  new NetworkOnly({
    cacheName: 'images',
    plugins: [new ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 * 7, purgeOnQuotaError: true })]
  }),
  'GET'
)

registerRoute(
  /\/_next\//i,
  new StaleWhileRevalidate({
    cacheName: 'next-data',
    plugins: [new ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400, purgeOnQuotaError: false })]
  }),
  'GET'
)

registerRoute(
  matchApi,
  new NetworkFirst({
    cacheName: 'apis',
    plugins: [new ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: false })]
  }),
  'GET'
)

registerRoute(
  matchSearch,
  new NetworkOnly({
    cacheName: 'search',
    plugins: [new ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: true })]
  }),
  'GET'
)

registerRoute(
  /\.(?:json|xml|csv|webmanifest)$/i,
  new StaleWhileRevalidate({
    cacheName: 'static-data-assets',
    plugins: [new ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: false })]
  }),
  'GET'
)

registerRoute(
  /\.(?:js)$/i,
  new StaleWhileRevalidate({
    cacheName: 'static-js-assets',
    plugins: [new ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: false })]
  }),
  'GET'
)

registerRoute(
  /\.(?:css|less)$/i,
  new StaleWhileRevalidate({
    cacheName: 'static-style-assets',
    plugins: [new ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: false })]
  }),
  'GET'
)

registerRoute(
  /.*/i,
  new NetworkOnly({
    cacheName: 'others',
    networkTimeoutSeconds: 10,
    plugins: [new ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: true })]
  }),
  'GET'
)

setDefaultHandler(new StaleWhileRevalidate())

setCatchHandler(({ event }) => {
  // The FALLBACK_URL entries must be added to the cache ahead of time, either
  // via runtime or precaching. If they are precached, then call
  // `matchPrecache(FALLBACK_URL)` (from the `workbox-precaching` package)
  // to get the response from the correct cache.
  //
  // Use event, request, and url to figure out how to respond.
  // One approach would be to use request.destination, see
  // https://medium.com/dev-channel/service-worker-caching-strategies-based-on-request-types-57411dd7652c
  switch (event.request.destination) {
    case 'document':
      // If using precached URLs:
      return matchPrecache('/fallback')
      // return caches.match('/fallback')

    default:
      // If we don't have a fallback, just return an error response.
      return Response.error()
  }
})
