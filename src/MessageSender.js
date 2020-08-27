import React from "react";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

import {Avatar} from "@material-ui/core";
function MessageSender() {
    const handleSubmit = e =>{
        e.preventDefault();
    }
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar
          src={"https://avatars0.githubusercontent.com/u/38498506?s=60&v=4"}
        />
        <form>
          <input
            className="messageSender__input"
            type="text"
            placeholder={"what's on your mind?"}
          />
          <input
            className="messageSender__input"
            type="text"
            placeholder={"image URL (optional)"}
          />
          <button onClick={handleSubmit} type="submit">
            Hiddedn submit button
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h4>Live Vide</h4>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h4>Photo/Video</h4>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "red" }} />
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
