/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable no-undef */
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js'
)

// Based off of https://github.com/pwa-builder/PWABuilder/blob/main/docs/sw.js

const HOSTNAME_WHITELIST = [
  self.location.hostname,
  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net'
]

// The Util Function to hack URLs of intercepted requests
const getFixedUrl = (req) => {
  var now = Date.now()
  var url = new URL(req.url)

  // 1. fixed http URL
  // Just keep syncing with location.protocol
  // fetch(httpURL) belongs to active mixed content.
  // And fetch(httpRequest) is not supported yet.
  url.protocol = self.location.protocol

  // 2. add query for caching-busting.
  // Github Pages served with Cache-Control: max-age=600
  // max-age on mutable content is error-prone, with SW life of bugs can even extend.
  // Until cache mode of Fetch API landed, we have to workaround cache-busting with query string.
  // Cache-Control-Bug: https://bugs.chromium.org/p/chromium/issues/detail?id=453190
  if (url.hostname === self.location.hostname) {
    url.search += (url.search ? '&' : '?') + 'cache-bust=' + now
  }
  return url.href
}

/**
   *  @Lifecycle Activate
   *  New one activated when old isnt being used.
   *
   *  waitUntil(): activating ====> activated
   */
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
})

/**
   *  @Functional Fetch
   *  All network requests are being intercepted here.
   *
   *  void respondWith(Promise<Response> r)
   */
self.addEventListener('fetch', (event) => {
  // Skip some of cross-origin requests, like those for Google Analytics.
  if (HOSTNAME_WHITELIST.indexOf(new URL(event.request.url).hostname) > -1) {
    // Stale-while-revalidate
    // similar to HTTP's stale-while-revalidate: https://www.mnot.net/blog/2007/12/12/stale
    // Upgrade from Jake's to Surma's: https://gist.github.com/surma/eb441223daaedf880801ad80006389f1
    const cached = caches.match(event.request)
    const fixedUrl = getFixedUrl(event.request)
    const fetched = fetch(fixedUrl, { cache: 'no-store' })
    const fetchedCopy = fetched.then((resp) => resp.clone())

    // Call respondWith() with whatever we get first.
    // If the fetch fails (e.g disconnected), wait for the cache.
    // If there’s nothing in cache, wait for the fetch.
    // If neither yields a response, return offline pages.
    event.respondWith(
      Promise.race([fetched.catch((_) => cached), cached])
        .then((resp) => resp || fetched)
        .catch((_) => { /* eat any errors */ })
    )

    // Update the cache with the version we fetched (only for ok status)
    event.waitUntil(
      Promise.all([fetchedCopy, caches.open('pwa-cache')])
        .then(([response, cache]) => response.ok && cache.put(event.request, response))
        .catch((_) => { /* eat any errors */ })
    )
  }
})

