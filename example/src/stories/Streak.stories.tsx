/* eslint-disable quotes,no-undef,padded-blocks,indent,react/jsx-tag-spacing,react/jsx-indent-props,no-trailing-spaces */
import { storiesOf, Story, Meta } from "@storybook/react";
import React, { Component } from "react";

import {
  TimelineCircleNode,
  TimelineDotNode,
  ITimelineProps,
  Timeline,
  TimelineItem,
  TimelineItemContent,
  TimelineNode
} from "react-configurable-event-timeline";
import "react-configurable-event-timeline/build/index.css";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { EmojiEvents } from "@mui/icons-material";

const globalStyles = {
  // backgroundColor: 'rgb(255, 234, 234)',
  height: "100vh",
  fontFamily: "Roboto"
};

const container = (story: any) => {
  return <div style={globalStyles}>{story()}</div>;
};

export default {
  component: Timeline,
  subcomponents: { TimelineItem }, //👈 Adds the ListItem component as a subcomponent
  title: "Streak Timeline"
} as Meta;


// export const Empty: Story<ITimelineProps> = (args) => <Timeline {...args} />;


const StreakTimeline: ComponentStory<typeof Timeline> = (args) => {
  return <div style={{ padding: "50px", backgroundColor: "rgba(215,215,215,0.51)", width: "100%", height: "1000px" }}>
    <div style={{

      paddingBottom: "1px",
      backgroundColor: "white",
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      paddingTop: "5px",
      fontFamily: "sans-serif", width: "650px", borderRadius: "10px", border: "solid white 0px"
    }}>

      <div style={{ paddingLeft: "10px", marginTop: "5px" }}>
        <header><h2>Day in a Row</h2></header>
      </div>

      <Timeline
        {...args}
        size={{ circleNodeRadius: 16, minConnectorWidth: 20 }}
        borderWidth={3}
        responsive={true}
        horizontal={true}
        trailingLines={{ start: true, end: false }}>

        <TimelineItem>
          <TimelineCircleNode>
            <i className="material-icons" style={{ color: "green", fontWeight: "bold", fontSize: 18 }}>
              check
            </i>
            {/*<div><span className="material-icons md-18">email</span></div>*/}
          </TimelineCircleNode>
          <TimelineItemContent timeStamp={"Mon"} />
        </TimelineItem>

        <TimelineItem>
          <TimelineCircleNode>
            <i className="material-icons" style={{ color: "green", fontWeight: "bold", fontSize: 18 }}>
              check
            </i>
            {/*<div><span className="material-icons md-18">email</span></div>*/}
          </TimelineCircleNode>
          <TimelineItemContent timeStamp={"Tue"} />
        </TimelineItem>
        <TimelineItem>
          <TimelineCircleNode>
            <i className="material-icons" style={{ color: "red", fontWeight: "bold", fontSize: 18 }}>
              clear
            </i>
            {/*<div><span className="material-icons md-18">email</span></div>*/}
          </TimelineCircleNode>
          <TimelineItemContent timeStamp={"Wed"} />
        </TimelineItem>
        <TimelineItem>
          <TimelineCircleNode>
            <i className="material-icons" style={{ color: "grey", fontWeight: "bold", fontSize: 18 }}>
              remove
            </i>
            {/*<div><span className="material-icons md-18">email</span></div>*/}
          </TimelineCircleNode>
          <TimelineItemContent timeStamp={"Thu"} />
        </TimelineItem>
        <TimelineItem>
          <TimelineCircleNode>
            <i className="material-icons" style={{ color: "green", fontWeight: "bold", fontSize: 18 }}>
              check
            </i>
            {/*<div><span className="material-icons md-18">email</span></div>*/}
          </TimelineCircleNode>
          <TimelineItemContent timeStamp={"Fri"} />
        </TimelineItem>
        <TimelineItem>
          <TimelineCircleNode>
            <i className="material-icons" style={{ color: "green", fontWeight: "bold", fontSize: 18 }}>
              check
            </i>
            {/*<div><span className="material-icons md-18">email</span></div>*/}
          </TimelineCircleNode>
          <TimelineItemContent timeStamp={"Sat"} />
        </TimelineItem>

        <TimelineItem width={1}>
          <TimelineCircleNode style={{ borderColor: "green" }}>
            <i className="material-icons" style={{ color: "green", fontWeight: "bold", fontSize: 18 }}>

            </i>
            {/*<div><span className="material-icons md-18">email</span></div>*/}
          </TimelineCircleNode>
          <TimelineItemContent timeStamp={"Sun"} />
        </TimelineItem>

        <TimelineItem>
          <TimelineCircleNode stretch={true} style={{ width: "60px", fontWeight: "bold", fontSize: 22 }}>
            4
          </TimelineCircleNode>
          <TimelineItemContent>
          </TimelineItemContent>
        </TimelineItem>

      </Timeline>
      <div style={{ marginLeft: "10px", marginRight: "10px", borderTop: "1px solid #bbb" }} />


      <div style={{ margin: "7px", marginBottom: "5px", display: "flex", alignItems: "center" }}>
        <span style={{ color: "gold" }}><EmojiEvents /></span>
        <span
          style={{ marginLeft: "5px", marginBottom: "5px", fontSize: 13, color: "grey" }}>Best Streak to Date: 42</span>
      </div>
    </div>
  </div>;
};

export const StreakTimelineView = StreakTimeline.bind({});
// @ts-ignore
StreakTimelineView.args = {
  // dashed: false,
  // horizontal: true,
};



