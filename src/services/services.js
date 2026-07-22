export const traerDatos= async ()=>{
    const response= await fetch(`https://playground.4geeks.com/contact/agendas/brianAgenda`)
    if (!response.ok){
        crearAgenda()
    }
}

export const crearAgenda= async()=>{
    const response= await fetch(`https://playground.4geeks.com/contact/agendas/brianAgenda`,{
        method:"POST"
    })
}