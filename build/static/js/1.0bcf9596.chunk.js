webpackJsonp([1],{185:function(e,n,t){"use strict";function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function r(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var u=t(0),l=t.n(u),c=t(7),s=t(10),d=t(186),A=t(54),p=t(55),b=t(198),h=t.n(b),m=t(13),g=t(15),f=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),C=function(e){function n(){var e,t,r,u;a(this,n);for(var l=arguments.length,c=Array(l),s=0;s<l;s++)c[s]=arguments[s];return t=r=i(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(c))),r.state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},r.inputChangedHandler=function(e,n){var t=Object(g.b)(r.state.controls,o({},n,Object(g.b)(r.state.controls[n],{value:e.target.value,valid:Object(g.a)(e.target.value,r.state.controls[n].validation),touched:!0})));r.setState({controls:t})},r.submitHandler=function(e){e.preventDefault(),r.props.onAuth(r.state.controls.email.value,r.state.controls.password.value,r.state.isSignup)},r.switchAuthModeHandler=function(){r.setState(function(e){return{isSignup:!e.isSignup}})},u=t,i(r,u)}return r(n,e),f(n,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,n=[];for(var t in this.state.controls)n.push({id:t,config:this.state.controls[t]});var o=n.map(function(n){return l.a.createElement(d.a,{key:n.id,elementType:n.config.elementType,elementConfig:n.config.elementConfig,value:n.config.value,invalid:!n.config.valid,shouldValidate:n.config.validation,touched:n.config.touched,changed:function(t){return e.inputChangedHandler(t,n.id)}})});this.props.loading&&(o=l.a.createElement(p.a,null));var a=null;this.props.error&&(a=l.a.createElement("p",null,this.props.error.message));var i=null;return this.props.isAuthenticated&&(i=l.a.createElement(s.c,{to:this.props.authRedirectPath})),l.a.createElement("div",{className:h.a.Auth},i,a,l.a.createElement("form",{onSubmit:this.submitHandler},o,l.a.createElement(A.a,{btnType:"Success"},"SUBMIT")),l.a.createElement(A.a,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"SWITCH TO ",this.state.isSignup?"SIGNIN":"SIGNUP"))}}]),n}(u.Component),x=function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}},v=function(e){return{onAuth:function(n,t,o){return e(m.b(n,t,o))},onSetAuthRedirectPath:function(){return e(m.j("/"))}}};n.default=Object(c.b)(x,v)(C)},186:function(e,n,t){"use strict";var o=t(0),a=t.n(o),i=t(187),r=t.n(i),u=function(e){var n=null,t=[r.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&t.push(r.a.Invalid),e.elementType){case"input":n=a.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":n=a.a.createElement("textarea",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":n=a.a.createElement("select",{className:t.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:n=a.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return a.a.createElement("div",{className:r.a.Input},a.a.createElement("label",{className:r.a.Label},e.label),n)};n.a=u},187:function(e,n,t){var o=t(188);"string"===typeof o&&(o=[[e.i,o,""]]);var a={};a.transform=void 0;t(182)(o,a);o.locals&&(e.exports=o.locals)},188:function(e,n,t){n=e.exports=t(181)(!0),n.push([e.i,".Input-module__Input__2GO9p{width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Input-module__Label__1Cyzj{font-weight:700;display:block;margin-bottom:8px}.Input-module__InputElement__1Uyb4{outline:none;border:1px solid #ccc;background-color:#fff;font:inherit;padding:6px 10px;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.Input-module__InputElement__1Uyb4:focus{outline:none;background-color:#ccc}.Input-module__Invalid__1dxIO{border:1px solid red;background-color:#fda49a}","",{version:3,sources:["C:/Users/Jo\xe3o/burger-builder/src/components/UI/Input/Input.module.css"],names:[],mappings:"AAAA,4BACE,WAAY,AACZ,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAChC,AAED,4BACE,gBAAkB,AAClB,cAAe,AACf,iBAAmB,CACpB,AAED,mCACE,aAAc,AACd,sBAAuB,AACvB,sBAAwB,AACxB,aAAc,AACd,iBAAkB,AAClB,cAAe,AACf,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAChC,AAED,yCACE,aAAc,AACd,qBAAuB,CACxB,AAED,8BACE,qBAAsB,AACtB,wBAA0B,CAC3B",file:"Input.module.css",sourcesContent:[".Input {\n  width: 100%;\n  padding: 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.Label {\n  font-weight: bold;\n  display: block;\n  margin-bottom: 8px;\n}\n\n.InputElement {\n  outline: none;\n  border: 1px solid #ccc;\n  background-color: white;\n  font: inherit;\n  padding: 6px 10px;\n  display: block;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.InputElement:focus {\n  outline: none;\n  background-color: #ccc;\n}\n\n.Invalid {\n  border: 1px solid red;\n  background-color: #fda49a;\n}\n"],sourceRoot:""}]),n.locals={Input:"Input-module__Input__2GO9p",Label:"Input-module__Label__1Cyzj",InputElement:"Input-module__InputElement__1Uyb4",Invalid:"Input-module__Invalid__1dxIO"}},198:function(e,n,t){var o=t(199);"string"===typeof o&&(o=[[e.i,o,""]]);var a={};a.transform=void 0;t(182)(o,a);o.locals&&(e.exports=o.locals)},199:function(e,n,t){n=e.exports=t(181)(!0),n.push([e.i,".Auth-module__Auth__3o8Dm{margin:20px auto;width:80%;text-align:center;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;border:1px solid #eee;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width:600px){.Auth-module__Auth__3o8Dm{width:500px}}","",{version:3,sources:["C:/Users/Jo\xe3o/burger-builder/src/containers/Auth/Auth.module.css"],names:[],mappings:"AAAA,0BACE,iBAAkB,AAClB,UAAW,AACX,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,sBAAuB,AACvB,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAChC,AAED,yBACE,0BACE,WAAa,CACd,CACF",file:"Auth.module.css",sourcesContent:[".Auth {\n  margin: 20px auto;\n  width: 80%;\n  text-align: center;\n  -webkit-box-shadow: 0 2px 3px #ccc;\n          box-shadow: 0 2px 3px #ccc;\n  border: 1px solid #eee;\n  padding: 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n@media (min-width: 600px) {\n  .Auth {\n    width: 500px;\n  }\n}\n"],sourceRoot:""}]),n.locals={Auth:"Auth-module__Auth__3o8Dm"}}});
//# sourceMappingURL=1.0bcf9596.chunk.js.map