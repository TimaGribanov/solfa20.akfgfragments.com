import Section from './Section'

const Body = () => (
    <>
        <ol id='tracklist-list'>
            <li><a href='https://akfgfragments.com/song?Shindoukaku'>Shindoukaku</a></li>
            <li><a href='https://akfgfragments.com/song?Rewrite'>Rewrite</a></li>
            <li><a href='https://akfgfragments.com/song?Kimi_no_Machi_made'>Kimi no Machi made</a></li>
            <li><a href='https://akfgfragments.com/song?My_World'>My World</a></li>
            <li><a href='https://akfgfragments.com/song?Yoru_no_Mukou'>Yoru no Mukou</a></li>
            <li><a href='https://akfgfragments.com/song?Last_Scene'>Last Scene</a></li>
            <li><a href='https://akfgfragments.com/song?Siren'>Siren</a></li>
            <li><a href='https://akfgfragments.com/song?Re:Re:'>Re:Re:</a></li>
            <li><a href='https://akfgfragments.com/song?24ji'>24ji</a></li>
            <li><a href='https://akfgfragments.com/song?Mayonaka_to_Mahiru_no_Yume'>Mayonaka to Mahiru no Yume</a></li>
            <li><a href='https://akfgfragments.com/song?Kaigan_Doori'>Kaigan Doori</a></li>
            <li><a href='https://akfgfragments.com/song?Loop_%26_Loop'>Loop & Loop</a></li>
        </ol>
    </>
)

const Tracklist = () => (
    <Section header='Tracklist' body={<Body />} />
)

export default Tracklist