// Import ExcelJS
const ExcelJS = require('exceljs');

// Create a new workbook
const workbook = new ExcelJS.Workbook();

//Start the timer
const start = new Date();

// Create a new worksheet
const worksheet = workbook.addWorksheet('My Sheet');

//Define the columns
worksheet.columns = [
    { header: 'Id', key: 'id', width: 10 },
    { header: 'Name', key: 'name', width: 32 },
    { header: 'D.O.B.', key: 'dob', width: 20, outlineLevel: 1 }
];

// Add a row with values in different columns
worksheet.addRow({id: 1, name: 'John Doe', dob: new Date(1970,1,1)});
worksheet.addRow({id: 2, name: 'Jane Doe', dob: new Date(1965,1,7)});
worksheet.addRow({id: 3, name: 'Sammy Doe', dob: new Date(2003,5,5)});
worksheet.addRow({id: 4, name: 'Sally Doe', dob: new Date(2000,5,5)});
worksheet.addRow({id: 5, name: 'Sue Doe', dob: new Date(2000,5,5)});

//Save the workbook
workbook.xlsx.writeFile('sample.xlsx')
    .then(function() {
        // done
        console.log("sample.xlsx written.");
        //Stop the timer
        const end = new Date();
        console.log("Time taken: " + (end-start) + "ms");
    });