(this.webpackJsonpcountdown=this.webpackJsonpcountdown||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n(16)},,,,,function(t,e,n){},function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(3),r=n.n(i),l=(n(13),n(4)),m=n(5),s=n(1),h=n(7),u=n(6),c=(n(14),n(15),function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={target:0,num1:0,num2:0,num3:0,num4:0,num5:0,num6:0,bignums:[25,50,75,100]},a.oneBig=a.oneBig.bind(Object(s.a)(a)),a.twoBig=a.twoBig.bind(Object(s.a)(a)),a.threeBig=a.threeBig.bind(Object(s.a)(a)),a.target=a.target.bind(Object(s.a)(a)),a}return Object(m.a)(n,[{key:"target",value:function(){this.setState({target:Math.floor(900*Math.random())+100})}},{key:"oneBig",value:function(){this.setState({num1:this.state.bignums[Math.floor(4*Math.random())],num2:Math.floor(10*Math.random())+1,num3:Math.floor(10*Math.random())+1,num4:Math.floor(10*Math.random())+1,num5:Math.floor(10*Math.random())+1,num6:Math.floor(10*Math.random())+1})}},{key:"twoBig",value:function(){this.setState({num1:this.state.bignums[Math.floor(4*Math.random())],num2:this.state.bignums[Math.floor(4*Math.random())],num3:Math.floor(10*Math.random())+1,num4:Math.floor(10*Math.random())+1,num5:Math.floor(10*Math.random())+1,num6:Math.floor(10*Math.random())+1})}},{key:"threeBig",value:function(){this.setState({num1:this.state.bignums[Math.floor(4*Math.random())],num2:this.state.bignums[Math.floor(4*Math.random())],num3:this.state.bignums[Math.floor(4*Math.random())],num4:Math.floor(10*Math.random())+1,num5:Math.floor(10*Math.random())+1,num6:Math.floor(10*Math.random())+1})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Your numbers:"),o.a.createElement("h2",{style:{display:"inline"}},"|",this.state.num1,"|"),o.a.createElement("h2",{style:{display:"inline"}},this.state.num2,"|"),o.a.createElement("h2",{style:{display:"inline"}},this.state.num3,"|"),o.a.createElement("h2",{style:{display:"inline"}},this.state.num4,"|"),o.a.createElement("h2",{style:{display:"inline"}},this.state.num5,"|"),o.a.createElement("h2",{style:{display:"inline"}},this.state.num6,"|"),o.a.createElement("h2",null,"Your Target: ",this.state.target),o.a.createElement("div",null,o.a.createElement("button",{onClick:this.oneBig,style:{marginRight:10}},"1 big, 5 small"),o.a.createElement("button",{onClick:this.twoBig,style:{marginRight:10}},"2 big, 4 small"),o.a.createElement("button",{onClick:this.threeBig,style:{marginRight:10}},"3 big, 3 small")),o.a.createElement("h2",null),o.a.createElement("button",{onClick:this.target},"Generate Target"))}}]),n}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(c,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.48a7b9d2.chunk.js.map