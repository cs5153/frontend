import React from 'react';
import ListMap from './ListMap';
import ListBar from './ListBar';
import "../../css/ListDisplay.css";
import { mockData, readData, writeData} from "../../helper/helper";
import Cookies from 'js-cookie';

class ListDisplay extends React.Component {
    state = { items: [] }


    componetDidMount() {
        console.log("list display mount")

        const currentTrip = Cookies.get('current_trip')
        var mockData = readData();

        var i = 0;
        for (i = 0; i < mockData.trips[currentTrip].lists.length; i++)
        {
            if (mockData.trips[currentTrip].lists[i].name == this.props.list.name)
            {
                this.setState({ items: mockData.trips[currentTrip].lists[i] })
            }
        }
    }

    onItemSubmit = (item) => {
        const currentTrip = Cookies.get('current_trip')
        var mockData = readData();

        var i = 0;
        for (i = 0; i < mockData.trips[currentTrip].lists.length; i++)
        {
            if (mockData.trips[currentTrip].lists[i].name == this.props.list.name)
            {
                mockData.trips[currentTrip].lists[i].items.push(item)
                this.setState({ items: mockData.trips[currentTrip].lists[i] })
            }
        }
    }

    render () {
        return (
            <div className="ui container list-container">
                <div className='list-segment ui raised segment'>
                    <div>
                        <ListMap list={this.props.list}/>
                    </div>
                </div>
                <ListBar list={this.props.list} onItemSubmit={this.onItemSubmit}/>
            </div>
        )
    }
}

export default ListDisplay;

