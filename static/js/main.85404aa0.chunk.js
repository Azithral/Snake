(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var s=a(1),r=a.n(s),o=a(7),n=a.n(o),i=(a(12),a(13),a(2)),c=a(3),d=a(5),l=a(4),h=a(0),u=function(t){return t.body.map((function(t,e){return Object(h.jsx)("div",{className:"body",style:{top:t[0]+"px",left:t[1]+"px"}},e)}))},f=function(t){return Object(h.jsxs)("div",{className:"stats",children:[Object(h.jsx)("p",{className:"declareGameOver",children:"Game Over!"}),Object(h.jsxs)("p",{className:"result",children:["Your score: ",t.score]}),Object(h.jsx)("button",{className:"restart",onClick:t.restart,children:"Restart"})]})},b=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(i.a)(this,a);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={direction:"East",Top:260,Left:240,stopTimer:!1,body:[[240,240],[220,240],[200,240],[180,240],[160,240],[140,240],[120,240]],fruit:[180,250],score:0,timer:null,gameover:!1,rightarrow:"\u27a1",leftarrow:"\u2b05",uparrow:"\u2b06",downarrow:"\u2b07"},t.handleFruit=function(){var e=Math.floor(480*Math.random());e-=e%20;var a=Math.floor(480*Math.random());a-=a%20,t.setState({fruit:[e,a]})},t.handlebite=function(e,a){for(var s=0;s<t.state.body.length;s++)e===t.state.body[s][0]&&a===t.state.body[s][1]&&t.handleGameOver()},t.handleRestart=function(){t.setState({direction:"East",Top:260,Left:240,stopTimer:!1,body:[[240,240],[220,240],[200,240],[180,240],[160,240],[140,240],[120,240]],fruit:[180,240],score:0,timer:null,gameover:!1}),t.handleFruit(),t.setState({timer:setInterval((function(){var e=t.state.Top,a=t.state.Left;"South"===t.state.direction?t.state.Top<480?(t.handlebite(t.state.Top+20,t.state.Left),t.setState({Top:t.state.Top+20})):(t.handlebite(0,t.state.Left),t.setState({Top:0})):"North"===t.state.direction?t.state.Top>0?(t.handlebite(t.state.Top-20,t.state.Left),t.setState({Top:t.state.Top-20})):(t.handlebite(480,t.state.Left),t.setState({Top:480})):"West"===t.state.direction?t.state.Left>0?(t.handlebite(t.state.Top,t.state.Left-20),t.setState({Left:t.state.Left-20})):(t.handlebite(t.state.Top,480),t.setState({Left:480})):"East"===t.state.direction&&(t.state.Left<480?(t.handlebite(t.state.Top,t.state.Left+20),t.setState({Left:t.state.Left+20})):(t.handlebite(t.state.Top,0),t.setState({Left:0})));for(var s=[],r=0;r<t.state.body.length;r++)s.push([e,a]),e=t.state.body[r][0],a=t.state.body[r][1];t.state.Top===t.state.fruit[0]&&t.state.Left===t.state.fruit[1]&&(t.handleFruit(),s.push([e,a]),t.setState({score:t.state.score+1})),t.setState({body:s})}),100)})},t.handleGameOver=function(){clearInterval(t.state.timer),t.setState({gameover:!0})},t.handleClick=function(e){"up"===e&&"North"!==t.state.direction&&"South"!==t.state.direction?t.setState({direction:"North"}):"down"===e&&"North"!==t.state.direction&&"South"!==t.state.direction?t.setState({direction:"South"}):"left"===e&&"West"!==t.state.direction&&"East"!==t.state.direction?t.setState({direction:"West"}):"right"===e&&"West"!==t.state.direction&&"East"!==t.state.direction&&t.setState({direction:"East"})},t}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.handleRestart()}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{className:"snakegame",children:[(0===this.state.score||this.state.gameover)&&Object(h.jsx)("h1",{style:{fontSize:"30px",margin:"20px auto"},children:"Snake"}),!this.state.gameover&&this.state.score>0&&Object(h.jsx)("div",{className:"info",children:Object(h.jsxs)("p",{children:["Score : ",this.state.score]})}),Object(h.jsxs)("div",{className:"arena",children:[Object(h.jsx)("div",{className:"head",style:{top:this.state.Top+"px",left:this.state.Left+"px"}}),Object(h.jsx)("div",{className:"fruit",style:{top:this.state.fruit[0]+"px",left:this.state.fruit[1]+"px"}}),Object(h.jsx)(u,{body:this.state.body}),Object(h.jsx)("div",{className:"gameover",children:this.state.gameover&&Object(h.jsx)(f,{score:this.state.score,restart:function(){return t.handleRestart()}})})]}),Object(h.jsxs)("div",{className:"controls",children:[Object(h.jsx)("button",{className:"controlButton",onClick:function(){return t.handleClick("left")},children:this.state.leftarrow}),Object(h.jsx)("button",{className:"controlButton",onClick:function(){return t.handleClick("right")},children:this.state.rightarrow}),Object(h.jsx)("button",{className:"controlButton",onClick:function(){return t.handleClick("up")},children:this.state.uparrow}),Object(h.jsx)("button",{className:"controlButton",onClick:function(){return t.handleClick("down")},children:this.state.downarrow})]})]})}}]),a}(s.Component),p=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(i.a)(this,a);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={direction:"East",Top:260,Left:240,stopTimer:!1,body:[[240,240],[220,240],[200,240],[180,240],[160,240],[140,240],[120,240]],fruit:[180,250],score:0,timer:null,gameover:!1},t.handleFruit=function(){var e=Math.floor(480*Math.random());e-=e%20;var a=Math.floor(480*Math.random());a-=a%20,t.setState({fruit:[e,a]})},t.handlebite=function(e,a){for(var s=0;s<t.state.body.length;s++)e===t.state.body[s][0]&&a===t.state.body[s][1]&&t.handleGameOver()},t.handleRestart=function(){t.setState({direction:"East",Top:260,Left:240,stopTimer:!1,body:[[240,240],[220,240],[200,240],[180,240],[160,240],[140,240],[120,240]],fruit:[180,240],score:0,timer:null,gameover:!1}),t.handleFruit(),t.setState({timer:setInterval((function(){var e=t.state.Top,a=t.state.Left;"South"===t.state.direction?t.state.Top<480?(t.handlebite(t.state.Top+20,t.state.Left),t.setState({Top:t.state.Top+20})):(t.handlebite(0,t.state.Left),t.setState({Top:0})):"North"===t.state.direction?t.state.Top>0?(t.handlebite(t.state.Top-20,t.state.Left),t.setState({Top:t.state.Top-20})):(t.handlebite(480,t.state.Left),t.setState({Top:480})):"West"===t.state.direction?t.state.Left>0?(t.handlebite(t.state.Top,t.state.Left-20),t.setState({Left:t.state.Left-20})):(t.handlebite(t.state.Top,480),t.setState({Left:480})):"East"===t.state.direction&&(t.state.Left<480?(t.handlebite(t.state.Top,t.state.Left+20),t.setState({Left:t.state.Left+20})):(t.handlebite(t.state.Top,0),t.setState({Left:0})));for(var s=[],r=0;r<t.state.body.length;r++)s.push([e,a]),e=t.state.body[r][0],a=t.state.body[r][1];t.state.Top===t.state.fruit[0]&&t.state.Left===t.state.fruit[1]&&(t.handleFruit(),s.push([e,a]),t.setState({score:t.state.score+1})),t.setState({body:s})}),100)})},t.handleGameOver=function(){clearInterval(t.state.timer),t.setState({gameover:!0})},t.handleKeyDown=function(e){"w"!==e.key&&"ArrowUp"!==e.key||"North"===t.state.direction||"South"===t.state.direction?"s"!==e.key&&"ArrowDown"!==e.key||"North"===t.state.direction||"South"===t.state.direction?"a"!==e.key&&"ArrowLeft"!==e.key||"West"===t.state.direction||"East"===t.state.direction?"d"!==e.key&&"ArrowRight"!==e.key||"West"===t.state.direction||"East"===t.state.direction||t.setState({direction:"East"}):t.setState({direction:"West"}):t.setState({direction:"South"}):t.setState({direction:"North"})},t}return Object(c.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown),this.handleRestart()}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer),window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{className:"snakegame",children:[Object(h.jsxs)("div",{className:"arena",children:[Object(h.jsx)("div",{className:"head",style:{top:this.state.Top+"px",left:this.state.Left+"px"}}),Object(h.jsx)("div",{className:"fruit",style:{top:this.state.fruit[0]+"px",left:this.state.fruit[1]+"px"}}),Object(h.jsx)(u,{body:this.state.body}),Object(h.jsx)("div",{className:"gameover",children:this.state.gameover&&Object(h.jsx)(f,{score:this.state.score,restart:function(){return t.handleRestart()}})})]}),!this.state.gameover&&Object(h.jsx)("div",{className:"info",children:Object(h.jsxs)("p",{children:["Score : ",this.state.score]})})]})}}]),a}(s.Component);var j=function(){var t=window.matchMedia("(max-width: 600px)").matches;return Object(h.jsxs)("div",{className:"App",children:[!t&&Object(h.jsx)("h1",{style:{fontSize:"50px"},children:"Snake"}),!t&&Object(h.jsx)(p,{}),t&&Object(h.jsx)(b,{})]})};n.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(j,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.85404aa0.chunk.js.map