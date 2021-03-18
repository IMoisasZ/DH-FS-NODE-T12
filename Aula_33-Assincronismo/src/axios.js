const axios = require('axios')
// https://api.github.com/users/IMoisasZ

const buscaUsuarioGitHub = async (username) => {
    let {data} = await axios.get(`https://api.github.com/users/${username}`)
    console.log(data)
}

buscaUsuarioGitHub('IMoisasZ')