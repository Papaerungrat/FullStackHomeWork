import { beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import DeleteList from "./DeleteList";

describe("DeleteList", () => {
  const mockDelete = vi.fn();

  const mockUsers = [
    {
      fullName: "Alice",
      email: "alice@test.com",
      age: 22,
      role: "designer",
    },
  ];

  beforeEach(() => {
    cleanup();
    mockDelete.mockClear();
  });

  it("กรณีมีผู้ใช้ → กดปุ่มลบต้องส่ง index", () => {
    render(<DeleteList users={mockUsers} onDelete={mockDelete} />);

    fireEvent.click(screen.getByText("🗑 ลบ"));

    expect(mockDelete).toHaveBeenCalledTimes(1);
    expect(mockDelete).toHaveBeenCalledWith(0);
  });

  it("กรณีไม่มีผู้ใช้ → แสดงข้อความแจ้งเตือน", () => {
    render(<DeleteList users={[]} onDelete={mockDelete} />);

    expect(screen.getByText("ยังไม่มีข้อมูลให้ลบ")).toBeDefined();
  });
});
