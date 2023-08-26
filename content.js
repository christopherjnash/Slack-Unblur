function unblurMessages() {
  const blurredMessages = document.querySelectorAll(
    ".c-message_kit__hidden_message_blur"
  );
  blurredMessages.forEach((message) => {
    message.classList.remove("c-message_kit__hidden_message_blur");
  });
}

// run function when the page loads
unblurMessages();

// observe the DOM for changes and unblur new ones
const observer = new MutationObserver(() => unblurMessages());
observer.observe(document.body, { childList: true, subtree: true });
