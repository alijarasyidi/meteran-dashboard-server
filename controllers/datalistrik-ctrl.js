const DataListrik = require('../models/datalistrik-model')


getDataListrikAkhir = async (req, res) => {
    await DataListrik.findOne({ unit_id: req.params.id } , (err, data) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!data) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: data })
    }).sort({ _id: -1 }).catch(err => console.log(err))
}

getDataListrikTotal = async (req, res) => {
    await DataListrik.find({ unit_id: req.params.id }, (err, data) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!data.length) {
            return res
                .status(404)
                .json({ success: false, error: `Users not found` })
        }
        return res.status(200).json({ success: true, data: data })
    }).catch(err => console.log(err))
}

module.exports = {
    getDataListrikAkhir,
    getDataListrikTotal,
}