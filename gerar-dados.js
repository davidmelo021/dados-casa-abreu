const fs = require('fs');
const path = require('path');

const config = {
    clientes:500,
    pedidos: 5000,
    meses: 24,
    defeitos : true,
    saida: path.join(__dirname, 'dados.json')
};

function mulberry32(seed) {
    return function() {
        
    }
}