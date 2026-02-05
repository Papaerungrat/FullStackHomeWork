import { beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import RestoreList from "./RestoreList";

describe("RestoreList", () => {
  const mockRestore = vi.fn();

  const mockUsers = [
    {
      fullName: "Bob",
      email: "bob@test.com",
      age: 30,
      role: "front-end",
    },
  ];

  beforeEach(() => {
    cleanup();
  });

  it("กดปุ่มกู้คืนแล้วต้องเรียก onRestore", () => {
    render(
      <RestoreList users={mockUsers} onRestore={mockRestore} />
    );

    const restoreButton = screen.getByText(/กู้คืน/);

    fireEvent.click(restoreButton);

    expect(mockRestore).toHaveBeenCalledTimes(1);
    expect(mockRestore).toHaveBeenCalledWith(0);   // ✅ สำคัญมาก
  });
});
