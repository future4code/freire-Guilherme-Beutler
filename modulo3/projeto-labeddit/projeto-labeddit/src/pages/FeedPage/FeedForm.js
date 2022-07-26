import React from "react";
import useForm from "../../hooks/useForm";
import { createPost } from "../../services/posts";
import {InputContainer, Button, Form} from './styled'

export default function FeedForm() {
    const [form, onChange, clear] = useForm({ title: '', body: '' })

    const onSubmitForm = (ev) => {
        ev.preventDefault()
        createPost(form, clear)       
    }

    return (
        <Form onSubmit={onSubmitForm}>
            <InputContainer>
            <input
                name={'title'}
                value={form.title}
                onChange={onChange}
                label={'Título'}
                required
                placeholder="Título:"
            />
            <input
                name={'body'}
                value={form.body}
                onChange={onChange}
                label={'Escreva seu post...'}
                required
                placeholder="Escreva seu post..."
            />
            </InputContainer>
            <Button
                type={'submit'}
            >
                Postar
            </Button>  
        </Form>
    )
}