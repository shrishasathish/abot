

module.exports= function(app,db){

    app.get('/update',(req,res)=>{

        db.query('UPDATE  alertbox state="B" WHERE alert_id = ?', req.query.id,(e,data1) =>{
                
            
                res.send(data1) 

            })
        
    
        })
    }