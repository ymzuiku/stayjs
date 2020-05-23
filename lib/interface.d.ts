interface IGlobalValues {
  inherit: string;
  initial: string;
  unset: string;
}
interface IPosition {
  relative: string;
  absolute: string;
  fixed: string;
  static: string;
  inherit: string;
  sticky: string;
  "-webkit-sticky": string;
}

interface IDisplay {
  /**此元素不会被显示。 */
  none: string;
  flex: string | number;
  /** 此元素将显示为块级元素，此元素前后会带有换行符。 */
  block: string;
  /** 默认。此元素会被显示为内联元素，元素前后没有换行符。 */
  inline: string;
  /** 行内块元素。（CSS2.1 新增的值） */
  "inline-block": string;
  /** 此元素会作为列表显示。 */
  "list-item": string;
  /** 此元素会根据上下文作为块级元素或内联元素显示。*/
  "run-in": string;
  /** 此元素会作为块级表格来显示（类似 <table>），表格前后带有换行符。 */
  table: string;
  /**此元素会作为内联表格来显示（类似 <table>），表格前后没有换行符。 */
  "inline-table": string;
  /**此元素会作为一个或多个行的分组来显示（类似 <tbody>）。 */
  "table-row-group": string;
  /** 此元素会作为一个或多个行的分组来显示（类似 <thead>）。 */
  "table-header-group": string;
  /** 此元素会作为一个或多个行的分组来显示（类似 <tfoot>）。 */
  "table-footer-group": string;
  /**此元素会作为一个表格行显示（类似 <tr>）。 */
  "table-row": string;
  /** 此元素会作为一个或多个列的分组来显示（类似 <colgroup>）。 */
  "table-column-group": string;
  /** 此元素会作为一个单元格列显示（类似 <col>） */
  "table-column": string;
  /** 此元素会作为一个表格单元格显示（类似 <td> 和 <th>） */
  "table-cell": string;
  /** 此元素会作为一个表格标题显示（类似 <caption>） */
  "table-caption": string;
  /**	规定应该从父元素继承 display 属性的值。 */
  inherit: string;
}

