import React, { useEffect, useState } from 'react';
import '../styles/global.css';
import '../styles/home.css'; 

import api from '../services/api';

function Home(){
    const [itens, setItens] = useState([]);

    useEffect(() => {
        api.get(' ').then(res => {
            setItens(res.data);
        })
    },[]);

    return(
        <div className="App">
            <h1 className="Title">Convenience Store</h1>
            <a href="/Add" className="Add">Add Food</a>
            <ul className="ShowItens">
                {itens.map(iten => {
                    return (
                        <li className="Item" key={iten.id}>
                            <h3>{iten.name}</h3>
                                <img src={iten.url} alt="" className="Image"/>
                            <h3>Price: {iten.price}</h3>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Home;