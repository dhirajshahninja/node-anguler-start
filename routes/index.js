const express = require('express'),
      router = express.Router();
router.use('/api/',require('./category'));
module.exports=router;
