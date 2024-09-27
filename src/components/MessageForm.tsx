'use client'

import countries from 'countries-list/minimal/countries.en.min.json'

import { createRef, useState } from 'react'

import { sendMessage } from '@/app/actions'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

import { FormEvent } from 'react'

const ref = createRef<HTMLFormElement>()

const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)

    const responseStatus = await sendMessage(formData)

    if (responseStatus === 200) {
        alert('Your message was sent. Thanks!')
        if (ref.current !== null)
            ref.current.reset()
    } else {
        alert('Something went wrong.\nPlease contact us: akfgfragments.com@gmail.com')
    }
}

const FormBlock = () => (
    <Form ref={ref} onSubmit={handleSubmit} id='msg-form' className='w-100 mx-auto text-center mt-3'>
        <Form.Group>
            <Form.Label>Name/nickname*</Form.Label>
            <Form.Control
                type='text'
                name='name'
                placeholder='How do we call you?'
                className='w-50 mx-auto'
            />
        </Form.Group>

        <Form.Group>
            <Form.Label>Country*</Form.Label>
            <Form.Select name='country' className='w-50 mx-auto mt-1'>
                <option value={''}>Select your country</option>
                {Object.entries(countries)
                    .sort((a, b) => a[1].localeCompare(b[1]))
                    .map(country =>
                        <option key={country[0]} value={country[0]}>{country[1]}</option>)}
            </Form.Select>
        </Form.Group>

        <Form.Group>
            <Form.Label>Your message*</Form.Label>
            <Form.Control
                name='message'
                as='textarea'
                rows={5}
                placeholder='Leave your message here'
                className='w-75 mx-auto mt-1'
            />
        </Form.Group>

        <Form.Group>
            <Form.Label>Translation <em>(Optional)</em></Form.Label>
            <Form.Control
                name='translation'
                as='textarea'
                rows={3}
                placeholder='Add a translation to your message if it was not written in English'
                className='w-75 mx-auto mt-1'
            />
        </Form.Group>

        <Button type='submit' className='msg-btn mt-3'>Send</Button>
    </Form>
)

const MessageForm = () => {
    const [isFormVisible, setIsFormVisible] = useState(false)

    const handleFormView = () => {
        setIsFormVisible(!isFormVisible)
    }

    return (
        <Row className="justify-content-center">
            <Button className='msg-btn w-25' onClick={handleFormView}>
                Send your message
            </Button>
            {isFormVisible && FormBlock()}
        </Row>
    )
}

export default MessageForm