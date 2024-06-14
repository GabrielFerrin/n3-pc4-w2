import { useState, useRef } from 'react';

function UserCard({ user: { id, name, username, email,
  website, phone, company: { name: companyName } } }) {
  const [showDtails, setShowDetails] = useState(false);
  return (
    <div className="user-card" onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}>
      <div className={`modal ${showDtails ? 'show' : ''}`}>
        <h3>{name}</h3>
        <p><strong>Id: </strong>{id}</p>
        <strong>Website: </strong><a href={website}>{website}</a>
        <p><strong>Phone: </strong>{phone}</p>
        <p><strong>Company: </strong>{companyName}</p>
      </div>
      <div className="circle" >
        <img src={`https://picsum.photos/200/300?random=${id}`}
          alt="" />
      </div>
      <div className="user-details-wrapper">
        <h2>{name}</h2>
        <p>{'@' + username}</p>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default UserCard