//change the style to the Display button
/* remove the background when the popup is displayed */
//check the useRefs

import React, { useState, useRef, useEffect } from "react";
import Popup from "./Popup";
import Card from "./Card";
import Priority from "./Priority";
import User from "./User";
import Status from "./Status";
import "./First.css";
import axios from "axios";

function First() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const buttonRef = useRef(null);
  const [group, setGroup] = useState("Priority");
  const [order, setOrder] = useState("Priority");
  const [result, setResult] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        await axios
          .get("https://api.quicksell.co/v1/internal/frontend-assignment")
          .then((response) => {
            console.log(response.data);
            setResult(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
        alert(err);
      }
    }
    fetchData();
  }, []);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // get the data regarding the options selected by the user from the popup component and should pass to the priority component or whatever component is needed

  function setGrouping(grouping) {
    console.log(grouping);
    setGroup(grouping);
  }

  function setOrdering(ordering) {
    console.log(ordering);
    setOrder(ordering);
  }
  if(result === null){
    return <div>Loading...</div>
  }

  return (
    <div className="container">
      <div className="navbar">
        <button onClick={openPopup} ref={buttonRef}>
          Display
        </button>
        <Popup
          isOpen={isPopupOpen}
          onClose={closePopup}
          buttonRef={buttonRef}
          selectGroup={setGrouping}
          selectOrder={setOrdering}
        />
      </div>
      <div className="body">
        {/* Body Content */}
        {/* <Card/> */}
        {group === "Priority" && <Priority data={result} sort={order} />}
        {group === "User" && <User data={result} sort={order} />}
        {group === "Status" && <Status data={result} sort={order}/>}
        {/* {result.tickets.map((item) => {
          return (
            <div>
              <p>{item.title}</p>
              <p>{item.description}</p>
              <p>{item.priority}</p>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}

export default First;
