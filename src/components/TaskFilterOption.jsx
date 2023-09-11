import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * @typedef FilterOptionProps
 *
 * @property {string} label Nhãn của input
 * @property {string} value Giá trị của ô input
 * @property {boolean} checked Cho biết ô input có được chọn hay không
 */

/**
 * Hiển thị một checkbox để lọc danh sách
 *
 * @param {FilterOptionProps} props
 */
const FilterOption = ({ label, value, checked, onChange }) => {
  const handleChange = () => {
    onChange(value);
  };

  return (
    <label className="task-filter-option">
      <input
        type="radio"
        name="task-filter-option"
        value={value}
        onChange={handleChange}
        checked={checked}
      />
      {label}
    </label>
  );
};

FilterOption.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
};

export default FilterOption;
