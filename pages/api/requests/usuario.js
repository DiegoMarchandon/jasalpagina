// Consultas relacionadas a usuarios
import { connection } from "next/server"; //importo la conexión a la base de datos

// función para obtener todos los datos
export async function getAllUsuarios(){
    // hacer consulta SELECT * FROM usuario
}

// Función para obtener un usuario por ID
export async function getUsuarioById(idusuario) {
    // Hacer SELECT * FROM usuario WHERE idusuario = ?
}

// Función para crear un nuevo usuario
export async function createUsuario(usuarioData) {
    // Hacer INSERT INTO usuario (...) VALUES (...)
}

// Función para actualizar un usuario
export async function updateUsuario(idusuario, usuarioData) {
    // Hacer UPDATE usuario SET ... WHERE idusuario = ?
}

// Función para eliminar (o deshabilitar) un usuario
export async function deleteUsuario(idusuario) {
    // Podrías hacer DELETE FROM usuario WHERE idusuario = ?
    // O solo actualizar ushabilitado a 0 (baja lógica)
}