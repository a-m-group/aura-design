export const css = (strings: TemplateStringsArray, ...values: (string | number | undefined)[]) => {
    const cssString = strings.reduce((acc, str, i) => {
        return acc + str + (values[i] || '');
    }, '');
    return cssString;
};
