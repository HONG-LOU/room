import{v as I,d as w,r as R,A as $,b as n,o as d,q as f,e,w as t,i as l,f as o,B as j,C as D,D as J,F as L,G as P,H as v,u as q,x as F,I as G,k as p,J as K,K as O,L as T,M as U,t as b,N as Q,E as S,c as W}from"./index-CplolMp0.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";const B=I("Aside",{state:()=>({isCollapse:!1}),actions:{changeShow(){this.isCollapse=!this.isCollapse}}}),X=w({__name:"Aside",setup(g){const _=B(),s=R(),c=$();return(i,m)=>{const r=n("el-icon"),a=n("el-menu-item"),u=n("el-menu");return d(),f("div",{class:"aside",ref_key:"menu",ref:s},[e(u,{"default-active":o(c).path,class:"el-menu-vertical-demo",collapse:o(_).isCollapse,router:""},{default:t(()=>[e(a,{index:"/home/index",route:"/home/index"},{title:t(()=>[l("首页")]),default:t(()=>[e(r,null,{default:t(()=>[e(o(j))]),_:1})]),_:1}),e(a,{index:"/home/houseInfo",route:"/home/houseInfo"},{title:t(()=>[l("房源概况")]),default:t(()=>[e(r,null,{default:t(()=>[e(o(D))]),_:1})]),_:1}),e(a,{index:"/home/housePredict",route:"/home/housePredict"},{title:t(()=>[l("房价预测")]),default:t(()=>[e(r,null,{default:t(()=>[e(o(J))]),_:1})]),_:1}),e(a,{index:"/home/houseView",route:"/home/houseView"},{title:t(()=>[l("可视化房源")]),default:t(()=>[e(r,null,{default:t(()=>[e(o(L))]),_:1})]),_:1}),e(a,{index:"/home/user",route:"/home/user"},{title:t(()=>[l("个人信息")]),default:t(()=>[e(r,null,{default:t(()=>[e(o(P))]),_:1})]),_:1})]),_:1},8,["default-active","collapse"])],512)}}}),Y=A(X,[["__scopeId","data-v-39920e99"]]),Z=I("Header",{state:()=>({avatar:null,nickname:null,data:{uuid:localStorage.getItem("uuid")},headers:{Authorization:localStorage.getItem("token")}}),actions:{exit(){localStorage.clear(),v.push("/login")},user(){v.push("/home/user")},pwd(){v.push("/home/pwd")}}}),ee={class:"header"},te={class:"left"},ae={class:"right"},oe={class:"avatar"},ne={class:"nickname"},se=w({__name:"Header",setup(g){const _=B(),s=Z(),c=q();F(()=>{let a;const u=localStorage.getItem("userInfo");u!=null&&(a=JSON.parse(u),s.nickname=a.nick_name,a.avatar===null?s.avatar="/static/user.png":s.avatar=a.avatar)});const i=a=>{s.avatar=a.data.avatar,localStorage.setItem("avatar",a.data.avatar)},m=a=>a.type!=="image/jpeg"?(S.error("图片的格式必须是jpg"),!1):a.size/1024/1024>2?(S.error("图片的大小不能超过2MB"),!1):!0,r=G(()=>c.currentRoute.value.matched.map(a=>({path:a.path,meta:a.meta||{}})).filter(a=>a.meta.title));return(a,u)=>{const k=n("el-icon"),x=n("el-breadcrumb-item"),H=n("el-breadcrumb"),y=n("el-avatar"),N=n("el-tooltip"),V=n("el-upload"),h=n("el-dropdown-item"),z=n("el-dropdown-menu"),M=n("el-dropdown");return d(),f("div",ee,[p("div",te,[e(k,{size:"30px",onClick:o(_).changeShow},{default:t(()=>[e(o(K))]),_:1},8,["onClick"]),e(H,{"separator-icon":o(U)},{default:t(()=>[e(x,null,{default:t(()=>[l("重庆二手房系统")]),_:1}),(d(!0),f(O,null,T(r.value,(C,E)=>(d(),W(x,{key:E,to:{path:C.path}},{default:t(()=>[l(b(C.meta.title),1)]),_:2},1032,["to"]))),128))]),_:1},8,["separator-icon"])]),p("div",ae,[p("div",oe,[e(V,{class:"avatar-uploader",action:"http://127.0.0.1:8000/app/avatar/",data:o(s).data,headers:o(s).headers,name:"avatar","show-file-list":!1,"on-success":i,"before-upload":m},{default:t(()=>[e(N,{class:"box-item",effect:"dark",content:"修改头像",placement:"top-start"},{default:t(()=>[e(y,{size:40,class:"mr-3",src:o(s).avatar},null,8,["src"])]),_:1})]),_:1},8,["data","headers"])]),e(M,null,{dropdown:t(()=>[e(z,null,{default:t(()=>[e(h,{class:"dropdown-menu",onClick:o(s).user},{default:t(()=>[l("个人信息")]),_:1},8,["onClick"]),e(h,{class:"dropdown-menu",onClick:o(s).pwd},{default:t(()=>[l("修改密码")]),_:1},8,["onClick"]),e(h,{class:"dropdown-menu",onClick:o(s).exit},{default:t(()=>[l("退出登录")]),_:1},8,["onClick"])]),_:1})]),default:t(()=>[p("div",ne,b(o(s).nickname),1)]),_:1}),e(k,null,{default:t(()=>[e(o(Q))]),_:1})])])}}}),le={class:"common-layout"},re=w({__name:"Home",setup(g){return(_,s)=>{const c=n("el-aside"),i=n("el-header"),m=n("router-view"),r=n("el-main"),a=n("el-container");return d(),f("div",le,[e(a,null,{default:t(()=>[e(c,{width:"auto"},{default:t(()=>[e(Y)]),_:1}),e(a,null,{default:t(()=>[e(i,null,{default:t(()=>[e(se)]),_:1}),e(r,null,{default:t(()=>[e(m)]),_:1})]),_:1})]),_:1})])}}}),de=A(re,[["__scopeId","data-v-1098b4ee"]]);export{de as default};