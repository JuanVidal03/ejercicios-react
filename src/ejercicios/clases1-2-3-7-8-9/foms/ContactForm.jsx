import React, { useRef } from 'react';
import { Contacto } from '../Contacto';
import { PropTypes } from 'prop-types';

const ContactForm = ( {add} ) => {

    //referencias de los elementos
    const nombreRef = useRef('');
    const apellidoRef = useRef('');
    const emailRef = useRef('');    

    //función para añadir contacto

    const addContact = (e) => {
        e.preventDefault();

        const newContact = new Contacto(
            nombreRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value,
            false
        )

        add(newContact);
    }


    return (
        <div className='contactForm__container'>
            <h3 className='contactForm__title'>Ingresar Contactos</h3>
            <form onSubmit={addContact} className='contactForm'>
                <div className='contactForm__items-container'>
                    <input ref={nombreRef} placeholder='Nombre' id='inputNombre' type='text' required className='contactForm-input'/>
                    <input ref={apellidoRef} placeholder='Apellido' id='inputApellido' type='text' required className='contactForm-input'/>
                    <input ref={emailRef} placeholder='E-mail' id='inputEmail' type='email' required className='contactForm-input'/>
                </div>
                <button type='submit' className='contactForm__btn'>Agregar</button>
            </form>
        </div>
    );
}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired,
}

export default ContactForm;