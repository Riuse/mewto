(()=>{"use strict";function e(e){a(e.target)}function t(){document.querySelector(".popup_is-opened").addEventListener("click",e)}function n(){document.querySelector(".popup_is-opened").removeEventListener("click",e)}function r(e){"Escape"===e.key&&a(document.querySelector(".popup_is-opened"))}function o(o){o.classList.add("popup_is-opened");var a=o.querySelector(".popup__content");document.addEventListener("keydown",r),o.addEventListener("click",e),a.addEventListener("mouseleave",t),a.addEventListener("mouseenter",n)}function a(o){o.classList.remove("popup_is-opened");var a=o.querySelector(".popup__content");o.removeEventListener("click",e),a.removeEventListener("mouseleave",t),a.removeEventListener("mouseenter",n),document.removeEventListener("keydown",r)}var u={baseUrl:"https://nomoreparties.co/v1/frontend-st-cohort-201",headers:{authorization:"2deb6b35-3e18-4db8-a09f-94cde35261ff","Content-Type":"application/json"}};function c(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var i=document.querySelector("#card-template").content;function l(e,t){var n=i.querySelector(".places__item").cloneNode(!0);n.querySelector(".card__title").textContent=e;var r=n.querySelector(".card__image"),o=n.querySelector(".card__delete-button"),a=n.querySelector(".card__like-button");return r.setAttribute("src",t),r.setAttribute("alt",e),o.addEventListener("click",(function(e){fetch("".concat(u.baseUrl,"/cards/").concat(undefined),{method:"DELETE",headers:{Authorization:u.headers.authorization}}).then((function(e){return c(e)})),e.target.closest(".places__item").remove()})),a.addEventListener("click",(function(){return a.classList.toggle("card__like-button_is-active")})),n}function s(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?t.classList.remove(n):t.classList.add(n)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var d=document.querySelector(".profile__image"),_=document.querySelector(".profile__image"),f=document.querySelector(".popup_type_avatar"),v=f.querySelector(".popup__form"),y=v.querySelector(".popup__input_type_url"),m=f.querySelector(".popup__close"),h=f.querySelector(".popup__button");_.addEventListener("click",(function(){d.src&&(y.value=d.src),o(f)})),console.log(v),console.log(m),m.addEventListener("click",(function(){return a(f)})),v.addEventListener("submit",(function(e){var t;e.preventDefault(),h.textContent="Сохранение...",h.disabled=!0,(t=y.value,fetch("".concat(u.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:u.headers,body:JSON.stringify({avatar:t})}).then((function(e){return c(e)}))).then((function(e){d.style.backgroundImage="url("+e.avatar+")",a(f)})).catch((function(e){return console.error(e)})).finally((function(){h.textContent="Сохранить",h.disabled=!1}))}));var b=document.querySelector(".profile__title"),S=document.querySelector(".profile__description"),q=document.querySelector(".profile__edit-button"),L=document.querySelector(".popup_type_edit"),C=L.querySelector(".popup__form"),E=L.querySelector(".popup__input_type_name"),g=L.querySelector(".popup__input_type_description"),k=L.querySelector(".popup__close"),x=L.querySelector(".popup__button");q.addEventListener("click",(function(){E.value=b.textContent,g.value=S.textContent,o(L)})),k.addEventListener("click",(function(){return a(L)})),C.addEventListener("submit",(function(e){var t,n;e.preventDefault(),x.textContent="Сохранение...",x.disabled=!0,(t=E.value,n=g.value,fetch("".concat(u.baseUrl,"/users/me"),{method:"PATCH",headers:u.headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return c(e)}))).then((function(e){b.textContent=e.name,S.textContent=e.about,a(L)})).catch((function(e){return console.error(e)})).finally((function(){x.textContent="Сохранить",x.disabled=!1}))}));var A=document.querySelector(".popup_type_image"),I=A.querySelector(".popup__image"),U=A.querySelector(".popup__caption");A.querySelector(".popup__close").addEventListener("click",(function(){return a(A)}));var j,z=document.querySelector(".places__list"),O=document.querySelector(".profile__add-button"),w=document.querySelector(".popup_type_new-card"),T=w.querySelector(".popup__form"),P=w.querySelector(".popup__input_type_card-name"),D=w.querySelector(".popup__input_type_url"),N=w.querySelector(".popup__close"),J=w.querySelector(".popup__button");O.addEventListener("click",(function(){P.value="",D.value="",o(w)})),N.addEventListener("click",(function(){return a(w)})),T.addEventListener("submit",(function(e){var t,n;e.preventDefault(),J.textContent="Сохранение...",J.disabled=!0,(t=P.value,n=D.value,fetch("".concat(u.baseUrl,"/cards"),{method:"POST",headers:u.headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return c(e)}))).then((function(e){var t=l(e.name,e.link);z.prepend(t),a(w)})).catch((function(e){return console.error(e)})).finally((function(){J.textContent="Сохранить",J.disabled=!1}))})),z.addEventListener("click",(function(e){e.target.classList.contains("card__image")&&(I.setAttribute("src",e.target.src),U.textContent=e.target.alt,o(A))})),L.classList.add("popup_is-animated"),w.classList.add("popup_is-animated"),A.classList.add("popup_is-animated"),f.classList.add("popup_is-animated"),j={formClass:".popup__form",inputClass:".popup__input",inputErrorClass:"popup__input_error",buttonClass:".popup__button",buttonInactiveClass:"popup__button_inactive",errorClass:"popup__error-text_active"},Array.from(document.querySelectorAll(j.formClass)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputClass)),r=e.querySelector(t.buttonClass);s(n,r,t.buttonInactiveClass),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n,r){t.validity.valid?function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));o.textContent="",t.classList.remove(n),o.classList.remove(r)}(e,t,n,r):function(e,t,n,r,o){var a=e.querySelector(".".concat(t.id,"-error"));a.textContent=n,t.classList.add(r),a.classList.add(o)}(e,t,t.validationMessage,n,r)}(e,o,t.inputErrorClass,t.errorClass),s(n,r,t.buttonInactiveClass)}))}))}(e,j)})),Promise.all([fetch("".concat(u.baseUrl,"/users/me"),{headers:{Authorization:u.headers.authorization}}).then((function(e){return c(e)})),fetch("".concat(u.baseUrl,"/cards"),{headers:{Authorization:u.headers.authorization}}).then((function(e){return c(e)}))]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,u,c=[],i=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],a=r[1];b.textContent=o.name,S.textContent=o.about,d.style.backgroundImage="url(".concat(o.avatar,")"),a.forEach((function(e){var t=l(e.name,e.link);z.appendChild(t)}))})).catch((function(e){return console.error("Ошибка при загрузке данных:",e)}))})();