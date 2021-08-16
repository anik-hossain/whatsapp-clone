import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/SidebarContacts.css";

function SidebarContacts() {
  return (
    <div className="sidebar_contacts">
      <Avatar />
      <div className="contact_info">
        <h2>Rooma name</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
    </div>
  );
}

export default SidebarContacts;
