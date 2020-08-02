function isLeap(year) {

    var divFour = (year)%4;

    var divHundred = (year)%100;

    var divFourHundred = (year)%400;



    if (divFour === 0) {

        if (divHundred === 0) {

            if (divFourHundred === 0) {

                return "Leap year";

            }else {return "Not lead year.";}

        }else {return "Leap year.";}

    }else {return "Not lead year.";}

}
