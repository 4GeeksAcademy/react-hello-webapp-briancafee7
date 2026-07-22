export const traerDatos = async () => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/brianAgenda`)
    const data = await response.json()
    if (!response.ok) {
        crearAgenda()
    }

    console.log(data)

}

export const crearAgenda = async () => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/brianAgenda`, {
        method: "POST"
    })
}


export const crearContacto = async (formulario) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/brianAgenda/contacts`, {
        method: "POST",
        body: JSON.stringify({
            "name": formulario.nombre,
            "phone": formulario.tel,
            "email": formulario.correo,
            "address": formulario.direc
        })

    })
}