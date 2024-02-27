import{g,t as m}from"./web-eaebe373.js";const v=m("<ar-chat-bubble>",!0,!1),w={title:"Example/ChatBubble",tags:["autodocs"],component:(()=>{const o=v();return o._$owner=g(),o})(),argTypes:{role:{control:"text"},content:{control:"text"},loading:{control:"boolean"},"loading-text":{control:"text"},"image-url":{control:"text"},"show-avatar":{control:"boolean"},avatar:{control:"text"},"avatar-type":{control:"text"}}},a={args:{role:"assistant",content:"Hello! How can I assist you today?",loading:!1,"show-avatar":!0,"avatar-type":"icon"}},t={args:{role:"user",content:"Hello! Nice to meet you",loading:!1,"show-avatar":!0,"avatar-type":"icon"}},e={args:{role:"assistant",content:"",loading:!0,"loading-text":"Please wait a moment","show-avatar":!0,"avatar-type":"icon"}};var r,n,s;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    role: 'assistant',
    content: 'Hello! How can I assist you today?',
    loading: false,
    'show-avatar': true,
    'avatar-type': 'icon'
  }
}`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var l,c,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    role: 'user',
    content: 'Hello! Nice to meet you',
    loading: false,
    'show-avatar': true,
    'avatar-type': 'icon'
  }
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var u,d,p;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    role: 'assistant',
    content: '',
    loading: true,
    'loading-text': 'Please wait a moment',
    'show-avatar': true,
    'avatar-type': 'icon'
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const x=["Assistant","User","Loading"];export{a as Assistant,e as Loading,t as User,x as __namedExportsOrder,w as default};
