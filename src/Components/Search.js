import React from 'react';
import requests from './Request';
import Tabla from './Tabla';
import './Search.css';

export default function Search(){
    return (
        <div>
            <Tabla fetchURL={requests.fetchALL}/>      
        </div>
    );
}
