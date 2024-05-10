import React from "react";

function GenderCheckbox() {
  return (
    <div className="flex mt-1">
      <div className="form-control ">
        <label className="cursor-pointer label">
          <span className="label-text mr-1">Male</span>
          <input type="checkbox" className="checkbox checkbox-accent" />
        </label>
      </div>

      <div className="form-control ml-2 ">
        <label className="cursor-pointer label">
          <span className="label-text mr-1">Female</span>
          <input type="checkbox" className="checkbox checkbox-accent" />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckbox;
