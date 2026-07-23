import storeReducer, { initialStore } from "../store" 
export const traerDatos = async () => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/brianAgenda`)
    const data = await response.json()
    if (!response.ok) {
        crearAgenda()
        return []
    }
    console.log(data)

    return (data.contacts)

    

}

export const crearAgenda = async () => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/brianAgenda`, {
        method: "POST"
    })
}


export const crearContacto = async (formulario) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/brianAgenda/contacts`, {
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
            "name": formulario.nombre,
            "phone": formulario.tel,
            "email": formulario.email,
            "address": formulario.direc
        })

    })
}
export const eliminarContacto = async (id) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/brianAgenda/contacts/${id}`, {
        method: "DELETE"
    })

    if (!response.ok) throw new Error("Error al eliminar el contacto")
    return true
}

export const editarContacto = async (id, formulario) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/brianAgenda/contacts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "name": formulario.nombre,
            "phone": formulario.tel,
            "email": formulario.email,
            "address": formulario.direc
        })
    })
}


