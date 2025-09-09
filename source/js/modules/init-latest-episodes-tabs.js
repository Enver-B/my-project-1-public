const tabButtons = document.querySelectorAll('[data-tab]');
const tabCards = document.querySelectorAll('.latest-episodes__cards-item');

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener('click', () => {
    tabButtons.forEach((tabBtnActive) => {
      tabBtnActive.classList.remove('latest-episodes__button--active');
    });

    tabButton.classList.add('latest-episodes__button--active');

    const dataButtonValue = tabButton.dataset.tab;

    tabCards.forEach((tabCard) => {
      tabCard.classList.remove(
        'latest-episodes__cards-item--all',
        'latest-episodes__cards-item--tips-tricks',
        'latest-episodes__cards-item--gear'
      );
    });

    tabCards.forEach((tabCard) => {
      if(dataButtonValue === 'all') {
        tabCard.classList.add('latest-episodes__cards-item--all');
      } else if(dataButtonValue === 'tips-and-tricks') {
        if(tabCard.querySelector('.episod-card__mark').textContent.trim() === 'Tips & Tricks') {
          tabCard.classList.add('latest-episodes__cards-item--tips-tricks');
        }
      } else if(dataButtonValue === 'gear') {
        if(tabCard.querySelector('.episod-card__mark').textContent.trim() === 'Gear') {
          tabCard.classList.add('latest-episodes__cards-item--gear');
        }
      }
    });
  });

});
