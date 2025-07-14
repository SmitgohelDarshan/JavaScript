function insert(value) {
    document.getElementById("display").value += value;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function deleteLast() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1);
  }
  
  function calculate() {
    try {
      let display = document.getElementById("display").value;
      document.getElementById("display").value = eval(display);
    } catch (error) {
      document.getElementById("display").value = "Error";
    }
  }
  
  function squareRoot() {
    let display = document.getElementById("display").value;
    let value = parseFloat(display);
    if (!isNaN(value) && value >= 0) {
      document.getElementById("display").value = Math.sqrt(value);
    } else {
      document.getElementById("display").value = "Error";
    }
  }
  
  function power() {
    let display = document.getElementById("display").value;
    let value = parseFloat(display);
    if (!isNaN(value)) {
      document.getElementById("display").value = Math.pow(value, 2);
    } else {
      document.getElementById("display").value = "Error";
    }
  }
  
  //radians
  function sin() {
    let display = document.getElementById("display").value;
    let value = parseFloat(display);
    if (!isNaN(value)) {
      document.getElementById("display").value = Math.sin(value);
    } else {
      document.getElementById("display").value = "Error";
    }
  }
  
  //radians
  function cos() {
    let display = document.getElementById("display").value;
    let value = parseFloat(display);
    if (!isNaN(value)) {
      document.getElementById("display").value = Math.cos(value);
    } else {
      document.getElementById("display").value = "Error";
    }
  }
  
  //radians
  function tan() {
    let display = document.getElementById("display").value;
    let value = parseFloat(display);
    if (!isNaN(value)) {
      // Check for undefined values (like tan(90°) or tan(π/2), which is infinite)
      let result = Math.tan(value);
      if (!isFinite(result)) {
        document.getElementById("display").value = "Error";
      } else {
        document.getElementById("display").value = result;
      }
    } else {
      document.getElementById("display").value = "Error";
    }
  }