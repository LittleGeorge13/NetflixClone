import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./listItem.scss"
import { useState } from "react"

const ListItem = ({
    index,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://placeholdervideo.dev/1920x1080";

    return (
        <div
          className="listItem"
          style={{ left: isHovered && ((index * 225) - 50 + (index * 2.5)) }}
          onMouseEnter={ () => setIsHovered(true) }
          onMouseLeave={ () => setIsHovered(false) }
        >
            <img src="https://preview.redd.it/poster-for-the-theatrical-re-release-of-hayao-miyazakis-v0-7rxxo4zi83zd1.jpeg?auto=webp&s=dd570c206057595f560320c4012eb26a509a4c50" alt="" />
            { isHovered && (
                <>
                    <video src={ trailer } autoPlay={ true } loop/>
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon" />
                            <Add className="icon" />
                            <ThumbUpAltOutlined className="icon" />
                            <ThumbDownAltOutlined className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 14 mins</span>
                            <span className="limit">+12</span>
                            <span>2000</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam corrupti, voluptatibus id quas dolore expedita obcaecati architecto explicabo eos officia
                        </div>
                        <div className="genre">Action</div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ListItem
