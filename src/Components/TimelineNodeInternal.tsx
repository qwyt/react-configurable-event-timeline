import { ISharedProps, ITimelineNodeInternalProps } from "./types";
import * as React from "react";
import { CSSProperties, useContext } from "react";
import styles from "./styles.module.css";
import { DEFAULT_CIRCLE_NODE_SIZE, TimelineContext } from "./utils";

export function TimelineNodeInternal(props: ITimelineNodeInternalProps & ISharedProps) {

  //Don't use this both here and in TimelineItem either inherit all from TimelineItem
  // or don't set anything in TimelineItem and call context in all child components
  let globalProps = useContext(TimelineContext);

  let borderColor = props.borderColor ? props.borderColor : globalProps.borderColor;
  let bgColor = props.color ? props.color : globalProps.color;

  let nodeClasses: string[] = [styles.node];
  let nodeContainerClasses: string[] = [styles.nodeContainer];

  let nodeStyles: CSSProperties = {
    borderColor: borderColor,
    backgroundColor: bgColor,
    borderWidth: `${globalProps.borderWidth}px`
  };

  if (props.style) {
    // nodeStyles = { ...nodeStyles, ...props.style };
    nodeStyles = { ...nodeStyles, ...props.style };
  }

  if (props.stretch) {
    nodeClasses.push(styles.stretch);
  }

  // else {
  //   nodeClasses.push("WTF:?!");
  //   // nodeClasses.push(JSON.stringify(props.children))
  // }

  if (!props.hidden) {
    if (props.children === undefined) {
      nodeClasses.push(styles.empty);
      nodeStyles.backgroundColor = bgColor;
    }

    //Check if Semantic Ui
    if (bgColor) {
      nodeClasses.push(bgColor);
      nodeClasses.push("ui");
    }
    let border = props.border ? props.border : "round";

    if (border === "round" || border === "square") {
      nodeClasses.push(styles.border);
      if (border === "round") {
        nodeClasses.push(styles.round);
      }
    }
  }
  else {
    nodeContainerClasses.push(styles.hidden);
  }

  let connectorStyles: CSSProperties = {
    //TODO use borderWidth
    // width: props.hor
    // backgroundColor: props.color
  };

  if (globalProps.horizontal) {
    connectorStyles.height = globalProps.borderWidth;
  }
  else {
    connectorStyles.width = globalProps.borderWidth;
  }

  let connectorContainerStyle: CSSProperties | undefined;
  if (globalProps.size && globalProps.size.minConnectorWidth) {
    connectorContainerStyle = { minWidth: globalProps.size.minConnectorWidth };
  }

  let trailingLineStart: boolean = globalProps.trailingLines.start;
  let trailingLineEnd: boolean = globalProps.trailingLines.end;

  let circleNodeSize = globalProps.size && globalProps.size.circleNodeRadius ? globalProps.size.circleNodeRadius : DEFAULT_CIRCLE_NODE_SIZE;

  let nodeChildrenContainerStyle: CSSProperties = {};

  if (props.border === "round") {
    // nodeChildrenContainerStyle.height = `${circleNodeSize}px`;
    // nodeChildrenContainerStyle.lineHeight = `${circleNodeSize}px`;
    if (props.stretch) {
      nodeChildrenContainerStyle.minWidth = circleNodeSize * 1.5;
    }
  }

  return <div className={nodeContainerClasses.join(" ")}>
    {(trailingLineStart && props.index === 0) && <div style={connectorContainerStyle} className={`${styles.connector} ${trailingLineStart ? styles.trailing : ""}`}>
      <div style={connectorStyles} />
    </div>}

    <div className={nodeClasses.join(" ")} style={nodeStyles}>
      {props.children && <div className={styles.nodeChildrenContainer} style={nodeChildrenContainerStyle}>
        {/*<div>*/}
        {props.children}
        {/*</div>*/}
      </div>}
    </div>

    {((trailingLineEnd && props.index === -1) || props.index !== -1) &&
    <div style={connectorContainerStyle} className={`${styles.connector} ${trailingLineEnd ? styles.trailing : ""}`}>
      <div style={connectorStyles} />
    </div>}
  </div>;
}
