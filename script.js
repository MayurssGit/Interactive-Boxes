 
 
 function selectRadio(div) {
    const radio = div.querySelector('input[type="radio"]');

    if (radio) {
      radio.checked = true;

      const allDivs = document.querySelectorAll('.offerCard');
      allDivs.forEach(d => d.classList.remove('active'));
      
      if (radio.checked) {
        div.classList.add('active');

        const firstUnitRadio = document.getElementById("oneUnit");
        const secUNitRadio = document.getElementById("twoUnit");
        const thirdUnitRadio = document.getElementById("threeUnit");
        const oneUnitTable = document.getElementById("oneUnitTable");
        const twoUnitTable = document.getElementById("twoUnitTable");
        const threeUnitTable = document.getElementById("threeUnitTable");
        
        if(firstUnitRadio.checked == true){

            oneUnitTable.classList.remove('d-none');
            twoUnitTable.classList.add('d-none');
            threeUnitTable.classList.add('d-none');

        } else if(secUNitRadio.checked == true){

            twoUnitTable.classList.remove('d-none');
            oneUnitTable.classList.add('d-none');
            threeUnitTable.classList.add('d-none');

        }else if(thirdUnitRadio.checked == true){

            threeUnitTable.classList.remove('d-none');
            twoUnitTable.classList.add('d-none');
            oneUnitTable.classList.add('d-none');
        }
    }
    }    
  }