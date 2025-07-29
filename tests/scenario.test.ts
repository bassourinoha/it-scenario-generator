import { generateScenario } from "../src/utils/generator";

const input = {
  technology: "DevOps",
  role: "Software Engineer",
  environment: "Cloud Infrastructure",
};

describe("generateScenario", () => {
  it("includes the same input in the result", () => {
    const result = generateScenario(input);
    expect(result.input).toEqual(input);
  });

  it("includes a scenario object", () => {
    const result = generateScenario(input);
    expect(result).toHaveProperty("scenario");
  });

  it("includes a challenge field in the scenario", () => {
    const result = generateScenario(input);
    expect(result.scenario).toHaveProperty("challenge");
  });

  it("includes an incident field in the scenario", () => {
    const result = generateScenario(input);
    expect(result.scenario).toHaveProperty("incident");
  });

  it("includes a troubleshooting field in the scenario", () => {
    const result = generateScenario(input);
    expect(result.scenario).toHaveProperty("troubleshooting");
  });
});
