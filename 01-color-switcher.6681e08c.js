!function(){var t={body:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};t.startBtn.addEventListener("click",(function(t){n.start()})),t.stopBtn.addEventListener("click",(function(t){n.stop()}));var n={intervalId:null,isActive:!1,start:function(){this.isActive||(this.isActive=!0,this.intervalId=setInterval((function(){var n="#".concat(Math.floor(16777215*Math.random()).toString(16));t.body.style.backgroundColor=n}),1e3))},stop:function(){clearInterval(this.intervalId),this.isActive=!1}}}();
//# sourceMappingURL=01-color-switcher.6681e08c.js.map