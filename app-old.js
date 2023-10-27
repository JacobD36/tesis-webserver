const http = require('http');

http.createServer((req, res) => {
    console.log(req);
    //res.writeHead(200, { 'Content-Type': 'application/json' });
    /*res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, { 'Content-Type': 'application/csv' });*/
    /*const persona = {
        nombre: 'Jaime',
        apellidos: 'Pérez Frias'
    };*/
    //res.write(JSON.stringify(persona));
    /*res.write('id, nombre\n');
    res.write('1, Jaime\n');
    res.write('2, Flora\n');
    res.write('3, David\n');
    res.write('4, Victor\n');
    res.write('5, Rosa\n');*/
    res.write('Hola Mundo');
    res.end();
}).listen(8080);