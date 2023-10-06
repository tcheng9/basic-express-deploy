
const express = require('express'); 
  
const app = express(); 
const PORT = 3000; 
  
app.listen({port: PORT, host: "0.0.0.0"}, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running,  and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 