export interface IStyle {
  alignContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "space-between"
    | "space-around"
    | keyof GlobalValuesOptions;
  alignItems?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "baseline"
    | keyof GlobalValuesOptions;
  alignSelf?:
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "baseline"
    | keyof GlobalValuesOptions;
  alignmentBaseline?: string | null;
  animation?: string;
  animation__snippet?:
    | "name 1s linear 0s infinite normal both running"
    | "name 3s linear 1s infinite running"
    | "name 3s linear 1s infinite alternate"
    | "name .5s linear 1s infinite alternate";
  animationDelay?: string;
  animationDirection?: "normal" | "reverse" | "alternate" | "alternate-reverse";
  animationDuration?: string;
  animationFillMode?: "none" | "forwards" | "backwards" | "both";
  animationIterationCount?: string;
  animationName?: string;
  animationPlayState?: string;
  animationTimingFunction?: string;
  backfaceVisibility?: string | null;
  background?: string | null;
  backdropFilter__snippet?: "saturate(180%) blur(5px)";
  backdropFilter?: string | null;
  background__snippet?:
    | "rgba(0,0,0,0)"
    | "#fff"
    | "linear-gradient(180deg, red, blue)";
  backgroundAttachment?: "scroll" | "fixed" | "local";
  backgroundClip?:
    | "padding-box"
    | "border-box"
    | "content-box"
    | keyof GlobalValuesOptions;
  backgroundColor?: string | null;
  backgroundImage?: string | null;
  backgroundImage__snippet?: "url(bgimage.gif)";
  backgroundOrigin?:
    | "padding-box"
    | "border-box"
    | "content-box"
    | keyof GlobalValuesOptions;
  backgroundPosition?: string | null;
  backgroundPosition__snippet?: "inherit" | "0% 50%";
  backgroundPositionX?: string | null;
  backgroundPositionY?: string | null;
  backgroundRepeat?: string | null;
  backgroundSize?: string | null;
  baselineShift?: string | null;
  border?: string | null;
  border__snippet?: "1px solid #000" | "1px solid rgba(0,0,0,0.1)";
  borderBottom?: string | null;
  borderBottomColor?: string | null;
  borderBottomLeftRadius?: string | null;
  borderBottomRightRadius?: string | null;
  borderBottomStyle?: string | null;
  borderBottomWidth?: string | null;
  borderCollapse?: string | null;
  borderColor?: string | null;
  borderImage?: string | null;
  borderImageOutset?: string | null;
  borderImageRepeat?: string | null;
  borderImageSlice?: string | null;
  borderImageSource?: string | null;
  borderImageWidth?: string | null;
  borderLeft?: string | null;
  borderLeftColor?: string | null;
  borderLeftStyle?: string | null;
  borderLeftWidth?: string | null;
  borderRadius?: string | null;
  borderRight?: string | null;
  borderRightColor?: string | null;
  borderRightStyle?: string | null;
  borderRightWidth?: string | null;
  borderSpacing?: string | null;
  borderStyle?:
    | "none"
    | "hidden"
    | "dotted"
    | "dashed"
    | "solid"
    | "double"
    | "groove"
    | "ridge"
    | "inset"
    | "outset"
    | "inherit";
  borderTop?: string | null;
  borderTopColor?: string | null;
  borderTopLeftRadius?: string | null;
  borderTopRightRadius?: string | null;
  borderTopStyle?: string | null;
  borderTopWidth?: string | null;
  borderWidth?: string | null;
  bottom?: string | null;
  boxShadow?: string | null;
  boxSizing?: "content-box" | "border-box" | keyof GlobalValuesOptions;
  breakAfter?: string | null;
  breakBefore?: string | null;
  breakInside?: string | null;
  captionSide?: string | null;
  caretColor?: string;
  clear?: "none" | "left" | "right" | "both" | "inherit";
  clip?: string;
  clipPath?: string;
  clipRule?: string;
  color?: string | null;
  colorInterpolationFilters?: string;
  columnCount?: string;
  columnFill?: string;
  columnGap?: string;
  columnRule?: string;
  columnRuleColor?: string;
  columnRuleStyle?: string;
  columnRuleWidth?: string;
  columnSpan?: string;
  columnWidth?: string;
  columns?: string;
  content?: string | null;
  counterIncrement?: string | null;
  counterReset?: string | null;
  cssFloat?: "left" | "right" | "none" | "inherit";
  float?: "left" | "right" | "none" | "inherit";
  cssText?: string;
  cursor?:
    | "auto"
    | "default"
    | "pointer"
    | "crosshair"
    | "move"
    | "e-resize"
    | "ne-resize"
    | "nw-resize"
    | "n-resize"
    | "se-resize"
    | "sw-resize"
    | "s-resize"
    | "w-resize"
    | "text"
    | "wait"
    | "help";
  direction?: string;
  display?: keyof DisplayOptions;
  dominantBaseline?: string | null;
  emptyCells?: string | null;
  enableBackground?: string | null;
  fill?: string | null;
  fillOpacity?: string | null;
  fillRule?: string | null;
  filter?: string;
  flex?: string | number | null;
  flexBasis?: string | null;
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  flexFlow?: string | null;
  flexGrow?: string | null;
  flexShrink?: string | null;
  flexWrap?: string | null;
  floodColor?: string;
  floodOpacity?: string;
  font?: string;
  fontFamily?: string;
  fontFamily__snip?:
    | "ssans-serif,SimSun,宋体,serif,Arial,sans-serif"
    | '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";'
    | 'Georgia,Cambria,"Times New Roman",Times,serif'
    | 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
    | `"Helvetica Neue","PingFang SC", "Hiragino Sans GB", "Heiti SC", -apple-system,BlinkMacSystemFont,NotoSans,"Source Han Sans CN",Roboto,"Fira Sans","Microsoft YaHei", "WenQuanYi Micro Hei"`;
  fontFeatureSettings?: string;
  fontKerning?: string;
  fontSize?: string;
  fontSizeAdjust?: string;
  fontStretch?: string;
  fontStyle?: string;
  fontSynthesis?: string;
  fontVariant?: string;
  fontVariantCaps?: string;
  fontVariantEastAsian?: string;
  fontVariantLigatures?: string;
  fontVariantNumeric?: string;
  fontVariantPosition?: string;
  fontWeight?:
    | "normal"
    | "bold"
    | "bolder"
    | "lighter"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "800"
    | "900"
    | keyof GlobalValuesOptions;
  gap?: string;
  glyphOrientationHorizontal?: string | null;
  glyphOrientationVertical?: string;
  grid?: string | null;
  gridArea?: string | null;
  gridAutoColumns?: string | null;
  gridAutoFlow?: string | null;
  gridAutoRows?: string | null;
  gridColumn?: string | null;
  gridColumnEnd?: string | null;
  gridColumnGap?: string;
  gridColumnStart?: string | null;
  gridGap?: string;
  gridRow?: string | null;
  gridRowEnd?: string | null;
  gridRowGap?: string;
  gridRowStart?: string | null;
  gridTemplate?: string | null;
  gridTemplateAreas?: string | null;
  gridTemplateColumns?: string | null;
  gridTemplateRows?: string | null;
  height?: string | null;
  hyphens?: string;
  imageOrientation?: string;
  imageRendering?: string;
  imeMode?: string | null;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | keyof GlobalValuesOptions;
  justifyItems?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | keyof GlobalValuesOptions;
  justifySelf?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | keyof GlobalValuesOptions;
  kerning?: string | null;
  /** ios 不支持 */
  overscrollBehavior?: "auto" | "contain" | "none";
  layoutGrid?: string | null;
  layoutGridChar?: string | null;
  layoutGridLine?: string | null;
  layoutGridMode?: string | null;
  layoutGridType?: string | null;
  left?: string | null;
  letterSpacing?: string;
  lightingColor?: string;
  lineBreak?: string;
  lineHeight?: string | null;
  listStyle?: string | null;
  listStyleImage?: string | null;
  listStylePosition?: string | null;
  listStyleType?: string | null;
  margin?: string | null;
  marginBottom?: string | null;
  marginLeft?: string | null;
  marginRight?: string | null;
  marginTop?: string | null;
  marker?: string | null;
  markerEnd?: string | null;
  markerMid?: string | null;
  markerStart?: string | null;
  mask?: string;
  maskComposite?: string;
  maskImage?: string;
  maskPosition?: string;
  maskRepeat?: string;
  maskSize?: string;
  maskType?: string;
  maxHeight?: string | null;
  maxWidth?: string | null;
  minHeight?: string | null;
  minWidth?: string | null;
  msContentZoomChaining?: string | null;
  msContentZoomLimit?: string | null;
  msContentZoomLimitMax?: any;
  msContentZoomLimitMin?: any;
  msContentZoomSnap?: string | null;
  msContentZoomSnapPoints?: string | null;
  msContentZoomSnapType?: string | null;
  msContentZooming?: string | null;
  msFlowFrom?: string | null;
  msFlowInto?: string | null;
  msFontFeatureSettings?: string | null;
  msGridColumn?: any;
  msGridColumnAlign?: string | null;
  msGridColumnSpan?: any;
  msGridColumns?: string | null;
  msGridRow?: any;
  msGridRowAlign?: string | null;
  msGridRowSpan?: any;
  msGridRows?: string | null;
  msHighContrastAdjust?: string | null;
  msHyphenateLimitChars?: string | null;
  msHyphenateLimitLines?: any;
  msHyphenateLimitZone?: any;
  msHyphens?: string | null;
  msImeAlign?: string | null;
  msOverflowStyle?: string | null;
  msScrollChaining?: string | null;
  msScrollLimit?: string | null;
  msScrollLimitXMax?: any;
  msScrollLimitXMin?: any;
  msScrollLimitYMax?: any;
  msScrollLimitYMin?: any;
  msScrollRails?: string | null;
  msScrollSnapPointsX?: string | null;
  msScrollSnapPointsY?: string | null;
  msScrollSnapType?: string | null;
  msScrollSnapX?: string | null;
  msScrollSnapY?: string | null;
  msScrollTranslation?: string | null;
  msTextCombineHorizontal?: string | null;
  msTextSizeAdjust?: any;
  msTouchAction?: string | null;
  msTouchSelect?: string | null;
  msUserSelect?: string | null;
  msWrapFlow?: string;
  msWrapMargin?: any;
  msWrapThrough?: string;
  objectFit?: "none" | "fill" | "contain" | "cover" | "scale-down";
  objectPosition?: string;
  objectPosition__snippet?: "50% 50%";
  opacity?: string | number | null;
  order?: string | null;
  orphans?: string | null;
  outline?: string;
  outlineColor?: string;
  outlineOffset?: string;
  outlineStyle?: string;
  outlineWidth?: string;
  overflow?:
    | "visible"
    | "hidden"
    | "scroll"
    | "auto"
    | "inherit"
    | "hidden scroll";
  overflowAnchor?: string;
  overflowWrap?: string;
  overflowX?:
    | "visible"
    | "hidden"
    | "scroll"
    | "auto"
    | "inherit"
    | "hidden scroll";
  overflowY?:
    | "visible"
    | "hidden"
    | "scroll"
    | "auto"
    | "inherit"
    | "hidden scroll";
  padding?: string | null;
  paddingBottom?: string | null;
  paddingLeft?: string | null;
  paddingRight?: string | null;
  paddingTop?: string | null;
  pageBreakAfter?: string | null;
  pageBreakBefore?: string | null;
  pageBreakInside?: string | null;
  penAction?: string | null;
  perspective?: string | null;
  perspectiveOrigin?: string | null;
  placeContent?: string;
  placeItems?: string;
  placeSelf?: string;
  pointerEvents?:
    | "auto"
    | "none"
    | "inherit"
    | "initial"
    | "unset"
    | "visiblePainted"
    | "visibleFill"
    | "visibleStroke"
    | "visible"
    | "painted"
    | "fill"
    | "stroke"
    | "all";
  position?: keyof PositionOptions;
  quotes?: string | null;
  resize?:
    | "none"
    | "both"
    | "horizontal"
    | "vertical"
    | "block"
    | "inline"
    | keyof GlobalValuesOptions;
  right?: string | null;
  rotate?: string | null;
  rowGap?: string;
  rubyAlign?: string | null;
  rubyOverhang?: string | null;
  rubyPosition?: string | null;
  scale?: string | null;
  scrollBehavior?: "auto" | "instant" | "smooth";
  stopColor?: string | null;
  stopOpacity?: string | null;
  stroke?: string | null;
  strokeDasharray?: string | null;
  strokeDashoffset?: string | null;
  strokeLinecap?: string | null;
  strokeLinejoin?: string | null;
  strokeMiterlimit?: string | null;
  strokeOpacity?: string | null;
  strokeWidth?: string | null;
  tabSize?: string;
  tableLayout?: "auto" | "fixed" | keyof GlobalValuesOptions;
  textAlign?:
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify"
    | "inherit";
  textAlignLast?:
    | "auto"
    | "left"
    | "right"
    | "center"
    | "justify"
    | "inherit"
    | "start"
    | "end"
    | "initial";
  textAnchor?: string | null;
  textCombineUpright?: string;
  textDecoration?:
    | "none"
    | "underline"
    | "overline"
    | "line-through"
    | "blink"
    | "inherit";
  textDecorationColor?: string;
  textDecorationLine?:
    | "none"
    | "underline"
    | "overline"
    | "line-through"
    | "blink"
    | "inherit";
  textDecorationStyle?:
    | "solid"
    | "double"
    | "dotted"
    | "dashed"
    | "wavy"
    | "initial"
    | "inherit";
  textEmphasis?: string;
  textEmphasisColor?: string;
  textEmphasisPosition?: string;
  textEmphasisStyle?: string;
  textIndent?: string;
  textJustify?: string;
  textKashida?: string | null;
  textKashidaSpace?: string | null;
  textOrientation?: string;
  textOverflow?: "clip" | "ellipsis" | string;
  textShadow?: string;
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase" | "inherit";
  textUnderlinePosition?: string;
  top?: string | null;
  touchAction?: string;
  transform?: string;
  transform__snippet?:
    | "none"
    | "translate(0px, 0px)"
    | "translateY(0px)"
    | "perspective(500px) translate3d(0px,0px,0px)"
    | "scale(1,1)"
    | "rotate(0deg)";
  transformBox?: string;
  transformOrigin?: string;
  transformStyle?: string | null;
  transition?: string;
  transition__snippet?:
    | "all 0.2s ease-in"
    | "all 0.2s ease-out"
    | "all 0.2s ease"
    | "all 0.2s ease-in-out"
    | "all 0.2s linear"
    | "all 0.2s cubic-bezier(0,0.25,0.75,1)";
  transitionDelay?: string;
  transitionDuration?: string;
  transitionProperty?: string;
  transitionTimingFunction?: string;
  translate?: string | null;
  unicodeBidi?: string;
  userSelect?:
    | "none"
    | "auto"
    | "text"
    | "contain"
    | "all"
    | keyof GlobalValuesOptions;
  verticalAlign?: string | null;
  visibility?: string | null;
  /** @deprecated */
  webkitAlignContent?: string;
  /** @deprecated */
  webkitAlignItems?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "baseline"
    | GlobalValuesOptions;
  /** @deprecated */
  webkitAlignSelf?: string;
  /** @deprecated */
  webkitAnimation?: string;
  /** @deprecated */
  webkitAnimationDelay?: string;
  /** @deprecated */
  webkitAnimationDirection?: string;
  /** @deprecated */
  webkitAnimationDuration?: string;
  /** @deprecated */
  webkitAnimationFillMode?: string;
  /** @deprecated */
  webkitAnimationIterationCount?: string;
  /** @deprecated */
  webkitAnimationName?: string;
  /** @deprecated */
  webkitAnimationPlayState?: string;
  /** @deprecated */
  webkitAnimationTimingFunction?: string;
  /** @deprecated */
  webkitAppearance?: string;
  /** @deprecated */
  webkitBackfaceVisibility?: string;
  /** @deprecated */
  webkitBackgroundClip?: string;
  /** @deprecated */
  webkitBackgroundOrigin?: string;
  /** @deprecated */
  webkitBackgroundSize?: string;
  /** @deprecated */
  webkitBorderBottomLeftRadius?: string;
  /** @deprecated */
  webkitBorderBottomRightRadius?: string;
  webkitBorderImage?: string | null;
  /** @deprecated */
  webkitBorderRadius?: string;
  /** @deprecated */
  webkitBorderTopLeftRadius?: string;
  /** @deprecated */
  webkitBorderTopRightRadius?: string;
  /** @deprecated */
  webkitBoxAlign?: string;
  webkitBoxDirection?: string | null;
  /** @deprecated */
  webkitBoxFlex?: string;
  /** @deprecated */
  webkitBoxOrdinalGroup?: string;
  webkitBoxOrient?: string | null;
  /** @deprecated */
  webkitBoxPack?: string;
  /** @deprecated */
  webkitBoxShadow?: string;
  /** @deprecated */
  webkitBoxSizing?: string;
  webkitColumnBreakAfter?: string | null;
  webkitColumnBreakBefore?: string | null;
  webkitColumnBreakInside?: string | null;
  webkitColumnCount?: any;
  webkitColumnGap?: any;
  webkitColumnRule?: string | null;
  webkitColumnRuleColor?: any;
  webkitColumnRuleStyle?: string | null;
  webkitColumnRuleWidth?: any;
  webkitColumnSpan?: string | null;
  webkitColumnWidth?: any;
  webkitColumns?: string | null;
  /** @deprecated */
  webkitFilter?: string;
  /** @deprecated */
  webkitFlex?: string;
  /** @deprecated */
  webkitFlexBasis?: string;
  /** @deprecated */
  webkitFlexDirection?: string;
  /** @deprecated */
  webkitFlexFlow?: string;
  /** @deprecated */
  webkitFlexGrow?: string;
  /** @deprecated */
  webkitFlexShrink?: string;
  /** @deprecated */
  webkitFlexWrap?: string;
  /** @deprecated */
  webkitJustifyContent?: string;
  webkitLineClamp?: string;
  /** @deprecated */
  webkitMask?: string;
  /** @deprecated */
  webkitMaskBoxImage?: string;
  /** @deprecated */
  webkitMaskBoxImageOutset?: string;
  /** @deprecated */
  webkitMaskBoxImageRepeat?: string;
  /** @deprecated */
  webkitMaskBoxImageSlice?: string;
  /** @deprecated */
  webkitMaskBoxImageSource?: string;
  /** @deprecated */
  webkitMaskBoxImageWidth?: string;
  /** @deprecated */
  webkitMaskClip?: string;
  /** @deprecated */
  webkitMaskComposite?: string;
  /** @deprecated */
  webkitMaskImage?: string;
  /** @deprecated */
  webkitMaskOrigin?: string;
  /** @deprecated */
  webkitMaskPosition?: string;
  /** @deprecated */
  webkitMaskRepeat?: string;
  /** @deprecated */
  webkitMaskSize?: string;
  /** @deprecated */
  webkitOrder?: string;
  /** @deprecated */
  webkitPerspective?: string;
  /** @deprecated */
  webkitPerspectiveOrigin?: string;
  webkitTapHighlightColor?: string | null;
  /** @deprecated */
  webkitTextFillColor?: string;
  /** @deprecated */
  webkitTextSizeAdjust?: string;
  /** @deprecated */
  webkitTextStroke?: string;
  /** @deprecated */
  webkitTextStrokeColor?: string;
  /** @deprecated */
  webkitTextStrokeWidth?: string;
  /** @deprecated */
  webkitTransform?: string;
  /** @deprecated */
  webkitTransformOrigin?: string;
  /** @deprecated */
  webkitTransformStyle?: string;
  /** @deprecated */
  webkitTransition?: string;
  /** @deprecated */
  webkitTransitionDelay?: string;
  /** @deprecated */
  webkitTransitionDuration?: string;
  /** @deprecated */
  webkitTransitionProperty?: string;
  /** @deprecated */
  webkitTransitionTimingFunction?: string;
  webkitUserModify?: string | null;
  webkitUserSelect?: string | null;
  webkitWritingMode?: string | null;
  webkitOverflowScrolling?: "auto" | "touch";
  whiteSpace?: string;
  // windows?: string | null;
  width?: string | null;
  willChange?:
    | "auto"
    | "scroll-position"
    | "contents"
    | "transform"
    | "opacity"
    | "left, top"
    | keyof GlobalValuesOptions;
  wordBreak?: "normal" | "break-oall" | "keep-all" | "break-word";
  /** 3px|0.3em|inherit|normal(default) */
  wordSpacing?: string;
  wordSpacing__snippet?: "normal" | "3px" | "0.3em" | "inherit";
  wordWrap?: "normal" | "break-word";
  writingMode?: string;
  zIndex?: string | number | null;
  zoom?: string | null;
  [index: number]: string;
  [key: string]: any;
}

