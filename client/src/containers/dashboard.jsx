import React from "react";
import { DBLeftSection, DBRightSection } from "../components";

const dashboard = () => {
  return (
    <div className="w-screen h-screen flex items-cen bg-primary">
      <DBLeftSection />

      <DBRightSection />
    </div>
  );
};

export default dashboard;
