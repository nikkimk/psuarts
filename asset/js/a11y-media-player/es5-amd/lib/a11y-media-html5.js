define(["exports","../node_modules/@polymer/polymer/polymer-element.js","./a11y-media-behaviors.js"],function(_exports,_polymerElement,_a11yMediaBehaviors){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.A11yMediaHtml5=void 0;function _templateObject_1b51ea20f72311e98498d7f727000406(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style include=\"simple-colors-shared-styles\">\n        :host {\n          height: 100%;\n          display: flex;\n          align-items: stretch;\n          position: relative;\n        }\n        :host([hidden]) {\n          display: none;\n        }\n        #video {\n          width: 100%;\n          max-width: 100%;\n        }\n      </style>\n      <video\n        id=\"video\"\n        aria-hidden$=\"[[isYoutube]]\"\n        autoplay$=\"[[autoplay]]\"\n        crossorigin$=\"[[crossorigin]]\"\n        hidden$=\"[[audioOnly]]\"\n        lang$=\"[[mediaLang]]\"\n        on-loadedmetadata=\"_handleMetadata\"\n        poster$=\"[[thumbnailSrc]]\"\n        src$=\"[[manifest]]\"\n        preload=\"metadata\"\n      >\n        HTML5 video not supported\n      </video>\n      <audio\n        id=\"audio\"\n        autoplay$=\"[[autoplay]]\"\n        crossorigin$=\"[[crossorigin]]\"\n        hidden$=\"[[!audioOnly]]\"\n        lang$=\"[[mediaLang]]\"\n        on-loadedmetadata=\"_handleMetadata\"\n        poster$=\"[[thumbnailSrc]]\"\n        preload=\"metadata\"\n      >\n        HTML5 audio not supported\n      </audio>\n    "]);_templateObject_1b51ea20f72311e98498d7f727000406=function _templateObject_1b51ea20f72311e98498d7f727000406(){return data};return data}/**
 * `a11y-media-html5`
 * `Loads HTML5 audio or video. `
 *
 * @microcopy - language worth noting:
```<a11y-media-html5>                   
    <source src="/path/to/video.mp4" type="video/mp4">
    <source src="/path/to/video.webm" type="video/webm">
    <track label="English" kind="subtitles" srclang="en" src="path/to/subtitles/en.vtt" default>
    <track label="Deutsch" kind="subtitles" srclang="de" src="path/to/subtitles/de.vtt">
    <track label="Español" kind="subtitles" srclang="es" src="path/to/subtitles/es.vtt">
  </a11y-media-html5>```
 *
 * @extends A11yMediaBehaviors
 * @customElement
 * @polymer
 */var A11yMediaHtml5=/*#__PURE__*/function(_A11yMediaBehaviors){babelHelpers.inherits(A11yMediaHtml5,_A11yMediaBehaviors);babelHelpers.createClass(A11yMediaHtml5,null,[{key:"properties",// properties available to the custom element for data binding
get:function get(){return{/*
       * id of element button controls
       */controls:{type:String,value:"video"},/**
       * crossorigin attribute for <video> and <audio> tags
       */crossorigin:{type:String,value:null},/*
       * Is it disabled?
       */disabled:{type:Boolean,value:null},/*
       * iron-icon type
       */icon:{type:String,value:null},/*
       * button label
       */label:{type:String,value:null},/**
       * the language of the media (if different from user interface language)
       */mediaLang:{name:"mediaLang",type:String,value:"en"},/*
       * Is it paused?
       */paused:{type:Boolean,value:!0},/*
       * the seekable range of the media
       */seekable:{type:Object,value:{length:0,start:null,stop:null}},/**
       * Source of optional thumbnail image
       */thumbnailSrc:{name:"thumbnailSrc",type:String,value:null,reflectToAttribute:!0}}}/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */},{key:"tag",get:function get(){return"a11y-media-html5"}//inherit styles from a11y-media-player or a11y-media-transcript
}]);function A11yMediaHtml5(){babelHelpers.classCallCheck(this,A11yMediaHtml5);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(A11yMediaHtml5).call(this))}//render function
babelHelpers.createClass(A11yMediaHtml5,[{key:"connectedCallback",/**
   * life cycle, element is afixed to the DOM
   */value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(A11yMediaHtml5.prototype),"connectedCallback",this).call(this)}/**
   * sets target for a11y keys
   */},{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(A11yMediaHtml5.prototype),"ready",this).call(this);var root=this;root.media=root.$.video!==void 0&&!root.audioOnly?root.$.video:root.$.audio}/**
   * handles the loaded metadata
   */},{key:"_handleMetadata",value:function _handleMetadata(){var root=this;root.duration=0<root.media.duration?root.media.duration:0;root.tracks=[];root.volume=root.muted?0:Math.max(this.volume,10);root.seekable=root.media.seekable;root.setVolume(root.volume);root.setMute(root.muted);root.setCC(root.cc);root.setLoop(root.loop);root.setPlaybackRate(root.playbackRate);// adjusts aspect ratio
root.aspectRatio=root.media.videoWidth/root.media.videoHeight;root.dispatchEvent(new CustomEvent("media-loaded",{detail:root}))}/**
   * gets the buffered time
   */},{key:"getBufferedTime",value:function getBufferedTime(){return 0<this.media.buffered.length?this.media.buffered.end(0):this.getCurrentTime()}/**
   * gets the current time
   *
   * @returns {float} the elapsed time, in seconds
   */},{key:"getCurrentTime",value:function getCurrentTime(){return this.media.currentTime}/**
   * plays the media
   */},{key:"play",value:function play(){this.paused=!1;this.media.play()}/**
   * pauses the media
   */},{key:"pause",value:function pause(){this.paused=!0;this.media.pause()}/**
   * selects a specific track by index
   *
   * @param {float} the index of the track
   */},{key:"selectTrack",value:function selectTrack(index){this.selectedTrack=this.media.textTracks[index];for(var i=0;i<this.media.textTracks.length;i++){if(parseInt(index)===i){this.media.textTracks[i].mode="showing"}else if(null!==this.media.textTracks[i]){this.media.textTracks[i].mode="hidden"}}}/**
   * stops the media
   */},{key:"stop",value:function stop(){this.pause();this.seek(0)}/**
   * restarts the media
   */},{key:"restart",value:function restart(){this.seek(0);this.play()}/**
   * seeks to a specific time
   */},{key:"seek",value:function seek(time){this.media.currentTime=time}/**
   * sets captions
   *
   * @param {boolean} Turn CC on? `true` is on; `false` or `null` is off.
   *
   */},{key:"setCC",value:function setCC(mode){this.media.cc=!0===mode;if(this.selectedTrack!==void 0&&!0==mode){this.selectedTrack.mode="showing";this.$.video.textTracks.value=this.selectedTrackId}else if(this.selectedTrack!==void 0&&null!==this.selectedTrack){this.selectedTrack.mode="hidden";this.$.video.textTracks.value=""}}/**
   * sets volume of media
   *
   * @param {integer} the volume level from 0-100
   */},{key:"setVolume",value:function setVolume(value){this.media.volume=value/100}/**
   * sets speed/playback rate of media
   *
   * @param {float} the playback rate, where 1 = 100%
   */},{key:"setPlaybackRate",value:function setPlaybackRate(value){this.media.playbackRate=null!==value?value:1}/**
   * sets looping
   *
   * @param {boolean} Turn looping on? `true` is on; `false` or `null` is off.
   */},{key:"setLoop",value:function setLoop(mode){this.media.loop=!0===mode}/**
   * sets mute
   *
   * @param {boolean} Turn mute on? `true` is on; `false` or `null` is off.
   */},{key:"setMute",value:function setMute(mode){this.media.muted=mode}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_1b51ea20f72311e98498d7f727000406())}}]);return A11yMediaHtml5}(_a11yMediaBehaviors.A11yMediaBehaviors);_exports.A11yMediaHtml5=A11yMediaHtml5;window.customElements.define(A11yMediaHtml5.tag,A11yMediaHtml5)});