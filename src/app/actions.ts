'use server'
import { z } from 'zod'

const formSchema = z.object({
    name: z.string({ required_error: 'Name is required' }).trim(),
    country: z.string({ required_error: 'Country is required ' }).trim(),
    message: z.string({ required_error: 'Text is required' }),
    translation: z.string({}).trim()
})

export const sendMessage = async (formData: FormData) => {
    const formDataValues = {
        name: formData.get('name'),
        country: formData.get('country'),
        message: formData.get('message'),
        translation: formData.get('translation')
    }

    const parsedFormValue = formSchema.safeParse(formDataValues)

    const response = await fetch(`${process.env.URL}/api/messages`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsedFormValue.data)
    })

    return response.status
}