import React from "react";

interface SearchBarProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  targetValue: string;
}

const SearchBar = ({ onChange, targetValue }: SearchBarProps) => {
  return (
    <form>
      <label>
        Name:
        <input
          onChange={onChange}
          value={targetValue}
          placeholder="search for a title"
          type="text"
          name="name"
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export { SearchBar };
