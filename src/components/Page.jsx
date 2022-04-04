import React from 'react'
import mockData from '../helper/mockData';
import '../css/Page.css'
import SidePane from './SidePane';
import MainScreen from './MainScreen'
const Page = () =>{
 
    

    return(
        <>
            <div className='pageContainer'>
                <SidePane></SidePane>
                <MainScreen></MainScreen>
            </div>
        </>
    );
}

export default Page;