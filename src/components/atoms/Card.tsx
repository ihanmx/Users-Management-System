import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}
const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`flex flex-col gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default Card;
