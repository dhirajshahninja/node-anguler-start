var express=require('express'),
  router=express.Router(),
  categorybl=require('../models/categorybl');

router.get('/category',function(req,res,next){
  categorybl.getAll(function(err,result){
    if(err){
      return next(err);
    }else{
      return res.json(result);
    }
  });
});

module.exports=router;
