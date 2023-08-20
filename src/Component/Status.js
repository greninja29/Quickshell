import React from "react";
import Card from "./Card"; // Import the Card component
import "./Priority.css"; // Import the CSS file for your component
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';//cancel
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';//done
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';//in progress
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';//todo
import WatchLaterIcon from '@mui/icons-material/WatchLater';//backlog

export default function Status({ data, sort }) {
  const groupedData = {};

  data.tickets.forEach((item) => {
    const p = item.status;

    if (!groupedData[p]) {
      groupedData[p] = [];
    }

    groupedData[p].push(item);
  });

  const names = {};
  data.users.forEach(user=>{
    names[user.id]=user.name
  })

  const keys = Object.keys(groupedData);
  console.log(keys);

  if (sort === "Title") {
    // const keys = Object.keys(groupedData);
    for (const key of keys) {
      groupedData[key].sort((a, b) => a.title.localeCompare(b.title));
    }
  } else if (sort === "Priority") {
    // const keys = Object.keys(groupedData);
    for (const key of keys) {
      groupedData[key].sort((a, b) =>
        a.priority < b.priority ? 1 : a.priority > b.priority ? -1 : 0
      );
    }
  }

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

  return (
    <div className="priority-container">
      <div className="priority-column">
        <div>
          <p>{keys[0]}</p>
        </div>
        {groupedData[keys[0]].map((card, index) => (
          <Card
            name = {names[card.userId]}
            group="Status"
            key={index}
            card={card}
          />
        ))}
      </div>
      <div className="priority-column">
        <div>
          <p>{keys[1]}</p>
        </div>
        {groupedData[keys[1]].map((card, index) => (
          <Card
           name = {names[card.userId]}
            group="Status"
            key={index}
            card={card}
          />
        ))}
      </div>
      <div className="priority-column">
        <div>
          <p>{keys[2]}</p>
        </div>
        {groupedData[keys[2]].map((card, index) => (
          <Card
            name = {names[card.userId]}
            group="Status"
            key={index}
            card={card}
          />
        ))}
      </div>
    </div>
  );
}
