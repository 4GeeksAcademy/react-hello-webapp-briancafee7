import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { crearAgenda } from "../services/services.js";
import { Link, useParams } from "react-router-dom";
import { AddContactForm } from "./AddContactForm.jsx";
import { useEffect } from "react"
import { editarContacto, eliminarContacto, traerDatos } from "../services/services.js"

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		const cargarContactos = async () => {
			const contactos = await traerDatos()
			dispatch({ type: "cargar_contactos", payload: contactos })
		}
		cargarContactos()
	}, [])

	const handleDelete = async (id) => {
		const confirmar = window.confirm("¿Seguro que quieres eliminar este contacto?")
		if (!confirmar) return

		try {
			await eliminarContacto(id)
			const contactos = await traerDatos()               
			dispatch({ type: "cargar_contactos", payload: contactos })
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className="container my-4">
			{store.contactos.map((contact) => (
				<div className="row align-items-center border-bottom py-3" key={contact.id}>
					<div className="col-md-1">
						<img
							src="data:image/jpeg;base64,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"
							alt={contact.name}
							style={{
								width: "70px",
								height: "70px",
								objectFit: "cover",
								borderRadius: "50%"
							}}
						/>
					</div>
					<div className="col-md-2">
						<small className="text-muted d-block">Nombre</small>
						<span className="fw-bold">{contact.name}</span>
					</div>
					<div className="col-md-2">
						<small className="text-muted d-block">Teléfono</small>
						<span>{contact.phone}</span>
					</div>
					<div className="col-md-3">
						<small className="text-muted d-block">Email</small>
						<span>{contact.email}</span>
					</div>
					<div className="col-md-3">
						<small className="text-muted d-block">Dirección</small>
						<span>{contact.address}</span>
					</div>
					<div className="col-md-2">
						<Link to={`/editar/${contact.id}`} className="btn btn-outline-primary btn-sm">
							Editar
						</Link>
						<button
							className="btn btn-outline-danger btn-sm"
							onClick={() => handleDelete(contact.id)}
						>
							Eliminar
						</button>
					</div>
				</div>
			))}
		</div>
	)
};