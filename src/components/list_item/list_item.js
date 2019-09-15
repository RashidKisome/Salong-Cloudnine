import React from 'react';
import { Link } from 'react-router-dom';
import chevron_right from './../index/img/chevron_right.png';
import rating from './../index/img/rating.png';




class ListItem extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <Link to="/salong">        <div className="grid-container">
                <div className="li">{this.props.data.time}</div>
                <div>
                    <p>{this.props.data.salon}</p>
                    <div>
                        <span> <img src={rating} alt="" /></span>
                        <span>{this.props.data.rating}</span>

                    </div>
                    <p>{this.props.data.adress}</p>
                </div>
                <div>
                    <p>{this.props.data.price}</p>
                    <p>{this.props.data.distance}</p>
                </div>
                <div className="pil-container">
                    <div className="pilen">
                        <img src={chevron_right} alt="" />
                    </div>

                </div>
                <div>

                </div>
            </div></Link>)
    }
}

export default ListItem;

