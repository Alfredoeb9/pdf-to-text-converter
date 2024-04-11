import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import axios from "axios";

// import "@testing-library/jest-dom";
// Mock jest and set the type
jest.mock("axios");
// const mockedAxios = axios as jest.Mocked<typeof axios>;

// // Provide the data object to be returned
// mockedAxios.get.mockResolvedValue({
//   data: [
//     {
//       id: 1,
//       name: "Joe Doe",
//     },
//     {
//       id: 2,
//       name: "Jane Doe",
//     },
//   ],
// });

describe("App", () => {
  const renderComponent = () => render(<App />);
  test("renders upload and extract button", () => {
    renderComponent();
    const uploadPDF = screen.getByText(/Upload and Extract/i);

    console.log("upload", uploadPDF.textContent);
    expect(uploadPDF.textContent).toContain("Upload and Extract");
  });

  test("title PDF TO TEXT CONVERTER is on screen", () => {
    renderComponent();
    const headerTitle = screen.getByText(/PDF TO TEXT CONVERTER/i);
    expect(headerTitle.textContent).toContain("PDF TO TEXT CONVERTER");
  });
});
