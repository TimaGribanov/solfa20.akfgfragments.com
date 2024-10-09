/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import countries from 'countries-list/minimal/countries.en.min.json'
import { useEffect, useState } from 'react'

import Section from './Section'
import MessageForm from './MessageForm'

import { TMessage } from '@/models/Message'

import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { ArrowLeftCircleFill, ArrowRightCircleFill } from 'react-bootstrap-icons'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const MessagesCarousel = ({ messages }: { messages: TMessage[] }) => {
    const PrevIcon = () =>
        <ArrowLeftCircleFill
            className='carousel-btn'
            size={30}
        />

    const NextIcon = () =>
        <ArrowRightCircleFill
            className='carousel-btn'
            size={30}
        />

    if (messages.length === 0)
        return <Row className="justify-content-center">Getting the list of messages</Row>

    return (
        <Row className="justify-content-center mt-5 mb-5">
            <Carousel
                interval={null}
                indicators={false}
                touch={true}
                prevIcon={<PrevIcon />}
                nextIcon={<NextIcon />}
                className='w-100'
                onSlide={() => {ScrollTrigger.refresh()}}>
                {messages.map((message: TMessage) => (
                    <Carousel.Item key={message.id.toString()}>
                        <div className='text-center w-75 mx-auto'>
                            <h5>{message.name} <em>({countries[message.country as keyof typeof countries]})</em></h5>
                            {message.message.split('\r\n\r\n').map((line, index) => <p key={index}>{line}</p>)}
                            <em>{message.translation.split('\r\n\r\n').map((line, index) => <p key={index}>{line}</p>)}</em>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Row>
    )
}

const MessagesBlock = () => {
    const Body = () => {
        const [messages, setMessages] = useState<TMessage[]>([])

        useEffect(() => {
            async function fetchMessages() {
                const res = await fetch('/api/messages')
                const data = await res.json()
                setMessages(data)
            }
            fetchMessages()
        }, [])

        return (
            <Container>
                <Row className="text-center">
                    <p>Send a message for fellow fans to see! Share whatever you want about the band&apos;s album!</p>
                    <p><em>All messages will be manually monitored and published after revision.</em></p>
                    <p>Leave your messages in any language you want. However, if you write in a language other than English, please add a translation (but it&apos;s optional).</p>
                </Row>

                <MessagesCarousel messages={messages} />

                <MessageForm />
            </Container>
        )
    }

    return (
        <Section
            header='Messages from fans'
            body={<Body />}
        />
    )
}

export default MessagesBlock