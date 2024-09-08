document.addEventListener('DOMContentLoaded', function() {
  const callouts = document.querySelectorAll('blockquote');
  
  callouts.forEach(function(callout) {
    // Match the pattern [!type] at the beginning of the blockquote
    const firstLine = callout.innerHTML.split('\n')[0];
    const match = firstLine.match(/\[!(\w+)\]/);
    
    if (match) {
      const type = match[1].toLowerCase();  // Get the callout type, e.g., 'info', 'success'
      
      // Add callout classes for styling
      callout.classList.add('callout', `callout-${type}`);
      
      // Replace [!type] with an appropriate icon and strong text
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
          icon = ''; // Default: no icon for unrecognized callout types
      }

      // Update the inner HTML to remove the [!type] marker and add icon + bold label
      callout.innerHTML = callout.innerHTML.replace(/\[!(\w+)\]\s*/, `${icon} <strong>${match[1].toUpperCase()}:</strong> `);
    }
  });
});
