const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const { join } = require('path')

const dev = process.env.NODE_ENV !== 'staging' && process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true)
        const { pathname } = parsedUrl
        const rootStaticFiles = [
            '/robots.txt',
            '/sitemap.xml',
            '/favicon.ico',
            '/favicon.svg',
            '/favicon-16x16.png',
            '/favicon-32x32.png',
            '/android-chrome-192x192.png',
            '/android-chrome-512x512.png',
            '/safari-pinned-tab.svg',
            '/apple-touch-icon.png',
            '/site.webmanifest',
            '/browserconfig.xml',
            '/mstile-144x144.png',
            '/mstile-70x70.png',
            '/mstile-150x150.png',
            '/mstile-310x310.png',
            '/mstile-310x150.png',
        ]

        if (rootStaticFiles.indexOf(pathname) > -1 || (pathname === '/sw.js' || pathname.startsWith('/workbox-') || pathname.startsWith('/worker-'))) {
            const path = join(__dirname, 'public/static', pathname)
            // console.log('looking for static', pathname, ' in ', path)
            app.serveStatic(req, res, path)
        } else {
            handle(req, res, parsedUrl)
        }


    }).listen(3000, (err) => {
        if (err) throw err
    })
})