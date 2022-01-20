(function(e){function t(t){for(var o,s,c=t[0],r=t[1],u=t[2],d=0,b=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(l,s)&&l[s]&&b.push(l[s][0]),l[s]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);i&&i(t);while(b.length)b.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var r=n[c];0!==l[r]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},l={app:0},a=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var i=r;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),l={class:"w-10/12 m-auto my-20"},a={class:"flex justify-between flex-row flex-wrap"};function s(e,t,n,s,c,r){var u=Object(o["j"])("StudentsTable"),i=Object(o["j"])("StationsTable"),d=Object(o["j"])("ResultsTable"),b=Object(o["j"])("Modal");return Object(o["h"])(),Object(o["e"])("div",l,[Object(o["f"])("div",a,[Object(o["g"])(u,{class:"w-5/12","on-input-change":r.onInputChange,"delete-student":r.deleteStudent,students:c.students,"on-submit":r.onSubmit,studentName:c.studentName,"toggle-modal":r.openModal,"on-search":r.onSearch},null,8,["on-input-change","delete-student","students","on-submit","studentName","toggle-modal","on-search"]),Object(o["g"])(i,{class:"w-5/12","on-input-change":r.onInputChange,"delete-station":r.deleteStation,stations:c.stations,"on-submit":r.onSubmit,stationName:c.stationName,"toggle-modal":r.openModal,"on-search":r.onSearch,"selected-station-value":c.selectedStationValue,"select-station-value":r.selectStationValue},null,8,["on-input-change","delete-station","stations","on-submit","stationName","toggle-modal","on-search","selected-station-value","select-station-value"])]),Object(o["g"])(d,{stations:c.stations,students:c.students,results:c.results,resultName:c.resultName,"on-result-submit":r.onResultSubmit,"on-input-change":r.onInputChange,"delete-result":r.deleteResult},null,8,["stations","students","results","resultName","on-result-submit","on-input-change","delete-result"]),c.showModal?(Object(o["h"])(),Object(o["c"])(b,{key:0,"close-modal":r.closeModal,"modal-object":c.modalData,save:r.patchValue},null,8,["close-modal","modal-object","save"])):Object(o["d"])("",!0)])}n("99af"),n("4de4"),n("d3b7"),n("caad"),n("2532"),n("b0c0");var c=Object(o["f"])("h1",{class:"text-3xl mb-10"},"Stationsliste",-1),r=Object(o["f"])("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"username"}," Station hinzufügen ",-1),u={class:"flex flex-row"},i=["value"],d={class:"relative w-2/4"},b=Object(o["f"])("option",{disabled:"",selected:"",value:""}," -- Wert wählen -- ",-1),f=Object(o["f"])("option",null," Sekunden ",-1),h=Object(o["f"])("option",null," Meter ",-1),p=[b,f,h],g=Object(o["f"])("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[Object(o["f"])("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[Object(o["f"])("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})])],-1),j={class:"py-16"},O={class:"flex"},v=["onClick"],m=Object(o["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"},null,-1),w=[m],x=["onClick"],y=Object(o["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1),S=[y];function k(e,t,n,l,a,s){var b=Object(o["j"])("SearchBar");return Object(o["h"])(),Object(o["e"])("div",null,[c,Object(o["f"])("div",null,[r,Object(o["f"])("div",u,[Object(o["f"])("input",{onKeyup:t[0]||(t[0]=Object(o["l"])((function(e){return n.onSubmit("stations","stationName","stations")}),["enter"])),onInput:t[1]||(t[1]=function(e){return n.onInputChange(e,"stationName")}),value:n.stationName,class:"shadow appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",placeholder:"Name der Station"},null,40,i),Object(o["f"])("div",d,[Object(o["f"])("select",{onChange:t[2]||(t[2]=function(){return n.selectStationValue&&n.selectStationValue.apply(n,arguments)}),class:"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-state"},p,32),g]),Object(o["f"])("button",{onClick:t[3]||(t[3]=function(e){return n.onSubmit("stations","stationName","stations")}),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button"}," Speichern ")])]),Object(o["f"])("div",null,[Object(o["f"])("ul",j,[Object(o["g"])(b),(Object(o["h"])(!0),Object(o["e"])(o["a"],null,Object(o["i"])(n.stations,(function(e){return Object(o["h"])(),Object(o["e"])("li",{class:"w-full p-4 pr-8 pl-8 flex items-center justify-between border-b border-gray-300",key:e},[Object(o["f"])("div",null,Object(o["k"])(e.name)+" (in "+Object(o["k"])(e.value)+") ",1),Object(o["f"])("div",O,[(Object(o["h"])(),Object(o["e"])("svg",{onClick:function(t){return n.toggleModal(e,"Station bearbeiten","Name der Station","stations","stations")},xmlns:"http://www.w3.org/2000/svg",class:"h-5 mr-4 w-5 cursor-pointer hover:text-green-800",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},w,8,v)),(Object(o["h"])(),Object(o["e"])("svg",{onClick:function(t){return n.deleteStation(e.id)},xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 cursor-pointer hover:text-red-800",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},S,8,x))])])})),128))])])])}function C(e,t,n,l,a,s){return Object(o["h"])(),Object(o["e"])("input",{onInput:t[0]||(t[0]=function(e){return n.onSearch(n.searchType,n.allType,e)}),class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",placeholder:"Suchen..."},null,32)}var M={name:"SearchBar.vue",props:{searchType:String,allType:String,onSearch:Function}},N=n("6b0d"),V=n.n(N);const L=V()(M,[["render",C]]);var F=L,B={name:"StationsTable.vue",props:{stations:Array,stationName:String,selectedStationValue:String,selectStationValue:Function,onInputChange:Function,onSubmit:Function,deleteStation:Function,toggleModal:Function,onSearch:Function},components:{SearchBar:F}};const I=V()(B,[["render",k]]);var T=I,R=Object(o["f"])("h1",{class:"text-3xl mb-10"},"Schülerliste",-1),z=Object(o["f"])("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"username"}," Schüler hinzufügen ",-1),A={class:"flex flex-row"},_=["value"],P={class:"py-16"},$={class:"flex"},H=["onClick"],E=Object(o["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"},null,-1),D=[E],J=["onClick"],K=Object(o["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1),U=[K];function W(e,t,n,l,a,s){var c=Object(o["j"])("SearchBar");return Object(o["h"])(),Object(o["e"])("div",null,[R,Object(o["f"])("div",null,[z,Object(o["f"])("div",A,[Object(o["f"])("input",{onKeyup:t[0]||(t[0]=Object(o["l"])((function(e){return n.onSubmit("users","studentName","students")}),["enter"])),onInput:t[1]||(t[1]=function(e){return n.onInputChange(e,"studentName")}),value:n.studentName,class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",placeholder:"Name des Schülers"},null,40,_),Object(o["f"])("button",{onClick:t[2]||(t[2]=function(e){return n.onSubmit("users","studentName","students")}),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button"}," Speichern ")])]),Object(o["f"])("div",null,[Object(o["f"])("ul",P,[Object(o["g"])(c,{"all-type":"allStudents","search-type":"students","on-search":n.onSearch},null,8,["on-search"]),(Object(o["h"])(!0),Object(o["e"])(o["a"],null,Object(o["i"])(n.students,(function(e){return Object(o["h"])(),Object(o["e"])("li",{class:"w-full p-4 pr-8 pl-8 flex items-center justify-between border-b border-gray-300",key:e.id},[Object(o["f"])("div",null,Object(o["k"])(e.name),1),Object(o["f"])("div",$,[(Object(o["h"])(),Object(o["e"])("svg",{onClick:function(t){return n.toggleModal(e,"Schüler bearbeiten","Name des Schülers","users","students")},xmlns:"http://www.w3.org/2000/svg",class:"h-5 mr-4 w-5 cursor-pointer hover:text-green-800",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},D,8,H)),(Object(o["h"])(),Object(o["e"])("svg",{onClick:function(t){return n.deleteStudent(e.id)},xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 cursor-pointer hover:text-red-800",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},U,8,J))])])})),128))])])])}var q={name:"StudentsTable.vue",props:{students:Array,studentName:String,onInputChange:Function,onSubmit:Function,deleteStudent:Function,toggleModal:Function,onSearch:Function},components:{SearchBar:F}};const G=V()(q,[["render",W]]);var Q=G,X=Object(o["f"])("h1",{class:"mt-28 text-3xl mb-10"},"Ergebnis hinzufügen",-1),Y={class:"flex flex-row w-full justify-between"},Z={class:"w-3/12"},ee=Object(o["f"])("label",{class:"block tracking-wide text-gray-700 text-xs font-bold mb-2",for:"grid-state"}," Schüler ",-1),te={class:"flex flex-row"},ne={class:"w-full"},oe={class:"relative"},le=Object(o["f"])("option",{disabled:"",selected:"",value:""}," -- Schüler wählen -- ",-1),ae=["value"],se=Object(o["f"])("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[Object(o["f"])("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[Object(o["f"])("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})])],-1),ce={class:"w-3/12"},re=Object(o["f"])("label",{class:"block tracking-wide text-gray-700 text-xs font-bold mb-2",for:"grid-state"}," Station ",-1),ue={class:"flex flex-row"},ie={class:"w-full"},de={class:"relative"},be=Object(o["f"])("option",{disabled:"",selected:"",value:""}," -- Station wählen -- ",-1),fe=["value"],he=Object(o["f"])("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[Object(o["f"])("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[Object(o["f"])("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})])],-1),pe=Object(o["f"])("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"username"}," Ergebnis ",-1),ge={class:"flex flex-row"},je={key:0},Oe=Object(o["f"])("h1",{class:"mt-28 text-3xl mb-10"},"Liste aller Ergebnisse",-1),ve={class:"table-auto w-full"},me=Object(o["f"])("thead",null,[Object(o["f"])("tr",{class:"text-left"},[Object(o["f"])("th",{class:"p-4 border-b-2"},"Schüler"),Object(o["f"])("th",{class:"p-4 border-b-2"},"Station"),Object(o["f"])("th",{class:"p-4 border-b-2"},"Ergebnis"),Object(o["f"])("th",{class:"p-4 border-b-2"},"Funktion")])],-1),we={class:"p-4 border-b"},xe={class:"p-4 border-b"},ye={class:"p-4 border-b"},Se={class:"p-4 border-b-2"},ke=Object(o["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 inline mr-4 w-5 cursor-pointer hover:text-green-800",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(o["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"})],-1),Ce=["onClick"],Me=Object(o["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1),Ne=[Me];function Ve(e,t,n,l,a,s){return Object(o["h"])(),Object(o["e"])(o["a"],null,[X,Object(o["f"])("div",Y,[Object(o["f"])("div",Z,[ee,Object(o["f"])("div",te,[Object(o["f"])("div",ne,[Object(o["f"])("div",oe,[Object(o["f"])("select",{onChange:t[0]||(t[0]=function(){return s.selectStudent&&s.selectStudent.apply(s,arguments)}),class:"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"},[le,(Object(o["h"])(!0),Object(o["e"])(o["a"],null,Object(o["i"])(n.students,(function(e){return Object(o["h"])(),Object(o["e"])("option",{key:e.id,value:e.id},Object(o["k"])(e.name),9,ae)})),128))],32),se])])])]),Object(o["f"])("div",ce,[re,Object(o["f"])("div",ue,[Object(o["f"])("div",ie,[Object(o["f"])("div",de,[Object(o["f"])("select",{onChange:t[1]||(t[1]=function(){return s.selectStation&&s.selectStation.apply(s,arguments)}),class:"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-state"},[be,(Object(o["h"])(!0),Object(o["e"])(o["a"],null,Object(o["i"])(n.stations,(function(e){return Object(o["h"])(),Object(o["e"])("option",{key:e.id,value:e.id},Object(o["k"])(e.name),9,fe)})),128))],32),he])])])]),Object(o["f"])("div",null,[pe,Object(o["f"])("div",ge,[Object(o["f"])("input",{onInput:t[2]||(t[2]=function(){return s.onResultChange&&s.onResultChange.apply(s,arguments)}),class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",placeholder:"Ergebnis eingeben"},null,32),Object(o["f"])("button",{onClick:t[3]||(t[3]=function(){return s.submit&&s.submit.apply(s,arguments)}),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button"}," Speichern ")])])]),n.results?(Object(o["h"])(),Object(o["e"])("div",je,[Oe,Object(o["f"])("table",ve,[me,Object(o["f"])("tbody",null,[(Object(o["h"])(!0),Object(o["e"])(o["a"],null,Object(o["i"])(n.results,(function(e){var t,l;return Object(o["h"])(),Object(o["e"])("tr",{key:e.id},[Object(o["f"])("td",we,Object(o["k"])(null===(t=e.user)||void 0===t?void 0:t.name),1),Object(o["f"])("td",xe,Object(o["k"])(null===(l=e.station)||void 0===l?void 0:l.name),1),Object(o["f"])("td",ye,Object(o["k"])(e.score),1),Object(o["f"])("td",Se,[ke,(Object(o["h"])(),Object(o["e"])("svg",{onClick:function(t){return n.deleteResult(e.id)},xmlns:"http://www.w3.org/2000/svg",class:"h-5 inline w-5 cursor-pointer hover:text-red-800",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Ne,8,Ce))])])})),128))])])])):Object(o["d"])("",!0)],64)}var Le={student:"",station:"",result:""},Fe={name:"ResultsTable.vue",methods:{selectStudent:function(e){Le.student=e.target.value,console.log(e)},selectStation:function(e){Le.station=e.target.value},onResultChange:function(e){Le.result=e.target.value},submit:function(){this.$props.onResultSubmit(Le),Le=Object.create(Le)}},props:{deleteResult:Function,students:Array,stations:Array,results:Array,resultName:String,onInputChange:Function,onResultSubmit:Function}};const Be=V()(Fe,[["render",Ve]]);var Ie=Be,Te={class:"fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"},Re={class:"relative top-40 mx-auto p-5 border w-2/4 shadow-lg rounded-md bg-white"},ze=Object(o["f"])("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clip-rule":"evenodd"},null,-1),Ae=[ze],_e={class:"px-5 py-8"},Pe={class:"block text-gray-700 text-sm font-bold mb-2",for:"username"},$e={class:"flex flex-row"},He=["value","placeholder"],Ee={key:0,class:"relative w-2/4"},De=["selected"],Je=["selected"],Ke=Object(o["f"])("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[Object(o["f"])("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[Object(o["f"])("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})])],-1);function Ue(e,t,n,l,a,s){return Object(o["h"])(),Object(o["e"])("div",Te,[Object(o["f"])("div",Re,[(Object(o["h"])(),Object(o["e"])("svg",{onClick:t[0]||(t[0]=function(){return n.closeModal&&n.closeModal.apply(n,arguments)}),xmlns:"http://www.w3.org/2000/svg",class:"h-7 w-7 cursor-pointer text-red-600 absolute top-minus10 left-minus10",viewBox:"0 0 20 20",fill:"currentColor"},Ae)),Object(o["f"])("div",_e,[Object(o["f"])("label",Pe,Object(o["k"])(e.label),1),Object(o["f"])("div",$e,[Object(o["f"])("input",{onInput:t[1]||(t[1]=function(){return s.onChange&&s.onChange.apply(s,arguments)}),value:n.modalObject.data.name,class:"shadow appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",placeholder:n.modalObject.placeholder},null,40,He),"stations"===n.modalObject.endpoint?(Object(o["h"])(),Object(o["e"])("div",Ee,[Object(o["f"])("select",{onChange:t[2]||(t[2]=function(){return s.changeSelectedStationValue&&s.changeSelectedStationValue.apply(s,arguments)}),class:"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-state"},[Object(o["f"])("option",{selected:"Sekunden"===a.selectedStationValue}," Sekunden ",8,De),Object(o["f"])("option",{selected:"Meter"===a.selectedStationValue}," Meter ",8,Je)],32),Ke])):Object(o["d"])("",!0),Object(o["f"])("button",{onClick:t[3]||(t[3]=function(e){return s.saveInput(n.modalObject.endpoint,n.modalObject.type)}),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button"}," Speichern ")])])])])}var We="",qe={name:"Modal.vue",props:{closeModal:Function,modalObject:Object,save:Function},data:function(){return{selectedStationValue:""}},mounted:function(){We=this.$props.modalObject.data.name,this.selectedStationValue=this.$props.modalObject.data.value},methods:{onChange:function(e){We=e.target.value},saveInput:function(e,t){"stations"===e?(console.log(this.selectedStationValue),this.$props.save(this.$props.modalObject.data.id,We,e,t,this.selectedStationValue)):this.$props.save(this.$props.modalObject.data.id,We,e,t)},changeSelectedStationValue:function(e){this.selectedStationValue=e.target.value}}};const Ge=V()(qe,[["render",Ue]]);var Qe=Ge,Xe=n("bc3a"),Ye={name:"App",data:function(){return{stations:[],allStations:[],stationName:"",selectedStationValue:"",students:[],allStudents:[],studentName:"",results:[],resultName:"",showModal:!1,modalData:{data:"",label:"",placeholder:"",endpoint:"",type:""}}},mounted:function(){var e=this;Xe.get("http://localhost:3000/users").then((function(t){e.students=t.data.users,e.allStudents=e.students})).catch((function(e){return console.log(e)})),Xe.get("http://localhost:3000/stations").then((function(t){e.stations=t.data.stations,e.allStations=e.stations})).catch((function(e){return console.log(e)})),Xe.get("http://localhost:3000/scores").then((function(t){e.results=t.data.scores,console.log(e.results)})).catch((function(e){return console.log(e)}))},methods:{onInputChange:function(e,t){this[t]=e.target.value},onSubmit:function(e,t,n){var o=this;"stations"===e&&this[t].length?Xe.post("http://localhost:3000/".concat(e),{name:this[t],value:this.selectedStationValue}).then((function(){o[t]="",Xe.get("http://localhost:3000/".concat(e)).then((function(t){return o[n]=t.data[e]}))})):this[t].length&&Xe.post("http://localhost:3000/".concat(e),{name:this[t]}).then((function(){o[t]="",Xe.get("http://localhost:3000/".concat(e)).then((function(t){return o[n]=t.data[e]}))}))},selectStationValue:function(e){this.selectedStationValue=e.target.value},onResultSubmit:function(e){var t=this;Xe.post("http://localhost:3000/scores",{user_id:e.student,station_id:e.station,score:e.result}).then((function(){Xe.get("http://localhost:3000/scores").then((function(e){t.results=e.data.scores})).catch((function(e){return console.log(e)}))}))},deleteResult:function(e){var t=this;Xe.delete("http://localhost:3000/scores/".concat(e)).then((function(e){t.results=e.data.scores,console.log(t.results)})).catch((function(e){return console.log(e)}))},deleteStation:function(e){var t=this;Xe.delete("http://localhost:3000/stations/".concat(e)).then((function(e){return t.stations=e.data.stations}))},deleteStudent:function(e){var t=this;Xe.delete("http://localhost:3000/users/".concat(e)).then((function(e){return t.students=e.data.users}))},openModal:function(e,t,n,o,l){this.modalData={data:e,label:t,placeholder:n,endpoint:o,type:l},this.showModal=!0},closeModal:function(){this.showModal=!1},patchValue:function(e,t,n,o,l){var a=this;t.length&&"stations"===n?Xe.patch("http://localhost:3000/".concat(n,"/").concat(e),{name:t,value:l}).then((function(e){return a[o]=e.data[n]})):t.length&&Xe.patch("http://localhost:3000/".concat(n,"/").concat(e),{name:t}).then((function(e){return a[o]=e.data[n]})),this.closeModal()},onSearch:function(e,t,n){this[e]=this[t].filter((function(e){return e.name.toUpperCase().includes(n.target.value.toUpperCase())}))}},components:{StationsTable:T,StudentsTable:Q,ResultsTable:Ie,Modal:Qe}};n("8c70");const Ze=V()(Ye,[["render",s]]);var et=Ze;n("a766");Object(o["b"])(et).mount("#app")},"8c70":function(e,t,n){"use strict";n("fd5c")},a766:function(e,t,n){},fd5c:function(e,t,n){}});
//# sourceMappingURL=app.3d14ac22.js.map