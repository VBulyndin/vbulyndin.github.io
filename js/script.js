(function($) {
$(function() {

  $('input, select').styler();

});
})(jQuery);
var parentElem = document.body;
var div = document.createElement('div');
div.className = "container";
parentElem.insertBefore (div, parentElem.firstChild );
var form = document.createElement('form');
form.className = "form";
div.insertBefore (form, div.firstChild);
var legend = document.createElement('legend');
form.insertBefore (legend, form.firstChild);
legend.innerHTML = 'Тест по программированию';
var label = document.createElement('label');
var label1 = document.createElement('label');
form.insertBefore (label, form.children[1]);
label.innerHTML = '1. Вопрос №1';
label1.className = "checkbox";
label1.innerHTML = 'Вариант ответа №1';
form.insertBefore (label1, form.children[2]);
var input = document.createElement('input');
label1.insertBefore (input, label1.firstChild);
input.type = "checkbox";
var clonelabel = label1.cloneNode(true);
var clonelabel1 = label1.cloneNode(true);
var cloneinput = input.cloneNode(true);
var cloneinput1 = input.cloneNode(true);
clonelabel.innerHTML = 'Вариант ответа №2';
clonelabel1.innerHTML = 'Вариант ответа №3';
label.parentNode.insertBefore(clonelabel, label.children[3]);
label.parentNode.insertBefore(clonelabel1, label.children[4]);
clonelabel.insertBefore(cloneinput, clonelabel.firstChild);
clonelabel1.insertBefore(cloneinput1, clonelabel1.firstChild);
var clonelabel2 = label.cloneNode(true);
clonelabel2.innerHTML = '2. Вопрос №2';
label.parentNode.insertBefore(clonelabel2, label.children[5]);
var clonelabel3 = label1.cloneNode(true);
var clonelabel4 = label1.cloneNode(true);
var clonelabel5 = label1.cloneNode(true);
var cloneinput2 = input.cloneNode(true);
var cloneinput3 = input.cloneNode(true);
clonelabel4.innerHTML = 'Вариант ответа №2';
clonelabel5.innerHTML = 'Вариант ответа №3';
label.parentNode.insertBefore(clonelabel3, label.children[6]);
label.parentNode.insertBefore(clonelabel4, label.children[7]);
label.parentNode.insertBefore(clonelabel5, label.children[8]);
clonelabel4.insertBefore(cloneinput2, clonelabel4.firstChild);
clonelabel5.insertBefore(cloneinput3, clonelabel5.firstChild);
var clonelabel6 = label.cloneNode(true);
clonelabel6.innerHTML = '3. Вопрос №3';
label.parentNode.insertBefore(clonelabel6, label.children[9]);
var clonelabel7 = label1.cloneNode(true);
var clonelabel8 = label1.cloneNode(true);
var clonelabel9 = label1.cloneNode(true);
var cloneinput4 = input.cloneNode(true);
var cloneinput5 = input.cloneNode(true);
clonelabel8.innerHTML = 'Вариант ответа №2';
clonelabel9.innerHTML = 'Вариант ответа №3';
label.parentNode.insertBefore(clonelabel7, label.children[10]);
label.parentNode.insertBefore(clonelabel8, label.children[11]);
label.parentNode.insertBefore(clonelabel9, label.children[12]);
clonelabel8.insertBefore(cloneinput4, clonelabel8.firstChild);
clonelabel9.insertBefore(cloneinput5, clonelabel9.firstChild);
var button = document.createElement ('button');
button.className = "btn";
button.type = "submit";
form.insertBefore(button, form.children[13]);
button.innerHTML = "Проверить мои результаты";
