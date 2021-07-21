import React from 'react';
import '../styles/global.css';
import '../styles/home.css';
import img from '../images/Danone.jpg';

function Home(){
    return(
        <div className="App">
            <h1 className="Title">Convenience Store</h1>
            <h2 className="Add">Add Food</h2>
            <ul className="ShowItens">
                <li className="Item">
                    <h3>Danone</h3>
                    <img src={img} alt="" className="Image"/>
                    <h3>Amount: 4875</h3>
                </li>
                <li className="Item">
                    <h3>Danone</h3>
                    <img src={img} alt="" className="Image"/>
                    <h3>Amount: 4875</h3>
                </li>
                <li className="Item">
                    <h3>Danone</h3>
                    <img src={img} alt="" className="Image"/>
                    <h3>Amount: 4875</h3>
                </li>
                <li className="Item">
                    <h3>Danone</h3>
                    <img src={img} alt="" className="Image"/>
                    <h3>Amount: 4875</h3>
                </li>
            </ul>
        </div>
    )
}

export default Home;