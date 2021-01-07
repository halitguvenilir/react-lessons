import React, { useState, useEffect } from 'react'
import axios from 'axios'
import style from '../styles/Card.module.css'

export default function HooksLessonThree() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts'
    }).then((res) => {
      setPosts(res.data)
      setLoading(false)
    })
  }, [setPosts])

  return (
    <div>
      <h1>Placeholder Api</h1>
      {loading && <p>Loading</p>}
      {!loading && (
        <div className={style.Card}>
          {posts.map((post) => (
            <div key={post.id} className={style.Card__item}>
              <div>
                <img src="https://picsum.photos/300/300" />
              </div>
              <div>
                <h6>{post.title}</h6>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
