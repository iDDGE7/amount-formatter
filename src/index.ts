export const currency = (value?: number | string | null): string => {
    if (value === undefined || value === null || value === '') {
        return '';
    }

    let v: string = typeof value === 'number' ? value.toString() : value;
    v = v.replace(/[^0-9.-]/g, '');

    const num = Number(v);
    if (isNaN(num)) return '';

    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return formatter.format(num);
};

export const double = (value: number | string): number => {
    let v: number = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.-]/g, '')) : value;

    return v;
};
