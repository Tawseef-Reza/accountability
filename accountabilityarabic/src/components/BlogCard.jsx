import { Link } from 'react-router-dom'

function BlogCard({ post }) {
  return (
    <Link to={`/post/${post.id}`} className="card-link">
      <div className="blog-card">
        <p className="blog-date">{post.date}</p>

        <h2>{post.title}</h2>

        <p className="blog-description">
          {post.description}
        </p>

        <span className="read-more">
          Read More →
        </span>
      </div>
    </Link>
  )
}

export default BlogCard