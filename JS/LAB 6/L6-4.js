const sub1 = parseInt(prompt("Enter First Subject Marks:"));
const sub2 = parseInt(prompt("Enter Second Subject Marks:"));
const sub3 = parseInt(prompt("Enter Third Subject Marks:"));
const sub4 = parseInt(prompt("Enter Fourth Subject Marks:"));
const sub5 = parseInt(prompt("Enter Fifth Subject Marks:"));

const result = ((sub1+sub2+sub3+sub4+sub5)/5)*100;

if(result>90){
    document.write("Student Passed With A grade.");
}

else if(result<90 && result >80){
    document.write("Student Passed With B grade.");

}

else if(result<80 && result >70){
    document.write("Student Passed With C grade.");

}

else if(result<70 && result >60){
    document.write("Student Passed With D grade.");

}

else if(result<60 && result >40){
    document.write("Student Passed With E grade.");

}

else if(result<40){
    document.write("Student Failed.");

}