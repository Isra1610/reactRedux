import React, { Component } from "react";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";
import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";
import Tabla from "./Tabla";

class Usuarios extends Component {
	componentDidMount() {
		if (!this.props.usuarios.length) {
			this.props.traerTodos();
		}
	}

	putContent = () => {
		if (this.props.loading) {
			return <Spinner />;
		}

		if (this.props.error) {
			return <Fatal />;
		}

		return <Tabla />;
	};

	render() {
		return (
			<>
				<h1>Usuarios</h1>
				{this.putContent()}
			</>
		);
	}
}

const mapStateToProps = (reducers) => {
	return reducers.usuariosReducer;
};

export default connect(mapStateToProps, usuariosActions)(Usuarios);
