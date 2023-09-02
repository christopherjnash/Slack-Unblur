function unblurMessages() {
  const blurredMessages = document.querySelectorAll(
    ".c-message_kit__hidden_message_blur"
  );
  blurredMessages.forEach((message) => {
    message.classList.remove("c-message_kit__hidden_message_blur");
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
removeLimitedHistoryBanner();

// observe the DOM for changes and apply functions when applicable
const observer = new MutationObserver(() => {
  unblurMessages();
  removeLimitedHistoryBanner();
});

observer.observe(document.body, { childList: true, subtree: true });
