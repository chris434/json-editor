import MuiSelect from "@mui/material/Select";
import SelectItem from "@mui/material/MenuItem";

type selectProps = {
  items: [string];
  setValue: Function;
  value: string;
};

export function Select({ items, setValue, value }: selectProps) {
  return (
    <MuiSelect value={value} onChange={(e) => setValue(e.target.value)}>
      {items.map((item) => {
        return <SelectItem value={item}>{item}</SelectItem>;
      })}
    </MuiSelect>
  );
}
