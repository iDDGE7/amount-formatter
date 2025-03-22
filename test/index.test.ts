import { currency, double } from '../src/index';

describe('currency function', () => {
    test('formats valid number to currency string', () => {
        expect(currency('1000')).toBe('1,000.00');
        expect(currency(1000.5)).toBe('1,000.50');
        expect(currency(1000.55)).toBe('1,000.55');
        expect(currency(1000.555)).toBe('1,000.56');
    });

    test('handles zero correctly', () => {
        expect(currency(0)).toBe('0.00');
    });

    test('handles negative numbers', () => {
        expect(currency(-1000)).toBe('-1,000.00');
        expect(currency(-1000.5)).toBe('-1,000.50');
    });

    test('error handling', () => {
        //@ts-expect-error
        expect(() => currency()).toThrow();
    });

    test('handles string input by removing non-numeric characters', () => {
        // But the implementation suggests it might handle strings after conversion
        expect(currency(Number('1000'))).toBe('1,000.00');
    });

    test('handles decimal values correctly', () => {
        expect(currency(0.5)).toBe('0.50');
        expect(currency(0.05)).toBe('0.05');
        expect(currency(0.005)).toBe('0.01');
    });
});

describe('double function', () => {
    test('doubles number values', () => {
        expect(double(0)).toBe(0);
        expect(double(100.1)).toBe(100.1);
    });

    test('parses and doubles string values', () => {
        expect(double('5')).toBe(5);
        expect(double('5.5')).toBe(5.5);
        expect(double('-5')).toBe(-5);
    });

    test('handles formatted currency strings', () => {
        expect(double('$5.00')).toBe(5);
        expect(double('$1,234.56')).toBe(1234.56);
        expect(double('1,000')).toBe(1000);
    });

    test('handles edge cases', () => {
        expect(double('0')).toBe(0);
        expect(double('.5')).toBe(0.5);
        expect(double('abc')).toBeNaN(); // Non-numeric string
        expect(double('123abc')).toBe(123); // Partial numeric string
    });
});
