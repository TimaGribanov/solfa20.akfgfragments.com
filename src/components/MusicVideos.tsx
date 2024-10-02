import { ForwardedRef, forwardRef } from 'react'

const AkfgfragmentsVideo = ({ url, title, thumbnail }: { url: string, title: string, thumbnail: string }) => (
    <div className='mv'>
        <h4>{title}</h4>
        <div className='ratio ratio-16x9'>
            <video poster={thumbnail} controls muted={true}>
                <source src={url} type='video/mp4' />
            </video>
        </div>

    </div>
)

const YoutubeVideo = ({ url, title }: { url: string, title: string }) => (
    <div className='mv'>
        <h4>{title}</h4>
        <div className='ratio ratio-16x9'>
            <iframe
                src={url}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>
        </div>
    </div>
)

const Body = () => {
    return (
        <div className='mv-container '>
            <AkfgfragmentsVideo url='https://akfgfragments.com/wp-content/uploads/2022/05/Siren.mp4' title='Siren' thumbnail='/images/siren_thumbnail.jpg' />
            <AkfgfragmentsVideo url='https://akfgfragments.com/wp-content/uploads/2022/05/Siren_2.mp4' title='Siren#' thumbnail='/images/siren_2_thumbnail.jpg' />
            <YoutubeVideo url='https://www.youtube-nocookie.com/embed/F4l9qxtTbmM?si=ymdOquIS4DrZye4S' title='Loop&Loop' />
            <YoutubeVideo url='https://www.youtube-nocookie.com/embed/ZmeudwRMrsU?si=FJgVxIOl8oM8fJFv' title='Rewrite' />
            <YoutubeVideo url='https://www.youtube-nocookie.com/embed/oKO-KREPjUM?si=L0QCqoqBM5v4FIOA' title='Kimi no Machi made' />
            <YoutubeVideo url='https://www.youtube-nocookie.com/embed/Jj5vpv65Sc0?si=uFFwKB4Ajmp5LVzh' title='Re:Re: (2016)' />
        </div>
    )
}

const MusicVideos = forwardRef(function (props, ref: ForwardedRef<HTMLDivElement>) {
    return (
        <div ref={ref}>
            <section id='music-videos' className='section'>
                <h3 className='text-center mb-3'>Music Videos</h3>
                <Body />
            </section>
        </div>
    )
})
MusicVideos.displayName = 'Music Videos'

export default MusicVideos