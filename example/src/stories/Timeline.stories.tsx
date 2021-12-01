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
  title: "Timeline"
} as Meta;


// export const Empty: Story<ITimelineProps> = (args) => <Timeline {...args} />;


const ExampleA: ComponentStory<typeof Timeline> = (args) => {
  return <Timeline {...args}>
    <TimelineItem>
      <TimelineCircleNode>
        <i className="material-icons">
          article
        </i>
        {/*<div><span className="material-icons md-18">email</span></div>*/}
      </TimelineCircleNode>
      <TimelineItemContent timeStamp={"2016-09-12 10:06 PM"} title={"John Doe sent a SMS"}>

      </TimelineItemContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineItemContent left>Left Text Test, Lorem Ipsum etc etc.</TimelineItemContent>

      <TimelineItemContent>I received the payment for $543. Should be shipping the item within a couple of hours. Thanks
        for the order!</TimelineItemContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineDotNode />
      <TimelineItemContent timeStamp={"2016-09-11 09:06 AM"}
                           title={" You sent an email to John Doe"}>

      </TimelineItemContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineItemContent>Subject: Any updates?

        Like we talked, you said that you would share the shipment details? This is an urgent order and so I am losing
        patience. Can you expedite the process and pls do share the details asap. Consider this a gentle reminder if you
        are on track already!

        - Maya

      </TimelineItemContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineDotNode color={"red"} />
      <TimelineItemContent>
        The End?
      </TimelineItemContent>
    </TimelineItem>

  </Timeline>;
};

export const ExampleAView = ExampleA.bind({});
// @ts-ignore
ExampleAView.args = {
  responsive: false,
  dashed: false,
  horizontal: true,
  trailingLines: true,
  borderWidth: 2
};



