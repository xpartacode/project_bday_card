document.addEventListener('DOMContentLoaded', () => {
    console.log("Birthday card loaded!");
    
    const scrollIndicator = document.querySelector('.scroll-indicator');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            scrollIndicator.classList.add('hidden');
        } else {
            scrollIndicator.classList.remove('hidden');
        }
    });

    const giftBox = document.getElementById('giftBox');
    const cardModal = document.getElementById('cardModal');

    if(giftBox && cardModal) {
        giftBox.addEventListener('click', () => {
            cardModal.classList.remove('hidden');
        });

        cardModal.addEventListener('click', (e) => {
            if (e.target === cardModal) {
                cardModal.classList.add('hidden');
            }
        });
    }
});
