import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../components/hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comment, setComment] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    });
    const [fetchComments, isComLoading, comError] = useFetching(async () => {
        const response = await PostService.getCommentsById(params.id);
        setComment(response.data);
    });
    useEffect(() => {
        fetchPostById();
        fetchComments();
    }, []);
    return (
        <div>
            <h1>Вы открыли пост №{params.id}</h1>
            {isLoading
                ? <Loader />
                : <div>{post.id}. {post.name} <br /> {post.body}</div>
            }
            <h1>
                Комментарии
            </h1>
            {isComLoading
                ? <Loader />
                : <div>
                    {comment.map(com => 
                        <div key={com.id} style={{marginTop:15}}>
                            <h5>{com.email}</h5>
                            <div>{com.body}</div>
                        </div>
                        )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;