interface HTMLInputEvent extends HTMLElementEventMap["input"] {
  target: HTMLInputElement & EventTarget;
}

interface EventOptions {
  onabort?: (ev: HTMLElementEventMap["abort"]) => any;
  onanimationcancel?: (ev: HTMLElementEventMap["animationcancel"]) => any;
  onanimationend?: (ev: HTMLElementEventMap["animationend"]) => any;
  onanimationiteration?: (ev: HTMLElementEventMap["animationiteration"]) => any;
  onanimationstart?: (ev: HTMLElementEventMap["animationstart"]) => any;
  onauxclick?: (ev: HTMLElementEventMap["auxclick"]) => any;
  onblur?: (ev: HTMLInputEvent) => any;
  oncancel?: (ev: HTMLElementEventMap["cancel"]) => any;
  oncanplay?: (ev: HTMLElementEventMap["canplay"]) => any;
  oncanplaythrough?: (ev: HTMLElementEventMap["canplaythrough"]) => any;
  onchange?: (ev: HTMLInputEvent) => any;
  onclick?: (ev: HTMLElementEventMap["click"]) => any;
  onclose?: (ev: HTMLElementEventMap["close"]) => any;
  oncontextmenu?: (ev: HTMLElementEventMap["contextmenu"]) => any;
  oncopy?: (ev: HTMLElementEventMap["copy"]) => any;
  oncuechange?: (ev: HTMLElementEventMap["cuechange"]) => any;
  oncut?: (ev: HTMLElementEventMap["cut"]) => any;
  ondblclick?: (ev: HTMLElementEventMap["dblclick"]) => any;
  ondrag?: (ev: HTMLElementEventMap["drag"]) => any;
  ondragend?: (ev: HTMLElementEventMap["dragend"]) => any;
  ondragenter?: (ev: HTMLElementEventMap["dragenter"]) => any;
  ondragexit?: (ev: HTMLElementEventMap["dragexit"]) => any;
  ondragleave?: (ev: HTMLElementEventMap["dragleave"]) => any;
  ondragover?: (ev: HTMLElementEventMap["dragover"]) => any;
  ondragstart?: (ev: HTMLElementEventMap["dragstart"]) => any;
  ondrop?: (ev: HTMLElementEventMap["drop"]) => any;
  ondurationchange?: (ev: HTMLElementEventMap["durationchange"]) => any;
  onemptied?: (ev: HTMLElementEventMap["emptied"]) => any;
  onended?: (ev: HTMLElementEventMap["ended"]) => any;
  onerror?: (ev: HTMLElementEventMap["error"]) => any;
  onfocus?: (ev: HTMLInputEvent) => any;
  onfocusin?: (ev: HTMLElementEventMap["focusin"]) => any;
  onfocusout?: (ev: HTMLElementEventMap["focusout"]) => any;
  onfullscreenchange?: (ev: HTMLElementEventMap["fullscreenchange"]) => any;
  onfullscreenerror?: (ev: HTMLElementEventMap["fullscreenerror"]) => any;
  ongotpointercapture?: (ev: HTMLElementEventMap["gotpointercapture"]) => any;
  oninput?: (ev: HTMLInputEvent) => any;
  oninvalid?: (ev: HTMLElementEventMap["invalid"]) => any;
  onkeydown?: (ev: HTMLElementEventMap["keydown"]) => any;
  onkeypress?: (ev: HTMLElementEventMap["keypress"]) => any;
  onkeyup?: (ev: HTMLElementEventMap["keyup"]) => any;
  onload?: (ev: HTMLElementEventMap["load"]) => any;
  onloadeddata?: (ev: HTMLElementEventMap["loadeddata"]) => any;
  onloadedmetadata?: (ev: HTMLElementEventMap["loadedmetadata"]) => any;
  onloadstart?: (ev: HTMLElementEventMap["loadstart"]) => any;
  onlostpointercapture?: (ev: HTMLElementEventMap["lostpointercapture"]) => any;
  onmousedown?: (ev: HTMLElementEventMap["mousedown"]) => any;
  onmouseenter?: (ev: HTMLElementEventMap["mouseenter"]) => any;
  onmouseleave?: (ev: HTMLElementEventMap["mouseleave"]) => any;
  onmousemove?: (ev: HTMLElementEventMap["mousemove"]) => any;
  onmouseout?: (ev: HTMLElementEventMap["mouseout"]) => any;
  onmouseover?: (ev: HTMLElementEventMap["mouseover"]) => any;
  onmouseup?: (ev: HTMLElementEventMap["mouseup"]) => any;
  onpaste?: (ev: HTMLElementEventMap["paste"]) => any;
  onpause?: (ev: HTMLElementEventMap["pause"]) => any;
  onplay?: (ev: HTMLElementEventMap["play"]) => any;
  onplaying?: (ev: HTMLElementEventMap["playing"]) => any;
  onpointercancel?: (ev: HTMLElementEventMap["pointercancel"]) => any;
  onpointerdown?: (ev: HTMLElementEventMap["pointerdown"]) => any;
  onpointerenter?: (ev: HTMLElementEventMap["pointerenter"]) => any;
  onpointerleave?: (ev: HTMLElementEventMap["pointerleave"]) => any;
  onpointermove?: (ev: HTMLElementEventMap["pointermove"]) => any;
  onpointerout?: (ev: HTMLElementEventMap["pointerout"]) => any;
  onpointerover?: (ev: HTMLElementEventMap["pointerover"]) => any;
  onpointerup?: (ev: HTMLElementEventMap["pointerup"]) => any;
  onprogress?: (ev: HTMLElementEventMap["progress"]) => any;
  onratechange?: (ev: HTMLElementEventMap["ratechange"]) => any;
  onreset?: (ev: HTMLElementEventMap["reset"]) => any;
  onresize?: (ev: HTMLElementEventMap["resize"]) => any;
  onscroll?: (ev: HTMLElementEventMap["scroll"]) => any;
  onsecuritypolicyviolation?: (
    ev: HTMLElementEventMap["securitypolicyviolation"]
  ) => any;
  onseeked?: (ev: HTMLElementEventMap["seeked"]) => any;
  onseeking?: (ev: HTMLElementEventMap["seeking"]) => any;
  onselect?: (ev: HTMLElementEventMap["select"]) => any;
  onselectionchange?: (ev: HTMLElementEventMap["selectionchange"]) => any;
  onselectstart?: (ev: HTMLElementEventMap["selectstart"]) => any;
  onstalled?: (ev: HTMLElementEventMap["stalled"]) => any;
  onsubmit?: (ev: HTMLElementEventMap["submit"]) => any;
  onsuspend?: (ev: HTMLElementEventMap["suspend"]) => any;
  ontimeupdate?: (ev: HTMLElementEventMap["timeupdate"]) => any;
  ontoggle?: (ev: HTMLElementEventMap["toggle"]) => any;
  ontouchcancel?: (ev: HTMLElementEventMap["touchcancel"]) => any;
  ontouchend?: (ev: HTMLElementEventMap["touchend"]) => any;
  ontouchmove?: (ev: HTMLElementEventMap["touchmove"]) => any;
  ontouchstart?: (ev: HTMLElementEventMap["touchstart"]) => any;
  ontransitioncancel?: (ev: HTMLElementEventMap["transitioncancel"]) => any;
  ontransitionend?: (ev: HTMLElementEventMap["transitionend"]) => any;
  ontransitionrun?: (ev: HTMLElementEventMap["transitionrun"]) => any;
  ontransitionstart?: (ev: HTMLElementEventMap["transitionstart"]) => any;
  onvolumechange?: (ev: HTMLElementEventMap["volumechange"]) => any;
  onwaiting?: (ev: HTMLElementEventMap["waiting"]) => any;
  onwheel?: (ev: HTMLElementEventMap["wheel"]) => any;
  [key: string]: any;
}

