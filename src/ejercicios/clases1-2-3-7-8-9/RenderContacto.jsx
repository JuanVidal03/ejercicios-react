import ListContacto from "./ListContacto";
import { Contacto } from "./Contacto";
import { useState } from "react";
import ContactForm from "./foms/ContactForm";

const RenderContacto = () => {

    //ejemplo de contacto
    let contacto = new Contacto('Juan', 'Vidal', 'juanmvg2003@gmail.com', true);
    let contacto1 = new Contacto('Luisa', 'Lopez', 'mail@gmail.com', false);

    const [contactos, setContactos] = useState([contacto, contacto1]);

    //para cambiar estado de online
    const onlineContact = ( contact ) => {
        const index = contactos.indexOf( contact );
        const tempContact = [...contactos];

        tempContact[index].online = !tempContact[index].online;
        setContactos(tempContact); 
    }



    //función para remover un contacto
    const removeContact = ( contact ) => {
        const index = contactos.indexOf( contact );
        const tempContact = [...contactos];

        tempContact.splice(index,1)
        setContactos(tempContact); 
    }


    //función para añadir contacto
    const addContact = (contact) => {
        const index = contactos.indexOf( contact );
        const tempContact = [...contactos];

        tempContact.push(contact);
        setContactos(tempContact);
    }


    return(

        <div className="rederContact-container">
            <div>
                <div className="card">
                    {/* Card Header */}
                    <div className="title-contact">
                        <h2>Tus Contactos:</h2>
                    </div>

                    {/* Card body */}
                    <div className="card-body" data-mbd-perfectscroollbar='true'>
                        {/* Inicio tabla de tareas */}
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Nombre</th>
                                    <th scope='col'>Apellido</th>
                                    <th scope='col'>E-mail</th>
                                    <th scope='col'>Online</th>
                                </tr>
                            </thead>

                            <tbody>

                                {/* Iterar sobre la lista de contactos */}
                                {contactos.map((contacto, index) => 
                                    <ListContacto
                                        contact={contacto}
                                        key={index}
                                        remove={ removeContact }
                                        online={ onlineContact }
                                        />
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ContactForm add={ addContact }/>
        </div>
    )
}

export default RenderContacto;