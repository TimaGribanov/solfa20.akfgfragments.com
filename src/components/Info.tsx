import Section from './Section'
import { notoSansJP } from '@/ui/fonts'

const Body = () => (
    <div className='text-center'>
        <img
            id='info-img' 
            className='rounded float-md-none float-lg-start me-3'
            src='https://akfgfragments.com/wp-content/uploads/2022/05/2.-Sol-Fa.jpg'
            alt='Sol-Fa cover art'
        />
        <p className='text-start'><em><a href='https://akfgfragments.com/release?Sol-Fa'>Sol-Fa</a> <span style={{ fontStyle: 'italic' }} className={notoSansJP.className}>(ソルファ)</span></em> is the 2<sup>nd</sup> studio album by the Japanese band Asian Kung-Fu Generation.</p>
        <p className='text-start'>Originally, it was released on 20 October 2004. And this year, it turns 20.</p>
        <p className='text-start'>Being the most commercially successful album of the band so far, it bears great significance to all fans. Hence, we at <a href='https://akfgfragments.com'>akfgfragments</a> created this page to commemorate the event.</p>
    </div>
)

const Info = () => (
    <Section header='Information' body={<Body />} />
)

export default Info