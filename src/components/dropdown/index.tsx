import React from "react";
import { useOutsideClick } from "../../hooks";

interface IDropdownProps {
  title: string | React.JSX.Element;
  children: React.JSX.Element;
}

export const LDropdown: React.FC<IDropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref: dropdownRef,
    handler: () => setIsOpen(false),
  });

  return (
    <div ref={dropdownRef} className="_dropdown">
      <div onClick={() => setIsOpen(!isOpen)} className="">
        {title}
      </div>
      {isOpen && (
        <div className={`_dropdown_wrapper ${isOpen ? "show" : ""}`}>
          {children}
        </div>
      )}
    </div>
  );
};