interface AddEventOptions extends EventOptions {
  addabort?: (ev: HTMLElementEventMap["abort"]) => any;
  addanimationcancel?: (ev: HTMLElementEventMap["animationcancel"]) => any;
  addanimationend?: (ev: HTMLElementEventMap["animationend"]) => any;
  addanimationiteration?: (
    ev: HTMLElementEventMap["animationiteration"]
  ) => any;
  addanimationstart?: (ev: HTMLElementEventMap["animationstart"]) => any;
  addauxclick?: (ev: HTMLElementEventMap["auxclick"]) => any;
  addblur?: (ev: HTMLInputEvent) => any;
  addcancel?: (ev: HTMLElementEventMap["cancel"]) => any;
  addcanplay?: (ev: HTMLElementEventMap["canplay"]) => any;
  addcanplaythrough?: (ev: HTMLElementEventMap["canplaythrough"]) => any;
  addchange?: (ev: HTMLInputEvent) => any;
  addclick?: (ev: HTMLElementEventMap["click"]) => any;
  addclose?: (ev: HTMLElementEventMap["close"]) => any;
  addcontextmenu?: (ev: HTMLElementEventMap["contextmenu"]) => any;
  addcopy?: (ev: HTMLElementEventMap["copy"]) => any;
  addcuechange?: (ev: HTMLElementEventMap["cuechange"]) => any;
  addcut?: (ev: HTMLElementEventMap["cut"]) => any;
  adddblclick?: (ev: HTMLElementEventMap["dblclick"]) => any;
  adddrag?: (ev: HTMLElementEventMap["drag"]) => any;
  adddragend?: (ev: HTMLElementEventMap["dragend"]) => any;
  adddragenter?: (ev: HTMLElementEventMap["dragenter"]) => any;
  adddragexit?: (ev: HTMLElementEventMap["dragexit"]) => any;
  adddragleave?: (ev: HTMLElementEventMap["dragleave"]) => any;
  adddragover?: (ev: HTMLElementEventMap["dragover"]) => any;
  adddragstart?: (ev: HTMLElementEventMap["dragstart"]) => any;
  adddrop?: (ev: HTMLElementEventMap["drop"]) => any;
  adddurationchange?: (ev: HTMLElementEventMap["durationchange"]) => any;
  addemptied?: (ev: HTMLElementEventMap["emptied"]) => any;
  addended?: (ev: HTMLElementEventMap["ended"]) => any;
  adderror?: (ev: HTMLElementEventMap["error"]) => any;
  addfocus?: (ev: HTMLInputEvent) => any;
  addfocusin?: (ev: HTMLElementEventMap["focusin"]) => any;
  addfocusout?: (ev: HTMLElementEventMap["focusout"]) => any;
  addfullscreenchange?: (ev: HTMLElementEventMap["fullscreenchange"]) => any;
  addfullscreenerror?: (ev: HTMLElementEventMap["fullscreenerror"]) => any;
  addgotpointercapture?: (ev: HTMLElementEventMap["gotpointercapture"]) => any;
  addinput?: (ev: HTMLInputEvent) => any;
  addinvalid?: (ev: HTMLElementEventMap["invalid"]) => any;
  addkeydown?: (ev: HTMLElementEventMap["keydown"]) => any;
  addkeypress?: (ev: HTMLElementEventMap["keypress"]) => any;
  addkeyup?: (ev: HTMLElementEventMap["keyup"]) => any;
  addload?: (ev: HTMLElementEventMap["load"]) => any;
  addloadeddata?: (ev: HTMLElementEventMap["loadeddata"]) => any;
  addloadedmetadata?: (ev: HTMLElementEventMap["loadedmetadata"]) => any;
  addloadstart?: (ev: HTMLElementEventMap["loadstart"]) => any;
  addlostpointercapture?: (
    ev: HTMLElementEventMap["lostpointercapture"]
  ) => any;
  addmousedown?: (ev: HTMLElementEventMap["mousedown"]) => any;
  addmouseenter?: (ev: HTMLElementEventMap["mouseenter"]) => any;
  addmouseleave?: (ev: HTMLElementEventMap["mouseleave"]) => any;
  addmousemove?: (ev: HTMLElementEventMap["mousemove"]) => any;
  addmouseout?: (ev: HTMLElementEventMap["mouseout"]) => any;
  addmouseover?: (ev: HTMLElementEventMap["mouseover"]) => any;
  addmouseup?: (ev: HTMLElementEventMap["mouseup"]) => any;
  addpaste?: (ev: HTMLElementEventMap["paste"]) => any;
  addpause?: (ev: HTMLElementEventMap["pause"]) => any;
  addplay?: (ev: HTMLElementEventMap["play"]) => any;
  addplaying?: (ev: HTMLElementEventMap["playing"]) => any;
  addpointercancel?: (ev: HTMLElementEventMap["pointercancel"]) => any;
  addpointerdown?: (ev: HTMLElementEventMap["pointerdown"]) => any;
  addpointerenter?: (ev: HTMLElementEventMap["pointerenter"]) => any;
  addpointerleave?: (ev: HTMLElementEventMap["pointerleave"]) => any;
  addpointermove?: (ev: HTMLElementEventMap["pointermove"]) => any;
  addpointerout?: (ev: HTMLElementEventMap["pointerout"]) => any;
  addpointerover?: (ev: HTMLElementEventMap["pointerover"]) => any;
  addpointerup?: (ev: HTMLElementEventMap["pointerup"]) => any;
  addprogress?: (ev: HTMLElementEventMap["progress"]) => any;
  addratechange?: (ev: HTMLElementEventMap["ratechange"]) => any;
  addreset?: (ev: HTMLElementEventMap["reset"]) => any;
  addresize?: (ev: HTMLElementEventMap["resize"]) => any;
  addscroll?: (ev: HTMLElementEventMap["scroll"]) => any;
  addsecuritypolicyviolation?: (
    ev: HTMLElementEventMap["securitypolicyviolation"]
  ) => any;
  addseeked?: (ev: HTMLElementEventMap["seeked"]) => any;
  addseeking?: (ev: HTMLElementEventMap["seeking"]) => any;
  addselect?: (ev: HTMLElementEventMap["select"]) => any;
  addselectionchange?: (ev: HTMLElementEventMap["selectionchange"]) => any;
  addselectstart?: (ev: HTMLElementEventMap["selectstart"]) => any;
  addstalled?: (ev: HTMLElementEventMap["stalled"]) => any;
  addsubmit?: (ev: HTMLElementEventMap["submit"]) => any;
  addsuspend?: (ev: HTMLElementEventMap["suspend"]) => any;
  addtimeupdate?: (ev: HTMLElementEventMap["timeupdate"]) => any;
  addtoggle?: (ev: HTMLElementEventMap["toggle"]) => any;
  addtouchcancel?: (ev: HTMLElementEventMap["touchcancel"]) => any;
  addtouchend?: (ev: HTMLElementEventMap["touchend"]) => any;
  addtouchmove?: (ev: HTMLElementEventMap["touchmove"]) => any;
  addtouchstart?: (ev: HTMLElementEventMap["touchstart"]) => any;
  addtransitioncancel?: (ev: HTMLElementEventMap["transitioncancel"]) => any;
  addtransitionend?: (ev: HTMLElementEventMap["transitionend"]) => any;
  addtransitionrun?: (ev: HTMLElementEventMap["transitionrun"]) => any;
  addtransitionstart?: (ev: HTMLElementEventMap["transitionstart"]) => any;
  addvolumechange?: (ev: HTMLElementEventMap["volumechange"]) => any;
  addwaiting?: (ev: HTMLElementEventMap["waiting"]) => any;
  addwheel?: (ev: HTMLElementEventMap["wheel"]) => any;
  [key: string]: any;
}

