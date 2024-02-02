import { _MenuItem } from "@/types";
import { useState } from "react";

type MenuItemProps = {
  menuItem: _MenuItem;
};

export const MenuItem = ({ menuItem }: MenuItemProps) => {
  console.log(menuItem);
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <li
      className={"list-none text-sm cursor-pointer flex align-middle "}
      onClick={() => setOpenDropdown(!openDropdown)}
    >
      {menuItem.label}
      {menuItem.dropdown &&
        menuItem.dropdown.length > 0 &&
        (openDropdown ? (
          <span className={"flex align-middle"}>
            {
              <svg
                width="16px"
                height="16px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Arrow / Caret_Up_SM">
                  <path
                    id="Vector"
                    d="M9 13L12 10L15 13"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            }
          </span>
        ) : (
          <span>
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Arrow / Caret_Down_SM">
                <path
                  id="Vector"
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </span>
        ))}
    </li>
  );
};
