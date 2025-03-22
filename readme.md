# amount-formatter

A lightweight package to format amounts to currency format and convert back to numeric values.

## Installation

```bash
npm install amount-formatter
```

or if you use yarn:

```bash
yarn add amount-formatter
```

## Features

- Convert numbers to currency format 
- Convert currency formatted strings to numeric values

## Usage

### currency()

Converts a number or string to currency format:

```typescript
import { currency } from 'amount-formatter';

currency(1000);         // "1,000.00"
currency('1000');       // "1,000.00"
currency('1,000');      // "1,000.00"
currency('1000.5');     // "1,000.50"
currency('$1,000.50');  // "1,000.50"
```

### double()

Converts a currency formatted string to a number:

```typescript
import { double } from 'amount-formatter';

double(1000);          // 1000
double('1000');        // 1000
double('1,000');       // 1000
double('$1,000.50');   // 1000.5
```

## API

### currency(value: number | string): string

Formats a number or string to currency format.

**Parameters:**
- `value`: The value to format. Can be a number or a string.

**Returns:**
- A string in currency format (e.g., "1,000.00").

### double(value: number | string): number

Converts a currency formatted string to a number.

**Parameters:**
- `value`: The value to convert. Can be a number or a string.

**Returns:**
- A number.

## Examples

```typescript
import { currency, double } from 'amount-formatter';

// Format a number to currency
const price = 1234.5;
const formattedPrice = currency(price);
console.log(formattedPrice); // "1,234.50"

// Convert a string to number
const priceString = "$1,234.50";
const numberPrice = double(priceString);
console.log(numberPrice); // 1234.5

// Format a string that already has currency format
console.log(currency("$1,234.50")); // "1,234.50"
```

## Compatibility

This package works in:
- Node.js
- Modern browsers

## License

MIT