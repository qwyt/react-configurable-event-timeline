import React from "react";

import { Timeline,TimelineCircleNode, TimelineItem, TimelineItemContent, TimelineNode } from "react-configurable-event-timeline";
import "react-configurable-event-timeline/build/index.css";



const ExampleA = () => {
  return <Timeline borderWidth={3} trailingLines={{start: true, end: true}}>
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
      <TimelineNode />
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

  </Timeline>;
};

const App = () => {
  return <div style={{ margin: "5rem" }}><ExampleA /></div>;
  // return <ExampleComponent text="Create React Library Example 😄" />
};

export default App;
