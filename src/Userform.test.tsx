import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Userform from "./Userform";

describe("./Userform", () => {
  const onAddUser = vi.fn();

  beforeEach(() => {
    cleanup();
    onAddUser.mockClear();
  });

  it("load and submits form correctly", async () => {
    render(<Userform onAddUser={onAddUser} />);

    const fullnameTextfield = screen.getByPlaceholderText("Full Name");
    const emailTextfield = screen.getByPlaceholderText("Email");
    const ageTextfield = screen.getByPlaceholderText("Age (10-99)");
    const roleTextfield = screen.getByRole("combobox");
    const submitButton = screen.getByText("ส่ง");

    fireEvent.change(fullnameTextfield, { target: { value: "pp" } });
    fireEvent.change(emailTextfield, { target: { value: "t@gmail.com" } });
    fireEvent.change(ageTextfield, { target: { value: "10" } });
    fireEvent.change(roleTextfield, { target: { value: "front-end" } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(onAddUser).toHaveBeenCalledWith({
        fullName: "pp",
        email: "t@gmail.com",
        age: 10,
        role: "front-end",
      });
    });
  });
});
