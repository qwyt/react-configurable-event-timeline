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
