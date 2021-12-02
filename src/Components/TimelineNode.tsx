
import { ISharedProps, ITimelineNodeInternalProps, ITimelineNodeProps } from "./types";
import * as React from "react";
import { TimelineNodeInternal } from "./TimelineNodeInternal";
import { assignGlobalProps } from "./utils";

export function TimelineNode(props: ITimelineNodeProps & ISharedProps) {
  let internalProps: ITimelineNodeInternalProps & ISharedProps = {
    children: props.children,
    color: props.color,
    borderColor: props.borderColor,
    outlined: undefined,
    border: "none",
    stretch: undefined,
    index: undefined,
    hidden: undefined
  };
  return <TimelineNodeInternal {...assignGlobalProps(internalProps, props)} />;
}
