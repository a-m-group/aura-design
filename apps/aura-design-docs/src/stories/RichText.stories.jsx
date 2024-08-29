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
        text: `::: custom-ui <img src='http://localhost:6006/card_bg.png'/>:::`,
        theme: 'dark',
    },
};

export default {
    title: 'Pro Components/RichText',
    tags: ['autodocs'],
    component: <ar-rich-text />,
    argTypes: {
        theme: { control: 'select', options: ['light', 'dark'] },
        text: { control: 'text' },
    },
};
