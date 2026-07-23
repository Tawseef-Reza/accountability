import BlogCard from '../components/BlogCard'
import islamicPosts from '../data/islamicPosts'
import { Link } from 'react-router-dom'

function IslamicHome() {
  return (
    <div className="homepage green-theme">
        <Link to="/" className="back-button">
        Back to Selection
      </Link>
        <header
            className="hero"
        >
            <div className="overlay">
            <h1>My Islamic Progress</h1>

            <p>
                A personal journey documenting my growth
                in learning Islam.
            </p>
            </div>
        </header>
      <div className="content">
        <div className="posts-grid">
          {islamicPosts.toReversed().map((post) => (
            <BlogCard
                key={post.id}
                post={post}
                basePath="/islamic"
            />
            ))}
        </div>
      </div>
    </div>
  )
}

export default IslamicHome