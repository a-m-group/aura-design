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
            `<pre>
                <div class="title-chip hljs">
                    <div class="lang-chip">
                        <span class="lang">${lang}</span>
                        ${
                            lang === 'html'
                                ? '<ar-icon class="browser" name="browser"></ar-icon>'
                                : ''
                        }
                    </div>
                    <ar-button class="copy" type="text">copy</ar-button>
                </div>`,
        );
    };
}

export function extractTitle(info: string) {
    return info.match(/\[(.*)\]/)?.[1] || extractLang(info) || 'txt';
}

const extractLang = (info: string) => {
    return info.trim().replace(/:(no-)?line-numbers({| |$).*/, '');
};
