import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./listItem.scss"

const ListItem = () => {
  return (
    <div className="listItem">
        <img src="https://preview.redd.it/poster-for-the-theatrical-re-release-of-hayao-miyazakis-v0-7rxxo4zi83zd1.jpeg?auto=webp&s=dd570c206057595f560320c4012eb26a509a4c50" alt="" />
        <div className="itemInfo">
            <div className="icons">
                <PlayArrow />
                <Add />
                <ThumbUpAltOutlined />
                <ThumbDownAltOutlined />
            </div>
        </div>
    </div>
  )
}

export default ListItem
