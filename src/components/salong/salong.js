import React from 'react';
import heart from './../index/img/heart.png';
import chevron_back from './../index/img/chevron_back.png';
import { Link } from 'react-router-dom';
import rating from './../index/img/rating.png';





class Salong extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return <div className="grid-container2">
            <div className="Header">
                <div className="back">
                    <Link to="/"> <img src={chevron_back} alt="" /></Link>
                </div>
                <div className="heart"> <img src={heart} alt="" /></div>
                <div className="salongbetyg"> <div className="salongnamn"> <h1> Salongnamn</h1></div> <img src={rating} alt="" /> <span>(32)</span> </div>
            </div>
            <div className="Info">
                <div className="InfoSchema"> </div>
                <div className="butikInfo"> <span className="InfoSchemaText"></span>
                    <div className="street"></div>
                    <div className="Openhours"></div>
                    <div className="phone"></div>
                    <div className="site"></div>
                    <div className="LoremIpsum"></div>
                </div>
            </div>
        </div>

    }
}
export default Salong;