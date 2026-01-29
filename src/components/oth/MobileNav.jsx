import { Drawer, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RiMenuFill, RiCloseLargeFill } from "react-icons/ri";
import { navItems } from "./oth";

function MobileNav() {
 const [isOpen, setIsOpen] = useState(false);

 const toggleDrawer = (open) => (event) => {
  if (
   event.type === "keydown" &&
   (event.key === "Tab" || event.key === "Shift")
  ) {
   return;
  }
  setIsOpen(open);
 };

 //  console.log(navItems.map(nav=> nav))
 return (
  <>
   <div className="w-full py-2 bg-gray-50">
    <div className="max-w-xl mx-auto flex md:hidden justify-center items-center gap-2 w-full px-2">
     <div className="flex-1 flex items-center justify-between px-2 py-1 rounded border tracking-tight border-gray-400">
      <input
       type="search"
       placeholder="Search for stocks or mutual funds.."
       className="w-full"
      />
      <IoSearch className="text-[#fe9447]" />
     </div>
     <div className="px-2 text-2xl">
      {!isOpen ? (
       <RiMenuFill onClick={toggleDrawer(true)} />
      ) : (
       <RiCloseLargeFill onClick={toggleDrawer(false)} />
      )}
     </div>
    </div>
   </div>
   <div>
    <Drawer
     anchor="right"
     open={isOpen}
     onClose={toggleDrawer(false)}
     PaperProps={{
      sx: {
       top: "100px",
       height: "calc(100% - 84px)",
       width: 280,
       pt: 5,
      },
     }}
    >
     {navItems.map((item, i) => (
      <ListItem key={i} disablePadding>
       <ListItemButton sx={{ px: 2, py: 0.2 }}>
        <ListItemText primary={item} />
       </ListItemButton>
      </ListItem>
     ))}
    </Drawer>
   </div>
  </>
 );
}

export default MobileNav;
