export const css = (strings: TemplateStringsArray, ...values: (string | number | undefined)[]) => {
    const cssString = strings.reduce((acc, str, i) => {
        return acc + str + (isTruthyStrict(values[i]) ? values[i] : '');
    }, '');
    return cssString;
};
const isTruthyStrict = (value: unknown): boolean => {
    return value === 0 ? true : Boolean(value);
};
export const setupFontSymbol = (
    symbolLink = 'https://at.alicdn.com/t/c/font_3977168_cq7saidncjg.js',
    description = 'font-symbol',
) => {
    if (document.querySelector(`script[data-description="${description}"]`)) {
        return;
    }
    const script = document.createElement('script');
    script.dataset.description = description;
    script.src = symbolLink;
    document.head.appendChild(script);
};
