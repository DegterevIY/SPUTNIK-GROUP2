// Получаем все элементы с классом "cross"
var crosses = document.querySelectorAll('.cross');

// Перебираем каждый элемент и добавляем обработчик события клика
crosses.forEach(function(cross) {
  cross.addEventListener('click', function() {
    // Получаем родительский элемент с классом "question_block-cont"
    var questionBlockCont = cross.closest('.question_block-cont');

    // Добавляем класс "active" к родительскому элементу
    questionBlockCont.classList.toggle('active');

    // Также переключаем класс "active" для самого крестика
    cross.classList.toggle('action');
  });
});
