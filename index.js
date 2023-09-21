const author='himanshu';
const tableData = [
    ['Platform', 'Link'],
    ['Github :', 'https://www.npmjs.com/package/chalk'],
    ['LinkedIn', 'https://www.npmjs.com/package/chalk'],
    ['Instagram', 'https://www.npmjs.com/package/lauda'],
  ];
creation(tableData);
  
function creation(data) {
     console.log(`${author}`)
    // Find the maximum length of each column
    const columnLengths = data.reduce((acc, row) => {
      row.forEach((cell, index) => {
        acc[index] = Math.max(acc[index] || 0, cell.length);
      });
      return acc;
    }, []);
  
    // Create the table header
    const header = data[0].map((cell, index) => cell.padEnd(columnLengths[index]));
  
    // Create the horizontal line separator
    const separator = columnLengths.map((length) => '-'.repeat(length));
  
    // Create the table rows
    const rows = data.slice(1).map((row) =>
      row.map((cell, index) => cell.padEnd(columnLengths[index]))
    );
  
    // Combine the header, separator, and rows to form the table
    const table = [header, separator, ...rows];
  
    console.log(table.map((row) => row.join(' | ')).join('\n'));
 
         
}
module.exports = creation
