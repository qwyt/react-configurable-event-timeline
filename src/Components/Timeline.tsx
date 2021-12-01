/* eslint-disable no-trailing-spaces,no-unused-vars,indent,object-curly-spacing,quotes,react/jsx-indent,react/jsx-tag-spacing,semi,react/jsx-curly-brace-presence,react/jsx-closing-tag-location,prefer-const,padded-blocks,brace-style,spaced-comment,react/jsx-closing-bracket-location */
// eslint-disable-next-line node/no-unsupported-features

// eslint-disable-next-line node/no-unsupported-features
import styles from "./styles.module.css";
import * as React from "react";
import { ISharedProps, ITimelineProps } from "./types";
import { TimelineNode } from "./TimelineNode";
import { TimelineItem } from "./TimelineItem";
import { ITimelineContext, TimelineContext } from "./utils";

const BuildChildren = (children: any[], props: any, trailingStart: boolean) => {
  // return React.Children.map(children, el => {

  let mappedChildren = children.map((el: any, i: number) => {

    let childProps = { ...props, index: i < children.length - 1 ? i + (trailingStart ? 1 : 0) : -1 };
    childProps = Object.assign(childProps, el.props);
    return React.createElement(el.type, childProps);
  });

  if (trailingStart) {
    mappedChildren.unshift(<TimelineItem index={0} />);
  }

  return mappedChildren;
};

export function Timeline(props: ITimelineProps & ISharedProps) {

  let trailingLines = props.trailingLines ? props.trailingLines === true ? {
    start: true,
    end: true
  } : props.trailingLines : { start: false, end: false };

  let classes: string[] = [styles.container];

  if (props.responsive) {
    classes.push(styles.responsive);
  }

  if (props.horizontal) {
    classes.push(styles.horizontal);
  }
  else {
    classes.push(styles.vertical);
  }

  if (props.dashed) {
    classes.push(styles.dashed);
  }

  // let copyProps = {props.}

  //Dont expanded left/right container if no content items provided
  let hideLeft = true;
  let hideRight = true;
  React.Children.forEach(props.children, c => {

    let useRight = true;

    // if (c.children) {
    React.Children.forEach(c.props.children, cc => {

      // c.children.forEach((cc: any) => {

      if (cc.type === TimelineNode) {
        useRight = true;
      }
      else {
        // rightCounter++;

        if (cc.props.left) {
          hideLeft = false;
        }
        else {
          hideRight = false;
        }

        // if (cc.props.left || useRight === false) {
        //   leftCounter++;
        // }
        // else {
        //   rightCounter++;
        // }
      }
    });
    // }
  });

  return <TimelineContext.Provider value={{
    responsive: props.responsive,
    horizontal: props.horizontal,
    hideLeft: hideLeft,
    hideRight: hideRight,
    trailingLines: trailingLines,
    borderWidth: props.borderWidth ? props.borderWidth : 1,
    borderColor: props.borderColor ? props.borderColor : "rgb(189,189,189)",
    size: props.size
  }}>
    <ul className={classes.join(" ")}>
      {BuildChildren(React.Children.map(props.children, c => c), {
        // hideLeft: hideLeft,
        // hideRight: hideRight,
        // trailingLines: trailingLines,
        // borderWidth: props.borderWidth,
        // color: props.color ? props.color : "rgb(189,189,189)"
      }, trailingLines.start)}
    </ul>
  </TimelineContext.Provider>;
}

