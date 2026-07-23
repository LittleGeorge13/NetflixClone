import { ArrowBackOutlined } from '@material-ui/icons'
import "./watch.scss"

const Watch = () => {
    return (
        <div className='watch'>
            <div className="back">
                <ArrowBackOutlined />
            </div>
            <video
              autoPlay
              className='video'
              controls
            //   progress
              src="https://placeholdervideo.dev/1920x1080"
            />
        </div>
    )
}

export default Watch
