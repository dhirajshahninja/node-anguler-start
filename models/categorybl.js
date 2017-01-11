var db=require('../connection');

exports.getAll = function(callback){
  var sql='select CategoryId,CategoryName from categories';
  db.executeSql(sql,function(err,result){
    if(err){
      return callback(err,null);
    }else{
      return callback(null,result);
    }
  });
}
