module.exports= function(app,db){

    app.get('/data1',(req,res)=>{

        db.query('SELECT  *  FROM `alertbox` WHERE state = ?',"A",(e,data1)  =>{
                
        
                res.send(data1) 

            })
        
    
        })
    }
    
