import { Container, Row, Stack } from 'react-bootstrap'
import { Globe, Instagram, Twitter, Facebook, Discord } from 'react-bootstrap-icons'

const Footer = () => (
    <footer>
        <Container>
            <Row>
                <Stack direction='horizontal' gap={2} className='justify-content-center'>
                    <a href='https://akfgfragments.com'><Globe size={30} className='me-2' /></a>
                    <a href='https://www.instagram.com/akfgfragments_com/'><Instagram size={30} className='me-2' /></a>
                    <a href='https://twitter.com/AkfgfragmentsEn'><Twitter size={30} className='me-2' /></a>
                    <a href='https://facebook.com/akfgfragmentscom'><Facebook size={30} className='me-2' /></a>
                    <a href='https://discord.gg/mQJ4TcjM3h'><Discord size={30} /></a>
                </Stack>
            </Row>
            <Row className='mt-3'>
                <p className='text-center mb-0'><a href='https://akfgfragments.com'>akfgfragments</a> © 2024</p>
            </Row>
        </Container>
    </footer>
)

export default Footer