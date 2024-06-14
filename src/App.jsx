import { useEffect, useState } from 'react'
import './App.css'
import UserCard from './UserCard';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const rawRes = await
        fetch('https://jsonplaceholder.typicode.com/users');
      const res = await rawRes.json();
      console.log(res);
      setData(res);
    }
    getData();
  }, [])
  return (
    <>
      {data && data.map(user =>
        <UserCard key={'user' + user.id} user={user} />)}
    </>
  )
}

export default App
