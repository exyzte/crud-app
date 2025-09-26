import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { create } from '../features/posts/postSlice';
import { nanoid } from 'nanoid';

function PostForm() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        author: "",
    });


    const dispatch = useDispatch();

    const handleChange = e => {
        setFormData({
            ...formData,
        [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newPost = {
            id: nanoid(),
            name: formData.name,
            description: formData.description,
            author: formData.author,
        }
        dispatch(create(newPost));
    }
  return (
    <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} type="text" />
        <input name="description" onChange={handleChange} type="text" />
        <input name="author" onChange={handleChange} type="text" />

        <button type="submit">Post</button>
    </form>
  )

}
export default PostForm;
