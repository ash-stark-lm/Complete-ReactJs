import { useState, useEffect } from 'react'
import { fetchProfile } from './utils/githubApi'
import Header from './components/Header/Header.jsx'
import Body from './components/Body/Body.jsx'
function App() {
  const [profiles, setProfiles] = useState([])
  const [count, setCount] = useState(10)
  const [since, setSince] = useState(0) // for pagination
  const [history, setHistory] = useState([]) // for Prev

  // Fetch profiles
  const loadProfiles = async (count, since) => {
    try {
      const data = await fetchProfile(count, since)
      setProfiles(data)

      if (data.length > 0) {
        setSince(data[data.length - 1].id) // last ID for next page
      }
    } catch (err) {
      console.error('Failed to fetch profiles', err)
    }
  }

  useEffect(() => {
    const randSince = Math.floor(1 + Math.random() * 1000)
    loadProfiles(count, randSince)
    setHistory([]) // clear history for clean paging
  }, [])

  // Handle user search
  const handleSearch = (newCount) => {
    setCount(newCount)
    setHistory([]) // clear history when fresh search
    const randSince = Math.floor(1 + Math.random() * 1000)
    loadProfiles(newCount, randSince)
  }

  // Next page
  const handleNext = () => {
    setHistory((prev) => [...prev, profiles[0].id]) // save current page start
    loadProfiles(count, since)
  }

  // Prev page
  const handlePrev = () => {
    if (history.length === 0) return
    const last = [...history]
    const prevSince = last.pop()
    setHistory(last)
    loadProfiles(count, prevSince)
  }

  return (
    <>
      <Header onSearch={handleSearch} />
      <Body profiles={profiles} onNext={handleNext} onPrev={handlePrev} />
    </>
  )
}

export default App
