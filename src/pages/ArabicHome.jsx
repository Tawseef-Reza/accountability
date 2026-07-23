import BlogCard from '../components/BlogCard'
import arabicPosts from '../data/arabicPosts'
import { Link } from 'react-router-dom'
//import headerImage from '../assets/header.webp'

function ArabicHome() {
  return (
    <div className="homepage">
        <Link to="/" className="back-button">
        Back to Selection
      </Link>
        <header
            className="hero"
        >
            <div className="overlay">
            <h1>My Arabic Progress</h1>

            <p>
                A personal journey documenting my growth
                in learning Arabic.
            </p>
            </div>
        </header>

        <main className="content">
            <div className="posts-grid">
            {arabicPosts.toReversed().map((post) => (
            <BlogCard
                key={post.id}
                post={post}
                basePath="/arabic"
            />
            ))}
            </div>
        </main>
    </div>
  )
}

export default ArabicHome