document.addEventListener('DOMContentLoaded', function() {
  const callouts = document.querySelectorAll('blockquote');
  callouts.forEach(function(callout) {
    const firstLine = callout.innerHTML.split('\n')[0];
    const match = firstLine.match(/\[!(\w+)\]/);
    if (match) {
      const type = match[1].toLowerCase();
      callout.classList.add('callout', `callout-${type}`);

      // Choose an icon based on the callout type
      let icon;
      switch (type) {
        case 'info':
          icon = '<i class="fas fa-info-circle"></i>';
          break;
        case 'warning':
          icon = '<i class="fas fa-exclamation-triangle"></i>';
          break;
        case 'tip':
          icon = '<i class="fas fa-lightbulb"></i>';
          break;
        case 'success':
          icon = '<i class="fas fa-check-circle"></i>';
          break;
        case 'question':
          icon = '<i class="fas fa-question-circle"></i>';
          break;
        default:
          icon = ''; // No icon if type is unrecognized
      }

      // Update the callout content to include the icon
      callout.innerHTML = callout.innerHTML.replace(/\[!(\w+)\]\s*/, `${icon} <strong>${match[1].toUpperCase()}:</strong> `);
    }
  });
});
