import { _MenuItem } from "@/types";
import { useState } from "react";

type MenuItemProps = {
  menuItem: _MenuItem;
};

export const MenuItem = ({ menuItem }: MenuItemProps) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div
      onMouseLeave={() => setOpenDropdown(false)}
      className={"relative z-50"}
    >
      <li
        className={"list-none text-xs cursor-pointer flex items-center"}
        onMouseEnter={() => setOpenDropdown(true)}
        onClick={() => {
          if (!menuItem.dropdown) {
            window.location.href = menuItem.href;
          }
        }}
      >
        {menuItem.label}
        {menuItem.dropdown &&
          menuItem.dropdown.length > 0 &&
          (openDropdown ? (
            <span className={"flex items-center"}>
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
      {menuItem.dropdown && menuItem.dropdown.length > 0 && openDropdown && (
        <div
          className={
            "absolute bg-white top-full left-0 rounded text-xs flex flex-col gap-2.5 shadow"
          }
        >
          {menuItem.dropdown.map((item) => {
            return (
              <div
                key={item.id}
                className={
                  "list-none hover:bg-gray-100 px-6 py-3 rounded cursor-pointer"
                }
                onClick={() => (window.location.href = item.href)}
              >
                {item.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
