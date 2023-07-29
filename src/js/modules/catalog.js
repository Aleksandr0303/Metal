function catalog () {
    const catalogSection = document.querySelector('.catalog');

    function onScroll() {
      // Проверяем, существует ли элемент .catalog на текущей странице
      if (catalogSection) {
        const scrollY = window.scrollY;
        const translateY = -scrollY * 0.3;
      
        catalogSection.style.backgroundPositionY = `${translateY}px`;
        catalogSection.style.backgroundSize = `auto ${100 + scrollY / 10}%`;
      }
    }
    
    window.addEventListener('scroll', onScroll);
}
export default catalog;