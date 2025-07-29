# IT Scenario Generator API

A simple Node.js + TypeScript REST API that generates random IT-related scenarios based on user input (technology, role, and
environment). Built using **Jest for Test-Driven Development (TDD)** and powered by **Express**.

This project was built using the **TDD (Test-Driven Development)** following the green, red, refactor process to ensure clean, predictable, and well-structured code. Each part of the scenario generator (input, challenge, incident, troubleshooting) was developed with this cycle.

## Setup

```bash
git clone https://github.com/your-username/it-scenario-generator.git
cd it-scenario-generator
npm install
```

## Running the API
To run the API in your terminal directly, run this command:

```bash
npm run dev
```

And then in another terminal tab, you can use the curl method to send you inputs and get the API output in JSON format, 
here is an example for the following inputs: 
{
  "technology": "DevOps",
  "role": "Software Engineer",
  "environment": "Cloud Infrastructure"
}

```bash
curl -X POST http://localhost:3000/api/scenario \
  -H "Content-Type: application/json" \
  -d '{"technology":"DevOps","role":"Software Engineer","environment":"Cloud Infrastructure"}' | jq
```

You should get an output similar to this one:

```bash
{
  "input": {
    "technology": "DevOps",
    "role": "Software Engineer",
    "environment": "Cloud Infrastructure"
  },
  "scenario": {
    "challenge": "Service outages during deployment",
    "incident": "Firewall misconfiguration",
    "troubleshooting": "Review security group rules"
  }
}
```