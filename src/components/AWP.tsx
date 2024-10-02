import Section from './Section'

const Body = () => (
    <div>
        <p>In 2021, when Asian Kung-Fu Generation turned 25, we made <a href='https://youtu.be/ccM2jZI3OmI'>a <em>Solanin</em> cover</a> to celebrate the occasion.</p>
        <p>Later, we continued and turned it into <a href='https://ajikanproject.akfgfragments.com/'>the <strong>Ajikan Worldwide Project</strong></a>. The idea is to gather fans (<em>ajikaners</em>) from all over the world and record a cover together. The instrumentals are recorded by the cover band <a href='https://www.instagram.com/redo_akg/'><strong>Re-Do AKG</strong></a>. Each participant records a part of the song a cappella, later the parts are mixed and the whole cover song is born.</p>
        <p>We&apos;ve already made four covers in total for different occasions: <a href='https://youtu.be/ccM2jZI3OmI'><em>Solanin</em></a> (the 25th anniversary of the band&apos;s formation), <a href='https://youtu.be/iybtu4-18_0'><em>Kaiga Kyoushitsu</em></a> (the 15th anniversary of the <a href='https://akfgfragments.com/release?Feedback_File'>Feedback File</a> compilation), <a href='https://youtu.be/epsY6f1ets0'><em>Konayuki</em></a> (the 20th anniversary of <a href='https://akfgfragments.com/release?I%27m_Standing_Here'>I&apos;m Standing Here</a>), and <a href='https://youtu.be/tEllozG43H8'><em>Kimi to Iu Hana</em></a> (the 20th anniversary of <a href='https://akfgfragments.com/release?Kimi_Tsunagi_Five_M'>Kimi Tsunagi Five M</a>).</p>
        <p>This time, we are covering <a href='https://akfgfragments.com/song?Loop_%26_Loop'><em>Loop&Loop</em></a> – the song selected in <a href='https://ajikanproject.akfgfragments.com/sol-fa.html'>an open vote</a> by the fans. The cover is planned to be released on the anniversary date – 20 October 2024.</p>
    </div>
)

const AWP = () =>
    <Section header='Ajikan Worldwide Project' body={<Body />} />

export default AWP