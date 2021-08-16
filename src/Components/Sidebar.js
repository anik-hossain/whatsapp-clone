import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { DonutLarge, SearchOutlined } from "@material-ui/icons";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "../styles/Sidebar.css";

// Components
import SidebarContacts from "./SidebarContacts";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar />
        <div className="sidebar_header_right">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="search">
        <div className="search_container">
          <SearchOutlined />
          <input type="text" plsceholder="Search or start new conversation" />
        </div>
      </div>
      <div className="contacts">
        <SidebarContacts />
        <SidebarContacts />
        <SidebarContacts />
        <SidebarContacts />
      </div>
    </div>
  );
}

export default Sidebar;
