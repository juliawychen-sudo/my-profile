console.log("behavior.js is running");

// Listener 1: a click writes new text into another element on the page.
const helloButton = document.querySelector(".hello-button");
const contactTitle = document.querySelector("#contact-title");
const originalTitle = contactTitle.textContent;
let greetingVisible = false;

function sayHello() {
  greetingVisible = !greetingVisible;
  contactTitle.textContent = greetingVisible ? "Hello, let's connect." : originalTitle;
  helloButton.textContent = greetingVisible ? "Reset greeting" : "Say hello";
  helloButton.setAttribute("aria-pressed", String(greetingVisible));
}

helloButton.addEventListener("click", sayHello);
helloButton.hidden = false;

// Listener 2: read the email from the page, then copy it after a real click.
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

// The final assignment requires YOUR published Typeform, not a demo form.
const typeformUrl = window.academicSiteConfig?.typeformUrl?.trim();
if (typeformUrl) {
  try {
    const formUrl = new URL(typeformUrl);
    const isTypeform = formUrl.hostname === "typeform.com" || formUrl.hostname.endsWith(".typeform.com");
    if (formUrl.protocol !== "https:" || !isTypeform || !formUrl.pathname.startsWith("/to/")) {
      throw new Error("Use a published https://...typeform.com/to/... share link.");
    }
    const iframe = document.createElement("iframe");
    iframe.src = formUrl.href;
    iframe.title = "Contact Wanyu Chen - enquiry form";
    iframe.loading = "lazy";
    document.querySelector("#typeform-embed").append(iframe);
    document.querySelector(".typeform-direct").href = formUrl.href;
    document.querySelector("#enquiry-form").hidden = false;
  } catch (error) {
    console.warn("Typeform not loaded:", error.message);
  }
}
