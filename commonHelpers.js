import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as l,i as m}from"./assets/vendor-77e16229.js";const e=document.querySelector("button");e.setAttribute("disabled",!0);const a=document.querySelector("#datetime-picker"),b=document.querySelector("span[data-days]"),p=document.querySelector("span[data-hours]"),S=document.querySelector("span[data-minutes]"),h=document.querySelector("span[data-seconds]");let r;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){r=t[0],r<new Date?(e.setAttribute("disabled",!0),m.error({message:"Please choose a date in the future"})):e.removeAttribute("disabled")}};l("#datetime-picker",y);function f(t){const d=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),i=Math.floor(t%36e5/6e4),u=Math.floor(t%6e4/1e3);return{days:d,hours:c,minutes:i,seconds:u}}const M=t=>{b.innerHTML=String(t.days).padStart(2,"0"),p.innerHTML=String(t.hours).padStart(2,"0"),S.innerHTML=String(t.minutes).padStart(2,"0"),h.innerHTML=String(t.seconds).padStart(2,"0")},v=()=>{const t=setInterval(()=>{let n=r-new Date;if(n<0){clearInterval(t),e.removeAttribute("disabled"),a.removeAttribute("disabled");return}const o=f(n);M(o),e.setAttribute("disabled",!0),a.setAttribute("disabled",!0)},1e3)};e.addEventListener("click",v);
//# sourceMappingURL=commonHelpers.js.map
