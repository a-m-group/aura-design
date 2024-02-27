import{g as r,t as s}from"./web-eaebe373.js";const _=s("<ar-input>",!0,!1),g=s('<ar-input><ar-icon name="code" slot="prefix">',!0,!1),$=s('<ar-input><ar-icon name="send" slot="suffix">',!0,!1),v={title:"Example/Input",tags:["autodocs"],component:(()=>{const e=_();return e._$owner=r(),e})(),argTypes:{value:{control:"text"},placeholder:{control:"text"},type:{control:"select",options:["text","password"]}}},t={args:{value:"",placeholder:"",type:"text",onChange:e=>{console.log(e)}}},h=()=>(()=>{const e=g(),a=e.firstChild;return e._$owner=r(),a._$owner=r(),e})(),n=h.bind({}),w=()=>(()=>{const e=$(),a=e.firstChild;return e._$owner=r(),a._$owner=r(),e})(),o=w.bind({});var c,l,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    value: '',
    placeholder: '',
    type: 'text',
    onChange: event => {
      console.log(event);
    }
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,i,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <ar-input>
            <ar-icon name="code" slot="prefix"></ar-icon>
        </ar-input>;
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,f,x;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <ar-input>
            <ar-icon name="send" slot="suffix"></ar-icon>
        </ar-input>;
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const y=["Default","Prefix","Suffix"];export{t as Default,n as Prefix,o as Suffix,y as __namedExportsOrder,v as default};
