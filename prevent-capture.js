(function() {
  // Cmd-Shift-C, Cmd-Opt-C/I/J/U
  const testMac = event => {
    if (!event.metaKey) return false;
    if (event.shiftKey && event.code === 'KeyC') return true;
    if (!event.altKey) return false;
    return (['KeyC', 'KeyI', 'KeyJ', 'KeyU']).includes(event.code);
  };

  // F12, Ctrl-U, Ctrl-Shift-C/I/J
  const testWinLinux = event => {
    if (event.code === 'F12') return true;
    if (!event.ctrlKey) return false;
    if (event.code === 'KeyU') return true;
    if (!event.shiftKey) return false;
    return (['KeyC', 'KeyI', 'KeyJ']).includes(event.code);
  };

  window.addEventListener('keydown', event => {
    let platform;

    // Check platform (if available)
    if ('userAgentData' in navigator) {
      platform = navigator.userAgentData.platform;
    }

    if (/mac/i.test(platform)) { // If platform matches /mac/i...
      // Test only for Mac shortcuts
      if (!testMac(event)) return;
    } else if (platform) { // If platform exists but is not /mac/i...
      // Test only for Windows/Linux shortcuts
      if(!testWinLinux(event)) return;
    } else { // If the platform cannot be determined...
      // Test for Mac and Windows/Linux shortcuts
      if (!testMac(event) && !testWinLinux(event)) return;
    }

    // Stop propagation so other event listeners cannot preventDefault()
    event.stopImmediatePropagation();
  }, { capture: true })
})()
