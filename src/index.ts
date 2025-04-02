export const currency = (value?: number | string | null, options?: { truncate?: number }): string => {
    if (value === undefined || value === null || value === '') {
        return '';
    }

    let v: string = typeof value === 'number' ? value.toString() : value;
    v = v.replace(/[^0-9.-]/g, '');

    let num = Number(v);
    if (isNaN(num)) return '';

    if (options?.truncate !== undefined) {
        const factor = Math.pow(10, options.truncate);
        num = Math.trunc(num * factor) / factor;
    }

    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: options?.truncate ?? 2,
        maximumFractionDigits: options?.truncate ?? 2,
    });

    return formatter.format(num);
};

export const double = (value: number | string): number => {
    let v: number = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.-]/g, '')) : value;

    return v;
};
