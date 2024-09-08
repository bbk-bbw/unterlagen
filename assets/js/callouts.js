document.addEventListener('DOMContentLoaded', function() {
  const callouts = document.querySelectorAll('blockquote');
  callouts.forEach(function(callout) {
    const firstLine = callout.innerHTML.split('\n')[0];
    const match = firstLine.match(/\[!(\w+)\]/);
    if (match) {
      const type = match[1].toLowerCase();
      callout.classList.add('callout', `callout-${type}`);
      callout.innerHTML = callout.innerHTML.replace(/\[!(\w+)\]\s*/, '<strong>' + match[1].toUpperCase() + ':</strong> ');
    }
  });
});
