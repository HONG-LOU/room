import{d as B,r as V,a as b,c as K,w as l,u as A,b as g,o as N,e as s,f as v,g as M,h as G,l as L,i as y,E as I,p as D,j,k as c,m as H,n as P,t as Q,q as W,s as q}from"./index-CplolMp0.js";import{r as F}from"./request-IMNDnQFT.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";const O="/assets/img-BM63cqUL.png";class k extends Error{}k.prototype.name="InvalidTokenError";function X(r){return decodeURIComponent(atob(r).replace(/(.)/g,(a,e)=>{let i=e.charCodeAt(0).toString(16).toUpperCase();return i.length<2&&(i="0"+i),"%"+i}))}function Y(r){let a=r.replace(/-/g,"+").replace(/_/g,"/");switch(a.length%4){case 0:break;case 2:a+="==";break;case 3:a+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return X(a)}catch{return atob(a)}}function Z(r,a){if(typeof r!="string")throw new k("Invalid token specified: must be a string");a||(a={});const e=a.header===!0?0:1,i=r.split(".")[e];if(typeof i!="string")throw new k(`Invalid token specified: missing part #${e+1}`);let m;try{m=Y(i)}catch(f){throw new k(`Invalid token specified: invalid base64 for part #${e+1} (${f.message})`)}try{return JSON.parse(m)}catch(f){throw new k(`Invalid token specified: invalid json for part #${e+1} (${f.message})`)}}const ee=r=>(D("data-v-29ad98c9"),r=r(),j(),r),oe=ee(()=>c("h1",null,"登录",-1)),se=B({__name:"LoginForm",props:{url:{}},setup(r){const a=V(),e=b({username:"",password:""}),i=A(),m=r,f=b({username:[{required:!0,message:"请输入账号",trigger:"change"},{min:1,max:16,message:"输入的长度必须在1到16之间",trigger:"change"}],password:[{required:!0,message:"请输入密码",trigger:"change"}]}),x=async p=>{p&&await p.validate((d,_)=>{d?C():console.log("提交错误!",_)})},U=p=>{p&&p.resetFields()},C=async()=>{const p=await F.post(m.url,{username:e.username,password:e.password});if(F.defaults.baseURL,p.data.code===200){const d=p.data.token,_=Z(d);localStorage.setItem("token",d),localStorage.setItem("userInfo",JSON.stringify(_.user.userInfo)),localStorage.setItem("uuid",_.user.userInfo.uuid),localStorage.setItem("username",_.user.username),localStorage.setItem("role",_.user.role),await i.push({path:"/home"})}else I.error(`${p.data.msg}`)};return(p,d)=>{const _=g("el-input"),$=g("el-form-item"),E=g("el-button"),J=g("el-form");return N(),K(J,{ref_key:"ruleFormRef",ref:a,style:{"max-width":"600px"},model:e,rules:f,"label-width":"auto",class:"login-form"},{default:l(()=>[oe,s($,{prop:"username"},{default:l(()=>[s(_,{modelValue:e.username,"onUpdate:modelValue":d[0]||(d[0]=w=>e.username=w),type:"text",placeholder:"请输入账号","prefix-icon":v(M)},null,8,["modelValue","prefix-icon"])]),_:1}),s($,{prop:"password"},{default:l(()=>[s(_,{modelValue:e.password,"onUpdate:modelValue":d[1]||(d[1]=w=>e.password=w),type:"password",onKeydown:G(C,["enter"]),placeholder:"请输入密码","show-password":"","prefix-icon":v(L)},null,8,["modelValue","prefix-icon"])]),_:1}),s($,null,{default:l(()=>[s(E,{type:"primary",onClick:d[2]||(d[2]=w=>x(a.value))},{default:l(()=>[y("登录")]),_:1}),s(E,{onClick:d[3]||(d[3]=w=>U(a.value))},{default:l(()=>[y("重置")]),_:1})]),_:1})]),_:1},8,["model","rules"])}}}),te=T(se,[["__scopeId","data-v-29ad98c9"]]),re=r=>(D("data-v-b6130d57"),r=r(),j(),r),ae=re(()=>c("h1",null,"注册",-1)),le=B({__name:"RegisterForm",props:{url:{}},setup(r){const a=V(),e=b({username:"",password:"",check_password:"",phone:"",email:"",emailCode:""}),i=V(!1),m=V(60),f=V("获取验证码"),x=r,U=async n=>{n&&(await n.validate((o,t)=>{o?p():console.log("error submit!",t)}),n.resetFields())},C=n=>{n&&n.resetFields()},p=async()=>{const n=await F.post(x.url,{username:e.username,password:e.password,phone:e.phone,email:e.email,emailCode:e.emailCode});n.data.code===200?I.success("注册成功"):I.error(`${n.data.msg}`)},d=async()=>{i.value=!0;const n=()=>{if(m.value>0)return f.value=`${m.value--}秒后重新获取`;i.value=!1,f.value="获取验证码",m.value=60,console.log(1),clearInterval(t),m.value--};(await F.post("/app/email/",{email:e.email})).data.msg==="发送成功"?I.success("验证码发送成功"):I.error("发送失败,请重新发送");const t=setInterval(n,1e3)},w=b({username:[{min:1,max:16,message:"输入的长度必须在1到16之间",trigger:"change"},{validator:(n,o,t)=>{o===""?t(new Error("账号不能为空")):/^\d+$/.test(o)?t():t(new Error("账号只能包含数字，不能包含字符"))},trigger:"change"}],password:[{required:!0,message:"密码不能为空",trigger:"change"}],check_password:[{validator:(n,o,t)=>{o===""?t(new Error("请重新输入密码")):o!==e.password?t(new Error("2次输入的密码不一致!")):t()},trigger:"change"}],phone:[{min:11,max:11,message:"请输入正确的手机号",trigger:"change"},{validator:(n,o,t)=>{o===""?t(new Error("手机号不能为空")):/^\d+$/.test(o)?t():t(new Error("手机号只能包含数字，不能包含字符"))},trigger:"change"}],email:[{validator:(n,o,t)=>{o===""?t(new Error("邮箱不能为空")):/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)?t():t(new Error("请输入正确的邮箱"))},trigger:"change"}],emailCode:[{required:!0,message:"验证码不能为空",trigger:"change"}]});return(n,o)=>{const t=g("el-input"),h=g("el-form-item"),R=g("el-button"),z=g("el-form");return N(),K(z,{ref_key:"registerFormRef",ref:a,style:{"max-width":"600px"},model:e,rules:w,"label-width":"auto",class:"demo-ruleForm register-form"},{default:l(()=>[ae,s(h,{prop:"username"},{default:l(()=>[s(t,{modelValue:e.username,"onUpdate:modelValue":o[0]||(o[0]=u=>e.username=u),type:"text",placeholder:"输入账号","prefix-icon":v(M)},null,8,["modelValue","prefix-icon"])]),_:1}),s(h,{prop:"password"},{default:l(()=>[s(t,{modelValue:e.password,"onUpdate:modelValue":o[1]||(o[1]=u=>e.password=u),type:"password",placeholder:"输入密码","show-password":"","prefix-icon":v(L)},null,8,["modelValue","prefix-icon"])]),_:1}),s(h,{prop:"check_password"},{default:l(()=>[s(t,{modelValue:e.check_password,"onUpdate:modelValue":o[2]||(o[2]=u=>e.check_password=u),type:"password",placeholder:"重新输入密码","show-password":"","prefix-icon":v(L)},null,8,["modelValue","prefix-icon"])]),_:1}),s(h,{prop:"phone"},{default:l(()=>[s(t,{modelValue:e.phone,"onUpdate:modelValue":o[3]||(o[3]=u=>e.phone=u),type:"text",placeholder:"输入电话","prefix-icon":v(H)},null,8,["modelValue","prefix-icon"])]),_:1}),s(h,{prop:"email"},{default:l(()=>[s(t,{modelValue:e.email,"onUpdate:modelValue":o[4]||(o[4]=u=>e.email=u),type:"text",placeholder:"输入邮箱","prefix-icon":v(P)},null,8,["modelValue","prefix-icon"])]),_:1}),s(h,{prop:"emailCode"},{default:l(()=>[s(t,{modelValue:e.emailCode,"onUpdate:modelValue":o[5]||(o[5]=u=>e.emailCode=u),type:"text",placeholder:"邮箱验证码"},{append:l(()=>[s(R,{disabled:i.value,class:"email",onClick:d},{default:l(()=>[y(Q(f.value),1)]),_:1},8,["disabled"])]),_:1},8,["modelValue"])]),_:1}),s(h,null,{default:l(()=>[s(R,{type:"primary",onClick:o[6]||(o[6]=u=>U(a.value))},{default:l(()=>[y("注册")]),_:1}),s(R,{onClick:o[7]||(o[7]=u=>C(a.value))},{default:l(()=>[y("重置")]),_:1})]),_:1})]),_:1},8,["model","rules"])}}}),ne=T(le,[["__scopeId","data-v-b6130d57"]]),S=r=>(D("data-v-2e539a49"),r=r(),j(),r),ie={class:"left-container"},de=S(()=>c("h1",null,"重庆房源系统",-1)),ue=S(()=>c("img",{src:O},null,-1)),pe={class:"right-container"},ce={class:"register"},me=S(()=>c("h1",null,"重庆房源系统",-1)),fe=S(()=>c("img",{src:O},null,-1)),_e={class:"form"},ge=B({__name:"Login",setup(r){const a=V(!1),e=()=>{a.value=!0},i=()=>{a.value=!1};return(m,f)=>{const x=g("el-button");return N(),W("div",{class:q({container:!0,"sign-up-model":a.value})},[c("div",ie,[c("div",{class:"login",onClick:e},[de,s(x,{type:"primary"},{default:l(()=>[y("去登录")]),_:1})]),ue]),c("div",pe,[c("div",ce,[me,s(x,{type:"primary",onClick:i},{default:l(()=>[y("去注册")]),_:1})]),fe]),c("div",_e,[s(te,{class:q({"sign-up-model":a.value}),url:"/app/login/"},null,8,["class"]),s(ne,{class:q({"sign-up-model":a.value}),url:"/app/register/"},null,8,["class"])])],2)}}}),ye=T(ge,[["__scopeId","data-v-2e539a49"]]);export{ye as default};
