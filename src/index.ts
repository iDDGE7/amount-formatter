export const currency = (value: number | string): string => {
    let v: string = typeof value === 'number' ? value.toString() : value;
    v = v.replace(/[^0-9.-]/g, '');

    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return formatter.format(Number(v));
};

export const double = (value: number | string): number => {
    let v: number = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.-]/g, '')) : value;

    return v;
};