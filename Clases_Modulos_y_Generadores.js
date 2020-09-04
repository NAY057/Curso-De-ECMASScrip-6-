class User 
{
    constructor()
    {
        this.name = 'Nico'
        this.apellido = 'Aguirre'
        this.edad = '25'
    }

    saludar(name,apellido)
    {
        console.log(`Hola, me llamo ${this.name} ${this.apellido}`)
    }
}

export default User

