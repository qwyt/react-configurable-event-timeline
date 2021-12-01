/* eslint-disable no-trailing-spaces,no-unused-vars,indent,object-curly-spacing,quotes,react/jsx-indent,react/jsx-tag-spacing,semi,react/jsx-curly-brace-presence,react/jsx-closing-tag-location,prefer-const,padded-blocks,brace-style,spaced-comment,react/jsx-closing-bracket-location */
// eslint-disable-next-line node/no-unsupported-features

// eslint-disable-next-line node/no-unsupported-features

import * as React from "react";
import { ITimelineSize } from "./types";

export interface ITimelineContext {
  hideLeft: boolean,
  hideRight: boolean,
  trailingLines: { start: boolean, end: boolean },
  borderWidth: number,
  borderColor?: string,
  color?: string,
  responsive?: boolean,
  horizontal?: boolean
  size?: ITimelineSize
}

export const DEFAULT_CIRCLE_NODE_SIZE = 28;

export const assignGlobalProps = (props: any, sourceProps: any) => {
  return {
    ...props,
    style: sourceProps.style,
    index: sourceProps.index
  };
};

export const TimelineContext = React.createContext<ITimelineContext>({
    hideLeft: false, hideRight: true, trailingLines: { start: false, end: false }, borderWidth: 0
  }
);
