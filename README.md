# Slack Unblur Old Messages

![slack unblur](https://github.com/user-attachments/assets/08f112e2-47ea-415d-9cdb-d3c1a8f05eb7)

**Slack Unblur Old Messages** is a Chrome extension that removes the blur effect and message truncations applied to messages older than 90 days on Slack free plan.

## Installation & Usage

For now, the extension is not available on the chrome web store, but you can install it and use it by following these instructions:

1. Clone this repo.
2. Open `chrome://extensions/` on your browser.
3. Enable "Developer Mode".
4. Click on "Load unpacked" and select the directory of this repo.
5. Open Slack in your browser, and the extension will automatically unhide the old messages.

## Note

The extension relies on the current structure and class names used by Slack to identify hidden messages (e.g., `c-message_kit__hidden_message_blur`). If Slack updates its UI, the extension might stop working.

If you encounter this issue:

1. **Report a Bug**: Open an issue in this repo, and I will update the extension.
2. **Fix it Yourself**: If you can, update the code, test it with the new UI and submit a pull request.

## Forked from [ch33kaboo's repo](https://github.com/ch33kaboo/Slack-Unblur-Old-Messages)
