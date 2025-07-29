import { challenges, incidents, troubleshootingSteps } from "../data/dataset";

function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function generateScenario(input: {
  technology: string;
  role: string;
  environment: string;
}) {
  return {
    input,
    scenario: {
      challenge: getRandomItem(challenges),
      incident: getRandomItem(incidents),
      troubleshooting: getRandomItem(troubleshootingSteps),
    },
  };
}
