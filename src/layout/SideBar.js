import React, { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import TableViewIcon from '@mui/icons-material/TableView';

const SideBar = () => {
  const [isCollapsed, setisCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [broken, setBroken] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
      }}
    >
      <Sidebar
        collapsed={isCollapsed}
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        onBreakPoint={setBroken}
        image="/assets/112233.jpg"
        breakPoint="md"
        style={{ height: "100%" }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <div style={{ flex: 1, marginBottom: "32px" }}>
            <Menu iconShape="square">
              {/* LOGO */}
              <MenuItem
                onClick={() => setisCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                style={{
                  margin: "10px 0 20px 0",
                }}
              >
                {!isCollapsed && (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    ml="15px"
                  >
                    <Typography>ONE LEASING</Typography>
                    <IconButton onClick={() => setisCollapsed(!isCollapsed)}>
                      <MenuOutlinedIcon />
                    </IconButton>
                  </Box>
                )}
              </MenuItem>
              {!isCollapsed && (
                <Box mb="25px">
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img
                      alt="profile-user"
                      width="100px"
                      height="100px"
                      src={`/assets/445566.jpg`}
                      style={{ cursor: "pointer", borderRadius: "50%" }}
                    />
                  </Box>
                  <Box textAlign="center">
                    <Typography sx={{ m: "10px 0 0 0" }}>CAL</Typography>
                    {/* <Typography>DEV </Typography> */}
                  </Box>
                </Box>
              )}

              <Link to="/" className="menu-bars">
                <MenuItem icon={<CottageRoundedIcon fontSize="large" />}>Home Page</MenuItem>
              </Link>

              <SubMenu className="menu-bars" icon={<LibraryBooksRoundedIcon fontSize="large" />} label="Menu"> 
                <Link to={"/Page1"} className="menu-bars">
                  <MenuItem icon={<GroupAddRoundedIcon />}>
                    {" "}
                    บันทึกประวัติลูกค้า
                  </MenuItem>
                </Link>

                <Link to={"/Table"} className="menu-bars">
                  <MenuItem icon={<TableViewIcon />}>
                    {" "}
                    ข้อมูล
                  </MenuItem>
                </Link>



                {/* <MenuItem icon={<BarChartOutlinedIcon />}>
                  {" "}
                  Line charts
                </MenuItem> */}
              </SubMenu>

              {/* <SubMenu label="Manage" icon={<PeopleOutlinedIcon />}>
                <Link to={"/admin/manage"} className="menu-bars">
                  <MenuItem>User</MenuItem>
                </Link>
                <MenuItem> Admin</MenuItem>
              </SubMenu> */}
            </Menu>

            <div
              style={{
                padding: "0 24px",
                marginBottom: "8px",
                marginTop: "32px",
              }}
            >
              <Typography
                variant="body2"
                fontWeight={600}
                style={{
                  opacity: isCollapsed ? 0 : 0.5,
                  letterSpacing: "0.5px",
                }}
              >
                Extra
              </Typography>
            </div>

            {/* <Menu>
              <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
              <MenuItem icon={<ReceiptOutlinedIcon />}>Documentation</MenuItem>
            </Menu> */}
          </div>
        </div>
      </Sidebar>
      <main>
        <div style={{ padding: "16px 2px ", color: "#44596e" }}>
          <div style={{ marginBottom: "16px" }}>
            {broken && (
              <IconButton onClick={() => setToggled(!toggled)}>
                <MenuOutlinedIcon />
              </IconButton>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
export default SideBar;