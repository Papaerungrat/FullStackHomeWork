import { beforeEach, describe, expect, it } from "vitest";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import App from "./App.tsx";

describe("App", () => {
  beforeEach(() => {
    cleanup();
  });

  it("adds user and displays in list", () => {
    render(<App />);

    fireEvent.change(screen.getByRole("textbox", { name: "fullname" }), {
      target: { value: "pp" },
    });

    fireEvent.change(screen.getByRole("textbox", { name: "email" }), {
      target: { value: "t@gmail.com" },
    });

    fireEvent.change(screen.getByRole("spinbutton", { name: "age" }), {
      target: { value: "10" },
    });

    fireEvent.change(screen.getByRole("combobox", { name: "role" }), {
      target: { value: "front-end" },
    });

    fireEvent.click(screen.getByRole("button", { name: "submit" }));

    expect(screen.getByText(/pp/)).toBeDefined();
    expect(screen.getByText(/t@gmail.com/)).toBeDefined();
  });
});
