import React from "react";
import "./Card.css";
import Avatar from "react-avatar";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined"; //cancel
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined"; //done
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined"; //in progress
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined"; //todo
import WatchLaterIcon from "@mui/icons-material/WatchLater"; //backlog

function Card(props) {
  //name, group, key, card--> object
  // console.log(props);
  console.log(props.card);
  const status_icons = {
    cancel: { CancelOutlinedIcon },
    done: { CheckCircleOutlinedIcon },
    "In progress": { PlayCircleFilledWhiteOutlinedIcon },
    Todo: { CircleOutlinedIcon },
    Backlog: { WatchLaterIcon },
  };
  // status_icons["cancel"]=CancelOutlinedIcon;
  // status_icons["done"]=CheckCircleOutlinedIcon;
  // status_icons["In progress"]= PlayCircleFilledWhiteOutlinedIcon;
  // status_icons["Todo"]=CircleOutlinedIcon;
  // status_icons["Backlog"]=WatchLaterIcon;

  return (
    <div className="card">
      <div class="row1">
        <span>{props.card.id}</span>
        <span>
          {props.group != "User" && (
            <Avatar name={props.name} size="30" round={true} />
          )}
        </span>
      </div>
      <div className="row2">
        <span>
            {props.group!="Status"&& (() => {
            switch (props.card.status) {
              case 'In progress':
                return <PlayCircleFilledWhiteOutlinedIcon/>
              case 'Todo':
                return <CircleOutlinedIcon/>
              case 'Backlog':
                return <WatchLaterIcon/>
              case 'Cancel':
                return <CancelOutlinedIcon/>
              case 'Done':
                return <CheckCircleOutlinedIcon/>  
              default:
                return null
            }
          })()}
        </span>
        <span className="card-title">{props.card.title}</span>
      </div>
      <div className="card-description">{props.card.description}</div>
      <div className="card-tag">Tag: {props.card.tag}</div>
    </div>
  );
}

export default Card;
