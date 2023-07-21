import React from "react";
import "./sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import BarChartIcon from "@mui/icons-material/BarChart";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">DashBoard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarItemList active ">
                <LineStyleIcon className="sideIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarItemList">
              <TimelineIcon className="sideIcon" />
              Analytics
            </li>

            <li className="sidebarItemList">
              <TrendingUpIcon className="sideIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarItemList">
                <PersonOutlineIcon className="sideIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarItemList">
                <StorefrontIcon className="sideIcon" />
                Products
              </li>
            </Link>
            <li className="sidebarItemList">
              <CurrencyRupeeIcon className="sideIcon" />
              Transations
            </li>
            <li>
              <BarChartIcon className="sideIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarItemList">
              <MailOutlineIcon className="sideIcon" />
              Email
            </li>
            <li className="sidebarItemList">
              <DynamicFeedIcon className="sideIcon" />
              Feedback
            </li>
            <li className="sidebarItemList">
              <ChatBubbleOutlineIcon className="sideIcon" />
              Message
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarItemList">
              <WorkOutlineIcon className="sideIcon" />
              Manage
            </li>
            <li className="sidebarItemList">
              <TimelineIcon className="sideIcon" />
              Analytics
            </li>
            <li className="sidebarItemList">
              <ReportIcon className="sideIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
