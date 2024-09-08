document.addEventListener('DOMContentLoaded', function() {
  const callouts = document.querySelectorAll('blockquote');
  callouts.forEach(function(callout) {
    const firstLine = callout.innerHTML.split('\n')[0];
    if (firstLine.match(/\[!(\w+)\]/)) {
      const type = firstLine.match(/\[!(\w+)\]/)[1].toLowerCase();
      callout.classList.add('callout', `callout-${type}`);
      callout.innerHTML = callout.innerHTML.replace(/\[!(\w+)\]\s*/, '<strong>$1:</strong> ');
    }
  });
});
