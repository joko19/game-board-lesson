(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6124:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return a}});t(9008),t(5675),t(1664);var n=t(7336),i=t(5893);function a(){return(0,i.jsx)("div",{children:(0,i.jsx)(n.default,{})})}},7336:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return C}});var n=t(219),i=t(8216),a=t(5997),o=t(4695),s=t(3444),c=t(268),l=t(2953),d=t(2809),u=t(7294),p=t(5948),f="dc",b="marvel",m="Jatim",h=t(318),g=t(3789);function j(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var v=function(e,r,t){var n=(0,g.Z)(e[r.droppableId]),i=r.droppableId===t.droppableId?n:(0,g.Z)(e[t.droppableId]),a=n.splice(r.index,1),o=(0,h.Z)(a,1)[0];return i.splice(t.index,0,o),function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?j(Object(t),!0).forEach((function(r){(0,d.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}((0,d.Z)({},r.droppableId,n),r.droppableId===t.droppableId?{}:(0,d.Z)({},t.droppableId,i))},y=function(e){return e-Date.now()},O="playing",x="done",w=t(5893);function Z(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function D(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Z(Object(t),!0).forEach((function(r){(0,d.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var P,N=function(e){var r=e.name,t=e.index;return(0,w.jsx)(p._l,{draggableId:r,index:t,children:function(e){return(0,w.jsx)("div",D(D(D({style:{backgroundColor:"#303030",display:"inline-block",border:"1px solid green"},ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{children:(0,w.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",className:"w-16 m-4",alt:r})}))}},r)},S=function(e){var r=e.isDropDisabled,t=e.heroes,n=e.id;return(0,w.jsx)("div",{className:"",children:(0,w.jsx)(p.bK,{droppableId:n,isDropDisabled:r,children:function(e){return(0,w.jsxs)("div",D(D({className:"flex flex-cols"},e.droppableProps),{},{ref:e.innerRef,children:[t.map((function(e,r){var t=e.name;return(0,w.jsx)(N,{name:t,index:r},t)})),e.placeholder]}))}})})},_=function(){return(0,w.jsx)("footer",{className:"container text-right text-secondary",children:(0,w.jsx)("a",{href:"https://www.freepik.com/free-vector/superhero-icons-collection_800473.htm",children:"Like the icons?"})})},k=["gameState","timeLeft","bench"];function I(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function E(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?I(Object(t),!0).forEach((function(r){(0,d.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function L(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=(0,l.Z)(e);if(r){var i=(0,l.Z)(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return(0,c.Z)(this,t)}}var R=(P={bench:function(e){for(var r,t,n=e.length;0!==n;)t=Math.floor(Math.random()*n),r=e[n-=1],e[n]=e[t],e[t]=r;return e}([{name:"Superman",comics:"dc"},{name:"Iron Man",comics:"marvel"},{name:"Tari Remo",comics:"Jatim"}])},(0,d.Z)(P,f,[]),(0,d.Z)(P,b,[]),(0,d.Z)(P,m,[]),(0,d.Z)(P,"gameState","playing"),(0,d.Z)(P,"timeLeft",0),P),C=function(e){(0,s.Z)(t,e);var r=L(t);function t(){var e;(0,i.Z)(this,t);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return e=r.call.apply(r,[this].concat(a)),(0,d.Z)((0,o.Z)(e),"state",R),(0,d.Z)((0,o.Z)(e),"startGame",(function(){e.currentDeadline=Date.now()+3e4,e.setState({gameState:O,timeLeft:y(e.currentDeadline)},e.gameLoop)})),(0,d.Z)((0,o.Z)(e),"gameLoop",(function(){e.timer=setInterval((function(){var r=y(e.currentDeadline),t=r<=0;t&&e.timer&&clearInterval(e.timer),e.setState(E({timeLeft:t?0:r},t?{gameState:x}:{}))}),1e3)})),(0,d.Z)((0,o.Z)(e),"endGame",(function(){e.timer&&clearInterval(e.timer),e.setState({gameState:x})})),(0,d.Z)((0,o.Z)(e),"resetGame",(function(){e.setState(R)})),(0,d.Z)((0,o.Z)(e),"onDragEnd",(function(r){var t=r.source,n=r.destination;n&&e.setState((function(e){return v(e,t,n)}))})),e}return(0,a.Z)(t,[{key:"render",value:function(){var e=this.state,r=e.gameState,t=(e.timeLeft,e.bench),i=((0,n.Z)(e,k),r===x);return(0,w.jsxs)("div",{className:"bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 md:px-64 pt-32",children:[(0,w.jsxs)(p.Z5,{onDragEnd:this.onDragEnd,children:[(0,w.jsx)("div",{className:"bg-red-500",children:(0,w.jsx)(S,{id:"bench",heroes:t,isDropDisabled:i})}),(0,w.jsxs)("div",{className:"grid grid-cols-4",children:[(0,w.jsx)("div",{className:"bg-blue-500 h-32",children:(0,w.jsx)(S,{id:m,heroes:this.state[m],isDropDisabled:i})}),(0,w.jsx)("div",{className:"bg-green-500 h-32 one",children:(0,w.jsx)(S,{id:m,heroes:this.state[m],isDropDisabled:i})}),(0,w.jsx)("div",{className:"bg-red-500 h-32"}),(0,w.jsx)("div",{className:"bg-yellow-500 h-32"})]}),(0,w.jsxs)("div",{className:"grid grid-cols-4",children:[(0,w.jsx)("div",{className:"bg-green-500 h-32"}),(0,w.jsx)("div",{className:"bg-red-500 h-32"}),(0,w.jsx)("div",{className:"bg-yellow-500 h-32"}),(0,w.jsx)("div",{className:"bg-blue-500 h-32"})]}),(0,w.jsxs)("div",{className:"grid grid-cols-4",children:[(0,w.jsx)("div",{className:"bg-red-500 h-32"}),(0,w.jsx)("div",{className:"bg-yellow-500 h-32"}),(0,w.jsx)("div",{className:"bg-blue-500 h-32"}),(0,w.jsx)("div",{className:"bg-green-500 h-32"})]})]}),(0,w.jsxs)("div",{children:[(0,w.jsx)("div",{}),(0,w.jsx)("div",{style:{display:"inline"}}),(0,w.jsx)("div",{style:{display:"inline"}})]}),(0,w.jsx)("div",{style:{border:"5px solid red"}}),(0,w.jsx)(_,{})]})}},{key:"componentWillUnmount",value:function(){this.timer&&clearInterval(this.timer)}}]),t}(u.Component)},8581:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6124)}])}},function(e){e.O(0,[774,630,605,247,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);