import React, { useState, useEffect } from 'react';
import getRandomJoke from '../services/axiosService';
import Button from '@mui/material/Button';
import axios from 'axios';

const AxiosExample = () => {
    // estados para actualizar con un nuevo chiste
    const [joke, setJoke] = useState({});
    // estate like
    const [like, setLike] = useState(0);
    // state dislike
    const [disLike, setDisLike] = useState(0);
    const baseURL = 'https://api.chucknorris.io/jokes/random';

    //useEffect para cargar el contemnido antes de que rendirice la página
    useEffect(() => {
        obtainJoke();
    }, []);

    
    // function to get a joke
    const obtainJoke = () => {
        getRandomJoke()
        .then((res) => {
            setJoke(res.data)
            console.log(res)
        })
        .catch((err) => {
            alert(err);
        })
    }

    // function para cambiar el chiste
    const changeJoke = () => {
        axios.get(`${baseURL}`)
            .then((res) => {
                setJoke(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    // para dar like al chiste
    const fnLike = () => {
        setLike(like + 1)
    }

    // para dar dislike al chiste
    const fnDisLike = () => {
        setDisLike(disLike + 1)
    }

    
    

    return (
        <div className='chuck-norris'>
            <div>
                <h1>Joke's Chuck Norris</h1>
                <h2 className='joke-chuck'>{ joke.value }</h2>
            </div>
            <div>
                <h2>Me gusta: {like}</h2>
                <h2>No me gusta: {disLike}</h2>
            </div>
            <div className='chuck-btn'>
                <Button variant='contained' onClick={changeJoke}>Joke generator</Button>
                <Button variant='contained' color='success' onClick={ fnLike }>Like!</Button>
                <Button variant='outlined' color='error' onClick={ fnDisLike }>Dislike</Button>
            </div>
        </div>
    );
}

export default AxiosExample;
