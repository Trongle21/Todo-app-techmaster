import React from "react";
import FilterOption from "./TaskFilterOption";

const FilterForm = ({ onFilterValue, filterValue }) => {
  return (
    <form className="filter-task-form">
      <FilterOption
        label="Tất cả"
        value="all"
        onChange={onFilterValue}
        checked={filterValue === "all"}
      />
      <FilterOption
        label="Hoàn thành"
        value="done"
        onChange={onFilterValue}
        checked={filterValue === "done"}
      />
      <FilterOption
        label="Chưa hoàn thành"
        value="doing"
        onChange={onFilterValue}
        checked={filterValue === "doing"}
      />
    </form>
  );
};

export default FilterForm;
