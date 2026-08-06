import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss"
import { useEffect, useState } from "react";
import { getBaseUrl } from "../../../api-config";
import axios from "axios";

const baseURL = getBaseUrl();

const Featured = ({
  type,
  setGenre,
}) => {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        const res = await axios.get(baseURL + `/movies/random?type=${type}`, {
          headers: {
            token: 'Bearer ' + user.accessToken
          }
        });
        setContent(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    }
    getRandomContent();
  }, [type]);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === 'movies' ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" onChange={e => setGenre(e.target.value)}>
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        alt=""
        src={content.img}
        width="100%"
      />
      <div className="info">
        <img
          src={content.imgTitle}
          alt=""
        />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured;
