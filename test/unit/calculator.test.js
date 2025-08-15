const Calculator = require('../../src/calculator');

describe('Calculator', () => {
  let calculator;

  // This runs before each test
  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add()', () => {
    it('should add two numbers correctly', () => {
      expect(calculator.add(2, 3)).toBe(5);
      expect(calculator.add(-1, 1)).toBe(0);
      expect(calculator.add(0, 0)).toBe(0);
    });

    it('should throw an error for non-number inputs', () => {
      expect(() => calculator.add('2', 3)).toThrow('Both arguments must be numbers');
      expect(() => calculator.add(2, '3')).toThrow('Both arguments must be numbers');
      expect(() => calculator.add('a', 'b')).toThrow('Both arguments must be numbers');
    });
  });

  describe('subtract()', () => {
    it('should subtract two numbers correctly', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
      expect(calculator.subtract(10, -5)).toBe(15);
    });
  });

  describe('multiply()', () => {
    it('should multiply two numbers correctly', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
      expect(calculator.multiply(-2, 3)).toBe(-6);
      expect(calculator.multiply(0, 5)).toBe(0);
    });
  });

  describe('divide()', () => {
    it('should divide two numbers correctly', () => {
      expect(calculator.divide(6, 3)).toBe(2);
      expect(calculator.divide(5, 2)).toBe(2.5);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Division by zero');
    });
  });

  describe('square()', () => {
    it('should return the square of a number asynchronously', async () => {
      await expect(calculator.square(4)).resolves.toBe(16);
      await expect(calculator.square(-3)).resolves.toBe(9);
    });
  });

  // Test suite for edge cases
  describe('Edge cases', () => {
    it('should handle decimal numbers correctly', () => {
      expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
      expect(calculator.multiply(0.1, 0.2)).toBeCloseTo(0.02);
    });
  });
});
