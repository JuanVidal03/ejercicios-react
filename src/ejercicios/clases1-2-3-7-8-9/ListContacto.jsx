import { Contacto } from "./Contacto";
import PropTypes from 'prop-types';

const ListContacto = ( { contact, online, remove } ) => {

    //funcion para cambiar el icono del estado del completed
    const taskCompletedIcon = () => {
        if (contact.online) {
            return ( <i onClick={ () => online(contact) } className='bi-toggle-on task-action' style={ { color: 'green', fontWeight: 'bold', fontSize: '1.2rem' } }></i> )
        } else {
            return ( <i onClick={ () => online(contact) } className='bi-toggle-off task-action' style={ { color: 'grey', fontWeight: 'bold', fontSize: '1.2rem' } }></i> )
        }
    }

    return(

        <tr className='contact-container'>
            <th>
                <span>{ contact.nombre }</span>
            </th>
            <td>
                <span>{ contact.apellido }</span>
            </td>
            <td>
                <span>{ contact.email }</span>
            </td>
            <td>
                {/* llamado a la funcion que retorna el icon dependiendo el estado de la clave */}
                { taskCompletedIcon() }
            </td>
            <td>
                <i onClick={ () => remove(contact) } className='bi-trash task-action' style={ { color: 'tomato', fontSize: '1.2rem' } }></i>
            </td>
        </tr>
    )
}

ListContacto.propTypes = {
    //le digo que esto va aser una instancia de la clase constructor Contacto.js
    contact: PropTypes.instanceOf(Contacto),
    online: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,

}

export default ListContacto;