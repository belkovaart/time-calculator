// Исходные настройки (в минутах)
let times = {
  conceptBanner: {
    reused: 30,         // Переиспользованная
    standard: 60,       // Стандартная
    nonstandard: 120,   // Нестандартная
    textReplace: 10,    // Замена текста
    resize: 5           // 1 ресайз
  },
  animation: {
    reused: 10,
    standard: 30,
    nonstandard: 60,
    textReplace: 5,
    resize: 10
  },
  illustration: {
    adaptation: 30,
    object: 180,        // 3 часа = 180 мин
    character: 300,     // 5 часов = 300 мин
    storyCharacter: 480 // 8 часов = 480 мин
  },
  presentation: {
    adaptation: 15,
    template: 30,
    newStyle: 60
  },
  guideLongread: {
    adaptation: 15,
    standard: 30,
    nonstandard: 60
  }
};

// Показать экран настроек
function showSettings() {
  // Заполняем поля настроек текущими значениями
  document.getElementById('setCbReused').value         = times.conceptBanner.reused;
  document.getElementById('setCbStandard').value       = times.conceptBanner.standard;
  document.getElementById('setCbNonstandard').value    = times.conceptBanner.nonstandard;
  document.getElementById('setCbTextReplace').value    = times.conceptBanner.textReplace;
  document.getElementById('setCbResize').value         = times.conceptBanner.resize;

  document.getElementById('setAnimReused').value       = times.animation.reused;
  document.getElementById('setAnimStandard').value     = times.animation.standard;
  document.getElementById('setAnimNonstandard').value  = times.animation.nonstandard;
  document.getElementById('setAnimTextReplace').value  = times.animation.textReplace;
  document.getElementById('setAnimResize').value       = times.animation.resize;

  document.getElementById('setIllAdaptation').value     = times.illustration.adaptation;
  document.getElementById('setIllObject').value         = times.illustration.object;
  document.getElementById('setIllCharacter').value      = times.illustration.character;
  document.getElementById('setIllStoryCharacter').value = times.illustration.storyCharacter;

  document.getElementById('setPresAdaptation').value    = times.presentation.adaptation;
  document.getElementById('setPresTemplate').value      = times.presentation.template;
  document.getElementById('setPresNewStyle').value      = times.presentation.newStyle;

  document.getElementById('setGuideAdaptation').value   = times.guideLongread.adaptation;
  document.getElementById('setGuideStandard').value     = times.guideLongread.standard;
  document.getElementById('setGuideNonstandard').value  = times.guideLongread.nonstandard;

  // Переключаем видимость экранов
  document.getElementById('mainScreen').style.display     = 'none';
  document.getElementById('settingsScreen').style.display = 'block';
}

// Сохранить изменения и вернуться на главный экран
function saveSettings() {
  // Считываем новые значения
  times.conceptBanner.reused      = parseInt(document.getElementById('setCbReused').value) || 0;
  times.conceptBanner.standard    = parseInt(document.getElementById('setCbStandard').value) || 0;
  times.conceptBanner.nonstandard = parseInt(document.getElementById('setCbNonstandard').value) || 0;
  times.conceptBanner.textReplace = parseInt(document.getElementById('setCbTextReplace').value) || 0;
  times.conceptBanner.resize      = parseInt(document.getElementById('setCbResize').value) || 0;

  times.animation.reused          = parseInt(document.getElementById('setAnimReused').value) || 0;
  times.animation.standard        = parseInt(document.getElementById('setAnimStandard').value) || 0;
  times.animation.nonstandard     = parseInt(document.getElementById('setAnimNonstandard').value) || 0;
  times.animation.textReplace     = parseInt(document.getElementById('setAnimTextReplace').value) || 0;
  times.animation.resize          = parseInt(document.getElementById('setAnimResize').value) || 0;

  times.illustration.adaptation   = parseInt(document.getElementById('setIllAdaptation').value) || 0;
  times.illustration.object       = parseInt(document.getElementById('setIllObject').value) || 0;
  times.illustration.character    = parseInt(document.getElementById('setIllCharacter').value) || 0;
  times.illustration.storyCharacter = parseInt(document.getElementById('setIllStoryCharacter').value) || 0;

  times.presentation.adaptation   = parseInt(document.getElementById('setPresAdaptation').value) || 0;
  times.presentation.template     = parseInt(document.getElementById('setPresTemplate').value) || 0;
  times.presentation.newStyle     = parseInt(document.getElementById('setPresNewStyle').value) || 0;

  times.guideLongread.adaptation  = parseInt(document.getElementById('setGuideAdaptation').value) || 0;
  times.guideLongread.standard    = parseInt(document.getElementById('setGuideStandard').value) || 0;
  times.guideLongread.nonstandard = parseInt(document.getElementById('setGuideNonstandard').value) || 0;

  // Возвращаемся на главный экран
  cancelSettings();
}

// Отмена и возврат на главный экран
function cancelSettings() {
  document.getElementById('mainScreen').style.display     = 'block';
  document.getElementById('settingsScreen').style.display = 'none';
}

