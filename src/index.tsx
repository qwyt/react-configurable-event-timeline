/* eslint-disable quotes,semi,indent */
import * as React from "react";
import styles from "./Components/styles.module.css";

import {
  Timeline
} from "./Components/Timeline";

import {
  ITimelineProps,
  ITimelineCircleNodeProps,
  ITimelineDotNodeProps,
  ITimelineItemContentProps
} from "./Components/types";
import { TimelineItemContent } from "./Components/TimelineItemContent";
import { TimelineCircleNode } from "./Components/TimelineCircleNode";
import { TimelineDotNode } from "./Components/TimelineDotNode";
import { TimelineNode } from "./Components/TimelineNode";
import { TimelineItem } from "./Components/TimelineItem";

interface Props {
  text: string;
}

export {
  ITimelineProps,
  ITimelineCircleNodeProps,
  ITimelineDotNodeProps,
  ITimelineItemContentProps,
  Timeline, TimelineItem, TimelineItemContent, TimelineNode, TimelineDotNode, TimelineCircleNode
};

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>;
};
