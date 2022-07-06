const express = require('express');
const router = express.Router();
const orders = require('../services/orders');


router.get('/', async function(req, res, next) {
  try {
    res.json(await orders.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting orders `, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    res.json(await orders.create(req.body));
  } catch (err) {
    console.error(`Error while creating orders`, err.message);
    next(err);
  }
});

/* PUT Order */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await orders.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating order`, err.message);
    next(err);
  }
});

router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await orders.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting order`, err.message);
    next(err);
  }
});



module.exports = router;