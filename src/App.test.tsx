import { beforeEach, describe, expect, it } from "vitest";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App Integration", () => {
  beforeEach(() => {
    cleanup();
  });

  it("เพิ่มผู้สมัคร → ลบ → ไปถังขยะ → กู้คืนกลับมา", async () => {
    render(<App />);

    fireEvent.change(screen.getByPlaceholderText("Full Name"), {
      target: { value: "Bob" },
    });

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "bob@test.com" },
    });

    fireEvent.change(screen.getByPlaceholderText("Age (10-99)"), {
      target: { value: "30" },
    });

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "front-end" },
    });

    fireEvent.click(screen.getByText("ส่ง"));

    expect(await screen.findByText("Bob")).toBeDefined();

    fireEvent.click(screen.getByText("🗑 ลบ"));

    expect(screen.queryByText("🗑 ลบ")).toBeNull();

    const restoreButton = screen.getByRole("button", {
      name: /กู้คืน/,
    });
    
    expect(restoreButton).toBeDefined();
    expect(screen.getAllByText("Bob").length).toBe(1);

    fireEvent.click(restoreButton);
    expect(await screen.findByText("Bob")).toBeDefined();
    expect(await screen.findByText("🗑 ลบ")).toBeDefined();
  });
});
