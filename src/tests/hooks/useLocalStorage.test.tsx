import { useLocalStorage } from "../../hooks/useLocalStorage";
import { act, renderHook } from "@testing-library/react-hooks";
import "jest-environment-jsdom";

describe("local storage", () => {
  const initialState = { mode: "dark" };
  const { result } = renderHook(() => useLocalStorage("theme", initialState));

  it("should be an object", () => {
    expect(typeof result.current[0]).toBe("object");
  });

  it("should return the initial state", () => {
    expect(result.current[0]).toBe(initialState);
  });

  it("should update the value", () => {
    const { result } = renderHook(() => useLocalStorage("theme", initialState));
    act(() => {
      const [localStorage, setLocalStorage] = result.current;

      setLocalStorage({ mode: "light" });
    });

    expect(result.current[0]).toMatchObject({ mode: "light" });
  });
});
