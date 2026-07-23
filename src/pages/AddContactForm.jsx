
import { useEffect, useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { traerDatos, crearContacto } from "../services/services"
import { useNavigate } from "react-router-dom"


export const AddContactForm = () => {

    const [formulario, setFormulario] = useState({
        nombre: "",
        tel: "",
        direc: "",
        email: ""
    })

    const { dispatch, store } = useGlobalReducer()

    const [nombre, setNombre] = useState("")

    const cargarContactos = async () => {
        const contactos = await traerDatos()
        dispatch({ type: "add_contact", payload: contactos })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormulario({ ...formulario, [name]: value })

        console.log(formulario)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formulario.nombre || !formulario.tel || !formulario.direc || !formulario.email) {
            alert("Ningún campo puede estar vacío");
            return;
        }



        else {
            crearContacto(formulario)
            cargarContactos()
            setFormulario({ nombre: "", tel: "", direc: "", email: "" })
            navigate("/")
        }

        console.log("Formulario válido");

    };

    useEffect(()=>{
        cargarContactos()

    },[])

    const navigate= useNavigate()



    return (
        <form className="formularioEstilo" onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Nombre</span>
                <input type="text" className="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={handleChange}
                    name="nombre"
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Telefono</span>
                <input type="text" className="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={handleChange}
                    name="tel" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Direccion</span>
                <input type="text" className="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={handleChange}
                    name="direc" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                <input type="text" className="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={handleChange}
                    name="email" />
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-success" type="submit">Crear Contacto</button>
            </div>
        </form>
    )




}