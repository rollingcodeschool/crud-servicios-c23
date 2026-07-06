import type { Servicio } from "../interfaces/servicios";

const urlServicios = import.meta.env.VITE_SERVICIO

export const listarServiciosApi = async ():Promise<Response> =>{
    try{
        const respuesta = await fetch(urlServicios)
        return respuesta
    }catch(error){
        console.error(error)
        throw error
    }
};

export const buscarServicioApi = async (id:string):Promise<Response> =>{
    try{
        const respuesta = await fetch(`${urlServicios}/${id}`)
        return respuesta
    }catch(error){
        console.error(error)
        throw error
    }
};

export const crearServicioApi = async (servicio: Servicio):Promise<Response> =>{
    try{
        const respuesta = await fetch(urlServicios, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(servicio)
        })
        return respuesta
    }catch(error){
        console.error(error)
        throw error
    }
};
