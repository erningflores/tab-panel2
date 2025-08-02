document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanel = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanel.forEach(panel => panel.classList.remove('visible'));

            button.classList.add('active');

            const targetId = button.getAttribute('data-tab-target');
            const targetPanel = document.getElementById(targetId);

            if(targetPanel){
                targetPanel.classList.add('visible');
            }
        });
    });
});