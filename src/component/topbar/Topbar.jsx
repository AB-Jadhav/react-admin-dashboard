import React from "react";
import "./Topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="left">
          <span className="logo">Imadmin</span>
        </div>
        <div className="right">
          <div className="topbarIconContiner">
            <NotificationsNoneIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconContiner">
            <LanguageIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconContiner">
            <SettingsIcon />
          </div>
          <img
            src="https://t3.ftcdn.net/jpg/03/48/55/20/360_F_348552050_uSbrANL65DNj21FbaCeswpM33mat1Wll.jpg"
            alt="Admain"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
