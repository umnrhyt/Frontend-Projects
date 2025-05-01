
    function openTab(event, tabName) {
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none';
    });

    // Remove the "active" class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show the current tab content and add 'active' to the clicked tab
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
}
