import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import React from "react";
import "../styles/Conversation.css";

function Conversation() {
  return (
    <div className="conversation">
      <div className="conversation_header">
        <Avatar />
        <div className="conversation_header_info">
          <h3>Room Name</h3>
          <p>Last seen at</p>
        </div>
        <div className="header_right">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="conversation_body">
        <p className="conversation_message">
          <span className="conversation_name">Anik</span>
          Lorem, ipsum dolor.
          <span className="conversation_time">{new Date().toUTCString()}</span>
        </p>
        <p className="conversation_message conversation_reciever">
          <span className="conversation_name">Anik</span>
          Lorem, ipsum dolor.
          <span className="conversation_time">{new Date().toUTCString()}</span>
        </p>
        <p className="conversation_message">
          <span className="conversation_name">Anik</span>
          Lorem, ipsum dolor.
          <span className="conversation_time">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="conversation_footer">
        <InsertEmoticon />
        <form>
          <input type="text" placeholder="Type a message" />
          <button type="submit">Send a message</button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Conversation;
