import{H as e,A as t,R as n,a as l}from"./vendor.8130cf78.js";const a=({IDL:e})=>{const t=e.Rec(),n=e.Text,l=e.Text,a=e.Record({canister:l});t.fill(e.Opt(e.Tuple(e.Tuple(n,a),t)));const r=t;return e.Service({getAll:e.Func([],[r],["query"]),insert:e.Func([n,a],[],[]),lookup:e.Func([n],[e.Opt(a)],["query"]),whoami:e.Func([],[e.Principal],[])})},r=new e({host:"http://localhost:8000"}),c=t.createActor(a,{agent:r,canisterId:"ryjl3-tyaaa-aaaaa-aaaba-cai"});function u(){return n.createElement("div",{className:"App"},n.createElement("header",{className:"App-header"},n.createElement("img",{src:"/assets/logo.edbebe7a.svg",className:"App-logo",alt:"logo"}),n.createElement("p",null),n.createElement("div",null,n.createElement("h1",null,"Internet Computer Cafe"),n.createElement("p",null,"Get a free ic.cafe subdomain!"),n.createElement("div",null,n.createElement("table",null,n.createElement("tr",null,n.createElement("td",null,"Sub Domain:"),n.createElement("td",null,n.createElement("input",{required:!0,id:"newEntryName"}))),n.createElement("tr",null,n.createElement("td",null,"Canister ID:"),n.createElement("td",null,n.createElement("input",{required:!0,id:"newEntryCanister"})))),n.createElement("button",{onClick:()=>(async()=>{let e=document.getElementById("newEntryName").value,t=document.getElementById("newEntryCanister").value;c.insert(e,{canister:t}),document.getElementById("newEntryName").value="",document.getElementById("newEntryCanister").value=""})()},"Claim")),n.createElement("div",null,"Lookup Name: ",n.createElement("input",{id:"lookupName"})," ",n.createElement("button",{onClick:()=>(async()=>{let e=document.getElementById("lookupName").value;c.lookup(e).then((t=>{let n=t.length>0?t[0]:null;null==n&&(n={canister:""}),document.getElementById("newEntryName").value=e,document.getElementById("newEntryCanister").value=n.canister}))})()},"Lookup")))))}window.global=window,l.render(n.createElement(n.StrictMode,null,n.createElement(u,null)),document.getElementById("root"));