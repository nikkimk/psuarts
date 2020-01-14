define(["exports","../node_modules/@polymer/polymer/polymer-element.js","./a11y-media-behaviors.js","../node_modules/@lrnwebcomponents/simple-search/simple-search.js","./a11y-media-button.js"],function(_exports,_polymerElement,_a11yMediaBehaviors,_simpleSearch,_a11yMediaButton){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.A11yMediaTranscriptControls=void 0;function _templateObject_1b7131f0f72311e98498d7f727000406(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style include=\"simple-colors-shared-styles\">\n        :host {\n          display: flex;\n          height: 44px;\n          max-height: 44px;\n          min-height: 44px;\n          color: var(--a11y-media-color);\n          background-color: var(--a11y-media-transcript-bg-color);\n          --a11y-media-button-bg-color: var(--a11y-media-transcript-bg-color);\n          --a11y-media-button-hover-bg-color: var(\n            --a11y-media-transcript-bg-color\n          );\n          --simple-search-input-text-color: var(--a11y-media-color);\n          --simple-search-input-line-color: var(--a11y-media-accent-color);\n          --simple-search-input-placeholder-color: var(\n            --a11y-media-transcript-color\n          );\n          --simple-search-button-color: var(--a11y-media-accent-color);\n          --simple-search-button-hover-color: var(\n            --a11y-media-faded-accent-color\n          );\n          --simple-search-button-bg-color: var(--a11y-media-bg-color);\n          --simple-search-button-border-color: var(--a11y-media-bg-color);\n          --simple-search-button-hover-border-color: var(--a11y-media-bg-color);\n          --simple-search-button-disabled-color: var(\n            --simple-colors-default-theme-grey-5\n          );\n          --simple-search-button-disabled-bg-color: var(\n            --simple-colors-default-theme-grey-2\n          );\n          --simple-search-button-disabled-border-color: var(\n            --simple-colors-default-theme-grey-3\n          );\n          --paper-input-container-input-color: var(--a11y-media-color);\n          --simple-search-container: {\n            padding: 0 15px;\n          }\n        }\n        :host #searchbar {\n          display: flex;\n          align-items: stretch;\n          justify-content: space-between;\n          width: 100%;\n        }\n        :host #searching {\n          flex-grow: 2;\n        }\n        :host #autoscroll {\n          padding-right: 8px;\n        }\n        :host #scrolling,\n        :host #printing {\n          display: flex;\n          align-items: center;\n        }\n        @media print {\n          :host {\n            display: none;\n          }\n        }\n      </style>\n      <div id=\"searchbar\">\n        <div id=\"searching\">\n          <simple-search\n            id=\"simplesearch\"\n            controls=\"transcript\"\n            disabled$=\"[[disableSearch]]\"\n            hidden$=\"[[disableSearch]]\"\n            no-label-float\n            next-button-icon$=\"[[_getLocal('nextResult','icon')]]\"\n            next-button-label$=\"[[_getLocal('nextResult','label')]]\"\n            prev-button-icon$=\"[[_getLocal('prevResult','icon')]]\"\n            prev-button-label$=\"[[_getLocal('prevResult','label')]]\"\n            search-input-icon$=\"[[_getLocal('search','icon')]]\"\n            search-input-label$=\"[[_getLocal('search','label')]]\"\n            target=\"[[target]]\"\n          >\n          </simple-search>\n        </div>\n        <div id=\"scrolling\">\n          <a11y-media-button\n            id=\"scroll\"\n            controls=\"transcript\"\n            icon=\"[[_getLocal('autoScroll','icon')]]\"\n            label=\"[[_getLocal('autoScroll','label')]]\"\n            on-tap=\"_handleScrollClick\"\n            toggle$=\"[[!disableScroll]]\"\n          >\n          </a11y-media-button>\n        </div>\n        <div\n          id=\"printing\"\n          hidden$=\"[[disablePrintButton]]\"\n          disabled$=\"[[disablePrintButton]]\"\n        >\n          <a11y-media-button\n            id=\"download\"\n            controls=\"transcript\"\n            icon$=\"[[_getLocal('download','icon')]]\"\n            label=\"[[_getLocal('download','label')]]\"\n            on-tap=\"_handleDownloadClick\"\n          >\n          </a11y-media-button>\n          <a11y-media-button\n            id=\"print\"\n            controls=\"transcript\"\n            icon$=\"[[_getLocal('print','icon')]]\"\n            label=\"[[_getLocal('print','label')]]\"\n            on-tap=\"_handlePrintClick\"\n          >\n          </a11y-media-button>\n        </div>\n      </div>\n    "]);_templateObject_1b7131f0f72311e98498d7f727000406=function _templateObject_1b7131f0f72311e98498d7f727000406(){return data};return data}/**
 * `a11y-media-transcript-controls`
 * `A controls for the transcript element.`
 *
 * @microcopy - language worth noting:
```<a11y-media-transcript-controls 
  accent-color$="[[accentColor]]"                 // Optional accent color highlighted cues, 
                                                  // using the following materialize colors: 
                                                  // red, pink, purple, deep-purple, indigo, blue, 
                                                  // light blue, cyan, teal, green, light green, lime, 
                                                  // yellow, amber, orange, deep-orange, and brown. 
                                                  // Default is null. 
  custom-microcopy$="[[customMicrocopy]]"         // Optional customization or text and icons
  disable-print-button$="[[disablePrintButton]]"  // Disable the print button?
  disable-scroll$="[[disableScroll]]"             // Disable autoscrolling transcript as video plays? 
  disable-search$="[[disableSearch]]"             // Disable transcript search? 
</a11y-media-transcript-controls>```
 *
 * @extends A11yMediaBehaviors
 * @customElement
 * @polymer
 */var A11yMediaTranscriptControls=/*#__PURE__*/function(_A11yMediaBehaviors){babelHelpers.inherits(A11yMediaTranscriptControls,_A11yMediaBehaviors);babelHelpers.createClass(A11yMediaTranscriptControls,null,[{key:"properties",// properties available to the custom element for data binding
get:function get(){return{/**
       * target of the controls
       */target:{type:Object,value:null}}}/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */},{key:"tag",get:function get(){return"a11y-media-transcript-controls"}//inherit styles from a11y-media-player or a11y-media-transcript
}]);function A11yMediaTranscriptControls(){babelHelpers.classCallCheck(this,A11yMediaTranscriptControls);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(A11yMediaTranscriptControls).call(this))}//render function
babelHelpers.createClass(A11yMediaTranscriptControls,[{key:"connectedCallback",/**
   * life cycle, element is afixed to the DOM
   */value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(A11yMediaTranscriptControls.prototype),"connectedCallback",this).call(this);var root=this;root.search=root.$.simplesearch;root.dispatchEvent(new CustomEvent("searchbar-added",{detail:root.search}))}/**
   * handles the transcript scroll button toggle
   */},{key:"_handleScrollClick",value:function _handleScrollClick(e){this.dispatchEvent(new CustomEvent("toggle-scroll",{detail:this}))}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_1b7131f0f72311e98498d7f727000406())}}]);return A11yMediaTranscriptControls}(_a11yMediaBehaviors.A11yMediaBehaviors);_exports.A11yMediaTranscriptControls=A11yMediaTranscriptControls;window.customElements.define(A11yMediaTranscriptControls.tag,A11yMediaTranscriptControls)});