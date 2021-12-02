import { ISharedProps, ITimelineDotNodeProps, ITimelineNodeInternalProps } from "./types";
import * as React from "react";
import { TimelineNodeInternal } from "./TimelineNodeInternal";
import { assignGlobalProps } from "./utils";

export function TimelineDotNode(props: ITimelineDotNodeProps & ISharedProps) {
  let internalProps: ITimelineNodeInternalProps & ISharedProps = {
    children: undefined,
    color: props.color,
    borderColor: props.borderColor,
    outlined: undefined,
    border: "round",
    stretch: undefined,
    index: undefined,
    hidden: undefined
  };
  return <TimelineNodeInternal {...assignGlobalProps(internalProps, props)} />;
}
