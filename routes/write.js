module.exports= function(app,db){

  

        app.get('/write',(req,res)=>{
        
            db.query('SELECT * FROM `alertbox`',(e,data)  =>{
        
                  res.render('check.ejs',{new:data})
            })
        
        
        })
        
app.post('/writedata',(req,res) =>{
var data ={
    alert:req.body.alert,
    state:req.body.state,
    source:req.body.source
}
console.log(data)
    
    db.query('INSERT INTO `alertbox`  (alert,state,source) VALUES (?,?,?)',[req.body.alert,req.body.state,req.body.source],(e, data) =>{
        console.log(data);
        console.log(e);

        res.redirect('/write')

        // res.render('check.ejs')
    })

})
}