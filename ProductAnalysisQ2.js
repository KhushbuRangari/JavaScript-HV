// Description: Write in JavaScript to print the Product Analysis. Consider a data saved in format 
// of array of products -productID, productName, productCost, unitsAvailable,
//  array [totalunitsSold, dateofSelling]
//  Write a program to display the average Selling Units for a particular week for each product. 


var products = [
    {
      productID: 1,
      productName: "Laptop",
      productCost: 1000,
      unitsAvailable: 10,
      sales: [
        { totalUnitsSold: 4, dateOfSelling: "2023-04-12" },
        { totalUnitsSold: 6, dateOfSelling: "2023-01-18" },
        { totalUnitsSold: 2, dateOfSelling: "2023-01-19" }
      ]
    },
    {
      productID: 2,
      productName: "TV",
      productCost: 1500,
      unitsAvailable: 2,
      sales: [
        { totalUnitsSold: 2, dateOfSelling: "2023-04-12" },
        { totalUnitsSold: 1, dateOfSelling: "2023-04-22" },
        { totalUnitsSold: 3, dateOfSelling: "2023-06-15" }
      ]
    }
  ];
  
  
  
function avgSellingUnits(products, weekstartDT) {
    products.map(function(product) {
      const calSales = product.sales.filter(function(sale) {
        const saleDt = new Date(sale.dateOfSelling);
        const startDT = new Date(weekstartDT);
        const endDt = new Date(startDT.getTime() + 6 * 24 * 60 * 60 * 1000); // Adding 6 days to get end date
  
        return saleDt >= startDT && saleDt <= endDt;
      });
  
      const totalUnits = calSales.reduce(function(sum, sale) {
        return sum + sale.totalUnitsSold;
      }, 0);
  
      const avgUnits = totalUnits / calSales.length;
  
      console.log(
        `Product ID: ${product.productID}, Product Name: ${product.productName}, Average units sold for week: ${weekstartDT}: ${avgUnits}`
      );
    });
  }
  
  avgSellingUnits(products, "2023-04-12");