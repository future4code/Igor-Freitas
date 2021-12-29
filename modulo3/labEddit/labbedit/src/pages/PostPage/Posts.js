import React from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import useForm from '../../hooks/useForm'
import { useState } from 'react'
import BASE_URL from '../../constants/urls';
import axios from 'axios'
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { GoArrowUp, GoArrowDown } from "react-icons/go";
import PostForm from './PostForm'
import Loading from '../../constants/loading'
import logoUser from '../../constants/userLogo'

import * as C from './styled'

export default function Posts() {
  useProtectedPage()
  const history = useHistory()
  const params = useParams()
  const { form, onChange, clear } = useForm({ body: '' })
  const [control, setControl] = useState(1)
  const [posts, getPost] = useRequestData([], `${BASE_URL}/posts`)

  const [comments, getComments] = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`, control)



  const vote = (id, userVote, vote) => {
    const headers = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }

    let body = {}

    if (vote === true) {
      body = {
        direction: 1
      }
    } else {
      body = {
        direction: - 1
      }
    }

    if (userVote === null) {
      axios
        .post(`${BASE_URL}/comments/${id}/votes`, body, headers)
        .then((res) => {
          getComments()
        })
        .catch((err) => {
          history.push('/254')
          console.log(err)
        })
    } else if (userVote === -body.direction) {
      axios.put(`${BASE_URL}/comments/${id}/votes`, body, headers)
        .then((res) => {
          getComments()
        })
        .catch((err) => {
          history.push('/254')
          console.log(err)
        })
    }
  }

  const unvote = (id) => {
    const headers = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }
    axios
      .delete(`${BASE_URL}/comments/${id}/votes`, headers)
      .then((res) => {
        getComments()
      })
      .catch((err) => {
        history.push('/254')
      })
  }






  const pickComments = comments && comments.map((comment) => {
    return (
      <C.DivContent>
        <p>{logoUser} 
        <b> {comment.username}</b></p>
        <C.Vote>
          <div>
          {comment.userVote === 1 ? <GoArrowUp onClick={() => unvote(comment.id)} size='25'/> : <BiUpvote onClick={() => vote(comment.id, comment.userVote, true)} size='25' />}
          <p>{comment.voteSum === null ? 0 : comment.voteSum}</p>
          {comment.userVote === - 1 ? <GoArrowDown onClick={() => unvote(comment.id)} size='25'/> : <BiDownvote onClick={() => vote(comment.id, comment.userVote, false)} size='25'/>}
          </div>
          <C.Comments>{comment.body}</C.Comments>
        </C.Vote>

      </C.DivContent>
    )
  })
 




  const pickPost = posts && posts.map((post) => {
    if (params.id === post.id) {
      return (
        <C.Post>
          <h3> {logoUser}<b>  {post.username}</b></h3>
          <p>{post.title}</p>
          <p>{post.body}</p>


        </C.Post>
      )
    }
  })

  console.log('posts', posts)

  return (
    <div>
      <div>
        {posts.length ? pickPost : <C.Load><Loading/></C.Load>}
      </div>
      <div>
        <C.Title>
          <h3>Comentários</h3>
        </C.Title>
        {pickComments}
      </div>
    <PostForm 
    getComments={getComments}
    paramsId={params.id}
    />
    </div>
  );
}

