const app = require('./app');

const http = require('http');
const { loadPlanets } = require('./models/planets.model');

const PORT = 8000;

async function startServer(){
    await loadPlanets();
    const server = http.createServer(app);
    server.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}...`);
});
}

startServer();