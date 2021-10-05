

module.exports= function(app,db){

    app.get('/update',(req,res)=>{
  
        // db.query('UPDATE  alertbox state="B" WHERE alert_id = ?', req.query.id,(e,data1) =>{
            var split = req.query.id.split(',')
            
            db.query('UPDATE  alertbox set state="B" WHERE  alert_id IN (?)', [split],(e,data1) =>{ 
                
            
                res.send(data1) 

            })
        
    
        })
    }