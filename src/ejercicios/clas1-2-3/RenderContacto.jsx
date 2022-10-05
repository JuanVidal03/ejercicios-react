import ListContacto from "./ListContacto";
import { Contacto } from "./Contacto";

const RenderContacto = () => {
    
    let contacto = new Contacto('Juan', 'Vidal', 'juanmvg2003@gmail.com', false);

    return(
        <div>
            <ListContacto contact={contacto}/>
        </div>
    )
}

export default RenderContacto;