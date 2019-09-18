import React from 'react';
import heart from './../index/img/heart.png';
import chevron_back from './../index/img/chevron_back.png';
import { Link } from 'react-router-dom';
import rating from './../index/img/rating.png';
import axios from 'axios';

class Salong extends React.Component {
    state = {
        salon: {}
    };

    getData = () => {
        // J:   'match' kommer som en prop från react-router. Där kan vi plocka ut :id parametern som definierades i App.js
        //      /salong/1 ger alltså match.params.id -> 1
        const { match } = this.props;
        const id = match.params.id;

        // J:   Eftesom api:et inte har stöd för att hämta ut en salong hämtas alla här
        //      Detta är inte optimalt då index inte är det säkraste sättet att försäkra sig om att vi får rätt data
        //      Ett bättre alternativ hade varit, som du skrev, att sätta ett id på salongerna och plocka ut baserat på det.
        axios(`https://api.myjson.com/bins/7061t`)
        .then(response => {
            if (response.data) {
                this.setState({
                    salon: response.data[id]
                })
            }
        })
        .catch(error => {
            // J:   Hantera ev. fel
            console.log("error --> ", error);
        });
    };

    componentDidMount() {
        this.getData();
    }

    render() {
        const { salon } = this.state;

        return <div className="grid-container2">
            <div className="Header">
                <div className="back">
                    <Link to="/"> <img src={chevron_back} alt="" /></Link>
                </div>
                <div className="heart"> <img src={heart} alt="" /></div>
                <div className="salongbetyg">
                    <div className="salongnamn">
                        <h1>{salon.salon}</h1>
                    </div>
                    <img src={rating} alt="" />
                    <span>(32)</span>
                </div>
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
