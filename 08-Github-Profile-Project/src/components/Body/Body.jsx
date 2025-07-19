import Card from '../Card/Card.jsx'
import './Body.css'
function Body({ profiles, onNext, onPrev }) {
  return (
    <div className="body">
      {profiles.map((user) => (
        <Card
          key={user.id}
          user={{
            avatar: user.avatar_url,
            name: user.login,
            profileUrl: user.html_url,
          }}
        />
      ))}

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={onPrev} style={{ marginRight: '12px' }}>
          Prev
        </button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  )
}
export default Body
