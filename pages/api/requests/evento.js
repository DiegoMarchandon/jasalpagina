// consultas relacionadas a eventos
import supabase from "../../../lib/db"; 

/**
 * Obtiene todas las compras
 * 
 * SELECT * FROM evento;
 * @return {object|error}
 */
export async function getAllEventos(){
    try{
        const {data,error} = await supabase.from('evento').select('*');
        
        if(error){
            throw error;
        }

        const eventosFormateados = data.map(evento => ({
            ...evento,
            eventoFecha: newDate(evento.eventofecha).toISOString().split('T')[0], // "YYYY-MM-DD"
        }))
        return eventosFormateados;
    } catch(error){
        throw new Error('getAllEventos error al obtener los eventos:' + error.message);
    }
}

/**
 * Obtiene un evento por su ID 
 * 
 * SELECT * FROM evento WHERE idevento = ?
 * @param {int} idevento
 * @return {object|error}
 */
export async function getEventoById(idevento) {
    try{
        const {data,error} = await supabase.from('evento').select('*').eq('id',idevento);

        if(error){
            throw error;
        }

        return data;   
    }catch(error){
        throw new Error('getEventoById error al obtener el evento:' + error.message);
    }
}

/**
 * Crea un nuevo evento
 * 
 * INSERT INTO evento (eventofecha, eventolugar, eventourl) VALUES (?,?,?);
 * @param {object} idevento
 * @return {true|error}
 */
export async function createEvento(eventoData) {
    try{
        var valores = [{
            eventoData:eventofecha,
            eventoData:eventolugar,
            eventoData:eventourl
        }];
        const {error} = await supabase.from('evento').insert(valores);
        
        if(error)throw error;
        return true;
        
    }catch(error){
        throw new Error('createCompra error al crear compra: '+error.message);
    }
}

/**
 * Actualiza un evento
 * 
 * UPDATE evento SET ... WHERE idevento = ?
 * @param {int} idevento
 * @param {object} eventoData 
 * @return {true|error} 
 */
export async function updateEvento(idevento, eventoData) {
    try{
        var keyValues = {};
        for(const[key,value] of Object.entries(eventoData)){
            if(value !== "" && value !== null && value !== undefined) keyValues[key] = value; 
        }

        if(Object.keys(keyValues).length === 0) throw new Error("No hay datos válidos para actualizar");

        const {error} = await supabase.from('evento').update(keyValues).eq('id',idevento);
        if(error) throw error;
        return true;
    }catch(error){
        throw new Error('updateEvento error al actualizar evento: '+error.message);
    }
}

/**
 * Elimina un evento.
 * 
 * DELETE FROM evento WHERE idevento = ?
 * @param {int} idevento
 * @return {true|error}
 */
export async function deleteEvento(idevento) {
    try{

        const {error} = await supabase.from('evento').delete().eq('id',idevento);
        
        if(error) throw error;
        return true;
    }catch(error){
        throw new Error("deleteEvento error al eliminar evento: "+error.message);
    }
}

/**
 * función encargada de manejar los requests(GET, POST, etc.)
 * req: request. Datos que llegan del cliente.
 * res: response. Respuesta que voy a devolver.
 */
export default async function eventoHandler(req,res){
    // res.status(200).json({ message: "¡Hola desde evento!" });
    if(req.method === 'GET'){
        try{
            const eventos = await getAllEventos();

            
            res.status(200).json({eventos}); //se devuelve al cliente
        }catch(error){
            res.status(500).json({message: "Error del servidor ", error: error.message});
        }
    }else{
        //manejo para métodos no permitidos
        res.setHeader('Allow',['GET']); //informamos al cliente sobre los métodos permitidos 
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}