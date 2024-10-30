import React from "react";

interface IDropdownProps {
  title: string | React.JSX.Element;
  children: React.JSX.Element;
}

export const LDropdown: React.FC<IDropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div className="_dropdown">
      <div onClick={() => setIsOpen(!isOpen)} className="">
        {title}
      </div>
      {isOpen && <div className="_dropdown_wrapper">{children}</div>}
    </div>
  );
};
