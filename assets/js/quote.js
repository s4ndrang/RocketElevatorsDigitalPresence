// 0. Building Type
$(document).ready(function() { 
    $(".all").hide();
    // Building type event listener
    $("#building-type").change(function() {
        $(".all").hide();
        refreshFields();
    });
    
    $(".quote-input").on("input", function() {
        refreshFields();
    })

})

function refreshFields() {
    let bType = $("#building-type").find(':selected').text();
    if (bType == "residential") {
        $(".residential").show();
        calculRes();
    } else if (bType == "commercial") {
        $(".commercial").show();
        calculComm();
    } else if (bType == "corporate") {
        $(".corporate").show();
        calculCorp();
    } else if (bType == "hybrid") {
        $(".hybrid").show();
        calculCorp();
    }
}

function displayResults(numElevNeeded, unitPrice, totalElevPrice, installFee, finalPrice) {
    $("#elevator-amount").val(numElevNeeded);
    $("#elevator-unit-price").val(Intl.NumberFormat('en-CA', {style: 'currency', currency: 'CAD' }).format(unitPrice));
    $("#elevator-total-price").val(Intl.NumberFormat('en-CA', {style: 'currency', currency: 'CAD' }).format(totalElevPrice));
    $("#installation-fees").val(Intl.NumberFormat('en-CA', {style: 'currency', currency: 'CAD' }).format(installFee));
    $("#final-price").val(Intl.NumberFormat('en-CA', {style: 'currency', currency: 'CAD' }).format(finalPrice));
}

// RESIDENTIAL
       
            function calculRes() {
                let productType = $("input[name='pdtline']:checked").val();
                let unitPrice;
                let installationFeesMultiplier;

                if (productType == "Standard") {
                    unitPrice = 7565;
                    installationFeesMultiplier = 0.1;
                } else if(productType == "Premium") {
                    unitPrice = 12345;
                    installationFeesMultiplier = 0.13;
                } else if(productType == "Excelium") {
                    unitPrice = 15400;
                    installationFeesMultiplier = 0.16;
                }       
            
                // do calculations 
                let numApartment = parseInt($("#numApartment").val());
                let numUppLevel = parseInt($("#numUppLevel").val());

                let avgApartmentsPerFloor = numApartment / numUppLevel;
                let numElevRes = Math.ceil(avgApartmentsPerFloor / 6);
                let numColumnRes = Math.ceil(numUppLevel/20);
                let numElevNeeded = numElevRes * numColumnRes;

                let totalElevPrice = unitPrice*numElevNeeded;
                let installFee = installationFeesMultiplier*totalElevPrice;
                let finalPrice = totalElevPrice + installFee;
            
                // show results
                displayResults(numElevNeeded, unitPrice, totalElevPrice, installFee, finalPrice);
            }
// COMMERCIAL
            function calculComm() {
                let productType = $("input[name='pdtline']:checked").val();
                let unitPrice;
                let installationFeesMultiplier;
                if (productType == "Standard") {
                    unitPrice = 7565;
                    installationFeesMultiplier = 0.1;
                } else if(productType == "Premium") {
                    unitPrice = 12345;
                    installationFeesMultiplier = 0.13;
                } else if(productType == "Excelium") {
                    unitPrice = 15400;
                    installationFeesMultiplier = 0.16;
                }
            
                // do calculations 
                var numCage1 = $("#numCage").val();
                    numCage1 = parseInt(numCage1);
                numElevNeeded = numCage1;
                
                totalElevPrice = unitPrice*numCage1;
                installFee = installationFeesMultiplier*totalElevPrice;
                finalPrice = totalElevPrice + installFee;
            
                // show results
                displayResults(numElevNeeded, unitPrice, totalElevPrice, installFee, finalPrice);
            }
// CORPORATE
            function calculCorp() {
                let productType = $("input[name='pdtline']:checked").val();
                let unitPrice;
                let installationFeesMultiplier;
                if (productType == "Standard") {
                    unitPrice = 7565;
                    installationFeesMultiplier = 0.1;
                } else if(productType == "Premium") {
                    unitPrice = 12345;
                    installationFeesMultiplier = 0.13;
                } else if(productType == "Excelium") {
                    unitPrice = 15400;
                    installationFeesMultiplier = 0.16;
                }
            
                // do calculations 
                let numOccupant = parseInt($("#numOccupant").val());    
                let numUppLevel = parseInt($("#numUppLevel").val()); 
                let numBasement = parseInt($("#numBasement").val());  

                let totalNumFloors = numUppLevel + numBasement;
                let totalNumOccup = numOccupant*totalNumFloors;
                let numElev = Math.ceil(totalNumOccup/1000);
                let numColumn = Math.ceil(totalNumFloors/20);
                let numElevPerColumn = Math.ceil(numElev / numColumn);

                numElevNeeded = numElevPerColumn * numColumn;
                totalElevPrice = unitPrice*numElevNeeded;
                installFee = installationFeesMultiplier*totalElevPrice;
                finalPrice = totalElevPrice + installFee;

                // show results
                displayResults(numElevNeeded, unitPrice, totalElevPrice, installFee, finalPrice);  
            }