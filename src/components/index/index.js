import React from 'react';
import ListItem from './../list_item/list_item';
import axios from 'axios';

class Index extends React.Component {
    state = {
        query: "",
        data: []
    };

    handleInputChange = event => {
        const query = event.target.value;
        this.setState({ query });
    };

    // Tänkte först använda axios men har inte använt det förut så jag gjorde såhär
    // J:   Jag gjorde om fetchen till axios som ett exempel på hur det kan användas.
    //      Jag tog också bort användningen av filteredData i state då state endast bör innehålla data
    //      och inte modifierad data.
    getData = () => {
        axios(`https://api.myjson.com/bins/7061t`)
        .then(response => {
            if (response.data) {
                this.setState({
                    data: response.data
                })
            }
        })
        .catch(error => {
            // J:   Hantera ev. fel
            console.log("error --> ", error);
        });
    };

    // J:   Bytte till componentDidMount då componentWillMount är depricated
    //      Läs gärna https://reactjs.org/docs/react-component.html#componentdidmount eller kika på React Hooks som kan vara ett annat sätt att lösa detta
    componentDidMount() {
        this.getData();
    }

    // Jag gjorde en searchbar istället för en dropdown för att det kändes smidigare bara för att få det gjort....
    render() {
        const { data, query } = this.state;

        // J:   Filtreringen är ist flyttad hit till render. Jag tog även bort filtreringen på pris.
        //      Den var inte fel, utan bara för att göra exemplet renare och mer lättläst.
        const filteredData = data.filter(element => {
            return element.salon.toLowerCase().includes(query.toLowerCase());
        });

        return (
            <div className="salongSearch">
                <form >
                    <div className="hairHeader">
                        <h1>Hår</h1>
                        <hr className="gold" />
                    </div>
                    <div className="search">
                        <input className="salongInput"
                        placeholder="Sök efter salong..."
                        value={this.state.query}
                        onChange={this.handleInputChange} />
                    </div>
                </form>
                {/*Istället för att skicka in datan som ett objekt skickar jag in den med spread-attributes, se i list_item hur de används*/}
                {/*Jag skickar även med index för att kunna länka till en specifik salong*/}
                <div>
                    <ul>{filteredData.map((item, index) => <ListItem key={index} index={index} {...item} />)}</ul>
                </div>
            </div>
        );
    }
}

export default Index;

