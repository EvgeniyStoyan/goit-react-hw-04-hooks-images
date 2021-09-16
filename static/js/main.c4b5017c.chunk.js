(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={ModalImage:"Modal_ModalImage__qzLSk",Overlay:"Modal_Overlay__3Fkyi",Modal:"Modal_Modal__2uShx"}},12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1nKZn",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3AfzX"}},13:function(e,t,a){e.exports={Button:"Button_Button__3cY6u",ButtonLoadMore:"Button_ButtonLoadMore__2e5GF"}},17:function(e,t,a){e.exports={Loader:"Loader_Loader__1f6kn"}},26:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(4),r=a.n(c),l=(a(26),a(3)),s=a(5),i=(a(15),a(6)),u=a.n(i),m=a(1);function h(e){var t=e.onSubmit,a=Object(n.useState)(""),o=Object(l.a)(a,2),c=o[0],r=o[1];return Object(m.jsx)("header",{className:u.a.Searchbar,children:Object(m.jsxs)("form",{className:u.a.SearchForm,onSubmit:function(e){e.preventDefault(),""!==c.trim()?(t(c),r("")):s.b.warning("Please enter your search query !")},children:[Object(m.jsx)("input",{className:u.a.SearchFormInput,type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search images and photos",name:"searchQuery",value:c,onChange:function(e){r(e.currentTarget.value.toLowerCase())}}),Object(m.jsx)("button",{type:"submit",className:u.a.SearchFormButton,children:Object(m.jsx)("span",{className:u.a.SearchFormButtonLabel,children:"Search"})})]})})}var d=a(14),j=a(12),b=a.n(j);function g(e){var t=e.images,a=e.onClickImage;return t.map((function(e){return Object(m.jsx)("li",{className:b.a.ImageGalleryItem,children:Object(m.jsx)("img",{src:e.webformatURL,alt:e.tags,className:b.a.ImageGalleryItemImage,onClick:function(){return a(e)}})},e.id)}))}a(28);var O=a(16),f=a.n(O),p=a(17),y=a.n(p);function _(){return Object(m.jsx)("div",{className:y.a.Loader,children:Object(m.jsx)(f.a,{type:"ThreeDots",color:"#FF00FF",height:80,width:80,timeout:5e3})})}var x=a(13),v=a.n(x);var I=function(e){var t=e.handleLoadMore;return Object(m.jsx)("div",{className:v.a.ButtonLoadMore,children:Object(m.jsx)("button",{type:"button",className:v.a.Button,onClick:t,children:"Load more"})})},S=a(8),k=a.n(S),C="idle",w="pending",F="download",L="resolved",M="rejected";function N(e){var t=e.onClickImage,a=e.searchQuery,o=Object(n.useState)(null),c=Object(l.a)(o,2),r=c[0],i=c[1],u=Object(n.useState)(1),h=Object(l.a)(u,2),j=h[0],b=h[1],O=Object(n.useState)(C),f=Object(l.a)(O,2),p=f[0],y=f[1],x=Object(n.useState)(null),v=Object(l.a)(x,2),S=v[0],N=v[1];Object(n.useEffect)((function(){a&&(y(w),setTimeout((function(){fetch("".concat("https://pixabay.com/api","/?q=").concat(a,"&page=").concat(j,"&key=").concat("22499741-87b5d21a315c32b3b505be895","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){if(0===e.hits.length)return s.b.error("No image with name  ".concat(a)),Promise.reject(new Error("Please try to enter something else"));i(e.hits),y(L)})).catch((function(e){N(e),y(M)}))}),1e3))}),[a,j]),Object(n.useEffect)((function(){1!==j&&(y(F),setTimeout((function(){fetch("".concat("https://pixabay.com/api","/?q=").concat(a,"&page=").concat(j,"&key=").concat("22499741-87b5d21a315c32b3b505be895","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){i((function(t){return[].concat(Object(d.a)(t),Object(d.a)(e.hits))})),y(L)})).finally((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))}),1e3))}),[a,j]);return p===C?Object(m.jsx)("div",{className:"Text",children:"Enter your query to start image search"}):p===w?Object(m.jsx)("div",{children:Object(m.jsx)(_,{})}):p===F?Object(m.jsxs)("div",{className:k.a.GalleryContainer,children:[Object(m.jsx)("ul",{className:k.a.ImageGallery,children:Object(m.jsx)(g,{images:r,onClickImage:t})}),Object(m.jsx)(_,{})]}):p===M?Object(m.jsx)("h2",{className:"ErrorMessage",children:S.message}):p===L?Object(m.jsxs)("div",{className:k.a.GalleryContainer,children:[Object(m.jsx)("ul",{className:k.a.ImageGallery,children:Object(m.jsx)(g,{images:r,onClickImage:t})}),r.length>0&&Object(m.jsx)(I,{handleLoadMore:function(){b((function(e){return e+1}))}})]}):void 0}var G=a(18),B=a(19),E=a(21),T=a(20),D=a(10),q=a.n(D),P=document.querySelector("#modal-root"),z=function(e){Object(E.a)(a,e);var t=Object(T.a)(a);function a(){var e;Object(G.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onCloseModal()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onCloseModal()},e}return Object(B.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.imageInModal;return Object(c.createPortal)(Object(m.jsx)("div",{className:q.a.Overlay,onClick:this.handleBackdropClick,children:Object(m.jsx)("div",{className:q.a.Modal,children:Object(m.jsx)("img",{className:q.a.ModalImage,src:e.largeImageURL,alt:e.tags})})}),P)}}]),a}(n.Component);function K(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!1),r=Object(l.a)(c,2),i=r[0],u=r[1],d=Object(n.useState)(""),j=Object(l.a)(d,2),b=j[0],g=j[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)(h,{onSubmit:function(e){o(e)}}),Object(m.jsx)(s.a,{autoClose:5e3,position:"top-center",theme:"colored"}),Object(m.jsx)(N,{searchQuery:a,onClickImage:function(e){g(!0,e)}}),i&&Object(m.jsx)(z,{imageInModal:b,onCloseModal:function(){u(!1)}})]})}var Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,50)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),o(e),c(e),r(e)}))};r.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(K,{})}),document.getElementById("root")),Q()},6:function(e,t,a){e.exports={SearchForm:"Searchbar_SearchForm__F-p8b",SearchFormButton:"Searchbar_SearchFormButton__2dpAr",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__32X0U",SearchFormInput:"Searchbar_SearchFormInput__1riH9",Searchbar:"Searchbar_Searchbar__27ddL"}},8:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3YC4g",GalleryContainer:"ImageGallery_GalleryContainer__EeOsQ"}}},[[49,1,2]]]);
//# sourceMappingURL=main.c4b5017c.chunk.js.map