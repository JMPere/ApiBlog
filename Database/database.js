const mongoose = require("mongoose");
mongoose.set("strictQuery",true);

const conexion = async ()=>{

    try {

        await mongoose.connect('mongodb://127.0.0.1:27017/blog');
        console.log("Conectado a la base de datos de la colecion 'blog'");
        
    } catch (error) {
        console.log(error);
        throw new Error("No se ha podido conectar a la base de datos");
    }

}

module.exports = {
    conexion
}