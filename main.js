// დავალება 1
const input = document.querySelector("#num");
const msg = document.querySelector("#msg");

input.addEventListener("keyup", (e) => {
  if (!/[0-9]/.test(e.key) && e.key.length === 1) {
    msg.textContent = "მხოლოდ ციფრები შეიყვანე!";
  } else {
    msg.textContent = "";
  }
});

// დავალება 2

  const input1 = document.querySelector("#textInput");
  const msg1 = document.querySelector("#msg1");

  input1.addEventListener("keyup", () => {
    const words = "javascript";
    if (input1.value === words) {
      msg1.textContent = "სწორია";
    } else {
      msg1.textContent = "შეიყვანე javascript";
    }
  });

//დავალება 3
  const fileInput = document.querySelector("#fileInput");
    const preview = document.querySelector("#preview");

    fileInput.addEventListener("change", () => {
      const file = fileInput.files[0]; 
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          preview.src = reader.result; 
        };
        reader.readAsDataURL(file); 
      }
    });

//დავალება 4
  const fileInput1 = document.querySelector("#fileInput");
    const info = document.querySelector("#info");

    fileInput1.addEventListener("change", () => {
      const file = fileInput1.files[0]; 
      if (file) {
        const sizeKB = Math.round(file.size / 1024);
        const type = file.type;

        info.textContent = `სურათის ზომა: ${sizeKB}KB | ტიპი: ${type}`;
      }
    });

//დავალება 5





