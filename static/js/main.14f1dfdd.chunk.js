(this["webpackJsonppoke-houm"]=this["webpackJsonppoke-houm"]||[]).push([[0],{27:function(t,e,s){},35:function(t,e,s){"use strict";s.r(e);var a=s(1),n=s.n(a),r=s(21),c=s.n(r),i=(s(27),s(7)),l=s(8),o=s(10),u=s(9),h=s(14),x=s(2),d=s(13),j=s.n(d),m=s(17),b=s(0),p=function(t){return Object(b.jsx)("div",{className:"w-full",children:Object(b.jsx)("div",{className:"overflow-hidden h-1 text-xs flex rounded-full bg-lightGray4",children:Object(b.jsx)("div",{style:{width:"".concat(t.base_stat,"%")},className:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange"})})})},f=function(t){Object(o.a)(s,t);var e=Object(u.a)(s);function s(t){var a;return Object(i.a)(this,s),(a=e.call(this,t)).state={id:t.id,name:t.name,height:t.height,weight:t.weight,sprites:t.sprites,stats:t.stats,types:t.types},a}return Object(l.a)(s,[{key:"componentDidMount",value:function(){}},{key:"getCapitalize",value:function(t){return t?(t.charAt(0).toUpperCase()+t.slice(1)).replace("-","."):""}},{key:"getFormatId",value:function(t){var e=parseInt(t);return e<10?"00"+e:e>=10&&e<100?"0"+e:e}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"flex flex-col shadow h-80 w-80 rounded-xl mx-auto cursor-pointer  transition-shadow hover:shadow-lg duration-400 ",children:[Object(b.jsxs)("div",{className:"flex flex-row bg-orange items-center rounded-t-xl h-20",children:[Object(b.jsxs)("div",{className:"flex flex-col pt-2 pb-2 pl-16 w-2/4",children:[Object(b.jsx)("span",{className:"text-2xl text-white font-semibold font-nunito cursor-auto",children:this.getCapitalize(this.state.name)}),Object(b.jsxs)("span",{className:"text-sm text-white font-normal font-nunito cursor-auto",children:[" #",this.getFormatId(this.state.id)]})]}),Object(b.jsx)("div",{className:"flex flex-wrap item-center h-full w-2/4",children:Object(b.jsx)("img",{className:"mx-auto my-auto object-cover",src:this.state.sprites?this.state.sprites.front_default:"https://i.pinimg.com/originals/2a/b1/3a/2ab13a4cebbf0cb6dd2cd5aa7e59abee.png",alt:"ditto"})})]}),Object(b.jsx)("div",{className:"flex flex-row justify-center w-full h-28 bg-darkGray items-center gap-x-2",children:this.state.types?this.state.types.map((function(t){return Object(b.jsx)("div",{className:"bg-red-400 rounded-full text-center h-7 pl-3 pr-3 pb-1",children:Object(b.jsx)("span",{className:"text-white text-xs font-semibold font-nunito cursor-auto",children:t.type.name.charAt(0).toUpperCase()+t.type.name.slice(1)},t.type.name)})})):null}),Object(b.jsx)("div",{className:"flex flex-wrap bg-white h-full w-full items-center justify-center",children:Object(b.jsxs)("div",{className:"grid grid-cols-6 gap-0 gap-x-1 content-center items-center ml-7 mr-6",children:[Object(b.jsx)("span",{className:"text-xs font-semibold col-span-2 cursor-auto",children:"HP"}),Object(b.jsx)("span",{className:"text-xs font-normal text-center cursor-auto",children:this.state.stats[0]?this.state.stats[0].base_stat:null}),Object(b.jsx)("div",{className:"col-span-3",children:Object(b.jsx)(p,{base_stat:this.state.stats[0]?this.state.stats[0].base_stat:null})}),Object(b.jsx)("span",{className:"text-xs font-semibold col-span-2 cursor-auto",children:"Attack"}),Object(b.jsx)("span",{className:"text-xs font-normal text-center cursor-auto",children:this.state.stats[1]?this.state.stats[1].base_stat:null}),Object(b.jsx)("div",{className:"col-span-3",children:Object(b.jsx)(p,{base_stat:this.state.stats[1]?this.state.stats[1].base_stat:null})}),Object(b.jsx)("span",{className:"text-xs font-semibold col-span-2 cursor-auto",children:"Defense"}),Object(b.jsx)("span",{className:"text-xs font-normal text-center cursor-auto",children:this.state.stats[2]?this.state.stats[2].base_stat:null}),Object(b.jsx)("div",{className:"col-span-3",children:Object(b.jsx)(p,{base_stat:this.state.stats[2]?this.state.stats[2].base_stat:null})}),Object(b.jsx)("span",{className:"text-xs font-semibold col-span-2 cursor-auto",children:"Special Attack"}),Object(b.jsx)("span",{className:"text-xs font-normal text-center cursor-auto",children:this.state.stats[3]?this.state.stats[3].base_stat:null}),Object(b.jsx)("div",{className:"col-span-3",children:Object(b.jsx)(p,{base_stat:this.state.stats[3]?this.state.stats[3].base_stat:null})}),Object(b.jsx)("span",{className:"text-xs font-semibold col-span-2 cursor-auto",children:"Special Defense"}),Object(b.jsx)("span",{className:"text-xs font-normal text-center cursor-auto",children:this.state.stats[4]?this.state.stats[4].base_stat:null}),Object(b.jsx)("div",{className:"col-span-3",children:Object(b.jsx)(p,{base_stat:this.state.stats[4]?this.state.stats[4].base_stat:null})}),Object(b.jsx)("span",{className:"text-xs font-semibold col-span-2 cursor-auto",children:"Speed"}),Object(b.jsx)("span",{className:"text-xs font-normal text-center cursor-auto",children:this.state.stats[5]?this.state.stats[5].base_stat:null}),Object(b.jsx)("div",{className:"col-span-3",children:Object(b.jsx)(p,{base_stat:this.state.stats[5]?this.state.stats[5].base_stat:null})})]})}),Object(b.jsxs)("div",{className:"w-full h-32 bg-lightGray2 rounded-b-xl flex flex-row text-center items-center divide-x",children:[Object(b.jsxs)("div",{className:"w-1/2 flex flex-col pl-2",children:[Object(b.jsx)("span",{className:"text-sm font-medium text-gray-500 h-4",children:this.state.height}),Object(b.jsx)("span",{className:"text-xs font-medium text-gray-400",children:"Height"})]}),Object(b.jsxs)("div",{className:"w-1/2 flex flex-col pr-2",children:[Object(b.jsx)("span",{className:"text-sm font-medium text-gray-500 h-4",children:this.state.weight}),Object(b.jsx)("span",{className:"text-xs font-medium text-gray-400",children:"Weight"})]})]})]})}}]),s}(n.a.Component),O=function(){return Object(b.jsx)("div",{className:"text-center bg-darkGray w-full h-64 md:h-72 lg:h-80",style:{backgroundImage:"url('https://d28ipuewd7cdcq.cloudfront.net/assets/article/2020/06/19/pokemon-sword-shield-isle-of-armor-fields-of-honor-diglett-feature_feature.png')",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"top center",backgroundBlendMode:"multiply"},children:Object(b.jsxs)("div",{className:"w-full h-full flex flex-col justify-center items-center",style:{backdropFilter:"blur(2px)"},children:[Object(b.jsx)("h1",{className:"text-white font-nunito font-bold text-4xl pb-2 pl-6 pr-6",children:"Welcome to PokeHoum"}),Object(b.jsxs)("h2",{className:"text-white font-nunito font-semibold text-lg pl-6 pr-6",children:["\xa1A ",Object(b.jsx)("a",{className:"underline",href:"https://pokeapi.co/",children:"PokeAPI"})," based application to know more to about your favorites Pokemons!"]})]})})},g=function(t){Object(o.a)(s,t);var e=Object(u.a)(s);function s(t){var a;return Object(i.a)(this,s),(a=e.call(this,t)).filterByWord=function(t){var e=a.state.resultsTotal.filter((function(e){return new RegExp("".concat(t)).test(e.name)}));a.setState({results:e})},a.filterById=function(t){var e=a.state.resultsTotal.filter((function(e){return e.id===t}));a.setState({results:e})},a.nextPage=function(){fetch(a.state.next).then((function(t){t.json().then((function(t){a.setState({next:t.next,previous:t.previous,results:t.results})}))}))},a.previuosPage=function(){fetch(a.state.previous).then((function(t){t.json().then((function(t){a.setState({next:t.next,previous:t.previous,results:t.results})}))}))},a.handleChange=function(t){if("wordFilter"===t.target.name){var e=t.target.value;if(isNaN(parseInt(e)))""===e?a.setState({results:a.state.resultsTotal}):a.filterByWord(t.target.value.toLowerCase());else{var s=parseInt(e);0===s?a.setState({results:a.state.resultsTotal}):a.filterById(s)}}},a.state={results:[],resultsTotal:[]},a}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var t=this;this.getPokemons().then((function(e){return t.setState({results:e,resultsTotal:e})}))}},{key:"getPokemons",value:function(){var t=Object(m.a)(j.a.mark((function t(){var e,s,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100");case 2:return e=t.sent,t.next=5,e.json();case 5:return s=t.sent,a=s.results.map(function(){var t=Object(m.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(e.url));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.abrupt("return",Promise.all(a).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){return t})));case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{}),Object(b.jsx)("div",{className:" lg:sticky top-0  mt-0.5 h-24 bg-lightGray3 mx-auto flex justify-center items-center",children:Object(b.jsx)("input",{className:"w-7/12 h-12 shadow font-nunito bg-white text-center text-lg text-gray-500 font-light rounded-xl focus:ring-2 focus:outline-none transition duration-300 focus:ring-gray-300",type:"text",name:"wordFilter",onChange:this.handleChange,placeholder:"ex: 1 or Pikachu"})}),Object(b.jsx)("div",{className:"flex justify-center pt-12 pb-12",children:Object(b.jsx)("div",{className:"grid grid-cols-1 gap-11 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3",children:this.state.results?this.state.results.map((function(t){var e=t.id,s=t.name,a=t.height,n=t.weight,r=t.sprites,c=t.stats,i=t.types;return Object(b.jsx)(f,{id:e,name:s,height:a,weight:n,sprites:r,stats:c,types:i},e)})):null})})]})}}]),s}(n.a.Component),v=function(t){Object(o.a)(s,t);var e=Object(u.a)(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return"404 test"}}]),s}(n.a.Component),w=function(){return Object(b.jsx)("div",{className:"w-full bg-white shadow-sm h-auto pt-2 pb-2 ",children:Object(b.jsxs)(h.b,{to:"/",children:[" ",Object(b.jsx)("img",{className:"w-auto h-9 mx-auto",src:"https://i.imgur.com/GmxjFwX.png",alt:"PokeHoum"})," "]})})},N=function(){return Object(b.jsxs)("div",{className:"w-full h-28 flex flex-col justify-center my-auto bg-darkGray mt-4",children:[Object(b.jsxs)("span",{className:"text-center text-white text-nunito font-medium text-md pt-2",children:[" Made with \ud83d\udc96 by ",Object(b.jsx)("a",{href:"http://javiermojito.com",children:"Javier Mojito"})]}),Object(b.jsx)("a",{className:"text-center text-white font-normal ",href:"https://github.com/javiermojito/poke-houm",children:"Github Repo"})]})},y=function(t){return Object(b.jsxs)("div",{className:"relative h-full",children:[Object(b.jsx)(w,{}),t.children,Object(b.jsx)(N,{})]})},k=function(t){Object(o.a)(s,t);var e=Object(u.a)(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsx)(h.a,{children:Object(b.jsx)(y,{children:Object(b.jsxs)(x.c,{children:[Object(b.jsx)(x.a,{exact:!0,path:"/",component:g}),Object(b.jsx)(x.a,{component:v})]})})})}}]),s}(n.a.Component);c.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.14f1dfdd.chunk.js.map