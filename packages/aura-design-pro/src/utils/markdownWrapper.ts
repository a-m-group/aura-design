import type MarkdownIt from 'markdown-it';

export default function markdownWrapper(md: MarkdownIt) {
    const fence = md.renderer.rules.fence;
    if (!fence) return;
    md.renderer.rules.fence = (...args) => {
        const [tokens, idx] = args;
        const token = tokens[idx];
        // remove title from info
        token.info = token.info.replace(/\[.*\]/, '');

        const lang = extractLang(token.info);
        const rawCode = fence(...args);
        return rawCode.replace(
            '<pre>',
            `<pre style="position: relative"><span class="lang">${lang}</span><ar-button class="copy" type="outline" shape="round">copy</ar-button>`,
        );
    };
}

export function extractTitle(info: string) {
    return info.match(/\[(.*)\]/)?.[1] || extractLang(info) || 'txt';
}

const extractLang = (info: string) => {
    return info.trim().replace(/:(no-)?line-numbers({| |$).*/, '');
};
