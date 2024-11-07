function SelectLang(language) {

    const foodMenu = document.querySelector('.food-menu');
    foodMenu.classList.remove('hidden');
    foodMenu.classList.add('visible');
  

    const translatableElements = document.querySelectorAll('[data-ar]');
    translatableElements.forEach((element) => {
      element.textContent = element.getAttribute(`data-${language}`);
    });
  }