/* eslint-disable no-trailing-spaces,no-unused-vars,indent,object-curly-spacing,quotes,react/jsx-indent,react/jsx-tag-spacing,semi,react/jsx-curly-brace-presence,react/jsx-closing-tag-location,prefer-const,padded-blocks,brace-style,spaced-comment,react/jsx-closing-bracket-location */
// eslint-disable-next-line node/no-unsupported-features

// eslint-disable-next-line node/no-unsupported-features

import { ITimelineItemContentProps } from "./types";
import styles from "./styles.module.css";
import * as React from "react";

export function TimelineItemContent(props: ITimelineItemContentProps) {

  let ts = props.timeStamp ? props.timeStamp instanceof Date ? props.timeStamp.toDateString() : props.timeStamp : false;
  let title = typeof props.title === "string" ? <h4 className={styles.defaultHeader}>{props.title}</h4> : props.title;

  return <div className={styles.itemContent}>

    {ts && <div className={styles.timeStamp}>{ts}</div>}
    {title && <div className={styles.title}>{title}</div>}
    {props.children && <div className={styles.content}>{props.children}</div>}
  </div>;

}
