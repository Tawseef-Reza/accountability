import { useParams, useLocation, Link } from 'react-router-dom'

import arabicPosts from '../data/arabicPosts'
import islamicPosts from '../data/islamicPosts'
import careerPosts from '../data/careerPosts'

function BlogPostPage() {
  const { id } = useParams()
  const location = useLocation()

  // Detect which section user is in
  const isArabic = location.pathname.startsWith('/arabic')
  const isIslamic = location.pathname.startsWith('/islamic')
  const isCareer = location.pathname.startsWith('/career')
  
  // Pick correct dataset
  const posts = isArabic ? arabicPosts : isIslamic ? islamicPosts : careerPosts

  // Find post
  const post = posts.find((p) => p.id === Number(id))

  // if (!post) { this code will never happen when interacting with website
  //   return (
  //     <div className="post-page">
  //       <h1>Post not found</h1>
  //       <Link to={isArabic ? '/arabic' : '/islamic'}>
  //         Go back
  //       </Link>
  //     </div>
  //   )
  // }

  return (
    <div className="post-page">
      <Link
        to={isArabic ? '/arabic' : isIslamic ? '/islamic' : '/career'}
        className="back-button"
      >
        Back
      </Link>

      <div className="post-content">
        <h1>{post.title}</h1>

        <p className="blog-date">{post.date}</p>

        <p>{post.content}</p>
      </div>
    </div>
  )
}

export default BlogPostPage