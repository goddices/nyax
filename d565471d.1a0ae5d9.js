(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{109:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return r})),t.d(n,"default",(function(){return b}));var a=t(2),o=(t(0),t(118));const i={id:"container",title:"Container"},c={id:"concepts/container",isDocsHomePage:!1,title:"Container",description:"\u5f53\u521b\u5efa\u5e94\u7528\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 getContainer \u83b7\u53d6 Model \u5bf9\u5e94\u7684 Container \u5f97\u5230\u5f53\u524d\u7684\u5e94\u7528\u72b6\u6001\u4ee5\u53ca\u884d\u751f\u6570\u636e\u3002\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7 Container \u8fdb\u884c action \u5206\u53d1\uff0c\u4ece\u800c\u6539\u53d8\u5e94\u7528\u72b6\u6001\u3002",source:"@site/docs\\concepts\\container.md",permalink:"/concepts/container",sidebar:"someSidebar",previous:{title:"Model",permalink:"/concepts/model"},next:{title:"API \u53c2\u8003",permalink:"/api/api-reference"}},r=[{value:"State",id:"state",children:[]},{value:"Getters",id:"getters",children:[]},{value:"Actions",id:"actions",children:[]},{value:"\u6ce8\u518c Container",id:"\u6ce8\u518c-container",children:[]},{value:"\u5378\u8f7d Container",id:"\u5378\u8f7d-container",children:[]},{value:"\u6ce8\u518c\u72b6\u6001",id:"\u6ce8\u518c\u72b6\u6001",children:[]},{value:"Sub Container",id:"sub-container",children:[]}],s={rightToc:r};function b({components:e,...n}){return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u5f53\u521b\u5efa\u5e94\u7528\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"getContainer")," \u83b7\u53d6 Model \u5bf9\u5e94\u7684 Container \u5f97\u5230\u5f53\u524d\u7684\u5e94\u7528\u72b6\u6001\u4ee5\u53ca\u884d\u751f\u6570\u636e\u3002\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7 Container \u8fdb\u884c action \u5206\u53d1\uff0c\u4ece\u800c\u6539\u53d8\u5e94\u7528\u72b6\u6001\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"const Model = createModel(\n  class extends ModelBase {\n    // ...\n  }\n);\n\nconst { getContainer, registerModels } = createNyax(/* options */);\nregisterModels({ model: Model });\n\nconst container = getContainer(Model);\ncontainer.state.someState;\ncontainer.getters.someGetter;\ncontainer.actions.someAction.dispatch({});\n")),Object(o.b)("h2",{id:"state"},"State"),Object(o.b)("p",null,"\u53ef\u4ee5\u901a\u8fc7 Container \u4e2d\u7684 state \u83b7\u5f97\u5f53\u524d\u5bb9\u5668\u7684\u72b6\u6001\u3002state \u7684\u521d\u59cb\u503c\u7531 Model \u4e2d\u7684 initialState \u751f\u6210\u3002"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u5f53 Container \u672a\u6ce8\u518c\u65f6\uff0cstate \u7684\u503c\u4e3a\u9ed8\u8ba4\u53c2\u6570\u751f\u6210\u7684\u521d\u59cb\u503c\u800c\u4e0d\u662f\u7a7a\u3002\u8fd9\u662f\u4e3a\u4e86\u907f\u514d ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://react-redux.js.org/api/hooks#stale-props-and-zombie-children"}),"Stale Props")," \u5bfc\u81f4\u95ee\u9898\u3002"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'const Model = createModel(\n  class extends ModelBase {\n    public initialState() {\n      return {\n        foo: "foo",\n      };\n    }\n  }\n);\n\nconst container = getContainer(Model);\ncontainer.state.foo; // foo\n')),Object(o.b)("h2",{id:"getters"},"Getters"),Object(o.b)("p",null,"\u53ef\u4ee5\u901a\u8fc7 Container \u4e2d\u7684 getters \u83b7\u5f97\u5f53\u524d\u5bb9\u5668\u7684\u884d\u751f\u6570\u636e\u3002getters \u7531 Model \u4e2d\u7684 selectors \u751f\u6210\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"const Model = createModel(\n  class extends ModelBase {\n    // ...\n\n    public selectors() {\n      return {\n        fooText: () => `foo: ${this.state.foo}`,\n      };\n    }\n  }\n);\n\nconst container = getContainer(Model);\ncontainer.getters.fooText; // foo: foo\n")),Object(o.b)("h2",{id:"actions"},"Actions"),Object(o.b)("p",null,"\u53ef\u4ee5\u901a\u8fc7 Container \u4e2d\u7684 actions \u83b7\u5f97\u5f53\u524d\u5bb9\u5668\u7684 action \u52a9\u624b\u3002\u53ef\u4ee5\u901a\u8fc7 action \u52a9\u624b\u65ad\u8a00 action \u7684\u7c7b\u578b\uff0c\u521b\u5efa action \u4ee5\u53ca\u5206\u53d1 action\u3002actions \u7531 Model \u4e2d\u7684 reducers \u548c effects \u7684\u5171\u540c\u751f\u6210\u3002"),Object(o.b)("p",null,"\u5206\u53d1 action \u65f6\u4f1a\u8fd4\u56de ",Object(o.b)("inlineCode",{parentName:"p"},"Promise<ReturnTypeOfEffect>"),"\uff0c\u53ef\u4ee5\u7b49\u5f85\u5b83\u7684\u503c\u4ee5\u83b7\u5f97\u5bf9\u5e94 effect \u7684\u7ed3\u679c\u3002"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5206\u53d1 action \u65f6\u5bf9\u5e94\u7684 reducer \u4f1a\u88ab\u540c\u6b65\u6267\u884c\uff0c\u56e0\u6b64\u5728\u4e0d\u9700\u8981 effect \u8fd4\u56de\u503c\u7684\u60c5\u51b5\u4e0b\u53ef\u4ee5\u4e0d\u7b49\u5f85 ",Object(o.b)("inlineCode",{parentName:"p"},"Promise")," \u7ed3\u675f\u3002"))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u5f53 reducer / effect \u4e2d\u672a\u5b9a\u4e49 payload \u65f6\uff0c\u5efa\u8bae\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"{}")," \u4f5c\u4e3a\u521b\u5efa / \u5206\u53d1 action \u65f6\u7684 payload \u53c2\u6570\u3002"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'const Model = createModel(\n  class extends ModelBase {\n    // ...\n\n    public reducers() {\n      return {\n        setFoo: (value: string) => {\n          this.state.foo = value;\n        },\n      };\n    }\n\n    public effects() {\n      return {\n        trimFoo: async () => {\n          const trimmed = this.state.foo.trim();\n          await this.actions.setFoo(trimmed);\n          return trimmed;\n        },\n      };\n    }\n  }\n);\n\nconst container = getContainer(Model);\n\nconst setFooAction = container.actions.setFoo.create("foo");\ncontainer.actions.setFoo.is(setFooAction); // true\ncontainer.actions.trimFoo.is(setFooAction); // false\n\ncontainer.actions.setFoo.dispatch("  foo  "); // Promise<void>\nawait container.actions.trimFoo.dispatch({}); // foo\n')),Object(o.b)("h2",{id:"\u6ce8\u518c-container"},"\u6ce8\u518c Container"),Object(o.b)("p",null,"\u901a\u8fc7\u8c03\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"register")," \u65b9\u6cd5\u53ef\u4ee5\u6ce8\u518c\u5f53\u524d Container\u3002",Object(o.b)("inlineCode",{parentName:"p"},"register")," \u65b9\u6cd5\u63a5\u53d7\u4e00\u4e2a\u53ef\u9009\u53c2\u6570\uff0c\u8be5\u53c2\u6570\u4f1a\u548c Model \u4e2d\u7684 defaultArgs \u8fdb\u884c\u5408\u5e76\u7136\u540e\u4f20\u9012\u7ed9 initialState\u3002"),Object(o.b)("p",null,"\u5f53 Container \u6ce8\u518c\u540e\uff0c\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"getContainer")," \u83b7\u5f97\u7684 Container \u7684\u5f15\u7528\u5728\u6ce8\u518c\u671f\u95f4\u4e0d\u4f1a\u6539\u53d8\u3002"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u5f53 Container \u5df2\u7ecf\u6ce8\u518c\u65f6\u8c03\u7528\u8be5\u65b9\u6cd5\u4f1a\u629b\u51fa\u9519\u8bef\u3002"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'container.register();\ncontainer.register({ foo: "foo" });\n')),Object(o.b)("h2",{id:"\u5378\u8f7d-container"},"\u5378\u8f7d Container"),Object(o.b)("p",null,"\u901a\u8fc7\u8c03\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"unregister")," \u65b9\u6cd5\u53ef\u4ee5\u5378\u8f7d\u5f53\u524d Container\u3002\u8be5\u65b9\u6cd5\u4f1a\u4ece store \u4e2d\u5220\u9664\u5bf9\u5e94 state\uff0c\u7ec8\u6b62 epics \u76d1\u542c\u5e76\u6e05\u7406 Container \u7684\u7f13\u5b58\u3002"),Object(o.b)("p",null,"\u65e0\u8bba Container \u662f\u5426\u6ce8\u518c\u5747\u53ef\u8c03\u7528\u8be5\u65b9\u6cd5\u4ee5\u6e05\u7406\u7f13\u5b58\u3002"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u5378\u8f7d Container \u5e76\u4e0d\u4f1a\u4e2d\u65ad effect \u7684\u6267\u884c\u3002\u5f53 Model \u4e3a Lazy Model \u65f6\u9700\u8981\u5c0f\u5fc3\u975e\u671f\u671b\u7684\u91cd\u65b0\u6ce8\u518c\u3002"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"container.unregister();\n")),Object(o.b)("h2",{id:"\u6ce8\u518c\u72b6\u6001"},"\u6ce8\u518c\u72b6\u6001"),Object(o.b)("p",null,"Container \u63d0\u4f9b ",Object(o.b)("inlineCode",{parentName:"p"},"isRegistered")," \u548c ",Object(o.b)("inlineCode",{parentName:"p"},"canRegister")," \u5c5e\u6027\u7528\u6765\u5224\u65ad\u6ce8\u518c\u72b6\u6001\u4ee5\u53ca\u662f\u5426\u53ef\u4ee5\u6ce8\u518c\u3002"),Object(o.b)("h2",{id:"sub-container"},"Sub Container"),Object(o.b)("p",null,"\u6709\u4e9b\u65f6\u5019\u6211\u4eec\u53ef\u80fd\u5e0c\u671b\u83b7\u5f97 Model \u4e2d\u7684\u67d0\u4e00\u4e2a Sub Model \u5bf9\u5e94\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"ContainerCore"),"\u3002\u8fd9\u79cd\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"createSubContainer")," \u4ee5\u83b7\u5f97 Container \u5728\u67d0\u4e00\u4e2a namespace \u4e0b\u7684\u7684 Sub Container\u3002"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"ContainerCore")," \u662f\u53ea\u5305\u542b state\uff0cgetters \u548c actions \u7684 Container\u3002Sub Container \u5b9e\u9645\u4e0a\u5e76\u4e0d\u662f\u4e00\u4e2a\u771f\u6b63\u7684 Container\uff0c\u56e0\u4e3a\u5b83\u6ca1\u6709\u6ce8\u518c\u5728\u5e94\u7528\u4e0a\u7684\u5bf9\u5e94 Model \u3002"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'const AModel = createModel(\n  class extends ModelBase {\n    public initialState() {\n      return {\n        name: "A",\n        x: "X",\n      };\n    }\n  }\n);\n\nconst BModel = createModel(\n  class extends ModelBase {\n    public initialState() {\n      return {\n        name: "B",\n        y: "Y",\n      };\n    }\n  }\n);\n\nconst Model = mergeSubModels({\n  a: AModel,\n  b: BModel,\n});\n\nconst container = getContainer(Model);\nconst aContainer = createSubContainer(container, "a");\naContainer.state.name; // A\naContainer.state.x; // X\n')))}b.isMDXComponent=!0}}]);