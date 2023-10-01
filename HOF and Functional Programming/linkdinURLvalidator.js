// Regular expression pattern for valid LinkedIn profile URLs
const linkedinUrlPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

// Function to validate a LinkedIn profile URL
function validateLinkedInURL(input) {
  if (linkedinUrlPattern.test(input)) {
    console.log(`"${input}" is a valid LinkedIn profile URL.`);
  } else {
    console.log(`"${input}" is not a valid LinkedIn profile URL.`);
  }
}

// Test cases
validateLinkedInURL("https://www.linkedin.com/in/sahilnamdev");      // Valid URL
validateLinkedInURL("https://www.linkedin.com/in/sunilkoal");        // Valid URL
validateLinkedInURL("https://www.linkedin.com/in/sahil1213");  // Valid URL
validateLinkedInURL("https://www.linkedin.com/in/invalid+user");    // Not a valid URL
validateLinkedInURL("https://www.linkedin.com/in/short");           // Not a valid URL
validateLinkedInURL("https://www.linkedin.com/company/companyname"); // Not a valid URL
