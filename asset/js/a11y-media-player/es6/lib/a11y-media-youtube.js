/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */import{html,PolymerElement}from"../node_modules/@polymer/polymer/polymer-element.js";// register globally so we can make sure there is only one
window.A11yMediaYoutube=window.A11yMediaYoutube||{};// request if this exists. This helps invoke the element existing in the dom
// as well as that there is only one of them. That way we can ensure everything
// is rendered through the same modal
window.A11yMediaYoutube.requestAvailability=()=>{if(!window.A11yMediaYoutube.instance){window.A11yMediaYoutube.instance=document.createElement("a11y-media-youtube");document.body.appendChild(window.A11yMediaYoutube.instance)}return window.A11yMediaYoutube.instance};/**
 * `a11y-media-youtube`
 * `A utility that manages multiple instances of a11y-media-player on a single page.`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @polymer
 */class A11yMediaYoutube extends PolymerElement{/* REQUIRED FOR TOOLING DO NOT TOUCH */ /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */static get tag(){return"a11y-media-youtube"}// properties available to the custom element for data binding
static get properties(){return{/**
       * whether or not the YouTube API is ready
       */apiReady:{type:Boolean,value:window.YT!==void 0},/**
       * a counter for creating unique ideas for each YouTube player container
       */counter:{type:Number,value:0}}}/**
   * life cycle, element is afixed to the DOM
   * Makes sure there is a utility ready and listening for elements.
   */connectedCallback(){super.connectedCallback();let root=this,api=document.createElement("script");api.setAttribute("src","https://www.youtube.com/iframe_api");api.setAttribute("type","text/javascript");document.body.appendChild(api);window.onYouTubeIframeAPIReady=()=>{var event=new CustomEvent("youtube-api-ready");root.apiReady=!0;document.dispatchEvent(event)}}/**
   * initializes the youtube player for a given element
   *
   * @param {options} the YouTube options object, eg. `{ "width": "100%", "height": "100%", "videoId": "NP0mQeLWCCo" }`
   * @returns {options} the YouTube player object
   */initYoutubePlayer(options){//get unique id for each youtube iframe
// function to create and init iframe
let temp="a11y-media-yt-",div=document.createElement("div"),vdata=options.videoId.split(/[\?&]/),vid=vdata[0],start=null,end=null,cue={videoId:vid};this.counter++;temp+=this.counter;document.body.appendChild(div);div.setAttribute("id",temp);let loadVideo=e=>{for(let i=1,param;i<vdata.length;i++){param=vdata[i].split("=");if("t"===param[0]){let hh=param[1].match(/(\d)+h/),mm=param[1].match(/(\d)+m/),ss=param[1].replace(/\d+h/,"").replace(/\d+m/,"").replace(/s/,"").match(/(\d)+/),h=null!==hh&&1<hh.length?360*parseInt(hh[1]):0,m=null!==mm&&1<mm.length?60*parseInt(mm[1]):0,s=null!==ss&&1<ss.length?parseInt(ss[1]):0;start=parseInt(h+m+s)}else if("start"===param[0]){start=parseInt(param[1])}else if("end"===param[0]){end=parseInt(param[1])}}if(null!==start){start=Math.max(0,start);cue.startSeconds=start}else{start=0}if(null!==end){end=null!==start?Math.max(start,end):Math.max(0,end);cue.endSeconds=end}e.target.cueVideoById(cue)},iframe=new YT.Player(temp,{width:options.width,height:options.height,events:{onReady:loadVideo},playerVars:{color:"white",controls:0,autoplay:options.autoplay,disablekb:1,enablejsapi:1,iv_load_policy:3,modestbranding:1,showinfo:0,rel:0}});// add methods and properties to api so that it matches HTML5 video
iframe.tracks=[];iframe.duration=0;iframe.seekable={length:1,start:index=>{iframe.seekable.start=index=>{return start||0}},end:index=>{iframe.seekable.end=index=>{return null!==end?Math.min(end,iframe.duration):iframe.duration}}};iframe.paused=!0;iframe.timeupdate;iframe.play=()=>{if(iframe.playVideo!==void 0)iframe.playVideo()};iframe.addEventListener("onStateChange",()=>{iframe.paused=1!==iframe.getPlayerState();if(iframe.paused){clearInterval(iframe.timeupdate)}else{iframe.timeupdate=setInterval(()=>{document.dispatchEvent(new CustomEvent("timeupdate",{detail:iframe}))},1)}});iframe.pause=()=>{if(iframe.pauseVideo!==void 0)iframe.pauseVideo()};iframe.seek=(time=0)=>{if(iframe.seekTo!==void 0){iframe.seekTo(time);if(iframe.paused){iframe.seekupdate=setInterval(()=>{if(1>Math.abs(iframe.getCurrentTime()-time)){document.dispatchEvent(new CustomEvent("timeupdate",{detail:iframe}));clearInterval(iframe.seekupdate)}},1)}}};iframe.setMute=mode=>{if(iframe.mute!==void 0)mode?iframe.mute():iframe.unMute()};return iframe}}window.customElements.define(A11yMediaYoutube.tag,A11yMediaYoutube);export{A11yMediaYoutube};