type AnyFn = (e: any) => any;
type AnyGet = AnyFn | any;

type StringFn = (e: any) => string;
type StringGet = StringFn | string;

type NumberFn = (e: any) => number;
type NumberFn = NumberFn | number;

type BoolFn = (e: any) => boolean;
type BoolGet = BoolFn | boolean;

type StyleFn = (e: any) => IStyle;
type StyleGet = StyleFn | IStyle;

type RefOne = (e: HTMLElement) => any;
type RefList = ((e: HTMLElement) => any)[];

export interface IProps extends AddEventOptions {
  $ref?: RefOne | RefList;
  $bind?: any[];
  $append?: () => any[];
  $memo?: () => any[];
  [key: string]: any;
  [index: number]: any;
  className?: StringGet;
  style?: StyleGet;
  textContent?: AnyGet;
  accessKey?: StringGet;
  autocapitalize?: StringGet;
  dir?: StringGet;
  draggable?: BoolGet;
  hidden?: BoolGet;
  innerText?: StringGet;
  innerHTML?: StringGet;
  lang?: StringGet;
  spellcheck?: BoolGet;
  title?: StringGet;
  translate?: BoolGet;
  accept?: StringGet;
  align?: StringGet;
  alt?: StringGet;
  autocomplete?: StringGet;
  autofocus?: BoolGet;
  checked?: BoolGet;
  defaultChecked?: BoolGet;
  defaultValue?: StringGet;
  dirName?: StringGet;
  disabled?: BoolGet;
  files?: FileList | null;
  formAction?: StringGet;
  formEnctype?: StringGet;
  formMethod?: StringGet;
  formNoValidate?: BoolGet;
  formTarget?: StringGet;
  height?: NumberFn;
  indeterminate?: BoolGet;
  max?: StringGet;
  maxLength?: NumberFn;
  min?: StringGet;
  minLength?: NumberFn;
  multiple?: StringGet;
  name?: StringGet;
  pattern?: StringGet;
  placeholder?: StringGet;
  readOnly?: BoolGet;
  required?: BoolGet;
  selectionDirection?: StringGet | null;
  selectionEnd?: NumberFn | null;
  selectionStart?: NumberFn | null;
  size?: NumberFn;
  src?: StringGet;
  step?: StringGet;
  type?: StringGet;
  value?: StringGet;
  valueAsDate?: Date | null;
  valueAsNumber?: NumberFn;
  width?: NumberFn;
  height?: NumberFn;
}
