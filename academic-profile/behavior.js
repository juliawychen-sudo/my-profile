const copyButton = document.querySelector(".copy-email");
const email = document.querySelector(".email");
const copyStatus = document.querySelector(".copy-status");
let copyFeedbackTimer;

async function copyEmail() {
  clearTimeout(copyFeedbackTimer);
  try {
    if (!navigator.clipboard) throw new Error("Clipboard unavailable");
    await navigator.clipboard.writeText(email.textContent.trim());
    copyButton.textContent = "Copied!";
    copyStatus.textContent = "Email copied to your clipboard.";
  } catch (error) {
    copyButton.textContent = "Copy email";
    copyStatus.textContent = "Please select and copy the email address above, or use the email link.";
  }
  copyFeedbackTimer = setTimeout(function resetCopyFeedback() {
    copyButton.textContent = "Copy email";
    copyStatus.textContent = "";
  }, 2500);
}

copyButton.addEventListener("click", copyEmail);
copyButton.hidden = false;
