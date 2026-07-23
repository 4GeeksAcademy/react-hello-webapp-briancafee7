import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"
import { editarContacto, eliminarContacto, traerDatos } from "../services/services.js"

export const EditContactForm = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { store, dispatch } = useGlobalReducer()

    const [formulario, setFormulario] = useState({
        nombre: "",
        tel: "",
        direc: "",
        email: ""
    })

    // Precarga los datos del contacto que se va a editar
    useEffect(() => {
        const contacto = store.contactos.find((c) => c.id === Number(id))
        if (contacto) {
            setFormulario({
                nombre: contacto.name,
                tel: contacto.phone,
                direc: contacto.address,
                email: contacto.email
            })
        }
    }, [id, store.contactos])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormulario({ ...formulario, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!formulario.nombre || !formulario.tel || !formulario.direc || !formulario.email) {
            alert("Ningún campo puede estar vacío")
            return
        }

        try {
            await editarContacto(id, formulario)

            const contactos = await traerDatos()
            dispatch({ type: "cargar_contactos", payload: contactos })

            navigate("/") // vuelve a Home tras guardar
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form className="formularioEstilo" onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <span className="input-group-text">Nombre</span>
                <input type="text" className="form-control" onChange={handleChange} name="nombre" value={formulario.nombre} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Telefono</span>
                <input type="text" className="form-control" onChange={handleChange} name="tel" value={formulario.tel} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Direccion</span>
                <input type="text" className="form-control" onChange={handleChange} name="direc" value={formulario.direc} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Email</span>
                <input type="text" className="form-control" onChange={handleChange} name="email" value={formulario.email} />
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-success" type="submit">Guardar Cambios</button>
            </div>
        </form>
    )
}