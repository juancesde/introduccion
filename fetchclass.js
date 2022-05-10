const pokemon = document.querySelector('#pokemon')

let renderPokemon = rutaimage =>{
    pokemon.setAttribute('src',rutaimage)
}

/*fetch('pokemon.json',{

})
.then((response)=>{
    return response.json()
})
.then((data)=>{
    renderPokemon(data[0].rutaimage)
})
*/

fetch('https://cesde-f928b-default-rtdb.firebaseio.com/user.json',{
    method:'GET',
    Headers:{
        'Content-Type':'application/json'
    }
})
.then((response)=>{
    return response.json()
})
.then((data)=>{

    //renderPokemon(data.sprites.back_default)
})