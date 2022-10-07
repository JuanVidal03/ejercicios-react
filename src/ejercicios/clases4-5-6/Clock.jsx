import React, { useState, useEffect } from 'react';


const Clock = () => {

    //declaro el estado inicial del componente
    const personaState = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Juan',
        apellido: 'Vidal',
    }

    //useState para actualizar el estado del componente+
    const [persona, setPersona] = useState(personaState);


    //para manejar el estado de vida del componente
    useEffect(() => {
        
        //DidMount
       let timerID = setInterval(() => {
            tick()
        }, 1000);


        return () => {

            //WillUnMount
            clearInterval(timerID);

        };

    });


    const tick = () => {

        setPersona(() => {
            let edad = persona.edad +1;

            return{
                ...persona,
                fecha: new Date(),
                edad
            }
        })

    }


    return (
        <div>
            <h2>Hora actual: {persona.fecha.toLocaleDateString()}</h2>
            <h3>{persona.nombre} {persona.apellido}</h3>
            <h1>Edad: {persona.edad}</h1>
        </div>
    );
}

export default Clock;
