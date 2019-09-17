import React from 'react';
import { Link } from 'react-router-dom';
import chevron_right from './../index/img/chevron_right.png';
import ratingSrc from './../index/img/rating.png';

// J:   Denna komponent har jag gjort om till en funktionell komponent
//      då den inte använder state eller något annar react-specifikt
//      Här deconstructas props i början så det blir tydligt vad komponenten får för props

const ListItem = ({time, salon, rating, adress, price, distance, index}) => {
  // J:   Jag har här bytt 'to' på Link till salong/index för att länka till en specifik salong.
        return (
            <Link to={`/salong/${index}`}>
                <div className="grid-container">
                    <div className="li">{time}</div>
                    <div>
                        <p>{salon}</p>
                        <div>
                            <span> <img src={ratingSrc} alt="" /></span>
                            <span>{rating}</span>

                        </div>
                        <p>{adress}</p>
                    </div>
                    <div>
                        <p>{price}</p>
                        <p>{distance}</p>
                    </div>
                    <div className="pil-container">
                        <div className="pilen">
                            <img src={chevron_right} alt="" />
                        </div>
                    </div>
              </div>
            </Link>)
}

export default ListItem;

