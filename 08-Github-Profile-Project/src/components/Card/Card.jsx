import './Card.css'
function Card({ user }) {
  return (
    <div className="card">
      <img src={user.avatar} alt={`${user.name}'s avatar`} />
      <h2>{user.name.charAt(0).toUpperCase() + user.name.slice(1)}</h2>
      <a href={user.profileUrl} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  )
}
export default Card
