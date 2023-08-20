document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('availability-form');
    
    form.addEventListener('submit', function(event) {
      const startDate = new Date(document.getElementById('startDate').value);
      const endDate = new Date(document.getElementById('endDate').value);
  
      if (startDate > endDate) {
        alert('Please enter the valid date: End date should be after start date.');
        event.preventDefault(); 
      }
    });
  });
  