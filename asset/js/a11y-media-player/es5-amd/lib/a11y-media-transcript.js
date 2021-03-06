define(["exports","../node_modules/@polymer/polymer/polymer-element.js","./a11y-media-behaviors.js","./a11y-media-transcript-cue.js"],function(_exports,_polymerElement,_a11yMediaBehaviors,_a11yMediaTranscriptCue){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.A11yMediaTranscript=void 0;function _templateObject3_1b657220f72311e98498d7f727000406(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          color: var(--a11y-media-transcript-cue-color);\n          background-color: var(--a11y-media-transcript-cue-bg-color);\n          border-left: 1px solid var(--a11y-media-transcript-bg-color);\n        }\n        :host([hidden]) {\n          display: none !important;\n        }\n        :host .transcript-from-track {\n          display: none;\n          width: calc(100% - 30px);\n          padding: 0 15px 15px;\n          color: var(--a11y-media-transcript-cue-color);\n          background-color: var(--a11y-media-transcript-cue-bg-color);\n        }\n        :host .transcript-from-track[active] {\n          display: table;\n        }\n        :host .transcript-from-track[active][hideTimestamps] {\n          display: block;\n        }\n        :host .sr-only:not(:focus) {\n          position: absolute;\n          left: -99999;\n          top: 0;\n          height: 0;\n          width: 0;\n          overflow: hidden;\n        }\n        @media print {\n          :host {\n            padding: 0 15px 5px;\n            color: #000;\n            background-color: #ffffff;\n            border-top: 1px solid #aaa;\n          }\n        }\n      </style>\n      <a id=\"transcript-desc\" class=\"sr-only\" href=\"#bottom\">\n        [[_getLocal('transcript','skip')]]\n      </a>\n      <div\n        aria-live=\"polite\"\n        id=\"loading\"\n        active$=\"[[_isLoading(selectedTranscript, tracks)]]\"\n        class=\"transcript-from-track\"\n      >\n        [[status]]\n      </div>\n      <template id=\"tracks\" is=\"dom-repeat\" items=\"{{tracks}}\" as=\"track\">\n        <div\n          aria-live=\"polite\"\n          id=\"track\"\n          class=\"transcript-from-track\"\n          lang=\"{{track.language}}\"\n          active$=\"[[_isActive(selectedTranscript,index)]]\"\n        >\n          <template is=\"dom-repeat\" items=\"{{track.cues}}\" as=\"cue\">\n            <a11y-media-transcript-cue\n              accent-color$=\"[[accentColor]]\"\n              active-cues$=\"[[activeCues]]\"\n              controls$=\"[[mediaId]]\"\n              cue$=\"{{cue}}\"\n              disabled$=\"[[disableCue]]\"\n              disable-search$=\"[[disableSearch]]\"\n              hide-timestamps$=\"[[hideTimestamps]]\"\n              on-cue-seek=\"_handleCueSeek\"\n              order$=\"{{cue.order}}\"\n              role=\"button\"\n              search=\"[[search]]\"\n              tabindex=\"0\"\n            >\n            </a11y-media-transcript-cue>\n          </template>\n        </div>\n      </template>\n      <template is=\"dom-repeat\" items=\"{{tracks}}\" as=\"track\">\n        <div\n          id=\"download\"\n          class=\"downloadable-track\"\n          hidden\n          active$=\"[[_isActive(selectedTranscript,index)]]\"\n        >\n          <template is=\"dom-repeat\" items=\"{{track.cues}}\" as=\"cue\">\n            [[cue.start]] - [[cue.end]]: [[cue.text]]\n          </template>\n        </div>\n      </template>\n      <div id=\"bottom\" class=\"sr-only\"></div>\n    "]);_templateObject3_1b657220f72311e98498d7f727000406=function _templateObject3_1b657220f72311e98498d7f727000406(){return data};return data}function _templateObject2_1b657220f72311e98498d7f727000406(){var data=babelHelpers.taggedTemplateLiteral(["\n        <h1>Transcript</h1>\n      "]);_templateObject2_1b657220f72311e98498d7f727000406=function _templateObject2_1b657220f72311e98498d7f727000406(){return data};return data}function _templateObject_1b657220f72311e98498d7f727000406(){var data=babelHelpers.taggedTemplateLiteral(["\n        <style>\n          a11y-media-transcript-cue {\n            display: table-row;\n            background-color: #fff;\n            color: #000;\n          }\n          a11y-media-transcript-cue[hide-timestamps],\n          a11y-media-transcript-cue[hide-timestamps] #text {\n            display: inline;\n          }\n          a11y-media-transcript-cue #text {\n            display: table-cell;\n            line-height: 200%;\n          }\n          a11y-media-transcript-cue #time {\n            display: table-cell;\n            font-size: 80%;\n            padding: 0 16px;\n            white-space: nowrap;\n            font-family: monospace;\n          }\n          a11y-media-transcript-cue[hide-timestamps] #time {\n            display: none;\n          }\n          a11y-media-transcript-cue [matched] {\n            background-color: #fff;\n            color: #eee;\n            padding: 3px 4px;\n            border-radius: 3px;\n          }\n        </style>\n      "]);_templateObject_1b657220f72311e98498d7f727000406=function _templateObject_1b657220f72311e98498d7f727000406(){return data};return data}/**
 * `a11y-media-transcript`
 * `A transcript element to pair with a11y-media-player.`
 *
 * @microcopy - language worth noting:
```<a11y-media-transcript 
  accent-color$="[[accentColor]]"                 // Optional accent color highlighted cues, 
                                                  // using the following materialize colors: 
                                                  // red, pink, purple, deep-purple, indigo, blue, 
                                                  // light blue, cyan, teal, green, light green, lime, 
                                                  // yellow, amber, orange, deep-orange, and brown. 
                                                  // Default is null. 
  custom-microcopy$="[[customMicrocopy]]"         // Optional customization or text and icons
  disable-interactive$="[[disableInteractive]]"   // Disable interactive transcript cues?
  disable-scroll$="[[disableScroll]]"             // Disable autoscrolling transcript as video plays? 
  disable-search$="[[disableSearch]]"             // Disable transcript search? 
  hide-timestamps$="[[hideTimestamps]]"           // Hide cue timestamps?
  media-id=""                                     // The id of the player
  selected-transcript$="[[selectedTranscript]]">  // The index of the current track
</a11y-media-transcript>```
 *
 * @extends A11yMediaBehaviors
 * @customElement
 * @polymer
 */var A11yMediaTranscript=/*#__PURE__*/function(_A11yMediaBehaviors){babelHelpers.inherits(A11yMediaTranscript,_A11yMediaBehaviors);function A11yMediaTranscript(){babelHelpers.classCallCheck(this,A11yMediaTranscript);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(A11yMediaTranscript).apply(this,arguments))}babelHelpers.createClass(A11yMediaTranscript,[{key:"connectedCallback",/**
   * life cycle, element is afixed to the DOM
   */value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(A11yMediaTranscript.prototype),"connectedCallback",this).call(this);this.dispatchEvent(new CustomEvent("transcript-ready",{detail:this}))}/**
   * sets target for a11y keys
   */},{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(A11yMediaTranscript.prototype),"ready",this).call(this)}/**
   * gets download data for the active transcript
   *
   * @param {string} the title of the media
   */},{key:"download",value:function download(mediaTitle){var root=this,a=document.createElement("a"),title=null!==mediaTitle&&""!==mediaTitle?mediaTitle:this._getLocal("transcript","label"),filename=null!==mediaTitle&&""!==mediaTitle?mediaTitle.replace(/[^\w\d]/g,""):"Transcript",track=root.shadowRoot.querySelector("#download[active]"),data=null!==track?track.innerText:"";a.setAttribute("href","data:text/plain;charset=UTF-8,"+encodeURIComponent(title+"\n"+data));a.setAttribute("download",filename+".txt");a.style.display="none";document.body.appendChild(a);a.click();document.body.removeChild(a)}/**
   * prints the active transcript
   *
   * @param {string} the title of the media
   */},{key:"print",value:function print(mediaTitle){var root=this,track=root.shadowRoot.querySelector("#track[active]").cloneNode(!0),css=(0,_polymerElement.html)(_templateObject_1b657220f72311e98498d7f727000406()),h1=(0,_polymerElement.html)(_templateObject2_1b657220f72311e98498d7f727000406());if(mediaTitle!==void 0)h1.innerHTML=mediaTitle;if(null!==track&track!==void 0){//From https://stackoverflow.com/questions/1071962/how-do-i-print-part-of-a-rendered-html-page-in-javascript#answer-1072151
var print=window.open("","","left=0,top=0,width=552,height=477,toolbar=0,scrollbars=0,status =0");print.document.body.appendChild(css);print.document.body.appendChild(h1);print.document.body.appendChild(track);print.document.close();print.focus();print.print();print.close()}}/**
   * updates activeCues array and scrolls to position
   *
   * @param {array} an array of cues
   */},{key:"setActiveCues",value:function setActiveCues(cues){var root=this,offset=null!==root.shadowRoot.querySelector("#track")&&root.shadowRoot.querySelector("#track")!==void 0?root.shadowRoot.querySelector("#track").offsetTop:0,cue=root.shadowRoot.querySelector("#track a11y-media-transcript-cue[active]");root.set("activeCues",cues.slice(0));if(!root.disableScroll&&cue!==void 0&&null!==cue&&root.activeCues!==void 0&&cue.getAttribute("order")!==root.activeCues[0]){//javascript scrolling from:  https://stackoverflow.com/questions/8917921/cross-browser-javascript-not-jquery-scroll-to-top-animation#answer-8918062
var scrollingTo=function scrollingTo(element,to,duration){if(0>=duration)return;var difference=to-element.scrollTop,perTick=10*(difference/duration);setTimeout(function(){element.scrollTop=element.scrollTop+perTick;if(element.scrollTop===to)return;scrollingTo(element,to,duration-10)},10)};scrollingTo(root,cue.offsetTop-offset,250)}}/**
   * fires an event when media is associated with the player
   *
   * @param {object} the player
   */},{key:"setMedia",value:function setMedia(player){this.media=player;this.dispatchEvent(new CustomEvent("transcript-ready",{detail:this}))}/**
   * loads tracks from array
   *
   * @param {array} an array of tracks
   */},{key:"setTracks",value:function setTracks(tracks){this.set("tracks",tracks.slice(0));this.notifyPath("tracks");if(this.tracks!==void 0&&0<this.tracks.length)this.$.tracks.render()}/**
   * fires an event when media is associated with the player
   *
   * @param {boolean} Hide transcript? `true` is hidden, `false` is visible, and `null` toggles based on current state.
   */},{key:"toggleHidden",value:function toggleHidden(mode){var root=this,inner=document.getElementById("inner"),active=null!==inner&&inner!==void 0?inner.querySelector("a11y-media-transcript-cue[active]"):null,first=null!==inner&&inner!==void 0?inner.querySelector("a11y-media-transcript-cue"):null;mode=mode!==void 0?mode:this.hidden;this.hidden=mode}/**
   * gets the tab-index of cues based on whether or not interactive cues are disabled
   *
   * @param {boolean} Is the interactive transcript mode disabled?
   * @returns {integer} the tabindex of the cue
   */},{key:"_getTabIndex",value:function _getTabIndex(disableInteractive){return disableInteractive?-1:0}/**
   * gets the role of cues based on whether or not interactive cues are disabled
   *
   * @param {boolean} Is the interactive transcript mode disabled?
   * @returns {string} the role of the cue, `button` or `null`
   */},{key:"_getRole",value:function _getRole(disableInteractive){return disableInteractive?null:"button"}/**
   * forwards the listener for transcript cue click to seek accordingly
   */},{key:"_handleCueSeek",value:function _handleCueSeek(e){if(!this.disableInteractive){this.dispatchEvent(new CustomEvent("transcript-seek",{detail:e.detail}))}}/**
   * determines if this is the currently selected transcript to show or hide
   *
   * @param {integer} the index of the transcript
   */},{key:"_isActive",value:function _isActive(selectedTranscript,index){return selectedTranscript!==void 0&&null!==selectedTranscript&&parseInt(selectedTranscript)===parseInt(index)}/**
   * determines if this is the currently selected transcript to show or hide
   *
   * @param {integer} the index of the transcript
   */},{key:"_isLoading",value:function _isLoading(selectedTranscript,tracks){return selectedTranscript===void 0||null===selectedTranscript||tracks===void 0||null===tracks||0===tracks.length}},{key:"_stampLoadingStatus",value:function _stampLoadingStatus(disableSeek){this.$.loading.innerHTML=!1===disableSeek?this._getLocal("transcript","label"):this._getLocal("youTubeTranscript","label");return this.$.loading.innerHTML}}],[{key:"properties",// properties available to the custom element for data binding
get:function get(){return{/**
       * array of cues
       */activeCues:{type:Array,value:null,reflectToAttribute:!0,notify:!0},/**
       * disable interactive mode that makes the transcript clickable
       */disableInteractive:{name:"disableInteractive",type:Boolean,value:!1},/**
       * show cue's start and end time
       */hideTimestamps:{name:"hideTimestamps",type:Boolean,value:!1},/**
       * Language
       */lang:{type:String,value:"en",reflectToAttribute:!0},/**
       * the id of media
       */mediaId:{type:String,value:null},/**
       * tabindex of cues
       */tabIndex:{type:Number,computed:"_getTabIndex(disableInteractive)"},/**
       * tabindex of cues
       */role:{type:Number,computed:"_getRole(disableInteractive)"},/**
       * selected transcript track id
       */selectedTranscript:{type:String,value:"0"},/**
       * the status of the transcript loading
       */status:{type:String,computed:"_stampLoadingStatus(disableSeek)"},/**
       * array of cues
       */tracks:{type:Array,value:null}}}/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */},{key:"tag",get:function get(){return"a11y-media-transcript"}//render function
},{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject3_1b657220f72311e98498d7f727000406())}}]);return A11yMediaTranscript}(_a11yMediaBehaviors.A11yMediaBehaviors);_exports.A11yMediaTranscript=A11yMediaTranscript;window.customElements.define(A11yMediaTranscript.tag,A11yMediaTranscript)});