
  let generalTax = GetTaxValueById(documentNumber);
  let cityTax = GetTaxMunicipalById(documentNumber);
  let companyTax = GetTaxCompany(documentNumber);
  let sharedTax = GetSharedTax('1425', '2222');

  avoid.value = value;


  let liquidValue = invoice.value - sharedTax;
  invoice.value = liquidValue - generalTax - cityTax - companyTax;
  invoice.value = invoice.value - platformFixedTax;
  invoice.value = invoice.value - (invoice.value * discountPercentage);

  invoice.value = value;
  return invoice;

  // Coloque cada responsabilidade em uma função, cada calculo um função

  function calculatorTax(invoiceName, document, value, customer, date){

    let invoice = {

      name:invoiceName,
      date:date,
      number: document,
      value: 0,
      customer: customer
    }

    invoice.value = getLiquidValue(invoice.value)
    invoice.value = GetTaxDeductedValue(invoice.value)
    invoice.value = GetValueDeductedPlayformTaxes(invoide.value)
    invoice.value = GetValueDeductedByDiscount(invoice.value)
    return invoice
  }

  function getLiquidValue(value){
    let sharedTax = GetSharedTax('1425', '2222');
    return value - sharedTax
  }

  function GetTaxDeductedValue(value, document){
    let generalTax = GetTaxValueById(document);
    let cityTax = GetTaxMunicipalById(document);
    let companyTax = GetTaxCompany(document);
    return value - generalTax - cityTax - companyTax;
  }

  function GetValueDeductedPlayformTaxes(value){
    return value - platformFixedTax;
  }

  function GetValueDeductedByDiscount(value){
    return value - (value * discountPercentage)
  }