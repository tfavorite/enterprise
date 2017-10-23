(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define('cultures/ru-RU', ['jquery'], factory);
    factory();
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function () {

  if (!Locale) {
    return;
  }

  //Get Latest from http://www.unicode.org/Public/cldr/25/
  Locale.addCulture('ru-RU', {
    //layout/language
    language: 'ru',
    englishName: 'Russian (Russia)',
    nativeName: 'русский (Россия)',
    //layout/orientation/@characters
    direction: 'left-to-right',
    //ca-gregorian
    calendars: [{
      //ca-gregorian/main/dates/calendars/gregorian/dateFormats/
      dateFormat: {'separator': '.', //Infered
                   'timeSeparator': ':',
                   'short': 'dd.MM.yyyy', //use four digit year
                   'medium': 'd MMM yyyy г.',
                   'long': 'd MMMM yyyy г.',
                   'full': 'EEEE, d MMMM yyyy г.',
                   'month': 'd MMMM',
                   'year': 'MMMM yyyy',
                   'timestamp': 'H:mm:ss',
                   'datetime': 'M/d/yyyy H:mm'}, //Infered short + short gregorian/dateTimeFormats
      //ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
      days: {
         wide: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
         abbreviated: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
         narrow: ['В', 'П', 'В', 'С', 'Ч', 'П', 'С']
      },
      //ca-gregorian/main/dates/calendars/gregorian/months/format/wide
      months: {
        wide: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
        abbreviated: ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д']
      },
      //ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
      timeFormat: 'H:mm',
      //ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
      dayPeriods: ['AM', 'PM']
    }],
    //numbers/currencyFormats-numberSystem-latn/standard (Replace Sign http://www.currencysymbols.in ?)
    currencySign: 'руб', //(Replace Sign http://www.currencysymbols.in ?)
    currencyFormat: '#,##0.00 ¤',
    //numbers/symbols-numberSystem-latn
    numbers: {
      percentSign: '%',
      percentFormat: '#,##0%',
      minusSign: '-',
      decimal: ',',
      group: ' '
    },
    //Resx - Approved By Translation Team
    messages: {
      'AboutText': {id: 'AboutText', value: 'Авторские права &copy; Infor, {0}. Все права сохранены. Настоящим представленные названия и дизайн элементов являются товарными знаками либо охраняемыми товарными знаками Infor и/или аффилированных организаций и филиалов Infor. Все права сохранены. Все другие товарные знаки, перечисленные здесь, являются собственностью соответствующих владельцев'},
      'Actions': {id: 'Actions', value: 'Действия', comment: 'Tooltip text for the action button with additional in context actions'},
      'Add': {id: 'Add', value: 'Добавить', comment: 'Add'},
      'AddNewTab': {id: 'AddNewTab', value: 'Добавить новую вкладку', comment: 'Attached to a button that adds new tabs'},
      'AdvancedFilter': {id: 'AdvancedFilter', value: 'Создать расширенный фильтр', comment: 'In a data grid active an advanced filtering feature'},
      'Alert': {id: 'Alert', value: 'Оповещение', comment: 'Alert'},
      'All': {id: 'All', value: 'Все', comment: 'All items in the context of a filter'},
      'AllResults': {id: 'AllResults', value: 'Все результаты для', comment: 'Search Results Text'},
      'AligntoBottom': {id: 'AligntoBottom', value: 'Выровнять по нижнему краю', comment: 'Align to Bottom tooltip'},
      'AlignCenterHorizontally': {id: 'AlignCenterHorizontally', value: 'Горизонтальное выравнивание по центру', comment: 'Align Center Horizontally tooltip'},
      'Amber': {id: 'Amber', value: 'Янтарный', comment: 'Color in our color pallette'},
      'Amethyst': {id: 'Amethyst', value: 'Аметистовый', comment: 'Color in our color pallette'},
      'Apply': {id: 'Apply', value: 'Применить', comment: 'Text in a button to apply an action'},
      'Attach': {id: 'Attach', value: 'Вложить', comment: 'Attach'},
      'Azure': {id: 'Azure', value: 'Голубой', comment: 'Color in our color pallette'},
      'BackgroundColor': {id: 'BackgroundColor', value: 'Цвет фона', comment: 'add or edit text background color in the editor'},
      'Between': {id: 'Between', value: 'Между', comment: 'Between in icons for filtering'},
      'Blockquote': {id: 'Blockquote', value: 'Цитата', comment: 'insert a block quote in the editor'},
      'Bold': {id: 'Bold', value: 'Полужирный', comment: 'Make text Bold'},
      'Bookmarked': {id: 'Bookmarked', value: 'Добавлено в закладки', comment: 'Bookmark filled - Element is already bookmarked'},
      'BookmarkThis': {id: 'BookmarkThis', value: 'Добавить в закладки', comment: 'Bookmark an element'},
      'Breadcrumb': {id: 'Breadcrumb', value: 'Навигатор', comment: 'Text describing the Breadcrumb'},
      'BulletedList': {id: 'BulletedList', value: 'Маркированный список', comment: 'Bulleted List tooltip'},
      'Calendar': {id: 'Calendar', value: 'Календарь', comment: 'Inline Text for the title of the Calendar control'},
      'Camera': {id: 'Camera', value: 'Камера', comment: 'Camera tooltip'},
      'Cancel': {id: 'Cancel', value: 'Отменить', comment: 'Cancel tooltip'},
      'CapsLockOn': {id: 'CapsLockOn', value: 'Включена клавиша CAPS LOCK', comment: 'Caps Lock On message'},
      'Cart': {id: 'Cart', value: 'Корзина', comment: 'Cart tooltip'},
      'CenterText': {id: 'CenterText', value: 'По центру', comment: 'An Icon Tooltip'},
      'CharactersLeft': {id: 'CharactersLeft', value: 'Оставшееся количество символов: {0}', comment: 'indicator showing how many more characters you can type.'},
      'CharactersMax': {id: 'CharactersMax', value: 'Максимальное количество символов: ', comment: 'indicator showing how many max characters you can type.'},
      'ChangeSelection': {id: 'ChangeSelection', value: '. Чтобы изменить выбор, используйте клавиши со стрелками.', comment: 'Audible Text for drop down list help'},
      'Checkbox': {id: 'Checkbox', value: 'Флажок', comment: 'Checkbox tooltip'},
      'Checked': {id: 'Checked', value: 'Отмечено', comment: 'Checked tooltip'},
      'Clear': {id: 'Clear', value: 'Очистить', comment: 'Tooltip for a Clear Action'},
      'ClearFilter': {id: 'ClearFilter', value: 'Очистить фильтр', comment: 'Clear the current filter criteria'},
      'Clock': {id: 'Clock', value: 'Часы', comment: 'Clock tooltip'},
      'Close': {id: 'Close', value: 'Закрыть', comment: 'Tooltip for a Close Button Action'},
      'Copy': {id: 'Copy', value: 'Копировать', comment: 'Copy tooltip'},
      'Collapse': {id: 'Collapse', value: 'Свернуть', comment: 'Collapse / close a tree/submenu'},
      'CollapseAppTray': {id: 'CollapseAppTray', value: 'Свернуть панель приложения', comment: 'Collapse App Tray tooltip'},
      'Columns': {id: 'Columns', value: 'Столбцы', comment: 'Columns tooltip'},
      'Component': {id: 'Component', value: 'Компонент', comment: 'As in a UI component - building block.'},
      'Compose': {id: 'Compose', value: 'Создать', comment: 'Compose tooltip'},
      'Completed': {id: 'Completed', value: 'Завершено', comment: 'Text For a Completed Status'},
      'Confirm': {id: 'Confirm', value: 'Подтвердить', comment: 'Confirm tooltip'},
      'Contains': {id: 'Contains', value: 'Содержит', comment: 'Contains in icons for filtering'},
      'CssClass': {id: 'CssClass', value: 'Класс CSS', comment: 'Label for entering a Css Class name'},
      'Cut': {id: 'Cut', value: 'Вырезать', comment: 'Cut tooltip'},
      'Date': {id: 'Date', value: 'Дата', comment: 'Describes filtering by a date data type'},
      'Delete': {id: 'Delete', value: 'Удалить', comment: 'Delete Toolbar Action Tooltip'},
      'DistributeHoriz': {id: 'DistributeHoriz', value: 'Распределить по горизонтали', comment: 'Icon button tooltip for action that distributes elements across Horizontally'},
      'Document': {id: 'Document', value: 'Документ', comment: 'Document tooltip'},
      'Dirty': {id: 'Dirty', value: 'Строка изменена', comment: 'Record is dirty / modified'},
      'Drilldown': {id: 'Drilldown', value: 'Детализация', comment: 'Drill by moving page flow into a record'},
      'Drillup': {id: 'Drillup', value: 'Поднятие', comment: 'Opposite of Drilldown, move back up to a larger set of records'},
      'Dropdown': {id: 'Dropdown', value: 'Раскрывающийся список', comment: 'Dropdown'},
      'DoesNotContain': {id: 'DoesNotContain', value: 'Не содержит', comment: 'Does Not Contain in icons for filtering'},
      'DoesNotEndWith': {id: 'DoesNotEndWith', value: 'Не заканчивается на', comment: 'For condition filtering'},
      'DoesNotEqual': {id: 'DoesNotEqual', value: 'Не равняется', comment: 'Does Not Equal in icons for filtering'},
      'DoesNotStartWith': {id: 'DoesNotStartWith', value: 'Не начинается с', comment: 'For condition filtering'},
      'Down': {id: 'Down', value: 'Вниз', comment: 'Down tooltip'},
      'Download': {id: 'Download', value: 'Загрузить', comment: 'Download tooltip'},
      'Duplicate': {id: 'Duplicate', value: 'Дублировать', comment: 'Duplicate tooltip'},
      'EitherSelectedOrNotSelected': {id: 'EitherSelectedOrNotSelected', value: 'Выбранные или не выбранные', comment: 'Either Selected Or NotSelected in icons for filtering'},
      'EndsWith': {id: 'EndsWith', value: 'Заканчивается на', comment: 'for condition filtering'},
      'EnterComments': {id: 'EnterComments', value: 'Введите комментарии здесь...', comment: 'Placeholder text for a text input (comments)'},
      'Error': {id: 'Error', value: 'Ошибка', comment: 'Title, Spoken Text describing fact an error has occured'},
      'ErrorAllowedTypes': {id: 'ErrorAllowedTypes', value: 'Тип файла запрещен', comment: 'Error string for file-upload'},
      'ErrorMaxFileSize': {id: 'ErrorMaxFileSize', value: 'Превышен предельный размер файла', comment: 'Error string for file-upload'},
      'ErrorMaxFilesInProcess': {id: 'ErrorMaxFilesInProcess', value: 'Превышено максимально допустимое число файлов', comment: 'Error string for file-upload'},
      'EmailValidation': {id: 'EmailValidation', value: 'Адрес электронной почты недопустим', comment: 'This the rule for email validation'},
      'Emerald': {id: 'Emerald', value: 'Зеленый', comment: 'Color in our color pallette'},
      'Expand': {id: 'Expand', value: 'Развернуть', comment: 'Expand open a tree/submenu'},
      'ExpandAppTray': {id: 'ExpandAppTray', value: 'Развернуть панель приложения', comment: 'ExpandAppTray tooltip'},
      'ExpandCollapse': {id: 'ExpandCollapse', value: 'Развернуть / свернуть', comment: 'Text to toggle a button in a container.'},
      'ExportAsSpreadsheet': {id: 'ExportAsSpreadsheet', value: 'Экспортировать как электронную таблицу', comment: 'Export as Spreadsheet tooltip'},
      'Edit': {id: 'Edit', value: 'Редактировать', comment: 'Edit tooltip'},
      'Equals': {id: 'Equals', value: 'Равняется', comment: 'Equals in icons for filtering'},
      'ExitFullView': {id: 'ExitFullView', value: 'Выйти из полного режима', comment: 'Exit Full View tooltip'},
      'Export': {id: 'Export', value: 'Экспортировать', comment: 'Export tooltip'},
      'ExportToExcel': {id: 'ExportToExcel', value: 'Экспорт в Excel', comment: 'Export To Excel menu option in datagrid'},
      'Favorite': {id: 'Favorite', value: 'Избранное', comment: 'A favorite item'},
      'FileUpload': {id: 'FileUpload', value: 'Выгрузка файла. Нажмите клавишу ВВОД для выбора файла.', comment: 'Screen Reader instructions'},
      'Filter': {id: 'Filter', value: 'Фильтр', comment: 'Filter tooltip'},
      'FirstPage': {id: 'FirstPage', value: 'Первая страница', comment: 'First Page tooltip'},
      'Folder': {id: 'Folder', value: 'Папка', comment: 'Folder tooltip'},
      'FullView': {id: 'FullView', value: 'Полный режим', comment: 'Full View tooltip'},
      'GoForward': {id: 'GoForward', value: 'Вперед', comment: 'Move Page / object this direction'},
      'GoBack': {id: 'GoBack', value: 'Назад', comment: 'Move Page / object this directionp'},
      'GoDown': {id: 'GoDown', value: 'Вниз', comment: 'Move Page / object this directionp'},
      'GoUp': {id: 'GoUp', value: 'Вверх', comment: 'Move Page / object this direction'},
      'Graphite': {id: 'Graphite', value: 'Серый', comment: 'Color in our color pallette'},
      'GreaterOrEquals': {id: 'GreaterOrEquals', value: 'Больше чем или равняется', comment: 'Greater Than Or Equals in icons for filtering'},
      'GreaterThan': {id: 'GreaterThan', value: 'Больше чем', comment: 'Greater Than in icons for filtering'},
      'Grid': {id: 'Grid', value: 'Сетка', comment: 'Grid tooltip'},
      'Hours': {id: 'Hours', value: 'ч', comment: 'the hour portion of a time'},
      'HeadingThree': {id: 'HeadingThree', value: 'Заголовок 3', comment: 'Heading Three tooltip'},
      'HeadingFour': {id: 'HeadingFour', value: 'Заголовок 4', comment: 'Heading Four tooltip'},
      'Highest': {id: 'Highest', value: 'Максимальное значение', comment: 'Highest Four tooltip'},
      'Home': {id: 'Home', value: 'Домашняя страница', comment: 'Home tooltip'},
      'HtmlView': {id: 'HtmlView', value: 'Представление HTML', comment: 'Html View tooltip'},
      'Image': {id: 'Image', value: 'Изображение', comment: 'Image of something'},
      'Import': {id: 'Import', value: 'Импортировать', comment: 'Import tooltip'},
      'Info': {id: 'Info', value: 'Информация', comment: 'Info tooltip'},
      'InProgress': {id: 'In Progress', value: 'Выполняется', comment: 'Info tooltip that an action is in progress'},
      'Insert': {id: 'Insert', value: 'Вставить', comment: 'Insert Modal Dialog Button'},
      'InsertAnchor': {id: 'InsertAnchor', value: 'Вставить привязку', comment: 'Insert Acnhor (link) in an editor'},
      'InsertImage': {id: 'InsertImage', value: 'Вставить изображение', comment: 'Insert Image in an editor'},
      'InsertLink': {id: 'InsertLink', value: 'Вставить ссылку', comment: 'Insert Link in an editor'},
      'InsertUrl': {id: 'InsertUrl', value: 'Вставить URL-адрес', comment: 'Insert a Url in an editor'},
      'Italic': {id: 'Italic', value: 'Курсив', comment: 'Make Text Italic'},
      'InvalidDate': {id: 'InvalidDate', value: 'Недопустимая дата', comment: 'validation message for wrong date format (short)'},
      'InvalidTime': {id: 'InvalidTime', value: 'Недопустимое время', comment: 'validation message for wrong time format'},
      'Inventory': {id: 'Inventory', value: 'Запасы', comment: 'Icon button tooltop for Inventory Action'},
      'IsEmpty': {id: 'IsEmpty', value: 'Пусто', comment: 'Is Empty in icons for filtering'},
      'IsNotEmpty': {id: 'IsNotEmpty', value: 'Не пусто', comment: 'Is Not Empty in icons for filtering'},
      'ItemsSelected': {id: 'ItemsSelected', value: 'Выбранные элементы', comment: 'Num of Items selected for swaplist'},
      'JustifyCenter': {id: 'JustifyCenter', value: 'По центру', comment: 'justify text to center in the editor'},
      'JustifyLeft': {id: 'JustifyLeft', value: 'Выровнять по левому краю', comment: 'justify text to left in the editor'},
      'JustifyRight': {id: 'JustifyRight', value: 'Выровнять по правому краю', comment: 'justify text to right in the editor'},
      'Keyword': {id: 'Keyword', value: 'Ключевое слово', comment: 'Describes filtering by a keyword search'},
      'Launch': {id: 'Launch', value: 'Запуск', comment: 'Launch'},
      'LastPage': {id: 'LastPage', value: 'Последняя страница', comment: 'Last Page tooltip'},
      'Left': {id: 'Left', value: 'Влево', comment: 'Left tooltip'},
      'LessOrEquals': {id: 'LessOrEquals', value: 'Меньше чем или равняется', comment: 'Less Than Or Equals in icons for filtering'},
      'LessThan': {id: 'LessThan', value: 'Меньше чем', comment: 'Less Than in icons for filtering'},
      'Link': {id: 'Link', value: 'Ссылка', comment: 'Link - as in hyperlink - icon tooltop'},
      'Load': {id: 'Load', value: 'Загрузить', comment: 'Load icon tooltip'},
      'Loading': {id: 'Loading', value: 'Загрузка', comment: 'Text below spinning indicator to indicate loading'},
      'Locked': {id: 'Locked', value: 'Заблокировано', comment: 'Locked tooltip'},
      'Logout': {id: 'Logout', value: 'Выйти из системы', comment: 'Log out of the application'},
      'Lookup': {id: 'Lookup', value: 'Поиск', comment: 'Lookup - As in looking up a record or value'},
      'Lowest': {id: 'Lowest', value: 'Минимальное значение', comment: 'Lowest - As in Lowest value'},
      'Mail': {id: 'Mail', value: 'Электронная почта', comment: 'Mail tooltip'},
      'MapPin': {id: 'MapPin', value: 'Отметить', comment: 'Map Pin tooltip'},
      'Maximize': {id: 'Maximize', value: 'Развернуть', comment: 'Maximize a screen or dialog in the UI'},
      'Median': {id: 'Median', value: 'Медиана', comment: 'Median in Mathematics'},
      'Medium': {id: 'Medium', value: 'Средняя', comment: 'Describes a Medium sized Row Height in a grid/list'},
      'Menu': {id: 'Menu', value: 'Меню', comment: 'Menu tooltip'},
      'MingleShare': {id: 'MingleShare', value: 'Предоставлять общий доступ в Ming.le', comment: 'Share the contextual object/action in the mingle system'},
      'Minutes': {id: 'Minutes', value: 'мин.', comment: 'the minutes portion of a time'},
      'Minimize': {id: 'Minimize', value: 'Свернуть', comment: 'Minimize tooltip'},
      'Minus': {id: 'Minus', value: 'Минус', comment: 'Minus tooltip'},
      'Mobile': {id: 'Mobile', value: 'Мобильный', comment: 'Indicates a mobile device (phone tablet ect)'},
      'More': {id: 'More', value: 'Дополнительно...', comment: 'Text Indicating More Buttons or form content'},
      'MoreActions': {id: 'MoreActions', value: 'Дополнительные действия', comment: 'Text on the More Actions button indictating hidden functions'},
      'MsgDirty': {id: 'MsgDirty', value: 'изменено', comment: 'for modified form fields'},
      'NewDocument': {id: 'NewDocument', value: 'Создать документ', comment: 'New Document tooltip'},
      'NewItem': {id: 'NewItem', value: 'Новый элемент', comment: 'New item in listbuilder'},
      'Next': {id: 'Next', value: 'Далее', comment: 'Next in icons tooltip'},
      'NextPage': {id: 'NextPage', value: 'Следующая страница', comment: 'Next on Pager'},
      'NextMonth': {id: 'NextMonth', value: 'Следующий месяц', comment: 'the label for the button that moves calendar to next/prev'},
      'No': {id: 'No', value: 'Нет', comment: 'On a dialog button'},
      'NoResults': {id: 'NoResults', value: 'Результатов не найдено', comment: 'Search Results Text'},
      'Normal': {id: 'Normal', value: 'Обычная', comment: 'Normal row height'},
      'Notes': {id: 'Notes', value: 'Примечания', comment: 'Notes icon tooltip'},
      'NotSelected': {id: 'NotSelected', value: 'Не выбрано', comment: 'Not Selected in icons for filtering'},
      'NumberList': {id: 'NumberList', value: 'Нумерованный список', comment: 'Number List tooltip'},
      'OpenBackClose': {id: 'OpenBackClose', value: 'Открыть / назад / закрыть', comment: 'Open / Back / Close tooltip'},
      'OpenClose': {id: 'OpenClose', value: 'Открыть / закрыть', comment: 'Open / Close tooltip'},
      'OrderedList': {id: 'OrderedList', value: 'Вставить/удалить нумерованный список', comment: 'Insert an Ordered list in the editor'},
      'Page': {id: 'Page', value: 'страница ', comment: 'Text on the pager links'},
      'PageOf': {id: 'PageOf', value: 'Страница {0} из {1}', comment: 'Pager Text Showing current and number of pages'},
      'PageOn': {id: 'PageOn', value: 'Текущая страница: ', comment: 'Text on the pager links'},
      'Paste': {id: 'Paste', value: 'Вставить', comment: 'Paste icon tooltip'},
      'PasswordValidation': {id: 'PasswordValidation', value: '<strong>Пароль должен соответствовать следующим требованиям:</strong><br>Состоять не менее чем из 10 символов<br>Содержать по крайней мере одну прописную букву<br>Содержать по крайней мере одну строчную букву<br>Содержать один специальный символ<br>Не содержать имя пользователя<br>Не совпадать с предыдущим паролем<br>', comment: 'Password validation requirements'},
      'PasswordConfirmValidation': {id: 'PasswordConfirmValidation', value: 'Пароль должен совпадать', comment: 'Password Confirm validation'},
      'Peak': {id: 'Peak', value: 'Максимальное значение', comment: 'the max or peak value in a chart'},
      'PersonalizeColumns': {id: 'PersonalizeColumns', value: 'Персонализировать столбцы', comment: 'Customize Columns in a Grid'},
      'Period': {id: 'Period', value: 'Период', comment: 'the am/pm portion of a time'},
      'PressDown': {id: 'PressDown', value: 'Нажмите клавишу СТРЕЛКА ВНИЗ, чтобы выбрать дату', comment: 'the audible label for Tooltip about how to operate the date picker'},
      'PressShiftF10': {id: 'PressShiftF10', value: 'Нажмите клавиши SHIFT+F10, чтобы открыть контекстное меню.', comment: 'the audible infor for screen readers on how to use a field with a popup menu'},
      'Previous': {id: 'Previous', value: 'Назад', comment: 'Previous icon tooltip - moved to previous record'},
      'PreviousMonth': {id: 'PreviousMonth', value: 'Предыдущий месяц', comment: 'the label for the button that moves calendar to next/prev'},
      'PreviousPage': {id: 'PreviousPage', value: 'Предыдущая страница', comment: 'Previous Page tooltip'},
      'Print': {id: 'Print', value: 'Печать', comment: 'Print tooltip'},
      'Range': {id: 'Range', value: 'Диапазон', comment: 'Range for tooltip'},
      'RecordsPerPage': {id: 'RecordsPerPage', value: 'Число записей на странице: {0}', comment: 'Dropd own allows the user to select how many visible records {} shows select value.'},
      'Redo': {id: 'Redo', value: 'Вернуть', comment: 'Redo tooltip'},
      'Refresh': {id: 'Refresh', value: 'Обновить', comment: 'Refresh tooltip'},
      'Required': {id: 'Required', value: 'Является обязательным', comment: 'indicates a form field is manditory'},
      'Reset': {id: 'Reset', value: 'Сбросить', comment: 'Reset tooltip'},
      'ResetDefault': {id: 'ResetDefault', value: 'Восстановить значения по умолчанию', comment: 'Reset Datagrid Columns, Filter and other Layout'},
      'Results': {id: 'Results', value: 'Результаты', comment: 'As in showing N Results in a List'},
      'RightAlign': {id: 'RightAlign', value: 'Выровнять по правому краю', comment: 'Right Align tooltip'},
      'RightAlignText': {id: 'RightAlignText', value: 'Выровнять по правому краю', comment: 'Right Align Text tooltip'},
      'Right': {id: 'Right', value: 'Вправо', comment: 'Right'},
      'Roles': {id: 'Roles', value: 'Роли', comment: 'Roles tooltip'},
      'RowHeight': {id: 'RowHeight', value: 'Высота строки', comment: 'Describes the Height for Rows in a Data Grid'},
      'Ruby': {id: 'Ruby', value: 'Рубиновый', comment: 'Color in our color pallette'},
      'RunFilter': {id: 'RunFilter', value: 'Запустить фильтр', comment: 'Execute the current filter criteria'},
      'Save': {id: 'Save', value: 'Сохранить', comment: 'Save tooltip'},
      'SaveCurrentView': {id: 'SaveCurrentView', value: 'Сохранить текущее представление', comment: 'Datagrids contain view sets. This menu option saves them'},
      'SavedViews': {id: 'SavedViews', value: 'Сохраненные представления', comment: 'Label for a list of Views'},
      'Seconds': {id: 'Seconds', value: 'с', comment: 'the seconds portion of a time'},
      'Search': {id: 'Search', value: 'Поиск', comment: 'Search tooltip'},
      'SearchColumnName': {id: 'SearchColumnName', value: 'Поиск имени столбца', comment: 'Search for a datagrid column by name'},
      'SearchFolder': {id: 'SearchFolder', value: 'Поиск в папке', comment: 'Search Folder tooltip'},
      'SearchList': {id: 'SearchList', value: 'Поиск списка', comment: 'Search List tooltip'},
      'Select': {id: 'Select', value: 'Выбрать', comment: 'text describing a select action'},
      'Selected': {id: 'Selected', value: 'Выбрано', comment: 'text describing a selected object'},
      'Send': {id: 'Send', value: 'Отправить', comment: 'Send tooltip'},
      'SetTime': {id: 'SetTime', value: 'Установить время', comment: 'button text that inserts time when clicked'},
      'Settings': {id: 'Settings', value: 'Настройки', comment: 'Settings tooltip'},
      'Short': {id: 'Short', value: 'Короткая', comment: 'Describes a Shorted Row Height in a grid/list'},
      'ShowFilterRow': {id: 'ShowFilterRow', value: 'Показать фильтры строки', comment: 'Toggle a row with filer info above a list'},
      'ShowLess': {id: 'ShowLess', value: 'Показать меньше', comment: 'Show less form content'},
      'ShowMore': {id: 'ShowMore', value: 'Показать больше', comment: 'Show more form content'},
      'Slate': {id: 'Slate', value: 'Аспидный', comment: 'Color in our color pallette'},
      'SliderHandle': {id: 'SliderHandle', value: 'Маркер для', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control'},
      'SliderMaximumHandle': {id: 'SliderMaximumHandle', value: 'Маркер максимального диапазона для', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control'},
      'SliderMinimumHandle': {id: 'SliderMinimumHandle', value: 'Маркер минимального диапазона для', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control'},
      'SkipToMain': {id: 'SkipToMain', value: 'Перейти к основному содержимому', comment: 'Skip link in header, jumps when clicked on to main area'},
      'StartsWith': {id: 'StartsWith', value: 'Начинается с', comment: 'for condition filtering'},
      'StrikeThrough': {id: 'StrikeThrough', value: 'Зачеркивание', comment: 'turn on and off strike through text in text editor (like word)'},
      'SortAtoZ': {id: 'SortAtoZ', value: 'Сортировать по возрастанию', comment: 'Sort A to Z in icons for filtering'},
      'SortZtoA': {id: 'SortZtoA', value: 'Сортировать по убыванию', comment: 'Sort Z to A in icons for filtering'},
      'SortDown': {id: 'SortDown', value: 'Сортировать по убыванию', comment: 'Sort Down tooltip'},
      'SortUp': {id: 'SortUp', value: 'Сортировать по возрастанию', comment: 'Sort Up tooltip'},
      'Subscript': {id: 'Subscript', value: 'Нижний индекс', comment: 'Turn on and off Subscript text in text editor (like word)'},
      'Superscript': {id: 'Superscript', value: 'Верхний индекс', comment: 'Turn on and off Superscript text in text editor (like word)'},
      'Tabs': {id: 'Tabs', value: 'Вкладки', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu'},
      'Tack': {id: 'Tack', value: 'Отметить', comment: 'Pin an object'},
      'Tall': {id: 'Tall', value: 'Длинная', comment: 'Describes a Taller Row Height in a grid/list'},
      'Target': {id: 'Target', value: 'Цель', comment: 'Label for an input to enter a Target (Url Attribute)'},
      'TextColor': {id: 'TextColor', value: 'Цвет текста', comment: 'add or edit text color in the editor'},
      'Timer': {id: 'Timer', value: 'Таймер', comment: 'Timer tooltip'},
      'Today': {id: 'Today', value: 'Сегодня', comment: 'refering to today on a calendar'},
      'ToggleBold': {id: 'ToggleBold', value: 'Включить/выключить полужирный текст', comment: 'turn on and off bold in text editor (like word)'},
      'ToggleH3': {id: 'ToggleH3', value: 'Включить/выключить заголовок 3', comment: 'turn on and off heading 3 text'},
      'ToggleH4': {id: 'ToggleH4', value: 'Включить/выключить заголовок 4', comment: 'turn on and off heading 4 text'},
      'ToggleItalic': {id: 'ToggleItalic', value: 'Включить/выключить курсив', comment: 'turn on and off Italic in text editor (like word)'},
      'ToggleUnderline': {id: 'ToggleUnderline', value: 'Включить/выключить подчеркивание текста', comment: 'turn on and off Underline in text editor (like word)'},
      'Toolbar': {id: 'Toolbar', value: 'Панель инструментов', comment: 'describing the toolbar component'},
      'TopAlign': {id: 'TopAlign', value: 'Выровнять по верхнему краю', comment: 'Top Align tooltip'},
      'Total': {id: 'Total', value: 'Итог', comment: 'Mathematic total of a calculation'},
      'Totals': {id: 'Totals', value: 'Итоги', comment: 'Mathematic total of a calculation (plural)'},
      'TreeCollapse': {id: 'TreeCollapse', value: 'Свернуть дерево', comment: 'Tree Collapse tooltip'},
      'TreeExpand': {id: 'TreeExpand', value: 'Развернуть дерево', comment: 'Tree Expand tooltip'},
      'Turquoise': {id: 'Turquoise', value: 'Бирюзовый', comment: 'Color in our color pallette'},
      'Up': {id: 'Up', value: 'Вверх', comment: 'Up tooltip'},
      'Upload': {id: 'Upload', value: 'Выгрузить', comment: 'Upload tooltip'},
      'UnavailableDate': {id: 'UnavailableDate', value: 'Недоступная дата', comment: 'Unavailable Date Text'},
      'Underline': {id: 'Underline', value: 'Подчеркнутый', comment: 'Make text Underlined'},
      'Undo': {id: 'Undo', value: 'Отменить', comment: 'Undo tooltip'},
      'Unlocked': {id: 'Unlocked', value: 'Разблокировано', comment: 'Unlocked tooltip'},
      'UnorderedList': {id: 'UnorderedList', value: 'Вставить/удалить маркированный список', comment: 'Insert an Unordered list in the editor'},
      'Unsupported': {id: 'Unsupported', value: 'Данное содержимое недоступно, так как используются компоненты, не поддерживаемые в текущей версии браузера.', comment: 'Suggesting browser upgrade for missing features.'},
      'Url': {id: 'Url', value: 'URL-адрес', comment: 'Url tooltip'},
      'UseArrow': {id: 'UseArrow', value: '. Чтобы выбрать, используйте клавиши со стрелками.', comment: 'Instructional comments for screen readers'},
      'UseEnter': {id: 'UseEnter', value: '. Используйте клавиши со стрелками или клавишу ВВОД для поиска.', comment: 'Instructional comments for screen readers'},
      'User': {id: 'User', value: 'Пользователь', comment: 'User tooltip'},
      'UserProfile': {id: 'UserProfile', value: 'Профиль пользователя', comment: 'User Profile tooltip'},
      'VerticalMiddleAlign': {id: 'VerticalMiddleAlign', value: 'Вертикальное выравнивание по центру', comment: 'Vertical Align tooltip'},
      'ViewSource': {id: 'ViewSource', value: 'Исходное представление', comment: 'Toggle the source view in the editor'},
      'ViewVisual': {id: 'ViewVisual', value: 'Визуальное представление', comment: 'Toggle the visual view in the editor'},
      'Yes': {id: 'Yes', value: 'Да', comment: 'On a dialog button'}
    }
  });
}));