// Расчёт общего времени
function calculateTotalTime() {
  // Считываем введённые количества
  // Концепция баннера
  let cbReused      = parseInt(document.getElementById('cbReused').value)      || 0;
  let cbStandard    = parseInt(document.getElementById('cbStandard').value)    || 0;
  let cbNonstandard = parseInt(document.getElementById('cbNonstandard').value) || 0;
  let cbTextReplace = parseInt(document.getElementById('cbTextReplace').value) || 0;
  let cbResize      = parseInt(document.getElementById('cbResize').value)      || 0;

  // Анимация
  let animReused      = parseInt(document.getElementById('animReused').value)      || 0;
  let animStandard    = parseInt(document.getElementById('animStandard').value)    || 0;
  let animNonstandard = parseInt(document.getElementById('animNonstandard').value) || 0;
  let animTextReplace = parseInt(document.getElementById('animTextReplace').value) || 0;
  let animResize      = parseInt(document.getElementById('animResize').value)      || 0;

  // Иллюстрация
  let illAdaptation     = parseInt(document.getElementById('illAdaptation').value)     || 0;
  let illObject         = parseInt(document.getElementById('illObject').value)         || 0;
  let illCharacter      = parseInt(document.getElementById('illCharacter').value)      || 0;
  let illStoryCharacter = parseInt(document.getElementById('illStoryCharacter').value) || 0;

  // Презентация
  let presAdaptation = parseInt(document.getElementById('presAdaptation').value) || 0;
  let presTemplate   = parseInt(document.getElementById('presTemplate').value)   || 0;
  let presNewStyle   = parseInt(document.getElementById('presNewStyle').value)   || 0;

  // Гайд/лонгрид
  let guideAdaptation   = parseInt(document.getElementById('guideAdaptation').value)   || 0;
  let guideStandard     = parseInt(document.getElementById('guideStandard').value)     || 0;
  let guideNonstandard  = parseInt(document.getElementById('guideNonstandard').value)  || 0;

  // --- Концепция баннера ---
  let cbSum =
    cbReused * times.conceptBanner.reused +
    cbStandard * times.conceptBanner.standard +
    cbNonstandard * times.conceptBanner.nonstandard +
    cbTextReplace * times.conceptBanner.textReplace;

  // Сумма остальных типов баннеров
  let cbTotalBanners = cbReused + cbStandard + cbNonstandard + cbTextReplace;

  // Если ни один баннер не выбран, но введены ресайзы, считаем 1 элемент
  if (cbTotalBanners === 0 && cbResize > 0) {
    cbTotalBanners = 1;
  }
  cbSum += cbResize * cbTotalBanners * times.conceptBanner.resize;

  // --- Анимация ---
  let animSum =
    animReused * times.animation.reused +
    animStandard * times.animation.standard +
    animNonstandard * times.animation.nonstandard +
    animTextReplace * times.animation.textReplace;

  let animTotal = animReused + animStandard + animNonstandard + animTextReplace;

  // Если ни один тип анимации не выбран, но введены ресайзы, считаем 1 элемент
  if (animTotal === 0 && animResize > 0) {
    animTotal = 1;
  }
  animSum += animResize * animTotal * times.animation.resize;

  // --- Иллюстрация ---
  let illSum =
    illAdaptation * times.illustration.adaptation +
    illObject * times.illustration.object +
    illCharacter * times.illustration.character +
    illStoryCharacter * times.illustration.storyCharacter;

  // --- Презентация ---
  let presSum =
    presAdaptation * times.presentation.adaptation +
    presTemplate * times.presentation.template +
    presNewStyle * times.presentation.newStyle;

  // --- Гайд/лонгрид ---
  let guideSum =
    guideAdaptation * times.guideLongread.adaptation +
    guideStandard * times.guideLongread.standard +
    guideNonstandard * times.guideLongread.nonstandard;

  // Итоговая сумма
  let total = cbSum + animSum + illSum + presSum + guideSum;

  // Преобразование минут в дни, часы и минуты
  const minutesInDay = 6 * 60; // 360 минут в одном "рабочем дне"
  let days = Math.floor(total / minutesInDay);
  let remainder = total % minutesInDay;
  let hours = Math.floor(remainder / 60);
  let minutes = remainder % 60;

  // Вывод результата в формате "X д Y ч Z мин"
  document.getElementById('totalTime').textContent =
    "Время на задачу: " + days + " д " + hours + " ч " + minutes + " мин";
}

// Очистка всех полей
function clearAll() {
  // Обнуляем поля на главном экране
  let fields = [
    'cbReused', 'cbStandard', 'cbNonstandard', 'cbTextReplace', 'cbResize',
    'animReused', 'animStandard', 'animNonstandard', 'animTextReplace', 'animResize',
    'illAdaptation', 'illObject', 'illCharacter', 'illStoryCharacter',
    'presAdaptation', 'presTemplate', 'presNewStyle',
    'guideAdaptation', 'guideStandard', 'guideNonstandard'
  ];

  fields.forEach(id => {
    let input = document.getElementById(id);
    input.value = 0;
    input.classList.remove('selected'); // Удаляем класс для снятия выделения
  });

  document.getElementById('totalTime').textContent = "Время на задачу: 0 мин";
}

// Функция для обновления стиля поля ввода (добавляет класс "selected")
function updateInputHighlight(event) {
  if (event.target.value !== "" && event.target.value !== "0") {
    event.target.classList.add("selected");
  } else {
    event.target.classList.remove("selected");
  }
}

// Запускаем код, когда страница загрузится полностью
document.addEventListener('DOMContentLoaded', function () {
  // Для всех полей, где type="number", добавляем слушатели событий
  document.querySelectorAll('input[type="number"]').forEach(function (input) {
    input.addEventListener('input', calculateTotalTime);
    input.addEventListener('input', updateInputHighlight);
  });
});
