export const Default = {
    args: {
        text: `
动态规划实现爬楼梯函数
\`\`\`javascript
function climbStairsDP(n) {
    if (n === 1) {
        return 1;
    }
    
    let dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}

// 测试
console.log(climbStairsDP(4)); // 输出：5
\`\`\`
        `,
        theme: 'light',
    },
};

export const CustomUI = {
    args: {
        text: `::: custom-ui <ar-image-card style="width: 224px; height: 336px;" title="英语老师" description="和英语老师对话，老师会纠正您的语法错误、拼写错误和事实错误。" image-url="/card_bg.png"></ar-image-card> \n:::\n`,
        theme: 'dark',
    },
};

export default {
    title: 'AI/MarkdownRender',
    tags: ['autodocs'],
    component: <ar-markdown-render />,
    argTypes: {
        theme: { control: 'select', options: ['light', 'dark'] },
        text: { control: 'text' },
    },
};
