(this["webpackJsonpsorting-alg-visual"]=this["webpackJsonpsorting-alg-visual"]||[]).push([[0],{1:function(t,e,a){},13:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),o=a(3),i=a.n(o),s=(a(13),a(1),a(4)),c=a(5),l=a(7),u=a(6);var h=function(t){return n.a.createElement("div",{className:"bar",style:{width:"".concat(t.width,"vw"),height:"".concat(t.height,"vh"),backgroundColor:"".concat(t.color)}})};function f(t,e){for(var a=new Array(e),r=0;r<e;r++)a[r]=t;return a}var v=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a),(t=e.call(this)).state={array:Array.from(Array(10).keys()),colors:f("#61dafb",10)};var r=t.state.array;return t.totalWidth=70,t.totalHeight=60,t.barWidth=t.totalWidth/r.length,t.barHeight=t.totalHeight/r.length,t}return Object(c.a)(a,[{key:"bubbleSort",value:function(t){for(var e=this,a=JSON.parse(JSON.stringify(t)),r=[],n=[],o=[],i=0,s=0;s<t.length;s++)for(var c=0;c<t.length-s-1;c++){i++;var l=f("#61dafb",10);if(l[c]="#f82aff",n.push(l),r.push(JSON.parse(JSON.stringify(a))),o.push(i),a[c]>a[c+1]){i++;var u=a[c];a[c]=a[c+1],a[c+1]=u;var h=f("#61dafb",10);h[c+1]="#34d492",n.push(h),r.push(JSON.parse(JSON.stringify(a))),o.push(i)}}r.push(r[r.length-1]),n.push(f("#61dafb",10)),o.push(i+1);for(var v=function(t){setTimeout((function(){e.setState({array:r[t],colors:n[t]})}),200*o[t])},m=0;m<r.length;m++)v(m)}},{key:"insertionSort",value:function(t){for(var e=this,a=JSON.parse(JSON.stringify(t)),r=[],n=[],o=[],i=0,s=1;s<t.length;s++)for(var c=s;c>=0;c--){i++;var l=f("#61dafb",10);if(l[c]="#f82aff",n.push(l),r.push(JSON.parse(JSON.stringify(a))),o.push(i),!(a[c]<a[c-1]))break;i++;var u=a[c];a[c]=a[c-1],a[c-1]=u;var h=f("#61dafb",10);h[c-1]="#34d492",n.push(h),r.push(JSON.parse(JSON.stringify(a))),o.push(i)}r.push(r[r.length-1]),n.push(f("#61dafb",10)),o.push(i+1);for(var v=function(t){setTimeout((function(){e.setState({array:r[t],colors:n[t]})}),200*o[t])},m=0;m<r.length;m++)v(m)}},{key:"quickSort",value:function(t){}},{key:"shuffle",value:function(t){for(var e=t.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[a],t[a]=r}this.setState({array:t}),console.log(this.state)}},{key:"render",value:function(){var t=this,e=this.state,a=e.array,r=e.colors,o=Array.from(Array(10).keys());return n.a.createElement("div",{className:"visualizer-container"},n.a.createElement("div",{className:"array-container"},o.map((function(e){return n.a.createElement(h,{key:e,width:t.barWidth-.5,height:t.barHeight*(a[e]+1),color:r[e]})}))),n.a.createElement("div",{className:"button-container"},n.a.createElement("button",{className:"button",onClick:function(){t.shuffle(a)}},"Shuffle Array"),n.a.createElement("button",{className:"button",onClick:function(){t.bubbleSort(a)}},"BubbleSort"),n.a.createElement("button",{className:"button",onClick:function(){t.insertionSort(a)}},"Insertion Sort"),n.a.createElement("button",{className:"button",onClick:function(){alert("Need to finish this"),t.quickSort(a,0,a.length-1,1)}},"Quick Sort")))}}]),a}(n.a.Component);var m=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("h1",{className:"App-h1"},"Sorting Algorithms Visualizer"),n.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,a){t.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.cf3cd576.chunk.js.map