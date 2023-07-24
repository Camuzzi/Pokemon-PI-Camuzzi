const {getTypes} = require("../controllers/typesController/getTypes");

const getTypesHandler = async (req,res) => {
    
    try {
        const allTypes = await getTypes();
        res.status(200).json(allTypes);
    } catch (error) {
        res.status(400).json({error: error.message}) 
        
    }

}

module.exports = {getTypesHandler};