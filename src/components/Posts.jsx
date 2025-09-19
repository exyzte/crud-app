import React from 'react'
import { Link } from 'react-router-dom'
import'../CSS/main.css'

function Posts() {
  return (
    <div>
        <Link to="postlist">nested postlist</Link>
    </div>
  )
}

export default Posts
