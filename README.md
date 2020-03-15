# showSlides
Slider implementation option for a small album

Небольшой модуль для организации показа слайдов с пагинатором на сайте одностраничнике, 
на чистом JS без использования data-атрибутов. Подойдет для показа небольшого альбома.
При инициализации скрывает все изображениям кроме первого. При нажатии правой стрелки запускается
автопрокрутка слайдов каждые 5 секунд, для остановки автопрокрутики нужно нажать стрелку влево.

## Installation

Для установки скопируйте файл в каталог с проектом, например "./static/js/"
Для подключения к проекту используйте динамический импорт, например:
```js
    import('../js/showSlides.js')
        .then(module => {
            module.showSlides();
        })
        .catch(err => {
            console.log(err.message);
        });
```

## Usage

1. Пример разметки для слайдов:
```html
  <div class="slider" id="photo">
    <div class="slider-title">Фотоальбом</div>
    <div class="wrap">
      <div class="slider-item">
        <img src="./static/img/slider_1.jpg" alt="slider">
      </div>
      ...
      <div class="prev"><div class="arrow-left"></div></div>
      <div class="next"><div class="arrow-right"></div></div>
    </div>
    <div class="slider-dots">
      <div class="dot dot-active"></div>
      <div class="dot"></div>
      ...
    </div>
</div>
```

2. В блоке `INIT CONSTANTS` измените наименование классов на наименования соответствующие
вашей разметке. 
За изменение вида активной точки пагинатора отвечает класс `dot-active`. 
При необходимости создайте стили для этого класса.

3. Для отключения возможности автопрокрутки закоментируйте вызов функции `autoShowStart();`
в обработчике события клика на кнопку `nextBtn` 

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

v. 1.0.0

## License

MIT
