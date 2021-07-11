(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"@import url(https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.css);"]),o.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Amita&display=swap);"]),o.push([e.id,"/*Global*/\n:root {\n    --brown: #362417;\n    --light-pink: #c9adab;\n}\nbody {\n    font-size: 16px;\n    letter-spacing: 1px;\n}\na {\n    text-decoration: none;\n}\n.container {\n    padding: 0 0.625rem;\n    max-height: 100%;\n    margin-bottom: 50px;\n}\n\n/*Header*/\n.nav-menu {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.brand-logo{\n    font-family: 'Amita', cursive;    \n    font-size: 1.06rem;\n    color: var(--brown);\n}\n.brand-name {\n    font-family: 'Amita', cursive;  \n}\n.content {\n    margin: 0.625rem 0;\n}\n.border-bottom {\n    border-bottom: 1px solid white;\n}\n.hide {\n    display: none;\n}\n.menu {\n    position: absolute;\n    width: 250px;\n    top: 2px;\n    right: 0px;\n    background-color: rgba(228, 13, 59, 0.863)\n}\n.menu p {\n    padding: 10px;\n}\n.menu a {\n    color: white;\n}\n.close {\n    position: absolute;\n    top: -5px;\n    right: -5px;\n    color: white;\n    font-size: 1rem;\n}\n/*Main*/\nmain {\n    margin-bottom: 30px;\n}\nimg {\n    width: 100%;\n    height: auto;\n}\nh3 {\n    font-size: 20px;\n}\nmain p {\n    margin: 0.312rem 0;\n    font-size: 18px;\n    font-family: 'Courier New', Courier, monospace;\n}\n.center-text {\n    text-align: center;\n}\n.available-items {\n    margin-top: 0.938rem;\n}\n.image-container {\n    position: relative;\n    height: auto;\n}\n.absolute-pos {\n    border: 1px solid black;\n    background-color: rgb(0, 0, 0);\n    opacity: 0.7;\n    color: white;\n    font-size: 28px;\n}\n.item1,\n.item2 {\n    position: absolute;\n    top: 40%;\n    transform: translate(-50%, 0);\n}\n.item1 {\n    left: 1.25rem;\n}\n.item2 {\n    right: -0.316rem;\n}\n.mb10 {\n    margin-bottom : 10px;\n}\n\n/*||Footer*/\nfooter.content {\n    border-top: 1px solid rgb(230, 216, 216);\n    margin-top: 20px;\n}\nfooter div {\n    text-decoration: none;\n    color:var(--brown);\n    padding: 5px;\n}\n.copyright-info {\n    color:rgb(144, 127, 127);\n}\n\n@media only screen and (min-width: 600px) {\n    .item1,\n    .item2 {\n        top: 50%;\n        font-size: 40px;\n    }\n    .item1 {\n        left: 1.85rem;\n    }\n}",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},695:e=>{var n={};e.exports=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],p=i[l]||0,d="".concat(l," ").concat(p);i[l]=p+1;var u=t(d),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(n[u].references++,n[u].updater(m)):n.push({identifier:d,updater:o(m,r),references:1}),a.push(d)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var c=r(e,o),l=0;l<i.length;l++){var p=t(i[l]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}i=c}}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{let e=[{url:"https://upload.wikimedia.org/wikipedia/commons/a/a6/Dhido_Nepali_food_in_Pokhara.jpg",alt:"Nepali Dhido"},{url:"https://cdn.pixabay.com/photo/2019/11/04/08/14/food-4600495_1280.jpg",alt:"Chatpat Spicy"},{url:"https://cdn.pixabay.com/photo/2018/06/18/16/19/food-3482767_1280.jpg",alt:"Nepali Khana Set"},{url:"https://upload.wikimedia.org/wikipedia/commons/d/d5/Nepali_Momo.jpg",alt:"Nepali MoMo (Meat Dumplings)"},{url:"https://thumbs.dreamstime.com/b/varieties-nepali-food-served-together-plate-sweet-yogurt-teej-ko-dar-special-platter-nepalese-cuisine-rice-pulao-209673986.jpg",alt:"Nepali Khana"},{url:"https://thumbs.dreamstime.com/b/selroti-famous-nepali-style-sweet-bread-food-made-rice-flour-sugar-ghee-popular-snacks-sel-roti-cusine-209579883.jpg",alt:"Nepali Sel Roti"}];var n=t(379),r=t.n(n),o=t(795),i=t.n(o),a=t(695),s=t.n(a),c=t(216),l=t.n(c),p=t(28),d={styleTagTransform:function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}},setAttributes:function(e){var n=t.nc;n&&e.setAttribute("nonce",n)},insert:function(e){var n=s()("head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}};d.domAPI=i(),d.insertStyleElement=l(),r()(p.Z,d),p.Z&&p.Z.locals&&p.Z.locals;let u=document.querySelector(".image-container"),m=document.querySelector(".item1"),f=document.querySelector(".item2"),h=document.createElement("img"),g=0,v=document.querySelector(".menu-bar"),b=document.querySelector(".menu"),x=document.querySelector(".close");h.src=e[0].url,h.alt=e[0].alt,h.classList.add("image-container_image"),v.addEventListener("click",(()=>{b.classList.remove("hide")})),x.addEventListener("click",(()=>{b.classList.add("hide")})),u.appendChild(h),f.addEventListener("click",(()=>{g<e.length-1&&(g++,h.src=e[g].url)})),m.addEventListener("click",(()=>{g>0&&(g--,h.src=e[g].url)}))})()})();