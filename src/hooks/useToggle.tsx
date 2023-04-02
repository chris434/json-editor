import { useState } from "react";

export function useToggle(initialValue?: boolean) {
  const [toggle, setToggle] = useState(!initialValue ? false : initialValue);

  const toggleValue: any = () => {
    setToggle((toggle) => !toggle);
  };

  return [toggle, toggleValue];
}
