// Regular expression pattern for valid URLs
const urlPattern = /^(https?:\/\/)[\w\d.-]+\.[\w]+$/;

// Function to validate a URL
function validateURL(input) {
  if (urlPattern.test(input)) {
    console.log(`"${input}" is a valid URL.`);
  } else {
    console.log(`"${input}" is not a valid URL.`);
  }
}

validateURL("http://www.instagrame.com"); 
validateURL("https://www.whatsapp.com");   
validateURL("ftp://sonalii.com");         
validateURL("https://invalid");        
