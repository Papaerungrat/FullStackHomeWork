import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import UserList from "./UserList";

const mockUsers = [
  {
    fullName: "Alice",
    email: "alice@test.com",
    age: 22,
    role: "designer",
  },
];

describe("UserList", () => {
  beforeEach(() => {
    cleanup();
  });

  it("แสดงรายชื่อผู้ใช้ได้", () => {
    render(<UserList users={mockUsers} onDelete={() => {}} />);

    expect(screen.getByText("Alice")).toBeDefined();
    expect(screen.getByText("alice@test.com")).toBeDefined();
  });

  it("กดปุ่มลบแล้วเรียก onDelete", () => {
    const mockDelete = vi.fn();

    render(<UserList users={mockUsers} onDelete={mockDelete} />);

    const deleteButtons = screen.getAllByText("🗑 ลบ");
    fireEvent.click(deleteButtons[0]);

    expect(mockDelete).toHaveBeenCalledTimes(1);
  });
});
