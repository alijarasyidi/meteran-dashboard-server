const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DataListrik = new Schema(
    {
        unit_id: { type: String, required: true },
        date_time: { type: Date, required: true },
        daya_sisa: { type: Number, required: true },
        daya_pemakaian: { type: Number, required: true },
    },
    { collection: 'data_listrik' }
)

module.exports = mongoose.model('datalistrik', DataListrik)