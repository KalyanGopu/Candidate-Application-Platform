import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@material-ui/core";

const Filter = ({ filters, onChange, onApply }) => {
  return (
    <div>
      <FormControl>
        <InputLabel>Location</InputLabel>
        <Select
          value={filters.location}
          onChange={(e) => onChange("location", e.target.value)}
        >
          {/* Add options dynamically */}
          <MenuItem value="New York">New York</MenuItem>
          <MenuItem value="San Francisco">San Francisco</MenuItem>
          {/* Add more location options here */}
        </Select>
      </FormControl>
      {/* Add more filter options similarly */}
      <Button variant="contained" color="primary" onClick={onApply}>
        Apply Filters
      </Button>
    </div>
  );
};

// Filter.js

const Filter = ({ filters, onChange, onApply }) => {
  return (
    <div>
      <FormControl>
        <InputLabel>Location</InputLabel>
        <Select
          value={filters.location}
          onChange={(e) => onChange("location", e.target.value)}
        >
          {/* Add options dynamically */}
          <MenuItem value="New York">New York</MenuItem>
          <MenuItem value="San Francisco">San Francisco</MenuItem>
          {/* Add more location options here */}
        </Select>
      </FormControl>
      {/* Add more filter options similarly */}
      <Button variant="contained" color="primary" onClick={onApply}>
        Apply Filters
      </Button>
    </div>
  );
};

export default Filter;
