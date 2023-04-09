import MuiSelect from "@mui/material/Select";
import SelectItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

type selectProps = {
  items: string[];
  setValue: Function;
  value: string;
  label: string;
};

export function Select({ items, setValue, value, label }: selectProps) {
  return (
    <FormControl sx={{ width: "10rem" }}>
      <InputLabel id="select">{label}</InputLabel>
      <MuiSelect
        labelId="select"
        label={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}>
        {items.map((item) => {
          return <SelectItem value={item}>{item}</SelectItem>;
        })}
      </MuiSelect>
    </FormControl>
  );
}
