import React from 'react'
import'../CSS/main.css'
import PostList from './PostList'
import PostForm from './PostForm'
function Home() {
  return (
    <section className="center">
      <PostForm />
      <PostList />
    </section>

  )
}

export default Home
