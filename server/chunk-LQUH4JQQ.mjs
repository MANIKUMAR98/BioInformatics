import './polyfills.server.mjs';
import{a as i,b as n,c as r,d as l,e as d,f as p,n as f,o as u,r as g,v as h,y as c}from"./chunk-S72OGDCI.mjs";var M=(()=>{class t{ngAfterViewInit(){if(typeof PDBeMolstarPlugin<"u"){let o=new PDBeMolstarPlugin,e={customData:{url:"https://alphafold.ebi.ac.uk/files/AF-O15552-F1-model_v1.cif",format:"cif"},alphafoldView:!0,bgColor:{r:255,g:255,b:255},hideCanvasControls:["selection","animation","controlToggle","controlInfo"],sequencePanel:!0,landscape:!0},a=document.getElementById("myViewer");o.render(a,e)}}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=n({type:t,selectors:[["app-protien-viewer"]],decls:2,vars:0,consts:[[2,"display","flex","justify-content","center"],["id","myViewer"]],template:function(e,a){e&1&&(l(0,"div",0),p(1,"div",1),d())},styles:["#myViewer[_ngcontent-%COMP%]{width:60%;height:80vh;position:relative;margin:20px}.msp-plugin[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#474748!important;border-radius:10px}"]})}}return t})();var y=[{path:"protein-view",component:M}],v=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275mod=r({type:t})}static{this.\u0275inj=i({imports:[c.forRoot(y),c]})}}return t})();var m=(()=>{class t{constructor(){this.title="BioInformatics"}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=n({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,a){e&1&&p(0,"router-outlet")},dependencies:[h]})}}return t})();var w=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275mod=r({type:t,bootstrap:[m]})}static{this.\u0275inj=i({providers:[u()],imports:[f,v]})}}return t})();var C=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275mod=r({type:t,bootstrap:[m]})}static{this.\u0275inj=i({imports:[w,g]})}}return t})();export{C as a};
