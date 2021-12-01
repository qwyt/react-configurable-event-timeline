/* eslint-disable spaced-comment,quotes,no-trailing-spaces */
import * as React from "react";
import { CSSProperties } from "react";

export interface ISharedProps {
  borderColor?: string;
  color?: string;

  className?: string | string[]
  style?: CSSProperties
}

export interface ITimelineNodeInternalProps {
  // children?: React.ReactElement | string | JSX.Element | JSX.Element[] ;
  children?: any;

  // If no children are provided render the node as an outlined dot instead of a filled dot.
  outlined?: boolean;

  // Stretch to fit content vertically or horizontally. Default is 'round'.
  border?: "none" | "round" | "square";
  trailingLines?: boolean | { start: boolean, end: boolean };

  stretch?: boolean;

  index?: number;

  hidden?: boolean;

  style?: CSSProperties;

}

export interface ITimelineNodeProps {
  children?: any;
}

export interface ITimelineDotNodeProps {

  outlined?: boolean;
  radius?: number; //Default 3
}

export interface ITimelineCircleNodeProps {

  //Stretch circle squircle vertically or horizontally (depending on timeline direction) to fit content
  stretch?: boolean;

  children?: any;

  style?: CSSProperties;
}

export interface ITimelineItemContentProps {
  // children?: React.ReactElement<any>[];
  children?: any[] | any;
  className?: string;

  left?: boolean;

  timeStamp?: string | Date;
  title?: string | JSX.Element;
}

export interface ITimelineItemProps {
  // children?: React.ReactElement<ITimelineItemContentProps | ITimelineNodeProps>[];
  children?: any[] | any;
  className?: string;

  index?: number;

  width?: 1 | 2 | 3 | number;

}

export interface ITimelineSize {
  circleNodeRadius?: number;
  minConnectorWidth?: number
}

export interface ITimelineProps {
  horizontal?: boolean;
  dashed?: boolean; //TODO better name

  //Scale width/height to container
  responsive?: boolean;

  // children?: React.ReactElement<ITimelineItemProps>[];
  children?: any[] | any;

  //Render lines after/before last/first node?
  trailingLines?: boolean | { start: boolean, end: boolean };

  borderWidth?: number;

  size?: ITimelineSize;
}
