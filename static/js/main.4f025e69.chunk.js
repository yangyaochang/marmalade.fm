(this["webpackJsonpmarmalade.fm"]=this["webpackJsonpmarmalade.fm"]||[]).push([[0],{29:function(e,t,a){e.exports=a(42)},35:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),i=a.n(c),s=(a(34),a(35),a(25)),l=a(8),o=a.n(l),m=a(26),u=a(13),d=a(20),h=a(21),b=a(27),f=a(24),p=a(9),v=a(6),g=a(5),E=a(28),x=function(e){var t=Object(E.a)({},e),a=t.playMix,n=t.id,c=t.currentMix,i=t.playing,s=t.children;return r.a.createElement("div",{className:"pointer ".concat(n===c&&i&&"playing"),onClick:function(){return a(n)}},s)},y=function(){return r.a.createElement("div",null,r.a.createElement("button",{className:"button bg-transparent contain button-reset play-button db bg-center pointer center"}))},N=function(e){var t=e.name,a=e.pictures,n=void 0===a?{}:a,c=Object(g.a)(e,["name","pictures"]);return r.a.createElement("div",{className:"w-50-l vh-100 flex items-center justify-center cover bg-center bg-featured pad-bottom fixed-l left-0 mix-overlay",style:{backgroundImage:"url(".concat(n.extra_large,")")}},r.a.createElement(x,c,r.a.createElement("div",{className:"w-100 tc pa3 relative z-2"},r.a.createElement("p",{className:"b biryani f6 white ttu"},"Featured Mix"),r.a.createElement("h1",{className:"mix-title mt0 mb2 anton white ttu"},t),r.a.createElement(y,null))))},w=function(e){return r.a.createElement("header",{className:"black mb5 pt5 "},r.a.createElement("h1",{className:"ttu tracked-mega anton tc mt0 mb3"},"Marmalade.fm"),r.a.createElement("ul",{className:"list flex justify-center pl0"},r.a.createElement("li",{className:"mh2"},r.a.createElement(p.b,{exact:!0,to:"/",className:"nav-link link biryani-black f6 ttu gray"},"What's hot")),r.a.createElement("li",{className:"mh2"},r.a.createElement(p.b,{to:"/archive",className:"nav-link link biryani-black f6 ttu gray"},"Archive")),r.a.createElement("li",{className:"mh2"},r.a.createElement(p.b,{to:"/about",className:"nav-link link biryani-black f6 ttu gray"},"About"))))},k=function(e){var t=e.name,a=e.pictures,n=Object(g.a)(e,["name","pictures"]);return r.a.createElement("div",{className:"aspect-ratio aspect-ratio--3x4 pointer bg-black cover bg-center",style:{backgroundImage:"url(".concat(a.extra_large,")")}},r.a.createElement(x,n,r.a.createElement("div",{className:"ph3 pv4 aspect-ratio--object mix-overlay"},r.a.createElement("div",{className:"flex items-center relative z-2"},r.a.createElement("h1",{className:"f4 f3-l mv0 white ttu biryani pr2 lh-title"},t),r.a.createElement(y,null)))))},j=function(e){var t=e.mixes,a=Object(g.a)(e,["mixes"]);return r.a.createElement("div",{className:"flex flex-wrap justify-between mixes ph3 ph4-l"},t.slice(0,6).map((function(e){return r.a.createElement("div",{className:"mix mb4"},r.a.createElement(k,Object.assign({},a,e,{id:e.key})))})))},O=function(e){var t=e.mixes,a=Object(g.a)(e,["mixes"]);return r.a.createElement("ul",{className:"list pl0 archive mv0 pad-bottom"},t.map((function(e){return r.a.createElement("li",{className:"ph3 ph4-l"},r.a.createElement(x,Object.assign({},a,{id:e.key}),r.a.createElement("div",{className:"pv3 bb b--light-gray flex justify-between items-center"},r.a.createElement("h1",{className:"f6 mv0 black ttu biryani pr2"},e.name),r.a.createElement(y,null))))})))},M=function(e){var t=e.statName,a=e.statNumber,n=e.statWord;return r.a.createElement("div",{className:"w-third tc pa3 ba bw2 b--light-gray",style:{marginRight:-2}},r.a.createElement("div",{className:"f6 biryani ttu"},t),r.a.createElement("div",{className:"f5 b bityani-black ttu tracked"},a," ",n))},S=function(e){var t=e.mixes;return r.a.createElement("div",{className:"ph3 ph4-l"},r.a.createElement("div",{className:"measure center lh-copy f4 ph3"},r.a.createElement("p",{className:"mt0"},"Marmalade.fm features the latest and greatest in grooves, beats and world music."),r.a.createElement("p",null,"Whether you're into hip hop, trip hop, classic jazz, fusion jass, afro beat or break beat... we have you covered!")),r.a.createElement("div",{className:"flex pt3"},r.a.createElement(M,{statName:"Featuring...",statNumber:t.length,statWord:"mixes"}),r.a.createElement(M,{statName:"Played...",statNumber:t.reduce((function(e,t){return e+t.play_count}),0),statWord:"times"}),r.a.createElement(M,{statName:"With...",statNumber:t.reduce((function(e,t){return e+t.audio_length}),0),statWord:"seconds"})))},z=["/maxvibes/ninja-tune-jazz-session-part-1/","/NTSRadio/mint-condition-w-hotthobo-27th-november-2017/","/NTSRadio/full-house-6th-november-2017/","/NTSRadio/questing-w-zakia-12th-november-2017/","/NTSRadio/foreign-hour-family-edition-4th-october-2017/","/truthoughts/tru-thoughts-15th-anniversary-lefto-mix/","/adamkvasnica3/trip-hop-for-jazz-junkies/","/NTSRadio/floating-points-four-tet-caribou-23rd-march-2015/","/NTSRadio/bonobo-24th-june-2015/","/NTSRadio/floating-points-12th-june-2017/","/NTSRadio/mount-kimbie-james-blake-8th-september-2015/"],W=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).fetchMixes=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.state.mixIds.map(function(){var e=Object(u.a)(o.a.mark((function e(t){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.mixcloud.com".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,n.setState((function(e,t){return{mixes:[].concat(Object(m.a)(e.mixes),[r])}})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)}))),n.mountAudio=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.widget=Mixcloud.PlayerWidget(n.player),e.next=3,n.widget.ready;case 3:n.widget.events.pause.on((function(){n.setState({playing:!1})})),n.widget.events.play.on((function(){n.setState({playing:!0})}));case 5:case"end":return e.stop()}}),e)}))),n.actions={tooglePlay:function(){n.widget.togglePlay()},playMix:function(e){if(e===n.state.currentMix)return n.widget.tooglePlay();n.setState({currentMix:e}),n.widget.load(e,!0)}},n.state={palying:!1,currentMix:"",mixIds:z,mix:null,mixes:[]},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.mountAudio(),this.fetchMixes()}},{key:"render",value:function(){var e=this,t=Object(s.a)(this.state.mixes,1)[0],a=void 0===t?{}:t;return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"flex-l justify-end"},r.a.createElement(N,Object.assign({},this.state,this.actions,a,{id:a.key})),r.a.createElement("div",{className:"w-50-l relative z-1  "},r.a.createElement(w,null),r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/"},r.a.createElement(j,Object.assign({},this.state,this.actions))),r.a.createElement(v.a,{path:"/archive"},r.a.createElement(O,Object.assign({},this.state,this.actions))),r.a.createElement(v.a,{path:"/about"},r.a.createElement(S,this.state))))),r.a.createElement("iframe",{className:"db fixed bottom-0 z-5",width:"100%",height:"60",src:"https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fbrooklynradio%2F100-funk%2F",frameBorder:"0",ref:function(t){return e.player=t}})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.4f025e69.chunk.js.map