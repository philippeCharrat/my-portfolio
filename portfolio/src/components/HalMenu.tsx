import React, { useState } from "react";
import halImg from "../images/hal.png";
import "../style/HalMenu.css";

interface MenuEntry {
  label: string;
  anchor: string;
}

const MENU_ENTRIES: MenuEntry[] = [
  { label: "Compétences", anchor: "skills" },
  { label: "Portfolio", anchor: "portfolio" },
  { label: "Divers", anchor: "divers" },
  { label: "Contact", anchor: "contact" },
];

function HalMenu() {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleEntryClick = (anchor: string) => {
    setOpen(false);
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="hal-menu-trigger" onClick={handleMenuClick}>
        <img src={halImg} alt="Hal" style={{ width: 80, height: 80, cursor: "pointer" }} />
      </div>
      {open && (
        <>
          <div className="hal-menu-overlay" onClick={handleClose} />
          <div className="hal-menu">
            {MENU_ENTRIES.map((entry) => (
              <button
                key={entry.anchor}
                className="hal-menu-pill"
                onClick={() => handleEntryClick(entry.anchor)}
              >
                {entry.label}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default HalMenu;
