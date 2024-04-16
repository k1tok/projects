import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({create}) => {
    const [post, setPost] = useState({ name: '', body: '' })

    const addNewPost = (event) => {
        event.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ name: '', body: '' });
    };

    return (
        <form>
            {/* Управляемые компонент */}
            <MyInput
                value={post.name}
                onChange={e => setPost({ ...post, name: e.target.value })}
                type='text'
                placeholder='Описание поста'
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type='text'
                placeholder='Описание поста'
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton  >
        </form>
    );
};

export default PostForm;