import React, { useEffect, useRef, useState } from "react";
import useAppContext from "../Hooks/useAppContext";

const Submenu = () => {
  const [columns, setColumns] = useState("col-2");
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useAppContext();
  const container = useRef(null);

  useEffect(() => {
    const { center, bottom } = location;
    const submenu = container.current;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [location, location]);

  return (
    <div className={`submenu ${isSubmenuOpen && "show"}`} ref={container}>
      <h5>{page}</h5>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { url, icon, label } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
