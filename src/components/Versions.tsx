import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import Section from './Section'

const Version = (
  { name, country, date, code, description }:
    {
      name: string,
      country: string,
      date: string,
      code: string,
      description: string
    }
) => {
  const descriptionPrintable = description.split('\n')

  return (
  <Col sm={12} md={6} className='version mt-4'>
    <h5>{name}</h5>
    <p><strong>Country:</strong> {country}</p>
    <p><strong>Date:</strong> {date}</p>
    <p><strong>Catalogue number: </strong> {code}</p>
    {descriptionPrintable.map((line, index) => <p key={index}>{line}</p>)}
  </Col>
  )
}

const Body = () => {
  const versionData = [
    {
      id: 1,
      name: 'Regular edition',
      country: 'Japan',
      date: '20 Oct 2004',
      code: 'KSCL-737',
      description: 'The most common version. Contains only a CD with the album.'
    },
    {
      id: 2,
      name: 'LP edition',
      country: 'Japan',
      date: '20 Oct 2004',
      code: 'KSJL-6111',
      description: 'A rare vinyl release. Now, it costs a lot for a regular collectioner.'
    },
    {
      id: 3,
      name: 'Korean edition',
      country: 'South Korea',
      date: '21 Nov 2007',
      code: 'SB50154C',
      description: 'A Korean version of the album.'
    },
    {
      id: 4,
      name: 'Taiwanese edition',
      country: 'Taiwan',
      date: '7 Jan 2005',
      code: 'SMD-8811',
      description: 'A Taiwanese version of the album.'
    },
    {
      id: 5,
      name: 'US edition',
      country: 'USA',
      date: '18 Oct 2005',
      code: 'TOF 022',
      description: 'An American version of the album released by Tofu Records.\nContains a DVD with live version of two songs:\n1. Haruka Kanata (Live At Nippon Budokan 12/5/2004)\n2. Shindoukaku (Live At Shinokitazawa Shelter 11/2/2004)'
    },
    {
      id: 6,
      name: 'Indonesian edition',
      country: 'Indonesia',
      date: '2004',
      code: '520305.4',
      description: 'An Indonesian version of the album released by Ki/oon on a cassette tape.'
    }
  ]

  return (
    <Container>
      <Row>
        {versionData.map(e =>
          <Version
            key={e.id}
            name={e.name}
            country={e.country}
            date={e.date}
            code={e.code}
            description={e.description}
          />)}
      </Row>
      <Row className='mt-5'>
        <h4 className='text-center'>Sol-Fa (2016)</h4>
        <div className='text-center'>
          <Image
            src={'https://akfgfragments.com/wp-content/uploads/2022/05/2.-Sol-Fa_2016_Reissue.jpg'}
            width={1000}
            height={1000}
            alt='Sol-Fa (2016) cover art'
            className='rounded float-md-none float-lg-start me-3'
            id='versions-img'
          />
          <p className='text-start'>In 2016, to celebrate the band&apos;s 20th anniversary Sol-Fa was re-recorded. The resulting album was titled <a href='https://akfgfragments.com/release?Sol-Fa_(2016)'>Sol-Fa (2016)</a>. Apart from all songs having new arrangements and vocals, <a href='https://akfgfragments.com/song?Loop_%26_Loop_(2016)'><em>Loop&Loop</em></a> was moved from the 12th track to the 3rd track. According to Masafumi Gotoh, it was the original plan to put the song at that place, but in the end, they had to put it at the end of the album, hence, in 2016, fixing that.</p>
        </div>
      </Row>
    </Container>
  )
}

const Versions = () => (
  <Section header='The album&apos;s versions' body={<Body />} id='versions' />
)

export default Versions