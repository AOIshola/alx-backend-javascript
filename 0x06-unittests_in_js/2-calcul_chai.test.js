const { expect } = require('chai')
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return 6 when a = 1.4 and b = 4.5', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });

        it('should return 0 when a = -1.4 and b = 1.4', () => {
            expect(calculateNumber('SUM', -1.4, 1.4)).to.equal(0);
        });
    });

    describe('SUBTRACT', () => {
        it('should return -4 when a = 1.4 and b = 4.5', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });

        it('should return 4 when a = 5.6 and b = 2.1', () => {
            expect(calculateNumber('SUBTRACT', 5.6, 2.1)).to.equal(4);
        });
    });

    describe('DIVIDE', () => {
        it('should return 0.2 when a = 1.4 and b = 4.5', () => {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('should return Error when a = 1.4 and b = 0', () => {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });

        it('should return 2.25 when a = 8.5 and b = 3.5', () => {
            expect(calculateNumber('DIVIDE', 8.5, 3.5)).to.equal(2.25);
        });
    });
});
