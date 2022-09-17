# chrome-prevent-devtools-capture
This is a Google Chrome extension that prevents webpages from capturing and preventing the devtool [shortcuts](#shortcuts) from working.

## Why?
As an example, [a website](https://jsfiddle.net/rgphb59j/) could include the following code:

```
window.addEventListener('keydown', event => {
  event.stopImmediatePropagation();
  event.preventDefault();
  console.log('event prevented', event);
}, { capture: true });
```

Now, if that page is focused and you attempt to use any of the [shortcuts](#shortcuts) for opening the devtools, they will do nothing. Very annoying.

This extension prevents that by doing something similar. It creates a `keydown` event listener with `{ capture: true }` and listens for the right [shortcuts](#shortcuts). If it finds one, it will `stopImmediatePropagation()`, preventing other event listeners from calling `preventDefault()` and thereby allowing the [shortcuts](#shortcuts) to work as expected.

## Installation

To install the extension, open Chrome's **Settings** > **Extensions**. Then choose **Load unpacked** at the top left, and select this folder. If that option is not available, make sure you enable **Developer mode** at the top right. If you want this extension to also work in Incognito mode 👀 make sure you click **Details** and enable **Allow in Icognito**.

*I considered making this an official extension on the [Chrome Web Store](https://chrome.google.com/webstore/) but didn't feel like paying $5 for the privilege and dealing with their review process.*

## Shortcuts

This extension will attempt to detect the platform being used and only prevent the appropriate [shortcuts](#shortcuts). If the platform cannot be detected, it will prevent all of the associated [shortcuts](#shortcuts).

|Action|Mac|Windows / Linux|
|-|-|-|
|Open whatever panel you used last|Command+Option+I|F12 or Control+Shift+I|
|Open the **Console** panel|Command+Option+J|Control+Shift+J|
|Open the **Elements** panel|Command+Shift+C or Command+Option+C|Control+Shift+C|
|View Source|Command+Option+U|Control+U|

Most of these are listed on the Chrome's [keyboard shortcuts](https://developer.chrome.com/docs/devtools/shortcuts/) page.

## Is this really necessary?

No, but it's convenient. I searched around to see if there was an internal Chrome setting for this, or an existing extension that does the same thing, but I couldn't find one so I made my own. It's rather difficult to google for so I may have missed it.
