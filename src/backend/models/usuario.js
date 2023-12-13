import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    apellidoPaterno: String,
    apellidoMaterno: String,
    nombres: String,
    rut: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true, lowercase: true },
    password: String,
    idUsuario: Number,
    createdAt: { type: Date, default: Date.now },
    sucursal: String,
},{ versionKey: false }
);

const usuario = mongoose.model('usuario', usuarioSchema);

export default usuario;