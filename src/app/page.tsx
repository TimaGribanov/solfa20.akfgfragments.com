/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import HeadBlock from '@/components/HeadBlock'
import Info from '@/components/Info'
import AWP from '@/components/AWP'
import MessagesBlock from '@/components/MessagesBlock'
import MusicVideos from '@/components/MusicVideos'
import Tracklist from '@/components/Tracklist'
import Versions from '@/components/Versions'
import Sales from '@/components/Sales'
import Listen from '@/components/Listen'
import Footer from '@/components/Footer'

import ScrollTrigger from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
    const main = useRef<HTMLElement | any>()
    const videoBlock = useRef<HTMLElement | any>()

    useEffect(() => {
        const ctx = gsap.context(() => {
            const videos = gsap.utils.toArray('.mv')

            gsap.to(videos, {
                xPercent: -100 * (videos.length - 1),
                ease: 'none',
                scrollTrigger: {
                    markers: true,
                    trigger: videoBlock.current,
                    pin: true,
                    start: 'top top',
                    snap: 1 / (videos.length - 1),
                    scrub: 1,
                    end: () => '+=' + videoBlock.current.offsetWidth
                }
            })
        }, main)

        return () => ctx.revert()
    }, [])

    useEffect(() => {
        ScrollTrigger.refresh()
    }, [])

    return (
        <div ref={main}>
            <HeadBlock />
            <Info />
            <MessagesBlock />
            <Tracklist />
            <AWP />
            <MusicVideos ref={videoBlock} />
            <Versions />
            <Sales />
            <Listen />
            <Footer />
        </div>
    )
}
