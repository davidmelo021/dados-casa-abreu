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
        seed|= 0;
        seed = (seed + 0x6d2b79f5) | 0;
        let t = Math.imul(seed^(seed>>>15),1 |seed);
        t = (t+ Math.imul(t^(t>>>7),61 | t)) ^ t;
        return ((t^(t>>>14)) >>> 0) / 4294967296;
    };
}

const rand = mulberry32(42);
const int = (min, max) => Math.floor(rand() * (max - min + 1)) + min;
const pick = (arr) => arr[int(0, arr.length - 1)];
const chance = (p) => rand() < p;
const semAcento = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const nomes = ['João', 'Maria', 'Pedro', 'Ana', 'Lucas', 'Julia', 'Gabriel', 'Beatriz', 'Rafael', 'Camila'];
const sobrenomes = ['Silva', 'Souza', 'Costa', 'Oliveira', 'Pereira', 'Lima', 'Gomes', 'Ribeiro', 'Almeida', 'Fernandes'];

const cidades = [
    { cidade: 'São Paulo' ,uf: 'SP',regiao: 'Sudeste'},
    { cidade: 'Rio de Janeiro' ,uf: 'RJ',regiao: 'Sudeste'},
    { cidade: 'Belo Horizonte' ,uf: 'MG',regiao: 'Sudeste'},
    { cidade: 'Curitiba' ,uf: 'PR',regiao: 'Sul'},
    { cidade: 'Porto Alegre' ,uf: 'RS',regiao: 'Sul'},
    { cidade: 'Salvador' ,uf: 'BA',regiao: 'Nordeste'},
    { cidade: 'Fortaleza' ,uf: 'CE',regiao: 'Nordeste'},
    { cidade: 'Recife' ,uf: 'PE',regiao: 'Nordeste'},
    { cidade: 'Brasília' ,uf: 'DF',regiao: 'Centro-Oeste'},
    { cidade: 'Manaus' ,uf: 'AM',regiao: 'Norte'}
];

const catalogo = {
    Ferramentas: ['Martelo', 'Machado de Mão', 'Pá', 'Prego', 'Cimento'],
};

const hoje = new Date();
const incio = new Date(hoje.getFullYear(), hoje.getMonth() - config.meses + 1, 1);
const meses = Array.from({ length: config.meses }, (_, i) 