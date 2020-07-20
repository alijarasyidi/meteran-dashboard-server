const Unit = require('../models/unit-model')

createUnit = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user',
        })
    }

    const user = new User(body)

    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }

    user
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'User created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'User not created!',
            })
        })
}

getUnitById = async (req, res) => {
    await Unit.findOne({ unit_id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

getUnits = async (req, res) => {
    await Unit.find({}, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!user.length) {
            return res
                .status(404)
                .json({ success: false, error: `Users not found` })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

updateStatus = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Unit.findOne({ unit_id: req.params.id }, (err, status) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Unit not found!',
            })
        }
        status.status_code = body.status_code
        status.last_modified = new Date()
        status
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: status._id,
                    message: 'Status updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Status not updated!',
                })
            })
    })
}

module.exports = {
    createUnit,
    getUnitById,
    getUnits,
    updateStatus,
}