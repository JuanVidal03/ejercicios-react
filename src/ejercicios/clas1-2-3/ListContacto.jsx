import { Contacto } from "./Contacto";
import PropTypes from 'prop-types';

const ListContacto = ( { contact } ) => {

    return(
        <div>
            <h2>Nombre: { contact.nombre }</h2>
            <h2>Apellido: { contact.apellido }</h2>
            <h2>E-mail: { contact.email }</h2>
            <h2>Conectado: { contact.online ? 'Contacto en linea' : 'Contacto no disponible' }</h2>
        </div>
    )
}

ListContacto.propTypes = {
    //le digo que esto va aser una instancia de la clase constructor Contacto.js
    contact: PropTypes.instanceOf(Contacto)
}

export default ListContacto;