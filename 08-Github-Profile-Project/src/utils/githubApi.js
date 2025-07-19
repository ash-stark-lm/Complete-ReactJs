export async function fetchProfile(count = 10, since = 0) {
  try {
    const response = await fetch(
      `https://api.github.com/users?per_page=${count}&since=${since}`
    )

    if (!response.ok) {
      throw new Error(
        `GitHub API error: ${response.status} ${response.statusText}`
      )
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching GitHub profiles:', error)
    throw error
  }
}

export async function fetchProfileByUsername(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`)
    if (!response.ok) throw new Error(`User not found`)
    return await response.json()
  } catch (err) {
    console.error('Error fetching user:', err)
    throw err
  }
}
