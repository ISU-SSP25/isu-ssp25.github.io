import { fireEvent, render, screen } from "@testing-library/react";
import { LunarLinkBudget } from "./LunarLinkBudget";

jest.mock("../components", () => ({ WebsiteNavbar: () => null, Footer: () => null }));

function openCalculator() {
  render(<LunarLinkBudget />);
}

test("calculates a preset link with the supplied budget equation", () => {
  openCalculator();
  fireEvent.change(screen.getByLabelText("Frequency band"), { target: { value: "2400" } });
  fireEvent.change(screen.getByLabelText("Tx antenna type"), { target: { value: "omni" } });
  fireEvent.change(screen.getByLabelText("Tx antenna gain"), { target: { value: "4" } });
  fireEvent.change(screen.getByLabelText("Tx power"), { target: { value: "0" } });
  fireEvent.change(screen.getByLabelText("Rx antenna type"), { target: { value: "omni" } });
  fireEvent.change(screen.getByLabelText("Rx antenna gain"), { target: { value: "4" } });
  fireEvent.click(screen.getByRole("button", { name: "Calculate link margin" }));
  expect(screen.getByText("140.04 dB")).toBeInTheDocument();
  expect(screen.getByText("Positive margin of at least 10 dB")).toBeInTheDocument();
  expect(screen.getByText(/20\.65/)).toBeInTheDocument();
});

test("custom frequency accepts power and gain inputs", () => {
  openCalculator();
  fireEvent.change(screen.getByLabelText("Frequency band"), { target: { value: "custom" } });
  fireEvent.change(screen.getByLabelText("Frequency (MHz)"), { target: { value: "2400" } });
  fireEvent.change(screen.getByLabelText("Tx antenna gain (dBi)"), { target: { value: "4" } });
  fireEvent.change(screen.getByLabelText("Tx power (dBW)"), { target: { value: "0" } });
  fireEvent.change(screen.getByLabelText("Rx antenna gain (dBi)"), { target: { value: "4" } });
  fireEvent.click(screen.getByRole("button", { name: "Calculate link margin" }));
  expect(screen.getByText("140.04 dB")).toBeInTheDocument();
});
