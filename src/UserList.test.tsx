import { beforeEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import UserList from "./UserList";

describe("UserList", () => {
  beforeEach(() => {
    cleanup();
  });

  it("should show empty message when no users", () => {
    render(<UserList users={[]} />);

    expect(screen.getByText("ยังไม่มีผู้สมัคร")).toBeDefined();
  });

  it("when have message", () => {
    render(<UserList users={[{
        fullName: "dsaw",
        email: "t@gmail.com",
        age: 10,
        role: "front-end",
    }]} />);
  });
});
