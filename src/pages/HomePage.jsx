import BlogCard from '../components/BlogCard'
import posts from '../data/posts'
//import headerImage from '../assets/header.webp'

function HomePage() {
  return (
    <div className="homepage">
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
            {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
            ))}
            </div>
        </main>
    </div>
  )
}

export default HomePage