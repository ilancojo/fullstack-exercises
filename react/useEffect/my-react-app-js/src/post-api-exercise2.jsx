import { useEffect, useState } from "react"

function Posts() {
    const [posts, setPosts] = useState([])
    const [isSmallScreen, setIsSmallScreen] = useState(false)


    useEffect(() => { 
        console.log("Effect started")
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {        // להפוך ל-json
            //const data = response.json; 
            return response.json()//אם לא עושים return, ה־.then הבא מקבל undefined.
        })
        .then(data => {
            console.log("DATA:",data.slice(0, 10))
            setPosts(data.slice(0, 10) )  ;// לקחת רק 10 // לעדכן state
            
        })
    }, [])

    useEffect(() => {
        function handleResize() {
            // בדוק window.innerWidth
            setIsSmallScreen((window.innerWidth < 768));//(window.innerWidth < 768)?true:false);
        }

        handleResize()

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
        }, [])


  return (
    <div>
      <h1>Top Posts</h1>

      <div className={(isSmallScreen)?"posts-container posts-container-mobile":"posts-container"}>
        {
          posts.map(post => (
            <div className="post-card" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Posts