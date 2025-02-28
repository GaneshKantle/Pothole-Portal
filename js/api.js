const api = {
    getReports: async () => {
        const res = await fetch('/api/reports');
        return res.json();
    },
    postReport: async (data) => {
        const res = await fetch('/api/reports', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return res.json();
    }
};
