import ListContacto from "./ListContacto";
import { Contacto } from "./Contacto";

const RenderContacto = () => {
    //ejemplod e contacto
    let contacto = new Contacto('Juan', 'Vidal', 'juanmvg2003@gmail.com', false);


    return(

        <div>
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

                                {/* Iterar sobre la lista de tareas */}
                                <ListContacto contact={contacto}/>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <TaskForm add={ addTask }/> */}
        </div>
    )
}

export default RenderContacto;