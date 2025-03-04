function unblurMessages() {
  const blurredMessages = document.querySelectorAll(
    ".c-message_kit__hidden_message_blur"
  );
  blurredMessages.forEach((message) => {
    message.classList.remove("c-message_kit__hidden_message_blur");
  });
}

function untruncateMessages() {
  const truncatedMessages = document.querySelectorAll(
    ".c-truncate, .c-truncate--break_words"
  );
  truncatedMessages.forEach((message) => {
    message.classList.remove("c-truncate");
    message.classList.remove("c-truncate--break_words");
  });
}

function removeLimitedHistoryBanner() {
  const banner = document.getElementById("limitedHistoryBanner");
  if (banner) {
    banner.style.display = "none";
  }
}

// run functions when the page loads
unblurMessages();
untruncateMessages();
removeLimitedHistoryBanner();

// observe the DOM for changes and apply functions when applicable
const observer = new MutationObserver(() => {
  unblurMessages();
  untruncateMessages();
  removeLimitedHistoryBanner();
});

observer.observe(document.body, { childList: true, subtree: true });
