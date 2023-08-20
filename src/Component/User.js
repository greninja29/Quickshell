import React from "react";
import Card from "./Card"; // Import the Card component
import "./Priority.css"; // Import the CSS file for your component
import Avatar from "react-avatar";

export default function User({ data, sort }) {
  const groupedData = {};

  const names = {};
  data.users.forEach((user) => {
    names[user.id] = user.name;
  });

  data.tickets.forEach((item) => {
    const p = item.userId;

    if (!groupedData[p]) {
      groupedData[p] = [];
    }

    groupedData[p].push(item);
  });
  const keys = Object.keys(groupedData);

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
        <div>
          {/* <p>{keys[0]}</p>
           */}
          <Avatar name={names[keys[0]]} size="30" round={true} />
          {names[keys[0]]}
        </div>
        {groupedData[keys[0]].map((card, index) => (
          <Card
            name = {names[card.userId]}
            group="User"
            key={index}
            card={card}
          />
        ))}
      </div>
      <div className="priority-column">
        <div>
          {/* <p>{keys[1]}</p> */}
          <Avatar name={names[keys[1]]} size="30" round={true} />
          {names[keys[1]]}
        </div>
        {groupedData[keys[1]].map((card, index) => (
          <Card
            name = {names[card.userId]}
            group="User"
            key={index}
            card={card}
          />
        ))}
      </div>
      <div className="priority-column">
        <div>
          {/* <p>{keys[2]}</p> */}
          <Avatar name={names[keys[2]]} size="30" round={true} />
          {names[keys[2]]}
        </div>
        {groupedData[keys[2]].map((card, index) => (
          <Card
            name = {names[card.userId]}
            group="User"
            key={index}
            card={card}
          />
        ))}
      </div>
      <div className="priority-column">
        <div>
          {/* <p>{keys[3]}</p> */}
          <Avatar name={names[keys[3]]} size="30" round={true} />
          {names[keys[3]]}
        </div>
        {groupedData[keys[3]].map((card, index) => (
          <Card
            name = {names[card.userId]}
            group="User"
            key={index}
            card={card}
          />
        ))}
      </div>
      <div className="priority-column">
        <div>
          {/* <p>{keys[4]}</p> */}
          <Avatar name={names[keys[4]]} size="30" round={true} />
          {names[keys[4]]}
        </div>
        {groupedData[keys[4]].map((card, index) => (
          <Card
            name = {names[card.userId]}
            group="User"
            key={index}
            card={card}
          />
        ))}
      </div>
    </div>
  );
}
