const express = require('express');
const router = express.Router();
const products = require('../services/products');


router.get('/:id', async function(req, res, next) {
  try {
    res.json(await products.getMultiple(req.params.id, req.query.page));
  } catch (err) {
    console.error(`Error while getting products `, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    res.json(await products.create(req.body));
  } catch (err) {
    console.error(`Error while creating products`, err.message);
    next(err);
  }
});

/* PUT Order */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await products.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating products`, err.message);
    next(err);
  }
});

router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await products.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting products`, err.message);
    next(err);
  }
});

router.delete('/all/:id', async function(req, res, next) {
  try { 
    res.json(await products.removeAll(req.params.id));
  } catch (err) {
    console.error(`Error while all deleting products`, err.message);
    next(err);
  }
});



module.exports = router;