
const validarCompra_repuestos = (dinero) =>
{
    return new Promise((resolve, reject) => 
    {
        if(dinero >= 200)
        {
            console.log('Estamos procesando tu orden')

            setTimeout(()=> {
                resolve(console.log(`Toma tu repuesto
                estas son tus vueltas: ${dinero-200}`))
            }, 6000)
        }
        else
        {
            reject('Ups, algo no ha salido bien =(')
        }
    })
    

    
}



const comprarRepuesto = async dinero =>
{
    try 
    {
        console.log(`Hola, bienvenido
                     Estamos procesando tu orden`)
        const order = await validarCompra_repuestos(dinero)
    } 
    catch (error) 
    {
        console.log(error)
    }
}


comprarRepuesto(350)