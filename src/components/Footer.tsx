import React from "react";

export const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
      <div className="text-center">© {year} good-katayama-family</div>
    </div>
  );
};
