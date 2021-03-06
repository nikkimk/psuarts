define(["exports","../node_modules/@polymer/polymer/polymer-element.js","./a11y-media-behaviors.js","../node_modules/@lrnwebcomponents/simple-search/lib/simple-search-content.js"],function(_exports,_polymerElement,_a11yMediaBehaviors,_simpleSearchContent){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.A11yMediaTranscriptCue=void 0;function _templateObject_1da68880f72311e98498d7f727000406(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style is=\"custom-style\" include=\"simple-colors-shared-styles\">\n        :host {\n          cursor: default;\n          display: table-row;\n          width: 100%;\n          color: var(--a11y-media-transcript-cue-color);\n          background-color: var(--a11y-media-transcript-cue-bg-color);\n          transition: color 0.25s, background-color 0.25s;\n        }\n        :host([hide-timestamps]) {\n          display: inline;\n        }\n        :host(:not([active]):not([disabled]):active),\n        :host(:not([active]):not([disabled]):focus),\n        :host(:not([active]):not([disabled]):hover) {\n          cursor: pointer;\n          color: var(--a11y-media-transcript-focused-cue-color);\n          background-color: var(--a11y-media-transcript-focused-cue-bg-color);\n          outline: 1px dotted var(--a11y-media-transcript-focused-cue-color);\n          @apply --a11y-media-transcript-focused-cue;\n        }\n        :host([active]) {\n          color: var(--a11y-media-transcript-active-cue-color);\n          background-color: var(--a11y-media-transcript-active-cue-bg-color);\n          @apply --a11y-media-transcript-active-cue;\n        }\n        :host #text {\n          display: table-cell;\n          width: 100%;\n          line-height: 200%;\n        }\n        :host([hide-timestamps]) #text {\n          display: inline;\n        }\n        :host #time {\n          display: table-cell;\n          font-size: 80%;\n          padding: 0 16px 0 0;\n          white-space: nowrap;\n          font-family: monospace;\n        }\n        :host([hide-timestamps]) #time {\n          display: none;\n        }\n        :host simple-search-content {\n          --simple-search-match-text-color: var(\n            --a11y-media-transcript-match-color\n          );\n          --simple-search-match-bg-color: var(\n            --a11y-media-transcript-match-bg-color\n          );\n          --simple-search-match-border-color: var(\n            --a11y-media-transcript-match-border-color\n          );\n          --simple-search-match: {\n            border: none;\n            border-radius: 4px;\n            font-weight: normal;\n          }\n        }\n        @media print {\n          :host,\n          :host([active]),\n          :host(:not([active]):not([disabled]):active),\n          :host(:not([active]):not([disabled]):focus),\n          :host(:not([active]):not([disabled]):hover) {\n            color: #000000;\n            background-color: #ffffff;\n          }\n        }\n      </style>\n      <span id=\"time\">[[cue.start]] - [[cue.end]]</span>\n      <span id=\"text\">\n        <simple-search-content id=\"content\" content=\"[[cue.text]]\">\n          [[cue.text]]\n        </simple-search-content>\n      </span>\n    "]);_templateObject_1da68880f72311e98498d7f727000406=function _templateObject_1da68880f72311e98498d7f727000406(){return data};return data}/**
 * `a11y-media-transcript-cue`
 * `A single cue in a11y-media-transcriptas static text or as an button that controls media.`
 *
 * @microcopy - language worth noting:
```<a11y-media-transcript-cue 
  active-cues$="[[activeCues]]"                   // An array of the currently active cues
  cue$="[[cue]]"                                  // An array of cue data
  order$="[[cue.order]]"                          // The index of the current cue
  disable-interactive$="[[disableInteractive]]"   // Is cue interactive? 
  controls$="[[mediaId]]"                         // The id of the a11y-media-player element
  hide-timestamps$="[[hideTimestamps]]" >         // Hide cue timestamp?
</a11y-media-transcript-cue>```
 * 
 * Custom styles:
```--a11y-media-transcript-bg-color: background color of the transcript, default is #ffffff
--a11y-media-transcript-text-color: color of the transcript text, default is #000000```
 *   
 * Custom styles for focused cue:
```--a11y-media-transcript-focused-cue-text: color of the focused cue text, default is --a11y-media-transcript-text-color
--a11y-media-transcript-focused-cue-bg: background color of the focused cue, default is --a11y-media-transcript-bg-color
--a11y-media-transcript-focused-cue-weight: font-weight of the focused cue, default is bold```
 *   
 * Custom styles for active cue:
```--a11y-media-transcript-active-cue-text: color of the active cue text, default is --a11y-media-transcript-text-color
--a11y-media-transcript-active-cue-bg: background color of the active cue, default is #ccfffd
--a11y-media-transcript-active-cue-weight: font-weight of the active cue, default is normal```
 *
 * @extends A11yMediaBehaviors
 * @customElement
 * @polymer
 */var A11yMediaTranscriptCue=/*#__PURE__*/function(_A11yMediaBehaviors){babelHelpers.inherits(A11yMediaTranscriptCue,_A11yMediaBehaviors);babelHelpers.createClass(A11yMediaTranscriptCue,null,[{key:"properties",// properties available to the custom element for data binding
get:function get(){return{/**
       * is cue active
       */active:babelHelpers.defineProperty({type:Boolean,reflectToAttribute:!0,computed:"_getActiveCue(cue,activeCues)",notify:!0},"reflectToAttribute",!0),/**
       * array of currently active cues
       */activeCues:{type:Array,value:null,notify:!0},/**
       * array of cue data
       */cue:{type:Array,value:null},/**
       * disable interactive mode that makes the transcript clickable
       */disabled:{type:Boolean,value:!1},/**
       * parsed cue text
       */text:{type:String,value:""}}}/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */},{key:"tag",get:function get(){return"a11y-media-transcript-cue"}//inherit styles from a11y-media-player or a11y-media-transcript
}]);function A11yMediaTranscriptCue(){babelHelpers.classCallCheck(this,A11yMediaTranscriptCue);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(A11yMediaTranscriptCue).call(this))}//render function
babelHelpers.createClass(A11yMediaTranscriptCue,[{key:"connectedCallback",/**
   * life cycle, element is afixed to the DOM
   */value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(A11yMediaTranscriptCue.prototype),"connectedCallback",this).call(this)}/**
   * sets target for a11y keys
   */},{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(A11yMediaTranscriptCue.prototype),"ready",this).call(this);var root=this,search=root.search;if(!root.disabled){root.__target=this;root.setAttribute("aria-role","button");root.setAttribute("controls",this.mediaId)}if(!root.disableSearch&&root.search!==void 0&&null!==root.search){root.$.content.enableSearch(search)}root.addEventListener("click",root._handleTap)}/**
   * gets the active cue for styling
   *
   * @param {object} the current cue object
   * @param {array} an array of all active cues
   * @returns {boolean} Is the cue active?
   */},{key:"_getActiveCue",value:function _getActiveCue(cue,activeCues){return null!==activeCues&&activeCues.includes(cue.order.toString())?!0:!1}/**
   * handles tap
   */},{key:"_handleTap",value:function _handleTap(e){var root=this;this.dispatchEvent(new CustomEvent("cue-seek",{detail:root.cue.seek}))}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_1da68880f72311e98498d7f727000406())}}]);return A11yMediaTranscriptCue}(_a11yMediaBehaviors.A11yMediaBehaviors);_exports.A11yMediaTranscriptCue=A11yMediaTranscriptCue;window.customElements.define(A11yMediaTranscriptCue.tag,A11yMediaTranscriptCue)});