var mysql=require('mysql');

function Connection(){
  this.pool=null;
  this.init=function(){
    this.pool=mysql.createPool({
      connectionLimit:10,
      host:'localhost',
      password:'root',
      user:'root',
      port:'3306',
      database:'orderdb',
      multipleStatements:true
    });
  }

  this.executeSql=function(sql,callback){
    this.pool.getConnection(function(err,connection){
      if(err){
        console.log(err);
        err.status=500;
        callback(err,null);
      }else{
        connection.query(sql,function(err,result){
          if(err){
            console.log(err);
            err.status=500;
            callback(err,null);
          }else{
            connection.release();
            callback(null,result);
          }
        });
      }
    });
  }
}
module.exports=new Connection();
