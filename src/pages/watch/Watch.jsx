import { ArrowBackOutlined } from '@material-ui/icons'
import "./watch.scss"
import { Link, useLocation } from 'react-router-dom'

const Watch = () => {
    const location = useLocation();
    const movie = location.state?.movie;
    return (
        <div className='watch'>
            <Link to='/'>
                <div className="back">
                    <ArrowBackOutlined />
                </div>
            </Link>
            <video
              autoPlay
              className='video'
              controls
              src={ movie.video }
            />
        </div>
    )
}

export default Watch
