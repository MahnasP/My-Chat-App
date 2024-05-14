import React from "react";

function GenderCheckbox({ onCheckboxChange, selectedGender }) {
  return (
    <div className="flex mt-1">
      <div className="form-control ">
        <label
          className={`cursor-pointer label ${
            selectedGender === "male" ? "slected" : ""
          }`}
        >
          <span className="label-text mr-1">Male</span>
          <input type="checkbox" className="checkbox checkbox-accent" 
            checked={selectedGender === "male"}
            onChange={()=>onCheckboxChange("male")}
          />
        </label>
      </div>

      <div className="form-control ml-2 ">
        <label
          className={`cursor-pointer label ${
            selectedGender === "female" ? "slected" : ""
          }`}
        >
          <span className="label-text mr-1">Female</span>
          <input type="checkbox" className="checkbox checkbox-accent" 
            checked={selectedGender === "female"}
            onChange={()=>onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckbox;
