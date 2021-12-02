
import { ISharedProps, ITimelineItemProps } from "./types";
import * as React from "react";
import { CSSProperties, useContext } from "react";
import { TimelineItemContent } from "./TimelineItemContent";
import { TimelineNode } from "./TimelineNode";
import { TimelineCircleNode } from "./TimelineCircleNode";
import { TimelineDotNode } from "./TimelineDotNode";
import { TimelineNodeInternal } from "./TimelineNodeInternal";
import styles from "./styles.module.css";
import { TimelineContext } from "./utils";

export function TimelineItem(props: ITimelineItemProps & ISharedProps) {

  //TODO always inject TimelineNode with no do, if TimelineNode not in children
  // return <div className={styles.itemContainer}>
  //   {props.children}
  // </div>;
  let globalProps = useContext(TimelineContext);

  let leftItems: JSX.Element[] | undefined = globalProps.hideLeft ? undefined : [];
  let rightItems: JSX.Element[] | undefined = globalProps.hideRight ? undefined : [];
  let nodeItem: JSX.Element | undefined;

  React.Children.forEach(props.children, el => {
    if (el.type === TimelineItemContent) {

      if (leftItems !== undefined && (el.props.left === true)) {
        leftItems.push(el);
      }
      else if (rightItems !== undefined) {
        rightItems.push(el);
      }
    }
    else if (el.type === TimelineNode || el.type === TimelineCircleNode || el.type === TimelineDotNode) {
      nodeItem = el;
    }
  });

  if (nodeItem === undefined) {
    //TODO hide dot
    nodeItem = <TimelineNodeInternal hidden />;
  }
  // placeHolder

  // if (leftItems.length === 0) {
  //   leftItems.push(<div className={`${styles.placeHolder}`} />);
  // }
  // else if (rightItems.length === 0) {
  //   rightItems.push(<div className={`${styles.placeHolder}`} />);
  // }

  let itemContainerStyle: CSSProperties = {};
  if (props.width !== undefined) {
    itemContainerStyle = { flexGrow: props.width };
  }

  return <li className={[styles.itemContainer].join(" ")} style={itemContainerStyle}>
    {/*<div className={"LEFT"}>{BuildChildren(leftItems, props)}</div>*/}
    <div
      className={`${styles.placeHolder} ${styles.left} ${globalProps.hideLeft ? styles.hidden : undefined}`}
    >

      {leftItems}</div>

    <div>{React.cloneElement(nodeItem, {
      ...nodeItem?.props,
      index: props.index,

      trailingLines: globalProps.trailingLines,
      borderWidth: globalProps.borderWidth,

      color: nodeItem?.props.color ? nodeItem?.props.color : props.borderColor
    })}</div>
    {/*<div className={"RIGHT"}> {BuildChildren(rightItems, props)}</div>*/}
    <div
      className={`${styles.placeHolder} ${styles.right} ${globalProps.hideRight ? styles.hidden : undefined}`}
    >

      {rightItems}</div>
  </li>;
}
