(this.webpackJsonplabenuser=this.webpackJsonplabenuser||[]).push([[0],{26:function(e,n,t){e.exports=t(50)},31:function(e,n,t){},49:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(22),i=t.n(o),c=(t(31),t(4)),l=t(5),u=t(7),s=t(6),h=t(2),f=t(8),m=t.n(f),p=t(3);function d(){var e=Object(h.a)(["\n    border-radius: 20px;\n    width: 80px;\n    justify-self: center;\n"]);return d=function(){return e},e}function v(){var e=Object(h.a)(["\n    display: grid;\n    gap: 8px;\n    justify-content: center;\n    \n"]);return v=function(){return e},e}var g=p.a.div(v()),b=p.a.button(d()),E=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={nameValue:"",emailValue:""},e.onChangeName=function(n){e.setState({nameValue:n.target.value})},e.onChangeEmail=function(n){e.setState({emailValue:n.target.value})},e.onClickCriarUser=function(){var n={name:e.state.nameValue,email:e.state.emailValue};m.a.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",n,{headers:{Authorization:"nathalia-costa-julian"}}).then((function(e){window.alert("Usu\xe1rio criado com sucesso!")})).catch((function(e){console.log(e.response),window.alert("Erro ao criar usu\xe1rio!")})),e.setState({nameValue:"",emailValue:""})},e}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home"),r.a.createElement(g,null,r.a.createElement("label",null,"Nome: "),r.a.createElement("input",{placeholder:"Nome",onChange:this.onChangeName,value:this.state.nameValue}),r.a.createElement("label",null,"Email: "),r.a.createElement("input",{placeholder:"Email",onChange:this.onChangeEmail,value:this.state.emailValue}),r.a.createElement(b,{onClick:this.onClickCriarUser},"Salvar")))}}]),t}(r.a.Component);function j(){var e=Object(h.a)(["\n    width: 25px;\n    height: 25px;\n    border-radius: 10px;\n"]);return j=function(){return e},e}function w(){var e=Object(h.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n"]);return w=function(){return e},e}function O(){var e=Object(h.a)(["\n    display: grid;\n    justify-content: center;\n"]);return O=function(){return e},e}var y=p.a.div(O()),x=p.a.div(w()),C=p.a.button(j()),k=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={usuarios:[]},e.pegarUser=function(){m.a.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{headers:{Authorization:"nathalia-costa-julian"}}).then((function(n){e.setState({usuarios:n.data})})).catch((function(e){console.log(e.response)}))},e.onClickDelete=function(n){m.a.delete("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/".concat(n),{headers:{Authorization:"nathalia-costa-julian"}}).then((function(n){window.alert("Usu\xe1rio deletado"),e.pegarUser()})).catch((function(e){window.alert("Deu erro")}))},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.pegarUser()}},{key:"render",value:function(){var e=this,n=this.state.usuarios.map((function(n){return r.a.createElement(x,null,r.a.createElement("p",null,n.name),r.a.createElement(C,{onclick:function(){return e.onClickDelete(n.id)}},"X"))}));return r.a.createElement(y,null,r.a.createElement("h2",null,"USU\xc1RIOS"),n)}}]),t}(r.a.Component);t(49);function S(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: flex-start;\n  gap: 8px;\n  width: 150px;\n  height: 50px;\n  text-align: center;\n"]);return S=function(){return e},e}var V=p.a.button(S()),U=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={currentPage:"HOME"},e.onClickNextPage=function(){var n="HOME"===e.state.currentPage?"LIST":"HOME";e.setState({currentPage:n})},e}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(V,{onClick:this.onClickNextPage}," --\x3e Pr\xf3xima Pagina"),"HOME"===this.state.currentPage?r.a.createElement(E,null):r.a.createElement(k,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.09a64f16.chunk.js.map