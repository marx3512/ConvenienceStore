import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';
import '../styles/add.css';

function AddFoodPage(){
    const history = useHistory();

    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [amount,setAmount] = useState('');
    const [image,setImage] = useState();

    async function handleSubmite(event){
        event.preventDefault();

        const data = new FormData();

        data.append('name', name);
        data.append('price', price);
        data.append('amount', amount);
        data.append('image', image);

        await api.post('AddItem', data);
        alert('Cadastro realizado com sucesso');
        history.push('/');
    }

    function handleSelectImage(event){
        setImage(event.target.files[0]);
    }

    return(
        <div className="AppAdd">
            <h1 className="Title">AddFood</h1>
            <form onSubmit={handleSubmite} method="post">
                <label htmlFor="name">Name: </label>
                <input type="text" className="Input" value={name} onChange={event => setName(event.target.value)}/>
                <label htmlFor="price">Price: </label>
                <input type="number" className="Input" value={price} onChange={event => setPrice(event.target.value)}/>
                <label htmlFor="amount">Amount: </label>
                <input type="number" className="Input" value={amount} onChange={event => setAmount(event.target.value)}/>
                <label htmlFor="image">File: </label>
                <input type="file" className="File" onChange={handleSelectImage}/>
                <button type="submite" > Send </button>
            </form>
        </div>
        
    )
}

export default AddFoodPage;