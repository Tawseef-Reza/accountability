import { useParams, Link } from 'react-router-dom'
import posts from '../data/posts'

function BlogPostPage() {
  const { id } = useParams()

  const post = posts.find(
    (p) => p.id === Number(id)
  )

  if (!post) {
    return <h1>Post not found</h1>
  }

  return (
    <div className="post-page">
      <Link to="/" className="back-button">
        ← Back
      </Link>

      <div className="post-content">
        <p className="blog-date">{post.date}</p>

        <h1>{post.title}</h1>

        <p>{post.content}</p>
      </div>
    </div>
  )
}

export default BlogPostPage