(this.webpackJsonpinsta4=this.webpackJsonpinsta4||[]).push([[0],[,,,,,,,,function(t,e,o){t.exports=o.p+"static/media/favorite-white.042aa417.svg"},function(t,e,o){t.exports=o.p+"static/media/favorite.4c67d875.svg"},function(t,e,o){t.exports=o.p+"static/media/comment_icon.de299b47.svg"},function(t,e,o){t.exports=o(21)},,,,,function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){"use strict";o.r(e);var a=o(0),n=o.n(a),r=o(7),i=o.n(r),s=(o(16),o(1)),c=o(2),u=o(4),m=o(3),l=o(5);o(17),o(18),o(19);function p(t){return n.a.createElement("div",{className:"icon-container"},n.a.createElement("img",{alt:"Icone",src:t.icone,onClick:t.onClickIcone}),n.a.createElement("p",null,t.valorContador))}var h=o(8),d=o.n(h),C=o(9),v=o.n(C),f=o(10),E=o.n(f),b=(o(20),function(t){function e(){var t,o;Object(s.a)(this,e);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(o=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(n)))).state={valorComentario:""},o.onChangeComentario=function(t){o.setState({valorComentario:t.target.value}),console.log(o.state.valorComentario)},o}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"comment-container"},n.a.createElement("input",{className:"input-comentario",placeholder:"Coment\xe1rio",value:this.state.valorComentario,onChange:this.onChangeComentario}),n.a.createElement("button",{onClick:this.props.aoEnviar},"Enviar"))}}]),e}(a.Component)),g=function(t){function e(){var t,o;Object(s.a)(this,e);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(o=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(n)))).state={curtido:!1,numeroCurtidas:0,comentando:!1,numeroComentarios:0},o.onClickCurtida=function(){o.state.curtido?o.setState({curtido:!1,numeroCurtidas:o.state.numeroCurtidas=0}):o.setState({curtido:!0,numeroCurtidas:o.state.numeroCurtidas=1})},o.onClickComentario=function(){o.setState({comentando:!o.state.comentando})},o.aoEnviarComentario=function(){o.setState({comentando:!1,numeroComentarios:o.state.numeroComentarios+1})},o}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t,e;return this.state.curtido?t=v.a:this.state.curtido||(t=d.a),this.state.comentando&&(e=n.a.createElement(b,{aoEnviar:this.aoEnviarComentario})),n.a.createElement("div",{className:"post-container"},n.a.createElement("div",{className:"post-header"},n.a.createElement("img",{className:"user-photo",src:this.props.fotoUsuario,alt:"Imagem do usuario"}),n.a.createElement("p",null,this.props.nomeUsuario)),n.a.createElement("img",{className:"post-photo",src:this.props.fotoPost,alt:"Imagem do post"}),n.a.createElement("div",{className:"post-footer"},n.a.createElement(p,{icone:t,onClickIcone:this.onClickCurtida,valorContador:this.state.numeroCurtidas}),n.a.createElement(p,{icone:E.a,onClickIcone:this.onClickComentario,valorContador:this.state.numeroComentarios})),e)}}]),e}(n.a.Component),k=function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"app-container"},n.a.createElement(g,{nomeUsuario:"paulinha",fotoUsuario:"https://picsum.photos/50/50?a=1",fotoPost:"https://picsum.photos/200/150?a=1"}),n.a.createElement(g,{nomeUsuario:"paula",fotoUsuario:"https://picsum.photos/50/50?a=2",fotoPost:"https://picsum.photos/200/150?a=2"}),n.a.createElement(g,{nomeUsuario:"paulinhaaa",fotoUsuario:"https://picsum.photos/50/50?a=3",fotoPost:"https://picsum.photos/200/150?a=3"}))}}]),e}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.ce6f9806.chunk.js.map