# CV Builder

## Description

A tool designed to help manage, update, and generate professional CVs and cover letters in multiple formats (PDF, LaTeX, and HTML). The primary goal: to make it easy to update experience and skills in a centralised datastore and generate outputs that are clean, professional, and ready for use in job applications.

This project is built with **Node.js** to demonstrate problem-solving, API development, and experience with modern web technologies.

Long-term, the project aims to integrate additional features such as automated cover letter generation based on job descriptions, application tracking, and a web front-end for managing experience data easily.

## Features

- Centralised storage of experience data in JSON format.
- Output formats supported: PDF, HTML, and LaTeX.
- Dynamic generation of CVs using templating (HTML via EJS, LaTeX).
- Automated PDF generation using `pdfkit`.
- Optional LaTeX-to-PDF conversion support.
- Future plans:
  - Cover letter generation using AI (based on job descriptions).
  - Application tracking for managing job applications.
  - Web-based front-end for managing experience data.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org) (v14+ recommended)
- Git

### Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/cv-builder.git
   cd cv-builder
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   node src/index.js
   ```

4. Open your browser and visit `http://localhost:3000` to see the experience rendered as a web page.

5. To export your experience data as a PDF, visit `http://localhost:3000/export/pdf`.

6. To export your experience data as LaTeX, visit `http://localhost:

3000/export/latex`.

7. To export your LaTeX directly as a PDF (requires LaTeX installed), visit `http://localhost:3000/export/latex/pdf`.

## Managing Personal Data

By default, the repository includes an example experience data file (`experience_example.json`) to demonstrate the functionality of the application. You can create your own experience data file by following these steps:

1. Create a new `experience.json` file in the `src/data/` directory based on the structure provided in `experience_example.json`. Example:

   ```json
   [
     {
       "company": "ABC",
       "role": "Software Engineer",
       "startDate": "2006-09-01",
       "endDate": "Present",
       "details": [
         "Developed the ABC Location API using Node.js and AWS.",
         "Built and scaled the ABC Recommendations Engine using Go and ElasticSearch."
       ]
     }
   ]
   ```

2. Make sure that the `experience.json` file is excluded from version control by adding it to the `.gitignore` file. This prevents personal information from being committed to the repository.

## Updating Experience Data

Experience data is stored in a simple JSON format. To update the experience data:

1. Open the `src/data/experience_example.json` file (or your `experience.json` if you’ve created your own).
2. Modify the file by adding or updating jobs, roles, dates, and other relevant details. Example:

   ```json
   [
     {
       "company": "Example Corp",
       "role": "Software Engineer",
       "startDate": "2015-01-01",
       "endDate": "2020-01-01",
       "details": [
         "Developed APIs using Node.js and Express",
         "Worked with ElasticSearch and AWS to deploy scalable services"
       ]
     }
   ]
   ```

3. Save the file, and the updates will automatically reflect in both the HTML and PDF outputs.

## Long-Term Vision

The project is a work in progress with several planned features and enhancements, including:

- **Cover Letter Generator**: Using AI and scraping tools to automatically generate cover letters based on job descriptions.
- **Web Front-End**: A user-friendly interface built with Angular for managing and updating experience data more easily.
- **Application Tracker**: Record job applications, track application history, and maintain relevant notes and documents for future reference.
- **Additional Export Formats**: Support for Open Document Format and other export formats.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for enhancements or bug fixes.
