import "./home.scss"
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"
import { useEffect, useState } from "react"
import axios from "axios"
import { getBaseUrl } from "../../../api-config"

const baseURL = getBaseUrl();

const Home = ({
  type
}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        let url = '';
        if (type && !genre) {
          url = `/lists?type=${type}`;
        } else if (!type && genre) {
          url = `/lists?genre=${genre}`;
        } else if (type && genre) {
          url = `/lists?type=${type}&genre=${genre}`;
        } else {
          url = '/lists';
        }
        const user = JSON.parse(localStorage.getItem('user'));
        const res = await axios.get(baseURL + url, {
          headers: {
            token: 'Bearer ' + user.accessToken
          }
        });
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getRandomLists();
  }, [type, genre]);
  return (
    <div className='home'>
        <Navbar/>
        <Featured type={ type } setGenre={ setGenre } />
        { lists.map(list => {
          return (
            <List key={list._id} list={ list }/>
          );
        }) }
    </div>
  )
}

export default Home
