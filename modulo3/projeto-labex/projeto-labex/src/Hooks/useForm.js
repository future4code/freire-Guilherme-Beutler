import { useState } from 'react'

export default function useForm(initialValues) {
    const [form, setForm] = useState(initialValues)
    const onChange = (name, value) => {
        const newForm = { ...form, [name]: value }
        setForm(newForm)
    }
    return { form, onChange }
}