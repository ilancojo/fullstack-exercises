import { useEffect, useState } from "react"

function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        // להפוך ל-json
      })
      .then(data => {
        // לקחת רק 10
        // לעדכן state
      })
  }, [])

  return (
    <div>
      <h1>Top Posts</h1>

      <div>
        {
          posts.map(post => (
            <div key={post.id}>
              {/* title */}
              {/* body */}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Posts