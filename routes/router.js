const express = require('express')

const UserCtrl = require('../controllers/unit-ctrl')
const DataListrikCtrl = require('../controllers/datalistrik-ctrl')
const TransaksiCtrl = require('../controllers/transaksi-ctrl')

const router = express.Router()

router.post('/create-unit', UserCtrl.createUnit)
router.get('/get-unit/:id', UserCtrl.getUnitById)
router.get('/get-unit', UserCtrl.getUnits)
router.put('/update-status/:id', UserCtrl.updateStatus)

router.get('/get-datalistrik/:id', DataListrikCtrl.getDataListrikAkhir)
router.get('/get-datalistriktotal/:id', DataListrikCtrl.getDataListrikTotal)

router.get('/get-transaksi', TransaksiCtrl.getTransaksiAll)
router.get('/get-transaksi/:id', TransaksiCtrl.getTransaksiUnit)

module.exports = router