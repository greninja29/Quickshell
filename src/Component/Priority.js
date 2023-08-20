import React from "react";
import Card from "./Card"; // Import the Card component
import "./Priority.css"; // Import the CSS file for your component
import { useEffect } from "react";
import Avatar from "react-avatar";

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';//urgent
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';//no priority
import SignalCellularAlt1BarIcon from '@mui/icons-material/SignalCellularAlt1Bar';//low
import SignalCellularAlt2BarIcon from '@mui/icons-material/SignalCellularAlt2Bar';//medium
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';//high


export default function Priority({ data,sort }) {
  // Create an empty object to store grouped data
  let groupedData = {};

  // Loop through the data array and group by userId
  // useEffect(() => {
  // }, [data]);
  console.log(sort);
  data.tickets.forEach((item) => {
    const p = item.priority;

    if (!groupedData[p]) {
      groupedData[p] = [];
    }

    groupedData[p].push(item);
  });

  const names = {};
  data.users.forEach(user=>{
    names[user.id]=user.name
  })

 if(sort==='Title'){
      
      const keys = Object.keys(groupedData);
      for (const key of keys) {
        groupedData[key].sort((a, b) => a.title.localeCompare(b.title))
      }

 }
 
  console.log(data);

  const cardsData1 = [
    { title: "Card 1", description: "Description 1", tag: "Low" },
    { title: "Card 2", description: "Description 2", tag: "Medium" },
    { title: "Card 3", description: "Description 3", tag: "High" },
    // Add more card data as needed
  ];
  const cardsData2 = [
    { title: "Card 1", description: "Description 1", tag: "Low" },
    { title: "Card 2", description: "Description 2", tag: "Medium" },
    { title: "Card 3", description: "Description 3", tag: "High" },
    // Add more card data as needed
  ];
  const cardsData3 = [
    { title: "Card 1", description: "Description 1", tag: "Low" },
    { title: "Card 2", description: "Description 2", tag: "Medium" },
    { title: "Card 3", description: "Description 3", tag: "High" },
    // Add more card data as needed
  ];
  const cardsData4 = [
    { title: "Card 1", description: "Description 1", tag: "Low" },
    { title: "Card 2", description: "Description 2", tag: "Medium" },
    { title: "Card 3", description: "Description 3", tag: "High" },
    // Add more card data as needed
  ];
  const cardsData5 = [
    { title: "Card 1", description: "Description 1", tag: "Low" },
    { title: "Card 2", description: "Description 2", tag: "Medium" },
    { title: "Card 3", description: "Description 3", tag: "High" },
    // Add more card data as needed
  ];

 

  // return (
  //   <div className="priority-container">
  //     <div className="priority-column">
  //       <div>
  //         <p>No Priority</p>
  //       </div>
  //       {cardsData1.map((card, index) => (
  //         <Card
  //           key={index}
  //           title={card.title}
  //           description={card.description}
  //           tag={card.tag}
  //         />
  //       ))}
  //     </div>
  //     <div className="priority-column">
  //       <div>
  //         <p>Low</p>
  //       </div>
  //       {cardsData2.map((card, index) => (
  //         <Card
  //           key={index}
  //           title={card.title}
  //           description={card.description}
  //           tag={card.tag}
  //         />
  //       ))}
  //     </div>
  //     <div className="priority-column">
  //       <div>
  //         <p>Medium</p>
  //       </div>
  //       {cardsData3.map((card, index) => (
  //         <Card
  //           key={index}
  //           title={card.title}
  //           description={card.description}
  //           tag={card.tag}
  //         />
  //       ))}
  //     </div>
  //     <div className="priority-column">
  //       <div>
  //         <p>High</p>
  //       </div>
  //       {cardsData4.map((card, index) => (
  //         <Card
  //           key={index}
  //           title={card.title}
  //           description={card.description}
  //           tag={card.tag}
  //         />
  //       ))}
  //     </div>
  //     <div className="priority-column">
  //       <div>
  //         <p>Urgent</p>
  //       </div>
  //       {cardsData5.map((card, index) => (
  //         <Card
  //           key={index}
  //           title={card.title}
  //           description={card.description}
  //           tag={card.tag}
  //         />
  //       ))}
  //     </div>
  //   </div>
  // );

  return (
    <div className="priority-container">
      <div className="priority-column">
        <div className="cards-header">
          <MoreHorizIcon/>
          <span>No Priority</span>
        </div>
        {groupedData[0].map((card, index) => (
          <Card
            name = {names[card.userId]}
            group="Priority"
            key={index}
            card={card}
          />
        ))}
      </div>
      <div className="priority-column">
        <div className="cards-header">
          <SignalCellularAlt1BarIcon/>
          <span>Low</span>
        </div>
        {groupedData[1].map((card, index) => (
          <Card
          name = {names[card.userId]}
            group="Priority"
            key={index}
            card={card}
          />
        ))}
      </div>
      <div className="priority-column">
        <div className="cards-header">
          <SignalCellularAlt2BarIcon/>
          <span>Medium</span>
        </div>
        {groupedData[2].map((card, index) => (
          <Card
          name = {names[card.userId]}
            group="Priority"
            key={index}
            card={card}
          />
        ))}
      </div>
      <div className="priority-column">
        <div className="cards-header">
          <SignalCellularAltIcon/>
          <span>High</span>
        </div>
        {groupedData[3].map((card, index) => (
          <Card
          name = {names[card.userId]}
            group="Priority"
            key={index}
            card={card}
          />
        ))}
      </div>
      <div className="priority-column">
        <div className="cards-header">
          <ErrorOutlineIcon/>
          <span>Urgent</span>
        </div>
        {groupedData[4].map((card, index) => (
          <Card
          name = {names[card.userId]}
            group="Priority"
            key={index}
            card={card}
          />
        ))}
      </div>
    </div>
  );
}
