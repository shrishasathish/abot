const express = require ('express')
const session = require('express-session');

const mysql = require ('mysql')
const path = require('path')
const flash  = require('connect-flash')
const passport = require('passport')
const app = express ()

const bodyParser = require("body-parser");
var http = require("http");
const cors = require('cors');
app.use(cors({
  origin: ["https://staging.tax360.in", "https://admin-staging.tax360.in", "http://3.134.129.145:1207" , 
  "http://3.134.129.145:1208","http://localhost:1207","http://localhost:1208","https://tax360.in","https://admin.tax360.in"],
 allowedHeaders: ["my-custom-header"],
 credentials: true
}));



var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(bodyParser());
app.use(session({ secret: '2181616A8D5AD45EE3A64BE1B325F', saveUninitialized: false, resave: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash())
// var server      = require('http').createServer(app);
var db = require('./config/config')
 
  
// connection on namespace /chat
var chat = io.of('/chat').on('connection', function(socket) {

  socket.on('chat message', function(data){
    console.log('message from client: ', data);

    //var url = '/listen';
    var url = data;
    console.log(url)
    // var name = socket.name = data.name;
    // var room = socket.room = data.room;

    // join on room
    // socket.join(name);
    // Sends a message to the client that is joined in the room
    chat.emit('chat message', url);
  });
  socket.once('end', () => {
    chat.destroy();
  });
});




db.connect((err, result) => {
  if (err) {
      throw new Error(err)
      return
  } else {
      console.log('Successfully connecting with the database')
  }
});


  
  app.use(express.static(path.join(__dirname, 'public')));


require('./routes/alert.js')(app,db)
require('./routes/write.js')(app,db)
require('./routes/update.js')(app,db)



server.listen(2023, function() {
  console.log('Socket IO server listening on port 2023');
});
   

