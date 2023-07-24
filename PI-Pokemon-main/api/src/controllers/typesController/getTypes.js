const axios = require('axios');

const {filterTypes} = require("../../utils/index");
const {Type} = require("../../db");

const getTypes = async () => {
    let allTypes = await Type.findAll();

    if (allTypes.length === 0){
        allTypes = (await axios.get("https://pokeapi.co/api/v2/type")).data.results;

        const allTypesFiltered = filterTypes(allTypes);

        await Type.bulkCreate(allTypesFiltered);

        allTypes = await Type.findAll();
    }

    return allTypes;

};

module.exports = {getTypes};