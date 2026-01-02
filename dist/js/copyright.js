(function() {
  const updateCopyright = function() {
    const copyrightElements = document.querySelectorAll('[data-copyright-year]');
    const currentYear = new Date().getFullYear();

    copyrightElements.forEach(function(el) {
      el.textContent = '\u00a9 ' + currentYear + ' ClearEDI Inc. All rights reserved.';
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateCopyright);
  } else {
    updateCopyright();
  }
})();
