const express = require("express");
const app = express();
const fs = require("fs");
const ejs = require("ejs");
const PDFDocument = require("pdfkit");
const { exec } = require("child_process");

app.set("view engine", "ejs");
app.set("views", "./src/templates");

// Route for rendering the main HTML page
app.get("/", (req, res) => {
  fs.readFile("./src/data/experience.json", (err, data) => {
    if (err) throw err;
    const experience = JSON.parse(data);
    res.render("index", { experience });
  });
});

// Route for exporting experience data to PDF
app.get("/export/pdf", (req, res) => {
  fs.readFile("./src/data/experience.json", (err, data) => {
    if (err) throw err;
    const experience = JSON.parse(data);

    const doc = new PDFDocument();
    res.setHeader("Content-disposition", "attachment; filename=experience.pdf");
    res.setHeader("Content-type", "application/pdf");

    doc.fontSize(25).text("My Experience", { align: "center" });

    experience.forEach((job) => {
      doc.moveDown();
      doc.fontSize(20).text(`${job.role} at ${job.company}`);
      doc.fontSize(14).text(`From: ${job.startDate} to ${job.endDate}`);
      job.details.forEach((detail) => {
        doc.fontSize(12).text(`- ${detail}`);
      });
    });

    doc.pipe(res);
    doc.end();
  });
});

// Route for exporting experience data to LaTeX
app.get("/export/latex", (req, res) => {
  fs.readFile("./src/data/experience.json", (err, data) => {
    if (err) throw err;
    const experience = JSON.parse(data);

    ejs.renderFile(
      "./src/templates/template.tex.ejs",
      { experience },
      (err, result) => {
        if (err) throw err;
        res.setHeader(
          "Content-disposition",
          "attachment; filename=experience.tex"
        );
        res.setHeader("Content-type", "application/x-tex");
        res.send(result);
      }
    );
  });
});

// Optional: Route to compile LaTeX to PDF
app.get("/export/latex/pdf", (req, res) => {
  fs.readFile("./src/data/experience.json", (err, data) => {
    if (err) throw err;
    const experience = JSON.parse(data);

    ejs.renderFile(
      "./src/templates/template.tex.ejs",
      { experience },
      (err, result) => {
        if (err) throw err;
        fs.writeFileSync("experience.tex", result);

        exec("pdflatex experience.tex", (err) => {
          if (err) throw err;
          res.download("experience.pdf");
        });
      }
    );
  });
});

app.listen(3000, () => console.log("cv-builder server running on port 3000"));
