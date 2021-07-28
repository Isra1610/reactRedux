import axios from "axios";
import { TRAER_TODOS, LOADING, ERROR } from "../types/publicacionesTypes";

export const traerTodos = () => async (dispatch) => {
	dispatch({
		type: LOADING,
	});
	try {
		const respuesta = await axios.get(
			"https://jsonplaceholder.typicode.com/posts"
		);
		dispatch({
			type: TRAER_TODOS,
			payload: respuesta.data,
		});
	} catch (error) {
		dispatch({
			type: ERROR,
			payload: "Oops, algo salió mal, intente mas tarde.",
		});
	}
};
