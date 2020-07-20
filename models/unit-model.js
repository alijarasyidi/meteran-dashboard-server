const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Unit = new Schema(
    {
        unit_id: { type: String, required: true },
        pin: { type: String, required: true },
        alamat: { type: String, required: true },
        kota: { type: String, required: true },
        provinsi: { type: String, required: true },
        user_id: { type: String, required: true },
        status_code: { type: String, required: true },
        last_modified: { type: Date, required: true },
        last_modified_by: { type: Number, required: true },
    },
    { collection: 'unit' }
)

module.exports = mongoose.model('unit', Unit)