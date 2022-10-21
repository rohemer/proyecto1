let app = require('./app');
const PORT = 4000;

app.listen( PORT, ()=> {
    console.log("Server ready on port", PORT);
});