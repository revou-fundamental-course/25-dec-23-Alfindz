function calculateArea() {
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);
  
    if (!isNaN(base) && !isNaN(height)) {
      var area = 0.5 * base * height;
      document.getElementById('result').innerHTML = 'Hasil: Luas segitiga adalah ' + area;
    } else {
      document.getElementById('result').innerHTML = 'Masukkan panjang alas dan tinggi yang valid.';
    }
  }