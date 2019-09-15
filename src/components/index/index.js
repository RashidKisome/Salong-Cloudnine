import React from 'react';
import ListItem from './../list_item/list_item';
import Salong from './../salong/salong.js';


class Index extends React.Component {
    state = {
        query: "",
        data: [],
        filteredData: []
    };

    handleInputChange = event => {
        const query = event.target.value;
        const queryKr = query + " kr";

        this.setState(prevState => {
            const filteredData = prevState.data.filter(element => {
                return element.salon.toLowerCase().includes(query.toLowerCase()) || element.price.toLowerCase().includes(queryKr.toLowerCase());
            });

            return {
                query,
                filteredData
            };
        });
    };
    // Tänkte först använda axios men har inte använt det förut så jag gjorde såhär 
    getData = () => {
        fetch(`https://api.myjson.com/bins/7061t`)
            .then(response => response.json())
            .then(data => {
                const { query } = this.state;
                const filteredData = data.filter(element => {
                    console.log(element)
                    return element.salon.toLowerCase().includes(query.toLowerCase());
                });

                this.setState({
                    data,
                    filteredData
                });
            });
    };

    componentWillMount() {
        this.getData();
    }
    // Jag gjorde en searchbar istället för en dropdown för att det kändes smidigare bara för att få det gjort....
    render() {
        return (
            <div className="salongSearch">
                <form >
                    <div align="center" className="hairHeader"> <h1>Hår</h1><hr class="gold" />
                    </div>
                    <div align="center">   <input className="salongInput"
                        placeholder="Sök efter salong..."
                        value={this.state.query}
                        onChange={this.handleInputChange}
                    /> </div>
                </form>

                <div>
                    <ul>

                    </ul>
                </div>
                <div><ul>{this.state.filteredData.map((i, index) => <ListItem key={index} data={i} />)}</ul></div>



            </div>
        );
    }
}

export default Index;

