import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Section from './Section'

const Column = ({ url, svg, alt }: 
    { url: string, svg: string, alt: string }) =>
    <Col xl={3} lg={6} xs={12} className='listen-badge text-center'>
        <a href={url} target='_blank' rel='nofollow'>
            <Image
                src={svg}
                alt={alt}
                width={200}
                height={100}
            />
        </a>
    </Col>

const Body = () =>
    <Container>
        <Row>
            <Column url='https://open.spotify.com/album/56xQzwz8VKC3LOtvrI4g04' svg='/badges/spotify.svg' alt='Spotify badge' />
            <Column url='https://music.apple.com/jp/album/%E3%82%BD%E3%83%AB%E3%83%95%E3%82%A1/1536364094' svg='/badges/applemusic.svg' alt='Apple Music badge' />
            <Column url='https://music.youtube.com/playlist?list=OLAK5uy_lTOrv_qF8NgphJY4s__UcYYHYsdKp0VoA' svg='/badges/yt.svg' alt='YouTube Music badge' />
            <Column url='https://www.deezer.com/en/album/177830412' svg='/badges/deezer.svg' alt='Deezer badge' />
        </Row>
    </Container>

const Listen = () =>
    <Section header='Listen' body={<Body />} />

export default Listen