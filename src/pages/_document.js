import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    const gtm_id = process.env.NEXT_PUBLIC_GTM_ID
    const new_vk_pixel_id = process.env.NEXT_PUBLIC_NEW_VK_ID

    return (
        <Html>
            <Head >

            </Head>
            <body>
                <Main />
                <NextScript />
                {
                    gtm_id && <noscript
                            dangerouslySetInnerHTML={{
                            __html: `<iframe src="https://www.123googletagmanager.com/ns.html?id=${gtm_id}" height="0" width="0" style="display: none; visibility: hidden;" />`,
                        }}
                    />
                }
                {
                    gtm_id && <noscript
                            dangerouslySetInnerHTML={{
                            __html: `<div><img src="https://top-fwz1.mail.ru/counter?id=${new_vk_pixel_id};js=na" style="position:absolute;left:-9999px;" alt="Top.Mail.Ru" /></div>`,
                        }}
                    />
                }
            </body>
        </Html>
    )
}