import BlogCard from '../components/BlogCard'
import careerPosts from '../data/careerPosts'
import { Link } from 'react-router-dom'

function CareerHome() {
  return (
    <div className="homepage gray-theme">
        <Link to="/" className="back-button">
        Back to Selection
      </Link>
        <header
            className="hero"
        >
            <div className="overlay">
            <h1>My Career Progress</h1>

            <p>
                A personal journey documenting my growth
                in my career.
            </p>
            </div>
        </header>
      <div className="content">
        <div className="posts-grid">
          {careerPosts.toReversed().map((post) => (
            <BlogCard
                key={post.id}
                post={post}
                basePath="/career"
            />
            ))}
        </div>
      </div>
    </div>
  )
}

export default CareerHome