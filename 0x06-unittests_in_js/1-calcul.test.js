const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return 6 when a = 1.4 and b = 4.5', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });

        it('should return 0 when a = -1.4 and b = 1.4', () => {
            assert.strictEqual(calculateNumber('SUM', -1.4, 1.4), 0);
        });
    });

    describe('SUBTRACT', () => {
        it('should return -4 when a = 1.4 and b = 4.5', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });

        it('should return 4 when a = 5.6 and b = 2.1', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 5.6, 2.1), 4);
        });
    });

    describe('DIVIDE', () => {
        it('should return 0.2 when a = 1.4 and b = 4.5', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return Error when a = 1.4 and b = 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });

        it('should return 2 when a = 8.5 and b = 3.5', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 8.5, 3.5), 2.25);
        });
    });
});
