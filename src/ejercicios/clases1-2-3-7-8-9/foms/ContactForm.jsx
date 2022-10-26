import React, { useRef } from 'react';
import { Contacto } from '../Contacto';
import { PropTypes } from 'prop-types';
//importacion de formik y yup para el formulario
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const ContactForm = ( {add} ) => {

    /*====================
    Formulario sin usar Formik ni Yup
    =================================
    

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

    <h3 className='contactForm__title'>Ingresar Contactos</h3>
            <form onSubmit={addContact} className='contactForm'>
                <div className='contactForm__items-container'>
                    <input ref={nombreRef} placeholder='Nombre' id='inputNombre' type='text' required className='contactForm-input'/>
                    <input ref={apellidoRef} placeholder='Apellido' id='inputApellido' type='text' required className='contactForm-input'/>
                    <input ref={emailRef} placeholder='E-mail' id='inputEmail' type='email' required className='contactForm-input'/>
                </div>
                <button type='submit' className='contactForm__btn'>Agregar</button>
    </form>
    */


    /* Formulario usando FORMIK Y YUP */

    //inicializamos los valores
    const initialValues = {
        nombre: '',
        apellido: '',
        email: '',
        online: false,
    }

    //esquema de validación usando Yup
    const validationSchema  = Yup.object().shape(
        {
            nombre: Yup.string()
                .required('¿Como se llama el contacto?'),
            apellido: Yup.string()
                .required('¿Cual es el apellido?'),
            email: Yup.string()
                .email('El E-mail es invalido.')
                .required('El E-mail es obligatorio.'),
            online: Yup.boolean()
                .required('¿El contacto está en linea?')
        }
    )

    //Función con los datos del formulario
    /*
    const addContact =  () => {
        const newContact = new Contacto(
            nombreRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value,
            false
        )

        add(newContact);
    }

    */
    return (
        <div className='contactForm__container'>
            <h3 className='contactForm__title'>Agregar contactos:</h3>
            {/* Se inicializa Formik */}
            <Formik
            initialValues={ initialValues }
            validationSchema={ validationSchema }
            onSubmit={ async (values) => {

                const newContact = new Contacto(
                    values.nombre,
                    values.apellido,
                    values.email,
                    values.online
                )
                await new Promise((res) => setTimeout(res, 2000));
                add(newContact)
            }}
            >

                {/* Acciones o mapeo de errores */}
                {({ touched, errors, isSubmitting }) => (
                        //inicio de formulario
                        <Form className='contactForm'>
                            {/* NOMBRE */}
                            <Field id='nombre' type='text' name='nombre' placeholder='Nombre' className='contactForm-input' />
                            {
                                errors.nombre && touched.nombre &&
                                (
                                    <ErrorMessage name='nombre'/>
                                )
                            }

                            {/* APELLIDO */}
                            <Field id='apellido' type='text' name='apellido' placeholder='Apellido' className='contactForm-input'/> 
                            {
                                errors.apellido && touched.apellido &&
                                (
                                    <ErrorMessage name='apellido'/>
                                )
                            }

                            {/* EMAIL */}
                            <Field id='email' type='email' name='email' placeholder='E-mail' className='contactForm-input'/>
                            {
                                errors.email && touched.email &&
                                (
                                    <ErrorMessage name='email'/>
                                )
                            }

                            <button type='submit' className='contactForm__btn'>Agregar</button>
                            { isSubmitting ? (<div class="lds-ripple"><div></div><div></div></div>) : null }

                        </Form>
                    )
                }

            </Formik>
            
        </div>
    );
}

//PropTypes
ContactForm.propTypes = {
    add: PropTypes.func.isRequired,
}

export default ContactForm;