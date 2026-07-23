import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import "./list.scss"
import ListItem from "../listItem/ListItem"
import { useRef, useState } from "react"

const List = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);
    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === 'left' && slideNumber > 0) {
            setSlideNumber(prev => prev - 1);
            listRef.current.style.transform = `translateX(${ 230 + distance }px)`
        }
        if (direction === 'right' && slideNumber < 5) {
            setSlideNumber(prev => prev + 1);
            listRef.current.style.transform = `translateX(${ -230 + distance }px)`
        }
    }
    const array = Array.from({length: 10}, () => 0);
    
    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined
                  className="sliderArrow left"
                  onClick={ () => handleClick('left') }
                  style={{ display: !isMoved && "none" }}
                />
                <div className="container" ref={ listRef }>
                    { array.map((item, index) => (
                        <ListItem
                          key={item+index}
                          index={index} />
                    ))}
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={ () => handleClick('right') } />
            </div>
        </div>
    )
}

export default List
