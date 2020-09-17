#  Подкаст.Мобайл
## ❗ Дисклеймер
К сожалению, мой основной профиль веб-разработка а не мобилки, поэтому мое решение основано на использовании React Native. Однако я не стал пользоваться всеми хаками этой технологии (использование обычного webview + VKUI) а ручками верстал каждый компонент.

## Как запустить проект
У меня нет лицензии на сборку проектов от Apple. Но проект можно запустить через Xcode и потестировать на разных девайсах.<br />
Для этого вам нужно открыть ```ios/PodcastMobile.xcworkspace``` через Xcode. Далее, можно выбрать симулятор (я разрабатывался под iphone 11) и запустить проект.<br />После установки зависимостей и компиляции он должен запуститься.

## Что было сделано
Были сделаны все экраны что есть в Фигме.
Работа с аудио проработана очень слабо. К сожалению удобных инструментов для работы с редактированием аудио- потока в ```react-native``` пока не завезли.<br />
Также, обидно что VKUI не портирована под ```react-native``` и все компоненты надо верстать ручками.<br />
Работают переходы между экранами, есть возможность добавлять таймкоды, выбрать обложку для выпуска.