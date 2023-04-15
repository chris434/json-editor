import MuiSelect from "@mui/material/Select";
import SelectItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

type selectProps = {
  items: string[];
  onChange: Function;
  value: string;
  label: string;
};

export function Select({ items, onChange, value, label }: selectProps) {
  return (
    <FormControl sx={{ width: "8rem" }}>
      <InputLabel id="select">{label}</InputLabel>
      <MuiSelect
        size="small"
        labelId="select"
        label={label}
        value={value}
        onChange={(e) => onChange(e)}>
        {items.map((item) => {
          return <SelectItem value={item}>{item}</SelectItem>;
        })}
      </MuiSelect>
    </FormControl>
  );
}
