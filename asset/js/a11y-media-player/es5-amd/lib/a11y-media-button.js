define(["exports","../node_modules/@polymer/polymer/polymer-element.js","./a11y-media-behaviors.js","../node_modules/@polymer/iron-icons/iron-icons.js","../node_modules/@polymer/iron-icons/av-icons.js","../node_modules/@polymer/paper-tooltip/paper-tooltip.js"],function(_exports,_polymerElement,_a11yMediaBehaviors,_ironIcons,_avIcons,_paperTooltip){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.A11yMediaButton=void 0;function _templateObject_1d9faab0f72311e98498d7f727000406(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style include=\"simple-colors-shared-styles\">\n        :host {\n          margin: 0;\n          padding: 0;\n        }\n        :host #button {\n          margin: 0;\n          padding: 8px;\n          line-height: 1;\n          border: none;\n          transition: color 0.25s;\n          color: var(--a11y-media-button-color);\n          background-color: var(--a11y-media-button-bg-color);\n        }\n        :host([toggle]) #button {\n          color: var(--a11y-media-button-toggle-color);\n          background-color: var(--a11y-media-button-toggle-bg-color);\n        }\n        :host([toggle]:active) #button,\n        :host([toggle]:focus) #button,\n        :host([toggle]:hover) #button,\n        :host(:active) #button,\n        :host(:focus) #button,\n        :host(:hover) #button {\n          cursor: pointer;\n          color: var(--a11y-media-button-hover-color);\n          background-color: var(--a11y-media-button-hover-bg-color);\n        }\n        :host .sr-only {\n          position: absolute;\n          left: -99999;\n          top: 0;\n          height: 0;\n          width: 0;\n          overflow: hidden;\n        }\n        :host paper-tooltip {\n          z-index: 100;\n        }\n        iron-icon {\n          display: inline-block;\n        }\n      </style>\n      <button\n        id=\"button\"\n        aria-label$=\"[[label]]\"\n        aria-pressed$=\"[[toggle]]\"\n        controls=\"[[controls]]\"\n        disabled$=\"[[disabled]]\"\n        on-click=\"_buttonTap\"\n        role=\"button\"\n        tabindex=\"0\"\n        toggle$=\"[[toggle]]\"\n      >\n        <iron-icon icon=\"[[icon]]\"></iron-icon>\n      </button>\n      <paper-tooltip for=\"button\">[[label]]</paper-tooltip>\n    "]);_templateObject_1d9faab0f72311e98498d7f727000406=function _templateObject_1d9faab0f72311e98498d7f727000406(){return data};return data}/**
 * `a11y-media-button`
 * `A button used in a11y-media-controls and a11y-media-transcript-controls.`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @extends A11yMediaBehaviors
 * @customElement
 * @polymer
 */var A11yMediaButton=/*#__PURE__*/function(_A11yMediaBehaviors){babelHelpers.inherits(A11yMediaButton,_A11yMediaBehaviors);babelHelpers.createClass(A11yMediaButton,null,[{key:"properties",// properties available to the custom element for data binding
get:function get(){return{/**
       * is button action to send as an event
       */action:{type:String,value:null},/*
       * id of element button controls
       */controls:{type:String,value:"video"},/*
       * iron-icon type
       */icon:{type:String,value:null},/*
       * button label
       */label:{type:String,value:null},/*
       * Is it toggled on?
       */toggle:{type:Boolean,value:!1,reflectToAttribute:!0},/*
       * Is it disabled?
       */disabled:{type:Boolean,value:null}}}/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */},{key:"tag",get:function get(){return"a11y-media-button"}//inherit styles from a11y-media-player or a11y-media-transcript
}]);function A11yMediaButton(){babelHelpers.classCallCheck(this,A11yMediaButton);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(A11yMediaButton).call(this))}//render function
babelHelpers.createClass(A11yMediaButton,[{key:"connectedCallback",/**
   * life cycle, element is afixed to the DOM
   */value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(A11yMediaButton.prototype),"connectedCallback",this).call(this)}/**
   * sets target for a11y keys
   */},{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(A11yMediaButton.prototype),"ready",this).call(this);this.__target=this.$.button}/**
   * lets player know this button was clicked
   */},{key:"_buttonTap",value:function _buttonTap(){this.dispatchEvent(new CustomEvent("click",{detail:this}))}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_1d9faab0f72311e98498d7f727000406())}}]);return A11yMediaButton}(_a11yMediaBehaviors.A11yMediaBehaviors);_exports.A11yMediaButton=A11yMediaButton;window.customElements.define(A11yMediaButton.tag,A11yMediaButton)});