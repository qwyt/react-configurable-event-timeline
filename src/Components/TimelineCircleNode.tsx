/* eslint-disable no-trailing-spaces,no-unused-vars,indent,object-curly-spacing,quotes,react/jsx-indent,react/jsx-tag-spacing,semi,react/jsx-curly-brace-presence,react/jsx-closing-tag-location,prefer-const,padded-blocks,brace-style,spaced-comment,react/jsx-closing-bracket-location */
// eslint-disable-next-line node/no-unsupported-features

// eslint-disable-next-line node/no-unsupported-features

import { ISharedProps, ITimelineCircleNodeProps, ITimelineNodeInternalProps } from "./types";
import * as React from "react";
import { TimelineNodeInternal } from "./TimelineNodeInternal";
import { assignGlobalProps } from "./utils";

export function TimelineCircleNode(props: ITimelineCircleNodeProps & ISharedProps) {
  let internalProps: ITimelineNodeInternalProps & ISharedProps = {
    children: props.children,
    color: props.color,
    borderColor: props.borderColor,
    outlined: undefined,
    border: "round",
    stretch: props.stretch,
    index: undefined,
    hidden: undefined
  };
  return <TimelineNodeInternal {...assignGlobalProps(internalProps, props)} />;
}
