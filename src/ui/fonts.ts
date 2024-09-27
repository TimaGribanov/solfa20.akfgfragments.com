import { Noto_Sans_Display, Noto_Sans_JP } from 'next/font/google'

export const notoSans = Noto_Sans_Display({
    subsets: ['latin-ext', 'cyrillic-ext'],
    weight: ['400', '700'],
    style: ['normal', 'italic']
})

export const notoSansJP = Noto_Sans_JP({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal']
})