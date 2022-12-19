import {
  Document,
  DOMEvent,
  HTMLElementTagNameMap,
  NSComponentsMap,
  NSCustomComponentsMap,
} from "dominative";

export type Filter<
  Set,
  Needle extends string
> = Set extends `${Needle}${infer _X}` ? never : Set;

export type MapNativeViewEvents<T, C> = {
  [K in T as `on:${K}`]: (event: DOMEvent<C>) => void;
};

type NSComponentEventsMap = {
  [K in keyof NSComponentsMap]: MapNativeViewEvents<
    HTMLElementTagNameMap[K]["eventNames"],
    HTMLElementTagNameMap[K]
  >;
} & {
  [K in keyof NSCustomComponentsMap]: MapNativeViewEvents<
    NSCustomComponentsMap[K]["eventNames"],
    NSCustomComponentsMap[K]
  >;
};

export type IgnoredKeys =
  | "cssType"
  | "requestLayout"
  | "layoutNativeView"
  | "goBack"
  | "replacePage"
  | "firstElementChild"
  | "lastElementChild"
  | "children"
  | "childNodes"
  | "append"
  | "insertBefore"
  | "replaceChild"
  | "appendChild"
  | "textContent"
  | "removeChild"
  | "childElementCount"
  | "innerHTML"
  | "outerHTML"
  | "insertBefore"
  | "setAttribute"
  | "getAttribute"
  | "removeAttribute"
  | "removeAttributeNS"
  | "setAttributeNS"
  | "namespaceURI"
  | "dispatchEvent"
  | "getAttributeNS"
  | "localName"
  | "nodeName"
  | "tagName"
  | "attributes"
  | "hasChildNodes"
  | "firstChild"
  | "lastChild"
  | "replaceWith"
  | "cloneNode"
  | "remove"
  | "parentNode"
  | "height"
  | "width"
  | "appendData";

export type PickedNSComponentKeys<T> = Omit<
  T,
  Filter<
    keyof T,
    | "_"
    | "set"
    | "get"
    | "has"
    | "change"
    | "each"
    | "can"
    | "create"
    | "send"
    | "perform"
    | "go"
    | "on"
  >
>;

type OverrideProperties = {
  style: any;
  height: string | number;
  width: string | number;
  class: string;
};

export type DefineNSComponent<T, E> = Partial<
  Omit<
    T,
    IgnoredKeys | keyof OverrideProperties | keyof PickedNSComponentKeys<T>
  > &
    E
>;

declare global {
  var document: Document;
}

declare global {
  namespace JSX {
    function mapElementTag<K extends keyof NSDefaultComponents>(
      tag: K
    ): NSDefaultComponents[K];

    function createElement<
      Element extends NSDefaultComponents,
      Key extends keyof NSDefaultComponents
    >(element: Key | undefined | null, attrs: Element[Key]): Element[Key];

    function createElement<
      Element extends NSDefaultComponents,
      Key extends keyof NSDefaultComponents,
      T
    >(
      element: Key | undefined | null,
      attrsEnhancers: T,
      attrs: Element[Key] & T
    ): Element[Key];

    type NSDefaultComponents = {
      [K in keyof HTMLElementTagNameMap as `${Lowercase<K>}`]: Partial<
        DefineNSComponent<HTMLElementTagNameMap[K], NSComponentEventsMap[K]> &
          OverrideProperties
      >;
    };
  }

  namespace JSX {
    type NSDefaultComponents = {
      [K in keyof HTMLElementTagNameMap as `${Lowercase<K>}`]: Partial<
        DefineNSComponent<HTMLElementTagNameMap[K], NSComponentEventsMap[K]> &
          OverrideProperties
      >;
    };
    interface IntrinsicElements extends NSDefaultComponents {}
  }
}
