(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{151:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(170),r=a(272),l=a(177),o=a(459),s=a(453),d=a(458),u=(a(167),a(153)),m=a.n(u),b=a(156),p=a.n(b),j=a(157),v=a.n(j),O=a(158),h=a.n(O),f=a(159),g=a.n(f),E=a(160),y=a.n(E),w=a(56),N=a.n(w),x=a(55),A=a.n(x),k=a(162),q=a.n(k),C=a(175),P=a.n(C),L=a(154),T=a.n(L),z=(a(3),a(152)),I=a(16),D=a(242),R=a(243),G=a(262),S=a(28),K=a(277);function V(e){var t=e.children,a=e.className,n=e.content,i=e.hidden,r=e.visible,l=T()(Object(I.a)(r,"visible"),Object(I.a)(i,"hidden"),"content",a),o=Object(D.a)(V,e),s=Object(R.a)(V,e);return c.a.createElement(s,m()({},o,{className:l}),z.a.isNil(t)?n:t)}V.handledProps=["as","children","className","content","hidden","visible"],V.propTypes={};var J=V,M=a(176),W=a.n(M);function Z(e){var t=e.attached,a=e.basic,n=e.buttons,i=e.children,r=e.className,l=e.color,o=e.compact,s=e.content,d=e.floated,u=e.fluid,b=e.icon,p=e.inverted,j=e.labeled,v=e.negative,O=e.positive,h=e.primary,f=e.secondary,g=e.size,E=e.toggle,y=e.vertical,w=e.widths,N=T()("ui",l,g,Object(I.a)(a,"basic"),Object(I.a)(o,"compact"),Object(I.a)(u,"fluid"),Object(I.a)(b,"icon"),Object(I.a)(p,"inverted"),Object(I.a)(j,"labeled"),Object(I.a)(v,"negative"),Object(I.a)(O,"positive"),Object(I.a)(h,"primary"),Object(I.a)(f,"secondary"),Object(I.a)(E,"toggle"),Object(I.a)(y,"vertical"),Object(I.b)(t,"attached"),Object(I.e)(d,"floated"),Object(I.g)(w),"buttons",r),x=Object(D.a)(Z,e),A=Object(R.a)(Z,e);return P()(n)?c.a.createElement(A,m()({},x,{className:N}),z.a.isNil(i)?s:i):c.a.createElement(A,m()({},x,{className:N}),W()(n,function(e){return U.create(e)}))}Z.handledProps=["as","attached","basic","buttons","children","className","color","compact","content","floated","fluid","icon","inverted","labeled","negative","positive","primary","secondary","size","toggle","vertical","widths"],Z.propTypes={};var B=Z;function F(e){var t=e.className,a=e.text,n=T()("or",t),i=Object(D.a)(F,e),r=Object(R.a)(F,e);return c.a.createElement(r,m()({},i,{className:n,"data-text":a}))}F.handledProps=["as","className","text"],F.propTypes={};var H=F,Q=function(e){function t(){var e,a;p()(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return a=h()(this,(e=g()(t)).call.apply(e,[this].concat(c))),A()(N()(N()(a)),"computeElementType",function(){var e=a.props,t=e.attached,n=e.label;if(!P()(t)||!P()(n))return"div"}),A()(N()(N()(a)),"computeTabIndex",function(e){var t=a.props,n=t.disabled,c=t.tabIndex;return P()(c)?n?-1:"div"===e?0:void 0:c}),A()(N()(N()(a)),"focus",function(){return q()(a.ref,"focus")}),A()(N()(N()(a)),"handleClick",function(e){a.props.disabled?e.preventDefault():q()(a.props,"onClick",e,a.props)}),A()(N()(N()(a)),"handleRef",function(e){return a.ref=e}),A()(N()(N()(a)),"hasIconClass",function(){var e=a.props,t=e.labelPosition,n=e.children,c=e.content,i=e.icon;return!0===i||i&&(t||z.a.isNil(n)&&P()(c))}),a}return y()(t,e),v()(t,[{key:"render",value:function(){var e=this.props,a=e.active,n=e.animated,i=e.attached,r=e.basic,l=e.children,o=e.circular,s=e.className,d=e.color,u=e.compact,b=e.content,p=e.disabled,j=e.floated,v=e.fluid,O=e.icon,h=e.inverted,f=e.label,g=e.labelPosition,E=e.loading,y=e.negative,w=e.positive,N=e.primary,x=e.secondary,A=e.role,k=e.size,q=e.toggle,C=T()(d,k,Object(I.a)(a,"active"),Object(I.a)(r,"basic"),Object(I.a)(o,"circular"),Object(I.a)(u,"compact"),Object(I.a)(v,"fluid"),Object(I.a)(this.hasIconClass(),"icon"),Object(I.a)(h,"inverted"),Object(I.a)(E,"loading"),Object(I.a)(y,"negative"),Object(I.a)(w,"positive"),Object(I.a)(N,"primary"),Object(I.a)(x,"secondary"),Object(I.a)(q,"toggle"),Object(I.b)(n,"animated"),Object(I.b)(i,"attached")),L=T()(Object(I.b)(g||!!f,"labeled")),G=T()(Object(I.a)(p,"disabled"),Object(I.e)(j,"floated")),V=Object(D.a)(t,this.props),J=Object(R.a)(t,this.props,this.computeElementType),M=this.computeTabIndex(J);if(!P()(f)){var W=T()("ui",C,"button",s),Z=T()("ui",L,"button",s,G),B=K.a.create(f,{defaultProps:{basic:!0,pointing:"left"===g?"right":"left"},autoGenerateKey:!1});return c.a.createElement(J,m()({},V,{className:Z,onClick:this.handleClick}),"left"===g&&B,c.a.createElement("button",{className:W,disabled:p,ref:this.handleRef,tabIndex:M},S.a.create(O,{autoGenerateKey:!1})," ",b),("right"===g||!g)&&B)}var F=T()("ui",C,G,L,"button",s),H=!z.a.isNil(l);return c.a.createElement(J,m()({},V,{className:F,disabled:p&&"button"===J||void 0,onClick:this.handleClick,ref:this.handleRef,role:A,tabIndex:M}),H&&l,!H&&S.a.create(O,{autoGenerateKey:!1}),!H&&b)}}]),t}(n.Component);A()(Q,"defaultProps",{as:"button",role:"button"}),A()(Q,"Content",J),A()(Q,"Group",B),A()(Q,"Or",H),A()(Q,"handledProps",["active","animated","as","attached","basic","children","circular","className","color","compact","content","disabled","floated","fluid","icon","inverted","label","labelPosition","loading","negative","onClick","positive","primary","role","secondary","size","tabIndex","toggle"]),Q.propTypes={},Q.create=Object(G.c)(Q,function(e){return{content:e}});var U=Q,X=a(276);t.default=Object(l.b)(function(e){return n.createElement("div",null,n.createElement(o.a,{vertical:!0,textAlign:"center",className:"masthead"},n.createElement(r.a,{Link:i.Link,pathname:e.location.pathname,items:l.a,inverted:!0}),n.createElement(s.a,{text:!0},n.createElement(d.a,{inverted:!0,as:"h1"},"Zap Desktop"),n.createElement(d.a,{inverted:!0,as:"h2"},"Cross platform Lightning Network wallet focused on user experience and ease of use"),n.createElement(U,{primary:!0,size:"huge"},n.createElement("i",{class:"apple icon"}),"Mac"),n.createElement(U,{primary:!0,size:"huge"},n.createElement("i",{class:"windows icon"}),"Windows"),n.createElement(U,{primary:!0,size:"huge"},n.createElement("i",{class:"linux icon"}),"Linux"))),n.createElement(o.a,{vertical:!0,className:"stripe"},n.createElement(X.a,{stackable:!0,verticalAlign:"middle",className:"container"},n.createElement(X.a.Row,null,n.createElement(X.a.Column,{width:"8"},n.createElement(d.a,null,"Lorem ipsum"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio."),n.createElement(d.a,null,"Dolor sit amet"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio.")),n.createElement(X.a.Column,{width:"6",floated:"right"},n.createElement(d.a,null,"Lorem ipsum"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio."),n.createElement(d.a,null,"Dolor sit amet"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio."))))),n.createElement(o.a,{vertical:!0,className:"stripe alternate feature"},n.createElement(X.a,{columns:"3",textAlign:"center",divided:!0,relaxed:!0,stackable:!0,className:"container"},n.createElement(X.a.Row,null,n.createElement(X.a.Column,null,n.createElement(d.a,{icon:!0},n.createElement(S.a,{name:"wizard"}),"A kind of magic!"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eaque at quae cupiditate aspernatur quibusdam! Distinctio quod non, harum dolorum earum molestias, beatae expedita aliquam dolorem asperiores nemo amet quaerat.")),n.createElement(X.a.Column,null,n.createElement(d.a,{icon:!0},n.createElement(S.a,{name:"wizard"}),"A kind of magic!"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eaque at quae cupiditate aspernatur quibusdam! Distinctio quod non, harum dolorum earum molestias, beatae expedita aliquam dolorem asperiores nemo amet quaerat.")),n.createElement(X.a.Column,null,n.createElement(d.a,{icon:!0},n.createElement(S.a,{name:"wizard"}),"A kind of magic!"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eaque at quae cupiditate aspernatur quibusdam! Distinctio quod non, harum dolorum earum molestias, beatae expedita aliquam dolorem asperiores nemo amet quaerat."))))))})},167:function(e,t,a){var n=a(189),c=a(190),i=a(191);e.exports=function(e){return n(e)||c(e)||i()}},189:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}},190:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},191:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},276:function(e,t,a){"use strict";a(167);var n=a(153),c=a.n(n),i=a(154),r=a.n(i),l=(a(3),a(0)),o=a.n(l),s=a(16),d=a(242),u=a(243),m=a(262);function b(e){var t=e.children,a=e.className,n=e.computer,i=e.color,l=e.floated,m=e.largeScreen,p=e.mobile,j=e.only,v=e.stretched,O=e.tablet,h=e.textAlign,f=e.verticalAlign,g=e.widescreen,E=e.width,y=r()(i,Object(s.a)(v,"stretched"),Object(s.c)(j,"only"),Object(s.d)(h),Object(s.e)(l,"floated"),Object(s.f)(f),Object(s.g)(n,"wide computer"),Object(s.g)(m,"wide large screen"),Object(s.g)(p,"wide mobile"),Object(s.g)(O,"wide tablet"),Object(s.g)(g,"wide widescreen"),Object(s.g)(E,"wide"),"column",a),w=Object(d.a)(b,e),N=Object(u.a)(b,e);return o.a.createElement(N,c()({},w,{className:y}),t)}b.handledProps=["as","children","className","color","computer","floated","largeScreen","mobile","only","stretched","tablet","textAlign","verticalAlign","widescreen","width"],b.propTypes={},b.create=Object(m.c)(b,function(e){return{children:e}});var p=b;function j(e){var t=e.centered,a=e.children,n=e.className,i=e.color,l=e.columns,m=e.divided,b=e.only,p=e.reversed,v=e.stretched,O=e.textAlign,h=e.verticalAlign,f=r()(i,Object(s.a)(t,"centered"),Object(s.a)(m,"divided"),Object(s.a)(v,"stretched"),Object(s.c)(b,"only"),Object(s.c)(p,"reversed"),Object(s.d)(O),Object(s.f)(h),Object(s.g)(l,"column",!0),"row",n),g=Object(d.a)(j,e),E=Object(u.a)(j,e);return o.a.createElement(E,c()({},g,{className:f}),a)}j.handledProps=["as","centered","children","className","color","columns","divided","only","reversed","stretched","textAlign","verticalAlign"],j.propTypes={};var v=j;function O(e){var t=e.celled,a=e.centered,n=e.children,i=e.className,l=e.columns,m=e.container,b=e.divided,p=e.doubling,j=e.inverted,v=e.padded,h=e.relaxed,f=e.reversed,g=e.stackable,E=e.stretched,y=e.textAlign,w=e.verticalAlign,N=r()("ui",Object(s.a)(a,"centered"),Object(s.a)(m,"container"),Object(s.a)(p,"doubling"),Object(s.a)(j,"inverted"),Object(s.a)(g,"stackable"),Object(s.a)(E,"stretched"),Object(s.b)(t,"celled"),Object(s.b)(b,"divided"),Object(s.b)(v,"padded"),Object(s.b)(h,"relaxed"),Object(s.c)(f,"reversed"),Object(s.d)(y),Object(s.f)(w),Object(s.g)(l,"column",!0),"grid",i),x=Object(d.a)(O,e),A=Object(u.a)(O,e);return o.a.createElement(A,c()({},x,{className:N}),n)}O.handledProps=["as","celled","centered","children","className","columns","container","divided","doubling","inverted","padded","relaxed","reversed","stackable","stretched","textAlign","verticalAlign"],O.Column=p,O.Row=v,O.propTypes={};t.a=O}}]);
//# sourceMappingURL=component---src-pages-index-tsx-d13e33345d9780210fe2.js.map