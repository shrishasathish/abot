

module.exports= function(app,db){

    app.get('/getdata',(req,res)=>{

        db.query('SELECT  *  FROM `alertbox` WHERE state = ?',"A",(e,data1)  =>{
                
        
                res.send(data1) 

            })
        
    
        })
    }
    
