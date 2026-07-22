
import { useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"


export const AddContactForm = () => {

    const [formulario, setFormulario] = useState({
        nombre: "",
        tel: "",
        direc: "",
        img: ""
    })

    const [nombre, setNombre] = useState("")

    function validarFormulario() {


    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormulario({ ...formulario, [name]: value })

        console.log(formulario)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formulario.nombre || !formulario.tel || !formulario.direc || !formulario.img) {
            alert("Ningún campo puede estar vacío");
            return; 
        }

        console.log("Formulario válido");

    };



    return (
        <form className="formularioEstilo">
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Nombre</span>
                <input type="text" className="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default" onChange={handleChange}
                    name="nombre"
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Telefono</span>
                <input type="text" className="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default" onChange={handleChange} name="tel" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Direccion</span>
                <input type="text" className="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default" onChange={handleChange} name="direc" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Imagen</span>
                <input type="text" className="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default" onChange={handleChange} name="img" />
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-success" type="submit" onClick={handleSubmit}>Crear Contacto</button>
            </div>
        </form>
    )




}