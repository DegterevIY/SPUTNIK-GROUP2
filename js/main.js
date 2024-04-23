// Получаем элемент с классом "cross"
var crossElement = document.querySelector('.cross');

// Проверяем, есть ли у элемента класс "cross"
if (crossElement) {
    // Добавляем обработчик события клика
    crossElement.addEventListener('click', function() {
        // Проверяем, есть ли у элемента класс "active"
        if (crossElement.classList.contains('active')) {
            // Убираем класс "active" у элемента
            crossElement.classList.remove('active');
        } else {
            // Добавляем класс "active" к элементу при клике
            crossElement.classList.add('active');
        }
    });
}