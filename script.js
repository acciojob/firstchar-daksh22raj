function firstChar(text) {
  // Remove spaces from the start of the string
  let trimmed = text.trimStart();

  // If string becomes empty after trimming → return ""
  if (trimmed.length === 0) {
    return "";
  }

  // Return the first character of trimmed string
  return trimmed[0];
}

// Do not change the code below
// Uncomment the following line to show the prompt popup
// const text = prompt("Enter text:");
// alert(firstChar(text));

