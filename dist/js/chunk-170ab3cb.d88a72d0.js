(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-170ab3cb"],{8239:function(t,e,s){},"8e02":function(t,e,s){"use strict";s.r(e);var c=s("7a23");const l=t=>(Object(c["A"])("data-v-19e75e13"),t=t(),Object(c["y"])(),t),n={class:"container-fluid h-custom fadeInDown"},i={class:"container py-5 h-100"},a=l(()=>Object(c["g"])("div",{class:"card bg-dark text-white",style:{"border-radius":"1rem"}},[Object(c["g"])("div",{class:"card-body p-5 text-center"},[Object(c["g"])("h3",null,[Object(c["g"])("strong",null,"Todo List")])])],-1)),r={class:"card bg-dark mt-5 p-5"},o={class:"card-body"},b={class:"list row"},d={class:"col-md-8"},u={class:"input-group mb-3"},j={class:"input-group-append"},O={class:"col-md-2"},g={class:"col-md-2"},h={class:"col-md-6 p-4"},p=l(()=>Object(c["g"])("h4",{class:"text-white"},"List",-1)),k={class:"list-group"},v=["onClick"],m={class:"col-md-6 p-4 text-white"},T=l(()=>Object(c["g"])("h4",null,"Detail",-1)),f={key:0,class:"p-4 custom-border"},x=l(()=>Object(c["g"])("h4",null,"Task",-1)),y=l(()=>Object(c["g"])("label",null,[Object(c["g"])("strong",null,"Title:")],-1)),w=l(()=>Object(c["g"])("label",null,[Object(c["g"])("strong",null,"Description:")],-1)),A=l(()=>Object(c["g"])("label",null,[Object(c["g"])("strong",null,"Status:")],-1)),L={class:"d-flex justify-content-end"},S={key:1},C=l(()=>Object(c["g"])("br",null,null,-1)),I=l(()=>Object(c["g"])("p",null,"Please click on a Task...",-1)),D=[C,I];function H(t,e,s,l,C,I){const H=Object(c["E"])("router-link"),_=Object(c["E"])("font-awesome-icon");return Object(c["x"])(),Object(c["f"])("div",n,[Object(c["g"])("div",i,[a,Object(c["g"])("div",r,[Object(c["g"])("div",o,[Object(c["g"])("div",b,[Object(c["g"])("div",d,[Object(c["g"])("div",u,[Object(c["R"])(Object(c["g"])("input",{type:"text",class:"form-control",onKeyup:e[0]||(e[0]=Object(c["S"])((...t)=>I.searchTitle&&I.searchTitle(...t),["enter"])),placeholder:"Search by title","onUpdate:modelValue":e[1]||(e[1]=t=>C.title=t)},null,544),[[c["L"],C.title]]),Object(c["g"])("div",j,[Object(c["g"])("button",{class:"btn btn-success",type:"button",onClick:e[2]||(e[2]=(...t)=>I.searchTitle&&I.searchTitle(...t))}," Search ")])])]),Object(c["g"])("div",O,[Object(c["i"])(H,{to:"/newTask",class:"btn btn-success"},{default:Object(c["Q"])(()=>[Object(c["h"])("New Task")]),_:1})]),Object(c["g"])("div",g,[C.todoList.length?(Object(c["x"])(),Object(c["f"])("button",{key:0,class:"btn btn-danger",onClick:e[3]||(e[3]=(...t)=>I.removeAllTasks&&I.removeAllTasks(...t))}," Remove All ")):Object(c["e"])("",!0)]),Object(c["g"])("div",h,[p,Object(c["g"])("ul",k,[(Object(c["x"])(!0),Object(c["f"])(c["a"],null,Object(c["D"])(C.todoList,(t,e)=>(Object(c["x"])(),Object(c["f"])("li",{class:Object(c["r"])(["list-group-item",{active:e==C.currentIndex}]),key:e,onClick:s=>I.setActiveTutorial(t,e)},[Object(c["h"])(Object(c["H"])(t.title)+" ",1),t.completed?(Object(c["x"])(),Object(c["d"])(_,{key:0,icon:"check"})):Object(c["e"])("",!0)],10,v))),128))])]),Object(c["g"])("div",m,[T,C.currentTask?(Object(c["x"])(),Object(c["f"])("div",f,[x,Object(c["g"])("div",null,[y,Object(c["h"])(" "+Object(c["H"])(C.currentTask.title),1)]),Object(c["g"])("div",null,[w,Object(c["h"])(" "+Object(c["H"])(C.currentTask.description),1)]),Object(c["g"])("div",null,[A,Object(c["h"])(" "+Object(c["H"])(C.currentTask.completed?"Completed":"Not Completed"),1)]),Object(c["g"])("div",L,[Object(c["i"])(H,{to:"/editTask/"+C.currentTask.id,class:"btn btn-warning m-2"},{default:Object(c["Q"])(()=>[Object(c["h"])("Edit")]),_:1},8,["to"])])])):(Object(c["x"])(),Object(c["f"])("div",S,D))])])])])])])}var _={name:"tutorials-list",data(){return{todoList:[],currentTask:null,currentIndex:-1,title:""}},methods:{retrieveTutorials(){this.$store.dispatch("task/getAll").then(t=>{this.todoList=t.data},t=>{this.content=t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})},refreshList(){this.retrieveTutorials(),this.currentTask=null,this.currentIndex=-1},setActiveTutorial(t,e){this.currentTask=t,this.currentIndex=t?e:-1},removeAllTasks(){this.$store.dispatch("task/deleteAll").then(()=>{this.refreshList()},t=>{this.content=t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})},searchTitle(){this.$store.dispatch("task/findByTitle",this.title).then(t=>{this.todoList=t.data,this.setActiveTutorial(null)},t=>{this.content=t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})}},mounted(){this.retrieveTutorials()}},E=(s("c224"),s("6b0d")),$=s.n(E);const J=$()(_,[["render",H],["__scopeId","data-v-19e75e13"]]);e["default"]=J},c224:function(t,e,s){"use strict";s("8239")}}]);
//# sourceMappingURL=chunk-170ab3cb.d88a72d0.js.map