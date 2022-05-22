import "semantic-ui-css/semantic.min.css";

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
import { Card, Divider, Icon, Label, SemanticCOLORS } from "semantic-ui-react";

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
  title: "SemanticUI Example"
} as Meta;


// export const Empty: Story<ITimelineProps> = (args) => <Timeline {...args} />;


const InfoCard = (props: { pointing: "left" | "right" | "above" | "below", color: SemanticCOLORS, labelColor: SemanticCOLORS | string, time: string, title: string, description: string, tags: string[] }) => {

  const { pointing, color, labelColor, time, title, description, tags } = { ...props };
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return <Card fluid raised color={color}>
    <Card.Content>

      {/*// @ts-ignore*/}
      <Label pointing={pointing} color={labelColor} attached="top" style={{ marginLeft: "0" }}>
        {time}
      </Label>
      <Card.Header>
        {title}
      </Card.Header>
      <Card.Description>
        {description}
      </Card.Description>
      <Divider />
      <Label.Group color={color}>
        {tags.map((tag, i) => (
          // @ts-ignore
          <Label key={i.toString()}>
            {tag}
          </Label>
        ))}
      </Label.Group>
    </Card.Content>
  </Card>;

};

const SemanticUIExample: ComponentStory<typeof Timeline> = (args) => {
  // @ts-ignore
  return <Timeline {...args} borderColor={"#7c7c7c"}>
    <TimelineItem>
      <TimelineCircleNode color={"#B413EC"}>
        {/*// @ts-ignore*/}
        <Icon name={"user"} size={"large"} style={{ color: "white" }} />
        {/*<div><span className="material-icons md-18">email</span></div>*/}
      </TimelineCircleNode>

      <TimelineItemContent>
        <InfoCard
          pointing={args.horizontal ? "above" :"left"}
          color={"purple"}
          labelColor={"silver"}
          time={(new Date(2021, 11, 1)).toDateString()}
          title={"User Account Created"}
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}
          tags={["New User", "Something", "Important"]} />
      </TimelineItemContent>

    </TimelineItem>

    <TimelineItem>

      <TimelineCircleNode color={"rgb(250, 181, 50)"}>
        {/*// @ts-ignore*/}
        <Icon name={"shopping basket"} size={"large"} style={{ color: "white" }} />
        {/*<div><span className="material-icons md-18">email</span></div>*/}
      </TimelineCircleNode>

      <TimelineItemContent left={true}>
        <InfoCard
          pointing={args.horizontal ? "below" :"right"}
          color={"yellow"}
          labelColor={"silver"}
          time={(new Date(2021, 11, 2)).toDateString()}
          title={"User Placed an Order"}
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}
          tags={["Order", "Placed", "Tag"]} />
      </TimelineItemContent>
    </TimelineItem>

    <TimelineItem>
      <TimelineCircleNode color={"rgb(238, 102, 42)"}>
        {/*// @ts-ignore*/}
        <Icon name={"edit outline"} size={"large"} style={{ color: "white" }} />
      </TimelineCircleNode>

      <TimelineItemContent>
        <InfoCard
          pointing={args.horizontal ? "above" :"left"}
          color={"orange"}
          labelColor={"silver"}
          time={(new Date(2021, 11, 2)).toDateString()}
          title={"Order Processed"}
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}
          tags={["Order", "Placed", "Tag"]} />
      </TimelineItemContent>
    </TimelineItem>

    <TimelineItem>
      <TimelineCircleNode color={"rgb(213, 37, 41)"}>
        {/*// @ts-ignore*/}
        <Icon name={"shipping fast"} size={"large"} style={{ color: "white" }} />
      </TimelineCircleNode>

      <TimelineItemContent left={true}>
        <InfoCard
          pointing={args.horizontal ? "below" :"right"}
          color={"red"}
          labelColor={"silver"}
          time={(new Date(2021, 12, 2)).toDateString()}
          title={"Order Shipped"}
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}
          tags={["Shipped", "Completed", "Tag"]} />
      </TimelineItemContent>
    </TimelineItem>
  </Timeline>;
};

export const SemanticUIExampleView = SemanticUIExample.bind({});
// @ts-ignore
SemanticUIExampleView.args = {
  responsive: false,
  dashed: false,
  horizontal: false,
  trailingLines: true,
  borderWidth: 2
};



