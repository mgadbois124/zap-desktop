(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return h});var a=n(0),r=n.n(a),i=n(3),c=n.n(i),o=n(171),u=n.n(o);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var s=n(40);n.d(t,"waitForRouteChange",function(){return s.c});var l=n(235),d=n.n(l);n.d(t,"PageRenderer",function(){return d.a});var m=n(53);n.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),h=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},177:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(170),c=n(0),o=n(272),u=(n(273),n(57),n(83),n(188),n(228)),s=n(457),l=n(456),d=n(28),m=Object(u.b)(function(e){return{visible:e.isSidebarVisible}})(function(e){var t=e.items,n=e.pathname,a=e.Link,r=e.visible,i=function(e){return e.exact?n===e.path:n.startsWith(e.path)},o=t.find(function(e){return i(e)})||{};return c.createElement(s.a,{as:l.a,animation:"slide along",width:"thin",visible:r,icon:"labeled",vertical:!0,inverted:o.inverted},t.map(function(e){var t=i(e);return c.createElement(l.a.Item,{as:a,to:e.path,active:t,key:e.path},c.createElement(d.a,{name:e.icon}),e.name)}))}),p=n(459),h=n(453),f=(n(439),n(441),n(443),n(446),n(274));n.d(t,"a",function(){return b}),n.d(t,"b",function(){return y});var b=[{name:"Home",path:"/",exact:!0,icon:"home",inverted:!0},{name:"Storyboard",path:"/storyboard/",exact:!1,icon:"newspaper"}],v=function(e){var t=e.location.pathname,n="/"===t;return c.createElement(u.a,{store:f.a},c.createElement(s.a.Pushable,{as:p.a},c.createElement(m,{Link:i.Link,pathname:t,items:b,visible:!1}),c.createElement(s.a.Pusher,{style:{minHeight:"100vh"}},n?null:c.createElement(o.a,{Link:i.Link,pathname:t,items:b}),c.createElement("div",{style:{paddingBottom:60}},e.children),c.createElement(p.a,{inverted:!0,vertical:!0,style:{position:"absolute",bottom:0,width:"100%"}},c.createElement(h.a,{textAlign:"center"},c.createElement("p",null,"Powered with ",c.createElement(d.a,{name:"heart"})," by Gatsby 2.0"))))))},y=function(e){return function(t){function n(){return t.apply(this,arguments)||this}return r()(n,t),n.prototype.render=function(){return c.createElement(v,{location:this.props.location},c.createElement(e,this.props))},n}(c.Component)}},235:function(e,t,n){var a;e.exports=(a=n(288))&&a.default||a},272:function(e,t,n){"use strict";n(273),n(188),n(57);var a=n(0),r=n(228),i=n(274),c=n(453),o=n(456);t.a=Object(r.b)()(function(e){var t=e.items,n=e.pathname,r=e.Link,u=e.inverted,s=e.dispatch;return a.createElement(c.a,null,a.createElement(o.a,{size:"large",pointing:!0,secondary:!0,inverted:u},a.createElement(o.a.Item,{as:"a",className:"mobile only",icon:"sidebar",onClick:function(){return s&&s(Object(i.b)())}}),t.map(function(e){var t=e.exact?n===e.path:n.startsWith(e.path);return a.createElement(o.a.Item,{as:r,className:"mobile hidden",name:e.name,to:e.path,key:e.path,active:t})})))})},274:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return c});n(25);var a=n(230),r=n(421),i=function(){return{type:"TOGGLE_SIDEBAR"}},c=Object(a.createStore)(function(e,t){switch(t.type){case"TOGGLE_SIDEBAR":return Object.assign({},e,{isSidebarVisible:!e.isSidebarVisible});default:return e}},{isSidebarVisible:!1},Object(r.devToolsEnhancer)({}))},288:function(e,t,n){"use strict";n.r(t);n(25);var a=n(0),r=n.n(a),i=n(3),c=n.n(i),o=n(77),u=n(1),s=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},439:function(e,t,n){},441:function(e,t,n){},443:function(e,t,n){}}]);
//# sourceMappingURL=1-5f54cb2325d4ae03c8e6.js.map