function changeStyleDelayed(elementId, delayTime) {
  setTimeout(() => {
    const element = document.getElementById(elementId);
    if (element) {
      element.style.color = 'red'; // Здесь изменяем желаемый стиль элемента
      // Можно изменить любые другие свойства стиля элемента
    }
  }, delayTime);
}
changeStyleDelayed('myElement', 2000);
