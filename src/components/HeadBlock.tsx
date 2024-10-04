import { Container, Row } from 'react-bootstrap'

const HeadBlock = () => (
    <div id='intro'>
        <picture>
            <source media='(max-width: 992px)' srcSet='/images/intro-mobile.jpg' />
            <img src='/images/intro-bg.jpg' alt='Sol-Fa intro image' style={{ marginRight: '50vw', objectFit: 'cover' }}/>
        </picture>
        
        {/* <picture>
            <source media='(max-width: 992px)' srcSet='/images/intro-mobile.jpg' />
            <Image
                src={'/images/intro-bg.jpg'}
                alt='Sol-Fa intro image'
                style={{ marginRight: '50vw', objectFit: 'cover' }}
                fill
            />
        </picture> */}

        <Container id='intro-text' className='h-100'>
            <Row className='h-100 justify-content-center align-items-center'>
                <Row>
                    <Row className='text-center'>
                        <h1 className='mb-3 d-none d-md-block'>Asian Kung-Fu Generation</h1>
                        <h1 className='mb-3 d-sm-block d-md-none'>Asian<br />Kung-Fu<br />Generation</h1>
                    </Row>
                    <Row className='text-center'>
                        <h3 className='mb-4'>Sol-Fa 20th Anniversary</h3>
                    </Row>
                </Row>
            </Row>
        </Container>
    </div>
)

export default HeadBlock