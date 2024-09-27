import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/app/styles.css'
import { notoSans } from '@/ui/fonts'

const siteUrl = 'https://solfa20.akfgfragments.com'

export const metadata: Metadata = {
    title: 'Sol-Fa 20',
    description: 'Page dedicated to the 20th anniversary of Asian Kung-Fu Generation\'s album Sol-Fa',
    keywords: [
        'akfgfragments',
        'asian kung-fu generation',
        'sol-fa',
        'rewrite',
        're:re:',
        'kimi no machi made',
        'shindoukaku',
        'loop&loop',
        'my world',
        'siren',
        'yoru no mukou',
        '24ji',
        'mayonaka to mahiru no yume',
        'kaigan doori',
        'last scene',
        'AKG',
        'AKFG',
        'アジアン・カンフー・ジェネレーション',
        'アジカン',
        'ソルファ',
        '振動覚',
        'リライト',
        '君の街まで',
        'マイワールド',
        '夜の向こう',
        'ラストシーン',
        'サイレン',
        '24時',
        '真夜中と真昼の夢',
        '海岸通り',
        'ループ&ループ'
     ],
    creator: 'akfgfragments.com',
    metadataBase: new URL(siteUrl),
    openGraph: {
        title: 'Sol-Fa 20',
        description: 'The 20th anniversary of Asian Kung-Fu Generation\'s album Sol-Fa',
        url: siteUrl,
        siteName: 'Sol-Fa 20 | akfgfragments.com',
        images: [
            {
                url: `${siteUrl}/images/intro-bg.jpg`,
                width: 2560,
                height: 1440
            }
        ],
        locale: 'en_GB',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sol-Fa 20',
        description: 'The 20th anniversary of Asian Kung-Fu Generation\'s album Sol-Fa',
        creator: '@AkfgfragmentsEn',
        images: [`${siteUrl}/images/intro-bg.jpg`]
    }
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={notoSans.className}>
                {children}
            </body>
        </html>
    )
}
