# Testing-K6

This project contains example automated test scripts using [k6](https://k6.io/) for the Petstore API. The folder structure is organized for easy development and maintenance.

## Folder Structure

```
Testing-K6/
│
├── tests/              # Main test scripts
│   ├── createPet-test.js
│   └── getPet-test.js
│
├── pages/              # API helper functions (e.g., petstore-api.js)
├── utils/              # Utility functions (e.g., helpers.js)
├── package.json        # npm configuration & dependencies
└── README.md           # Project documentation
```

## How to Run the Tests

1. **Install dependencies**  
   Make sure Node.js and npm are installed.  
   Run:
   ```bash
   npm install
   ```

2. **Run tests with k6**  
   Example to run a test script:
   ```bash
   k6 run tests/createPet-test.js
   k6 run tests/getPet-test.js
   ```

3. **View the report**  
   After the test completes, an HTML report will be generated (e.g., `createPet-report.html`, `getPet-report.html`).  
   Open the file in your browser to see detailed results.

## Script Explanation

- **createPet-test.js**  
  Sends a POST request to create a new pet with a random ID, then validates the response.

- **getPet-test.js**  
  Fetches pets by status (`available`, `pending`, `sold`) and validates the response.

## Customization

- Add new test scripts in the `tests/` folder for other endpoints.
- Add helpers in `pages/` or `utils/` as needed.

## Contribution

Pull requests and issues are welcome for further development.

---

**License:** ISC  
**Author:** GST
