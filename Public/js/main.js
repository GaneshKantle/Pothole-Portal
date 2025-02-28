// JavaScript functions for handling the report submission and display

document.getElementById("report-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    // Capture form data
    const location = document.getElementById("location").value;
    const severity = document.getElementById("severity").value;
    const imageUrl = document.getElementById("imageUrl").value;
    
    const reportData = { location, severity, imageUrl };

    try {
        // Post data to the backend
        const response = await fetch('http://localhost:5000/api/reports', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reportData)
        });
        
        if (response.ok) {
            alert('Pothole report submitted successfully!');
            document.getElementById("report-form").reset();
            loadReports();  // Refresh report list
        } else {
            alert('Failed to submit report.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

// Load reports from the backend and display
async function loadReports() {
    try {
        const response = await fetch('http://localhost:5000/api/reports');
        const reports = await response.json();

        const reportList = document.getElementById("report-list");
        reportList.innerHTML = reports.map(report => `
            <li><strong>Location:</strong> ${report.location} - <strong>Severity:</strong> ${report.severity}</li>
        `).join('');
    } catch (error) {
        console.error('Error fetching reports:', error);
    }
}

// Initial load
loadReports();
