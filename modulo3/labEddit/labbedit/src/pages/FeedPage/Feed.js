import React, { useState } from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import BASE_URL from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'
import moment from 'moment'
import { goToDetail, goToPosts } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { GoArrowUp, GoArrowDown } from "react-icons/go";
import { TiPlusOutline} from "react-icons/ti";
import Loading from '../../constants/loading'

import FeedForm from './FeedForm'

import * as C from './styled'
import logoUser from '../../constants/userLogo'


export default function Feed() {
  useProtectedPage()
  const [posts, getPosts] = useRequestData([], `${BASE_URL}/posts`)
  const [show, setShow] = useState(false)
  const history = useHistory()




  const vote = (id, userVote, vote) => {
    const headers = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }

    let body = {}

    if (vote) {
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
        .post(`${BASE_URL}/posts/${id}/votes`, body, headers)
        .then((res) => {
          getPosts()
        })
        .catch((err) => {
          // history.push('/404')
          console.log(err)
        })
    } else if (userVote === -body.direction) {
      axios.put(`${BASE_URL}/posts/${id}/votes`, body, headers)
        .then((res) => {
          getPosts()
        })
        .catch((err) => {
          // history.push('/404')
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
      .delete(`${BASE_URL}/posts/${id}/votes`, headers)
      .then((res) => {
        getPosts()
      })
      .catch((err) => {
        // history.push('/404')
      })
  }


  const onClickCard = (id) => {
    goToDetail(history, id)

  }
  

  const postsCards = posts.map((post) => {
   
    return (
      
      <C.PostListContainer
        key={post.id}>
        
       <h3  onClick={() => onClickCard(post.id)}>
         {logoUser} {post.username}
          </h3>
        <C.Posts>
          <li  onClick={() => onClickCard(post.id)}><b>{post.title}</b></li>
          <p  onClick={() => onClickCard(post.id)}>{post.body}</p>
        </C.Posts>


        <C.VoteContent>
          {post.userVote === 1 ? <GoArrowUp onClick={() => unvote(post.id)} size='25' /> : <BiUpvote onClick={() => vote(post.id, post.userVote, true)}  size='25'/>}
          <p>{post.voteSum === null ? 0 : post.voteSum}</p>
          {post.userVote === - 1 ? <GoArrowDown onClick={() => unvote(post.id)}  size='25'/> : <BiDownvote onClick={() => vote(post.id, post.userVote, false)} size='25'/>}
        </C.VoteContent>
        <C.Comments>
          <p  onClick={() => onClickCard(post.id)}> {post.commentCount ? post.commentCount :  0} Comentários </p>
        </C.Comments>
        <C.Date>
          <p>{moment(post.createadAt).format('DD/MM/YYYY')}</p>
        </C.Date>
      </C.PostListContainer>

    )
  })
 
const renderFalse = () =>{
 setShow(false)
}


  return (
    <div>
      {show ? <FeedForm getPosts={getPosts} renderFalse={renderFalse} /> : <C.ButtonPost onClick={()=> setShow(true)}> <TiPlusOutline onClick={()=> setShow(true)} size={40}/>Novo Post</C.ButtonPost>}
      <div>
        <C.Text>
        <p>Posts populares</p>
        </C.Text>
        {postsCards}
      </div>
      <C.Load>
      <Loading/>
      </C.Load>
    </div>

  );
}


