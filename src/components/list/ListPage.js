import React from 'react';
import GridList from './GridList';
import ListDisplay from './ListDisplay';
import CreateList from './CreateList';
import "../../css/Photo.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { mockData, readData, writeData} from "../../helper/helper";
import Cookies from 'js-cookie';

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

class ListPage extends React.Component {
    state = { lists: [], selectedList: [], showCreateList: false, showGridList: true, showListDisplay: false };

    componentDidMount() {
        console.log("list page mount")
        const currentTrip = Cookies.get('current_trip')
        var mockData = readData();
        console.log(mockData.trips[currentTrip].lists)
        this.setState({ lists: mockData.trips[currentTrip].lists })
    }

    onListSelect = (list) => {
        this.setState({ selectedList: list, showCreateList: false, showGridList: false, showListDisplay: true });
    }

    onCreateList = () => {
        this.setState({ showCreateList: true, showGridList: false, showListDisplay: false });
    }
    
    onSubmitClick = (name) => {
        console.log(name);
        
        const currentTrip = Cookies.get('current_trip')
        var mockData = readData();
        var key = pad(mockData.trips[currentTrip].lists.length + 1, 3);
        
        console.log(this.state.lists)

        mockData.trips[currentTrip].lists.push({"key": key, "name": name, "items": []});
        this.setState({ lists: mockData.trips[currentTrip].lists, showCreateList: false, showGridList: true, showListDisplay: false })
    }

    render () {
        return (
            <>
            <div id="list" className='groupList' >
                <div tabIndex="0" aria-label="Lists Page" className='groupName'>Lists</div>
            <div className="back">
                <div className="allLists">
                    { this.state.showGridList ?
                        <GridList lists={this.state.lists} onListSelect={this.onListSelect} onCreateList={this.onCreateList}/>
                    : null}
                    { this.state.showListDisplay ?
                        <ListDisplay list={this.state.selectedList}/>
                    : null}
                </div>
            </div>
            { this.state.showCreateList ?
                    <CreateList onSubmitClick={this.onSubmitClick}/>
                : null}
            </div> 
            </>
        )
    }
};

export default ListPage;
