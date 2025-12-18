💱 Currency Exchanger (JavaScript DOM Project)

A clean, beginner-friendly currency exchanger built using vanilla JavaScript, focused on DOM manipulation, API handling, and clear separation of UI and logic.
No frameworks. No libraries. Just fundamentals done properly.

⸻
<img width="1440" height="900" alt="Screenshot 2025-12-18 at 7 16 37 PM" src="https://github.com/user-attachments/assets/4f07880d-1d50-4b41-990a-55878b447e57" />
<img width="1440" height="900" alt="Screenshot 2025-12-18 at 7 17 04 PM" src="https://github.com/user-attachments/assets/f23758e7-cf22-4d0f-8348-9a376a3eae57" />



Features
• Currency selection using dynamic dropdowns
• Country flags update automatically based on currency
• Real-time exchange rates using a public API
• Input validation for safe conversion
• Clear conversion result display
• Simple, responsive UI
• Frontend-only implementation

⸻

What This Project Demonstrates

This project was built to practice and demonstrate:
• DOM selection and manipulation
• Dynamic creation of <option> elements
• Event handling (change, click)
• Working with asynchronous JavaScript (async / await)
• Fetching and using data from an external API
• Basic input validation
• Clean separation of data, logic, and UI

Small project. Strong JavaScript fundamentals.

⸻

🛠️ Tech Stack
• HTML5 – structure
• CSS3 – layout and styling
• JavaScript (ES6) – logic, DOM control, API calls

No external libraries or frameworks used.

⸻

🌐 API Used

Currency Exchange API
https://latest.currency-api.pages.dev/v1/currencies/

• Free to use
• No API key required
• Uses lowercase currency codes

Flags API
https://flagsapi.com/{COUNTRY_CODE}/flat/64.png

• Used to display country flags dynamically

⸻

⚙️ How the App Works (DOM Logic Explained)

The entire application is controlled using JavaScript DOM manipulation.

• Currency dropdowns are populated dynamically from a countryList object
• Each dropdown listens for change events
• When a currency changes:
• The corresponding country code is retrieved
• The flag image is updated dynamically

Amount Validation
• Empty, zero, or negative values are rejected
• Default value is set to 1 to avoid invalid calculations

⸻

Currency Conversion Logic

• The selected “from” currency is used to fetch exchange data
• Exchange rates are extracted from the API response
• The selected “to” currency rate is applied
• The converted amount is calculated and rounded
• The result is displayed dynamically without reloading the page

Example output:
1 USD = 109.35 BDT

⸻

📁 Project Structure

• index.html – markup
• style.css – styling
• script.js – logic and API handling
• countryList.js – currency-to-country mapping

⸻

📌 Notes

• This project is intentionally simple
• Focus is on understanding how JavaScript works with the DOM
• Designed for learning, practice, and extension

Free to use for learning and experimentation.
