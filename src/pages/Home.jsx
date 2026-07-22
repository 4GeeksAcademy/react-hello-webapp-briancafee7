import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { crearAgenda, traerDatos } from "../services/services.js";
import { Link, useParams } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	traerDatos()


	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-md-3">Imagen</div>
					<div className="col-md-5">Nombre</div>
					<div className="col-md-4">Numero</div>
				</div>
			</div>
		</div>

	)
}; 