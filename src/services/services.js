export const traerDatos= async ()=>{
    const response= await fetch(`https://playground.4geeks.com/contact/agendas/brianAgenda`)
    const data= await response.json()
    if (!response.ok){
        crearAgenda()
    }

    console.log(data)

}

export const crearAgenda= async()=>{
    const response= await fetch(`https://playground.4geeks.com/contact/agendas/brianAgenda`,{
        method:"POST"
    })
}