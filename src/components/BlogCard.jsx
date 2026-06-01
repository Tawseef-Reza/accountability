import { Link } from 'react-router-dom'

function BlogCard({ post, basePath = '' }) {
  return (
    <Link
      to={`${basePath}/post/${post.id}`}
      className="card-link"
    >
      <div className="blog-card">
        <p className="blog-date">{post.date}</p>

        <h2 className="blog-title">
          {post.title}
        </h2>

        <p className="blog-description">
          {post.description}
        </p>

        <span className="read-more">
          Read more →
        </span>
      </div>
    </Link>
  )
}

export default BlogCard