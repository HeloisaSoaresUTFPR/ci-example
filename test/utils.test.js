const { gerarNumeroAleatorio, acharCaracter } = require('../lib/utils');

describe('Utils', () => {
    describe('gerarNumeroAleatorio', () => {
        test('fim nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio(20, -5))
                .toBe(-1);
        });
    });
    
    describe('gerarNumeroAleatorio', () => {
        test('Inicio não pode ser marior que fim', () => {
            expect(gerarNumeroAleatorio(20, 18))
                .toBe(-1);
        });
    });

    describe('gerarNumeroAleatorio', () => {
        test('Retorna valores', () => {
            expect(gerarNumeroAleatorio(2, 3))
                .toBe(2);
        });
    });

    describe('acharCaracter', () => {
        test('comprimento invalido', () => {
            expect(acharCaracter(-4, 'abcde', 'c'))
                .toBe('comprimento invalido');
        });
    });

    describe('acharCaracter', () => {
        test('comprimento diferente', () => {
            expect(acharCaracter(5, 'abcd', 'c'))
                .toBe('comprimento fornecido diferente do comprimento real');
        });
    });

    describe('acharCaracter', () => {
        test('caracter encontrado', () => {
            expect(acharCaracter(4, 'abcd', 'c'))
                .toBe(0);
        });
    });

});