workbox.precaching.precacheAndRoute([{ 'revision': '2a7e77416ff2b95db704d88887feb469', 'url': '/index.html' }, { 'revision': 'b3ff0cc6a0a72d7987c9a58624d5d718', 'url': 'assets/canvas-worker.js' }, { 'revision': '3c58cca64a9cd8cd1e0be7d7fec62793', 'url': 'assets/grid-canvas.js' }, { 'revision': 'd41d8cd98f00b204e9800998ecf8427e', 'url': 'build/index.esm.js' }, { 'revision': null, 'url': 'build/p-0164ef54.entry.js' }, { 'revision': null, 'url': 'build/p-02cb1ada.entry.js' }, { 'revision': null, 'url': 'build/p-02cd095a.js' }, { 'revision': null, 'url': 'build/p-0a0dc456.entry.js' }, { 'revision': null, 'url': 'build/p-0bba8c6f.entry.js' }, { 'revision': null, 'url': 'build/p-101feae9.js' }, { 'revision': null, 'url': 'build/p-10742a54.entry.js' }, { 'revision': null, 'url': 'build/p-10f61dd0.js' }, { 'revision': null, 'url': 'build/p-111520a0.js' }, { 'revision': null, 'url': 'build/p-1328a185.entry.js' }, { 'revision': null, 'url': 'build/p-168ebadf.entry.js' }, { 'revision': null, 'url': 'build/p-19d29f2a.entry.js' }, { 'revision': null, 'url': 'build/p-1daa8fcc.css' }, { 'revision': null, 'url': 'build/p-2066bee8.js' }, { 'revision': null, 'url': 'build/p-208377f4.entry.js' }, { 'revision': null, 'url': 'build/p-20b8a179.entry.js' }, { 'revision': null, 'url': 'build/p-2259989c.entry.js' }, { 'revision': null, 'url': 'build/p-2295373d.js' }, { 'revision': null, 'url': 'build/p-24918af5.js' }, { 'revision': null, 'url': 'build/p-25974658.entry.js' }, { 'revision': null, 'url': 'build/p-27ed0f02.entry.js' }, { 'revision': null, 'url': 'build/p-28641544.entry.js' }, { 'revision': null, 'url': 'build/p-2a682d01.js' }, { 'revision': null, 'url': 'build/p-2b732a59.entry.js' }, { 'revision': null, 'url': 'build/p-2bb51d4d.js' }, { 'revision': null, 'url': 'build/p-2e4e8117.js' }, { 'revision': null, 'url': 'build/p-2e59775e.entry.js' }, { 'revision': null, 'url': 'build/p-3039d1df.entry.js' }, { 'revision': null, 'url': 'build/p-36b18acc.entry.js' }, { 'revision': null, 'url': 'build/p-36f69129.entry.js' }, { 'revision': null, 'url': 'build/p-3989237d.entry.js' }, { 'revision': null, 'url': 'build/p-3bde2d00.entry.js' }, { 'revision': null, 'url': 'build/p-3c3e1c1c.entry.js' }, { 'revision': null, 'url': 'build/p-3e2a1c13.entry.js' }, { 'revision': null, 'url': 'build/p-417a8dd6.js' }, { 'revision': null, 'url': 'build/p-4270482a.entry.js' }, { 'revision': null, 'url': 'build/p-44bf13fe.entry.js' }, { 'revision': null, 'url': 'build/p-45576cd5.entry.js' }, { 'revision': null, 'url': 'build/p-45acbd8d.js' }, { 'revision': null, 'url': 'build/p-4c2eb495.js' }, { 'revision': null, 'url': 'build/p-51097973.entry.js' }, { 'revision': null, 'url': 'build/p-55cabbb5.js' }, { 'revision': null, 'url': 'build/p-56114333.entry.js' }, { 'revision': null, 'url': 'build/p-583cdb7e.entry.js' }, { 'revision': null, 'url': 'build/p-596774fc.js' }, { 'revision': null, 'url': 'build/p-5a503740.js' }, { 'revision': null, 'url': 'build/p-5c579903.entry.js' }, { 'revision': null, 'url': 'build/p-5eb86add.js' }, { 'revision': null, 'url': 'build/p-600817f5.entry.js' }, { 'revision': null, 'url': 'build/p-60a6c823.entry.js' }, { 'revision': null, 'url': 'build/p-61a129f2.entry.js' }, { 'revision': null, 'url': 'build/p-62e3295c.entry.js' }, { 'revision': null, 'url': 'build/p-62f93c79.entry.js' }, { 'revision': null, 'url': 'build/p-64091046.entry.js' }, { 'revision': null, 'url': 'build/p-67c40001.entry.js' }, { 'revision': null, 'url': 'build/p-67eba6f9.entry.js' }, { 'revision': null, 'url': 'build/p-69ed2457.entry.js' }, { 'revision': null, 'url': 'build/p-773e599b.entry.js' }, { 'revision': null, 'url': 'build/p-7840618d.js' }, { 'revision': null, 'url': 'build/p-78de64eb.js' }, { 'revision': null, 'url': 'build/p-79a934f6.entry.js' }, { 'revision': null, 'url': 'build/p-7b4f6973.entry.js' }, { 'revision': null, 'url': 'build/p-7bac9b3c.js' }, { 'revision': null, 'url': 'build/p-7dbfc316.js' }, { 'revision': null, 'url': 'build/p-835ed584.entry.js' }, { 'revision': null, 'url': 'build/p-8400708e.entry.js' }, { 'revision': null, 'url': 'build/p-84425c9c.entry.js' }, { 'revision': null, 'url': 'build/p-8b549c40.entry.js' }, { 'revision': null, 'url': 'build/p-8f2cacf9.entry.js' }, { 'revision': null, 'url': 'build/p-8f72be08.js' }, { 'revision': null, 'url': 'build/p-8fc9298a.js' }, { 'revision': null, 'url': 'build/p-91c87d99.js' }, { 'revision': null, 'url': 'build/p-93a869a9.entry.js' }, { 'revision': null, 'url': 'build/p-96e40215.entry.js' }, { 'revision': null, 'url': 'build/p-9cc49b65.js' }, { 'revision': null, 'url': 'build/p-9fa36b46.entry.js' }, { 'revision': null, 'url': 'build/p-a13a36bb.js' }, { 'revision': null, 'url': 'build/p-a29933a8.entry.js' }, { 'revision': null, 'url': 'build/p-a382a06c.entry.js' }, { 'revision': null, 'url': 'build/p-a44fca19.entry.js' }, { 'revision': null, 'url': 'build/p-a4c08736.entry.js' }, { 'revision': null, 'url': 'build/p-a8f53d31.entry.js' }, { 'revision': null, 'url': 'build/p-ac634c7f.js' }, { 'revision': null, 'url': 'build/p-ad9e2145.js' }, { 'revision': null, 'url': 'build/p-ada18c0f.entry.js' }, { 'revision': null, 'url': 'build/p-adeb541a.entry.js' }, { 'revision': null, 'url': 'build/p-aef0bba0.js' }, { 'revision': null, 'url': 'build/p-af21227c.js' }, { 'revision': null, 'url': 'build/p-b17e0ffc.js' }, { 'revision': null, 'url': 'build/p-b1bd6af1.entry.js' }, { 'revision': null, 'url': 'build/p-b3e3090f.entry.js' }, { 'revision': null, 'url': 'build/p-b7e9b639.entry.js' }, { 'revision': null, 'url': 'build/p-bb1998fa.js' }, { 'revision': null, 'url': 'build/p-be0dc5c8.js' }, { 'revision': null, 'url': 'build/p-bfb7c8b6.entry.js' }, { 'revision': null, 'url': 'build/p-c1c713a1.entry.js' }, { 'revision': null, 'url': 'build/p-c3ecd9eb.entry.js' }, { 'revision': null, 'url': 'build/p-c3f4a57d.entry.js' }, { 'revision': null, 'url': 'build/p-c563b4de.js' }, { 'revision': null, 'url': 'build/p-c88bf467.entry.js' }, { 'revision': null, 'url': 'build/p-ca124c40.js' }, { 'revision': null, 'url': 'build/p-cac340a8.entry.js' }, { 'revision': null, 'url': 'build/p-cc33fe0d.entry.js' }, { 'revision': null, 'url': 'build/p-cebc55b8.entry.js' }, { 'revision': null, 'url': 'build/p-cfad321b.js' }, { 'revision': null, 'url': 'build/p-d0cb6984.entry.js' }, { 'revision': null, 'url': 'build/p-d1153732.entry.js' }, { 'revision': null, 'url': 'build/p-d2b7d875.entry.js' }, { 'revision': null, 'url': 'build/p-d3517f75.entry.js' }, { 'revision': null, 'url': 'build/p-d371c63d.entry.js' }, { 'revision': null, 'url': 'build/p-d6e88f5c.js' }, { 'revision': null, 'url': 'build/p-e4bb4344.entry.js' }, { 'revision': null, 'url': 'build/p-e5abaf0b.js' }, { 'revision': null, 'url': 'build/p-e86fb5a6.entry.js' }, { 'revision': null, 'url': 'build/p-f0721a89.entry.js' }, { 'revision': null, 'url': 'build/p-f16700cb.entry.js' }, { 'revision': null, 'url': 'build/p-f2660943.js' }, { 'revision': null, 'url': 'build/p-f6cedba8.entry.js' }, { 'revision': null, 'url': 'build/p-f9500108.entry.js' }, { 'revision': null, 'url': 'build/p-f9e8b2c6.entry.js' }, { 'revision': null, 'url': 'build/p-fab1b52b.js' }, { 'revision': 'e08b0bab98d27155af10cf0c49b9f886', 'url': 'build/swiper/swiper.bundle.js' }, { 'revision': '3bff251b2c56d790122af10b62a4e3f1', 'url': 'build/swiper/swiper.js' }, { 'revision': '41197e9b67e43a9cef47dd4ddc0dd4b7', 'url': 'icons/icons.json' }, { 'revision': '50406256044db03950edf7962b824911', 'url': 'manifest.json' }, { 'revision': '9eb4650317b76222c3423356643b2c5f', 'url': 'mgt.js' }] || [])