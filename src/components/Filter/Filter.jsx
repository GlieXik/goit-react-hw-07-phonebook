import { Label, Input } from "./Filter.styled";
export const Filter = ({ value, onChange }) => {
  return (
    <>
      <Label>
        <Input
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
          placeholder="Find contacts by name"
        ></Input>
      </Label>
    </>
  );
};
