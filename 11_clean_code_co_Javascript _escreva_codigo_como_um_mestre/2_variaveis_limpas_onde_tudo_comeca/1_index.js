
let result1 = GetTaxValueById(documentNumber);
let result2 = GetTaxMunicipalById(documentNumber);
let result3 = GetTaxCompany(documentNumber);
let result4 = GetSharedTax('1425', '2222');
let results5 = nota.value - result4;

  // Variaveis precisam de contexto!
  let generalTax = GetTaxValueById(documentNumber);
  let cityTax = GetTaxMunicipalById(documentNumber);
  let companyTax = GetTaxCompany(documentNumber);
  let sharedTax = GetSharedTax('1425', '2222');
  let liquidValue = nota.value - result4;

  nota.value = result - generalTax - result2 - result3;
  nota.value = value - 3.50;
  nota.value = value - (value + 0.3);
  return nota
