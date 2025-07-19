import './Header.css'
import { useState } from 'react'

function Header({ onSearch }) {
  const [numProfile, setNumProfile] = useState('')

  const handleFetch = () => {
    const count = parseInt(numProfile)
    onSearch(count)
  }
  return (
    <div className="header">
      <h1>GitHub Profile Viewer</h1>
      <div className="searchBar">
        <div className="search">
          <input
            type="text"
            placeholder="Enter Number of Users"
            onChange={(e) => setNumProfile(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleFetch}>Search Profile</button>
        </div>
      </div>
    </div>
  )
}
export default Header
