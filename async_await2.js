

const mensualidadActual = 65000

const pagarMensualidad = dinero => 
{   
    return new Promise((resolve, reject) =>//esto es una arrow function
    {
        if(dinero >= mensualidadActual)
        {   
            setTimeout(() => {
                resolve(console.log(`Gracias por tu pago 
Tu cambio es de: ${dinero - mensualidadActual}`))
            }, 10000)
           
        }
        else
        {
            reject(console.log(`No se pudo realizar el pago, porfavor intenta nuevamente`))
        }
    })
}





const mensualidad = async (dinero) =>
{
    try {
        console.log(`Hola, bienvenido a GymPlus`)
        console.log('Gracias por ser parte de la familia GP')

        console.log(`Estamos procesando el pago, porfavor espera`)
        const pago = await pagarMensualidad(dinero) 
    } catch (error) {
        console.log(error)
    }
}