// event-tracking.js
// Tracks clicks as GoatCounter events (not pageviews) so they don't inflate visitor stats

document.addEventListener('DOMContentLoaded', function() {
    // Find all elements with data-goatcounter-click attributes
    const trackedElements = document.querySelectorAll('[data-goatcounter-click]');
    
    trackedElements.forEach(function(el) {
        el.addEventListener('click', function() {
            // Only track if goatcounter is available
            if (typeof goatcounter !== 'undefined' && goatcounter.count) {
                goatcounter.count({
                    path: el.getAttribute('data-goatcounter-click'),
                    title: el.getAttribute('data-goatcounter-title') || '',
                    referrer: el.getAttribute('data-goatcounter-referrer') || '',
                    event: true  // This is the key: marks as event, not pageview
                });
            }
        });
    });
});
