import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Userform from "./Userform";

describe("./Userform", async () => {
  const onAddUser = vi.fn();

  beforeEach(() => {
    cleanup();
  });

  it("not complete a form", () => {
    render(<Userform onAddUser={onAddUser} />);

    const fullnameTextfield = screen.getByRole("textbox", {
      name: "fullname",
    }) as HTMLInputElement;

    const emailTextfield = screen.getByRole("textbox", {
      name: "email",
    }) as HTMLInputElement;

    const ageTextfield = screen.getByRole("spinbutton", {
      name: "age",
    }) as HTMLInputElement;

    const roleTextfield = screen.getByRole("combobox", {
      name: "role",
    }) as HTMLInputElement;

    // const submitButton = screen.getByRole("button", {
    //   name: "submit",
    // }) as HTMLButtonElement;

    fireEvent.change(fullnameTextfield, { target: { value: "" } });

    fireEvent.change(emailTextfield, { target: { value: "" } });

    fireEvent.change(ageTextfield, { target: { value: "" } });

    fireEvent.change(roleTextfield, { target: { value: "" } });

    expect(
        screen.getByText("กรุณากรอกข้อมูลให้ครบทุกช่อง")
    ).toBeDefined();
  });

  it("load and displays", async () => {
    render(<Userform onAddUser={onAddUser} />);

    const fullnameTextfield = screen.getByRole("textbox", {
      name: "fullname",
    }) as HTMLInputElement;

    const emailTextfield = screen.getByRole("textbox", {
      name: "email",
    }) as HTMLInputElement;

    const ageTextfield = screen.getByRole("spinbutton", {
      name: "age",
    }) as HTMLInputElement;

    const roleTextfield = screen.getByRole("combobox", {
      name: "role",
    }) as HTMLInputElement;

    const submitButton = screen.getByRole("button", {
      name: "submit",
    }) as HTMLButtonElement;

    fireEvent.change(fullnameTextfield, { target: { value: "pp" } });

    fireEvent.change(emailTextfield, { target: { value: "t@gmail.com" } });

    fireEvent.change(ageTextfield, { target: { value: "10" } });

    fireEvent.change(roleTextfield, { target: { value: "front-end" } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(onAddUser).toBeCalledWith({
        fullName: "pp",
        email: "t@gmail.com",
        age: 10,
        role: "front-end",
      });
    });
  });
  it("load and displays", async () => {
    render(<Userform onAddUser={onAddUser} />);

    const fullnameTextfield = screen.getByRole("textbox", {
      name: "fullname",
    }) as HTMLInputElement;

    const emailTextfield = screen.getByRole("textbox", {
      name: "email",
    }) as HTMLInputElement;

    const ageTextfield = screen.getByRole("spinbutton", {
      name: "age",
    }) as HTMLInputElement;

    const roleTextfield = screen.getByRole("combobox", {
      name: "role",
    }) as HTMLInputElement;

    const submitButton = screen.getByRole("button", {
      name: "submit",
    }) as HTMLButtonElement;

    fireEvent.change(fullnameTextfield, { target: { value: "" } });

    fireEvent.change(emailTextfield, { target: { value: "" } });

    fireEvent.change(ageTextfield, { target: { value: "" } });

    fireEvent.change(roleTextfield, { target: { value: "" } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(onAddUser).toBeCalledWith({
        fullName: "",
        email: "",
        age: 0,
        role: "",
      });
    });
  });
});
