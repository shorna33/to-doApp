import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className="alert alert-dark text-center py-2">
      <h2 className="mb-2">My Todo List</h2>
      <h5 className="mb-2">Using React, Bootstrap & Json Place Holder Fake Api</h5>
      <div className="d-flex justify-content-center">
        <Link to='/'>
          <button className="btn btn-primary me-3">Home</button>
        </Link>
        <Link to='/add'>
          <button className="btn btn-success">Add New Todo</button>
        </Link>
      </div>
    </header>
  )
}

export default Header