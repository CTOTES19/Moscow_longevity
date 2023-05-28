import React, {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import Filters from '../Filters/Filters';


const Lending = () => {


        return (
            <div>
                
                <Header/>   
                <Main />
                <Filters/>
                <Footer/>
            
            </div>
        );
}

export default Lending;
