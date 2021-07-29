import axios from "axios";
import { TRAER_POR_USUARIO, LOADING, ERROR } from "../types/publicacionesTypes";
import * as usuariosTypes from "../types/usuariosTypes";

const { TRAER_TODOS: usuarios_traer_todos } = usuariosTypes;

export const traerPorUsuario = (key) => async (dispatch, getState) => {
	const { usuarios } = getState().usuariosReducer;
	const { publicaciones } = getState().publicacionesReducer;
	const usuario_id = usuarios[key].id;

	const respuesta = await axios.get(
		`https://jsonplaceholder.typicode.com/posts?userId=${usuario_id}`
	);

	const publicaiones_actualizadas = [...publicaciones, respuesta.data];

	const publicaciones_key = publicaiones_actualizadas.length - 1;
	const usuarios_actualizados = [...usuarios];
	usuarios_actualizados[key] = {
		...usuarios[key],
		publicaciones_key,
	};

	dispatch({
		type: usuarios_traer_todos,
		payload: usuarios_actualizados,
	});

	dispatch({
		type: TRAER_POR_USUARIO,
		payload: publicaiones_actualizadas,
	});
};
