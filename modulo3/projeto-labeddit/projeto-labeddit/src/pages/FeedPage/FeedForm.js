import React, { useState } from 'react';
import useForm from '../../hooks/useForm';
import { createPost } from '../../services/posts'
import { InputContainer, Button, Form } from './styled'
import { CircularProgress } from '@mui/material';

export default function FeedForm() {
    const [form, onChange, clear] = useForm({ title: '', body: '' })
    const [loading, setLoading] = useState(false)

    const onSubmitForm = (ev) => {
        ev.preventDefault()
        createPost(form, clear, setLoading)
    }

    return (
        <Form>
            <form onSubmit={onSubmitForm}>
                <InputContainer>
                    <input
                        name={'title'}
                        value={form.title}
                        onChange={onChange}
                        placeholder='Título:'
                        required
                    />
                    <input
                        name={'body'}
                        value={form.body}
                        onChange={onChange}
                        placeholder='Escreva seu post...'
                        required
                    />
                </InputContainer>
                <Button
                    type={'submit'}
                >
                    {loading ? <CircularProgress color={'inherit'} size={36} /> : <> Postar</>}
                </Button>
            </form>
        </Form>
    )
}