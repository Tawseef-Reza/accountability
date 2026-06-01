import { Link } from 'react-router-dom'

function HomeSelect() {
  return (
    <div className="select-page">
      <h1>Tawseef's Accountability Tracker</h1>

      <div className="choices">
        <Link to="/arabic" className="card blue">
          <h2>Arabic Progress</h2>
          <p>Track your Arabic learning journey</p>
        </Link>

        <Link to="/islamic" className="card green">
          <h2>Islamic Studies</h2>
          <p>Track your Islamic studies progress</p>
        </Link>

        <Link to="/career" className="card gray">
          <h2>Career Studies</h2>
          <p>Track your career progress</p>
        </Link>
      </div>
    </div>
  )
}

export default HomeSelect