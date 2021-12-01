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
import { Fastfood, FastForwardOutlined, Hotel, LaptopMac, Repeat } from "@mui/icons-material";

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
  title: "Material UI Example"
} as Meta;


// export const Empty: Story<ITimelineProps> = (args) => <Timeline {...args} />;


const MaterialUIStories: ComponentStory<typeof Timeline> = (args) => {
  return <div style={{ backgroundColor: "rgb(0, 30, 60)" }} className={"allowDarkMode"}>
    <Timeline {...args} borderWidth={2} trailingLines={true} dashed={true} responsive={true}>
      <TimelineItem>
        <TimelineItemContent left timeStamp={"9:30 AM"} />

        <TimelineCircleNode style={{ backgroundColor: "#bdbdbd", color: "white", borderColor: "rgba(0,0,0,0)" }}>
          <Fastfood />
        </TimelineCircleNode>

        <TimelineItemContent title={"Eat"}>
          Because you need strength!
        </TimelineItemContent>

      </TimelineItem>

      <TimelineItem>
        <TimelineItemContent left timeStamp={"10:00 AM"} />

        <TimelineCircleNode style={{
          backgroundColor: "rgb(144, 202, 249)",
          color: "rgba(0, 0, 0, 0.8)",
          borderColor: "rgb(144, 202, 249)"
        }}>
          <LaptopMac />
        </TimelineCircleNode>

        <TimelineItemContent title={"Code"}>
          Because it's awesome!
        </TimelineItemContent>

      </TimelineItem>
      <TimelineItem>


        <TimelineCircleNode
          style={{ backgroundColor: "rgba(0, 0, 0, 0)", color: "white", borderColor: "rgb(144, 202, 249)" }}>
          <Hotel />
        </TimelineCircleNode>

        <TimelineItemContent title={"Sleep"}>
          Because you need rest
        </TimelineItemContent>
      </TimelineItem>

      <TimelineItem>

        <TimelineItemContent left title={"Repeat"}>
          Because this is the life you love!
        </TimelineItemContent>

        <TimelineCircleNode
          style={{ backgroundColor: "rgb(206, 147, 216)", color: "rgb(0, 30, 60)", borderColor: "rgb(206, 147, 216)" }}>
          <Repeat />
        </TimelineCircleNode>
      </TimelineItem>


    </Timeline></div>;
};

export const MinimalisticTimelineView = MaterialUIStories.bind({});
// @ts-ignore
MinimalisticTimelineView.args = {
  horizontal: false
};



