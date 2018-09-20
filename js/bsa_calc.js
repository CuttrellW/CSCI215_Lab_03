function calculate() {

    var female = document.getElementsByName("sex")[1].checked;
    var male = document.getElementsByName("sex")[0].checked;

    var weight = document.getElementsByName("weight")[0].value;
    var height = document.getElementsByName("height")[0].value;

    console.log( 'Male = ' + male );
    console.log( 'Weight = ' + weight );
    console.log( 'Height = ' + height );

    // -------------------------------
    // Conversions
    // -------------------------------
    // lbs to kg: 1 lb = 0.454 kg
    // inch to meter: 1 in = 0.0254 m
    // inch to cm: 1 in = 2.54 cm
    lbs = weight;
    inch = height;
    kg = weight*0.454;
    cm = height*2.54;
    m = cm/100;

    // ==========================================
    // Todo: Perform conversion calculations here

    // -------------------------------
    // Body Surface Area (BSA)
    // -------------------------------

    var BSA = Math.sqrt((cm*kg)/3600);

    // ==========================================
    // Todo: Perform BSA calculation here

    // -------------------------------
    // Ideal Body Weight (IBW)
    // -------------------------------



    if ( female ) {
        var IBW = 45.5+2.3*( inch - 60);
        // ==========================================
        // Todo: Perform female IBW calculation here


    } else if ( male ) {
        var IBW = 50+2.3*( inch - 60)
        // ==========================================
        // Todo: Perform male IBW calculation here

    }

    // -------------------------------
    // Body Mass Index (BMI)
    // -------------------------------

    var BMI = kg/(Math.pow(m,2));

    // ==========================================
    // Todo: Perform BMI calculation here



    // Do not modify this function call
    display( BSA, IBW, BMI );

}

// ------------------------------------
// Do not modify this function
function display( BSA, IBW, BMI ) {

    var message = 'Body Surface Area = ' + BSA.toPrecision(4) + ' m^2\nIdeal Body Weight = ' + IBW.toPrecision(4) + ' kg\nBody Mass Index = ' + BMI.toPrecision(4) + ' kg/m^2';

    document.getElementById("output").innerHTML=message;

}