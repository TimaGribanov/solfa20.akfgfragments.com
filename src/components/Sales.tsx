import { Container, Row, Col } from 'react-bootstrap'
import Section from './Section'

const LeftCol = (
    { week, copies, place }:
        { week: number, copies: string, place: number }
) => {
    const weekSup = week === 1 ? 'st' : week === 2 ? 'nd' : week === 3 ? 'rd' : 'th'
    const placeSup = place === 1 ? 'st' : place === 2 ? 'nd' : 'th'

    return (
        <Col className='text-end'>
            {week}<sup>{weekSup}</sup> week: {copies} copies ({place}<sup>{placeSup}</sup> place)
        </Col>
    )
}

const RightCol = ({ url }: { url: string }) =>
    <Col xs={4}>
        <a href={url} target='_blank' rel='nofollow'>
            <em>source</em>
        </a>
    </Col>

type RowProps = {
    week: number,
    copies: string,
    place: number,
    url: string
}

const PrintedRow = (props: RowProps) =>
    <Row>
        <LeftCol week={props.week} copies={props.copies} place={props.place} />
        <RightCol url={props.url} />
    </Row>

const Body = () => {
    const salesData = [
        {
            week: 1,
            copies: '300,468',
            place: 1,
            url: 'https://web.archive.org/web/20181106015024/http://www.geocities.jp/object_ori/041101a.html'
        },
        {
            week: 2,
            copies: '99,407',
            place: 1,
            url: 'https://web.archive.org/web/20181106015023/http://www.geocities.jp/object_ori/041108a.html'
        },
        {
            week: 3,
            copies: '50,709',
            place: 6,
            url: 'https://web.archive.org/web/20181106015023/http://www.geocities.jp/object_ori/041115a.html'
        },
        {
            week: 4,
            copies: '24,217',
            place: 11,
            url: 'https://web.archive.org/web/20181106015023/http://www.geocities.jp/object_ori/041122a.html'
        },
        {
            week: 5,
            copies: '14,910',
            place: 20,
            url: 'https://web.archive.org/web/20181106015022/http://www.geocities.jp/object_ori/041129a.html'
        }
    ]

    return (
        <Container className='w-75'>
            {salesData.map(e => <PrintedRow key={e.week} week={e.week} copies={e.copies} place={e.place} url={e.url} />)}
            <Row>
                <Col className='text-end'>Total by the end of 2004: 489,711 copies</Col>
                <RightCol url='https://web.archive.org/web/20181106015021/http://www.geocities.jp/object_ori/2004a.html' />
            </Row>
        </Container>
    )
}

const Sales = () => <Section header='Sales' body={<Body />} />

export default Sales