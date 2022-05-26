import React from "react";

const SectionHeader = (props) => {
  const { header } = props;
  return (
    <div className="section-header-container my-3 text-center">
      <div className="section-header">
        <h1 className="border-title aligncenter" style={{ color: "#9BCE1A" }}>
          {header}
        </h1>
      </div>
    </div>
  );
};

export default SectionHeader;
