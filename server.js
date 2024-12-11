const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    const { search = '', page = 1 } = req.query;
    const limit = 20;
    const offset = (page - 1) * limit;

    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10000');
        let pokemons = response.data.results;

        if (search) {
            const regex = new RegExp(search.toLowerCase().trim(), 'i');
            pokemons = pokemons.filter(pokemon => regex.test(pokemon.name));
        }

        const paginatedPokemons = pokemons.slice(offset, offset + limit);
        res.render('index', {
            pokemons: paginatedPokemons,
            currentPage: parseInt(page),
            totalPages: Math.ceil(pokemons.length / limit),
            search,
        });
    } catch (error) {
        res.status(500).send('Erro ao buscar Pokémons');
    }
});

app.get('/pokemon/:name', async (req, res) => {
    const { name } = req.params;

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const abilities = response.data.abilities
            .map(ability => ({
                name: ability.ability.name,
                is_hidden: ability.is_hidden,
            }))
            .sort((a, b) => a.name.localeCompare(b.name));

        res.render('details', {
            name: response.data.name,
            image: response.data.sprites.other['official-artwork'].front_default,
            height: response.data.height,
            weight: response.data.weight,
            abilities,
        });
    } catch (error) {
        res.status(404).render('error', { message: 'Pokémon não encontrado' });
    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
