// // города 
let pole   = document.querySelector('#pole');
let sms = document.querySelector('#sms');

let cities = [];

let robot = ['Севастопль','Минск','Красногорск','Париж','Варна','Тамзания','Кемерово','Хабаровск','Ханты-Мансийск','Кисловодск','Комсомольск-на-Амуре',
'Астрахань', 'Барнаул', 'Белгород', 'Благовещенск','Чебоксары','Челябинск','Череповец','Черняховск','Чита','Екатеринбург',
'Златоуст','Горно-Алтайск','Великие Луки','Биробиджан','Волгодонск','Волжский','Ейск','Белокуриха','Кирово-Чепецк','Майкоп',
'Нягань','Саров','Северодвинск','Старый Оскол','Троицк','Шадринск','Подольск','Дмитров','Дагомыс','Красная Поляна','Лазаревское',
'Первоуральск','Ногинск','Электросталь','Тихорецк','Ломоносов','Дубна','Брейтово','Железноводск','Голубицкая','Грязи',
'Лоо','Хоста','Зеленоградск','Балашиха','Лысково','Витязево','Вельск','Великий Устюг','Кингисепп','Звенигород','Северобайкальск',
'Кострома','Краснодар','Красноярск','Курган','Курск','Липецк','Листвянка','Магадан','Магнитогорск','Махачкала','Минеральные Воды',
'Южно-Сахалинск','Химки','Калуга','Елабуга','Азов','Александров','Брянск','Вологда','Выкса','Грозный','Иваново','Киров',
'Ульяновск','Великий Новгород','Владикавказ','Владимир','Владивосток','Волгоград','Воркута','Воронеж','Выборг','Якутск','Ярославль','Йошкар-Ола',
'Муром','Набережные Челны','Нижнекамск','Переславль-Залесский','Ростов Великий','Сергиев Посад','Смоленск','Старая Русса','Тамбов','Тобольск',
'Новосибирск','Новый Уренгой','Омск','Оренбург','Пенза','Пермь','Петропавловск-Камчатский','Петрозаводск','Псков',
'Москва','Мурманск','Находка','Нальчик','Нижневартовск','Нижний Новгород','Ноябрьск','Норильск','Новокузнецк','Новороссийск',
'Стерлитамак','Ступино','Туапсе','Чайковский','Энгельс','Шуя','Сорочинск','Терскол','Кропоткин','Дзержинск','Тихвин','Шатура',
'Одинцово','Жуковский','Конаково','Петрово-Дальнее','Городец','Иноземцево','Тургояк',
'Пятигорск','Ростов-на-Дону','Рязань','Салехард','Самара','Саранск','Саратов','Саяногорск','Сочи','Санкт-Петербург','Ставрополь',
'Алушта','Феодосия','Ялта', 'Севастополь', 'Симферополь', 'Абакан', 'Адлер', 'Анапа', 'Ангарск', 'Архангельск',
'Никола','Шерегеш','Сукко','Янтарный','Морское','Гурзуф','Евпатория','Керчь','Коктебель','Курпаты','Черноморское','Крым',
'Сургут','Суздаль','Светлогорск','Сыктывкар','Таганрог','Тольятти','Томск','Тула','Тверь','Тюмень','Уфа','Углич','Ухта','Улан-Удэ',
'Эсто-Садок','Ангелово','Знаменский','Архипо-Осиповка','Горячий Ключ','Домбай','Животино','Королёв','Курово','Мышкин','Небуг',
'Шахты','Стрельна','Петергоф','Пушкин','Обнинск','Армавир','Гатчина','Зеленогорск','Репино','Солнечное','Шлиссельбург','Воскресенское',
'Коломна','Рождествено','Октябрьский','Всеволожск','Бузулук','Ессентуки','Кировск','Новокуйбышевск','Приозерск','Рыбинск','Серпухов',
];


pole.addEventListener('keypress', function(event){
  if(event.key == "Enter"){
    if(robot.includes(pole.value)){
      pole.value = pole.value;
      if(cities.length == 0){
        cities.push(pole.value);
        pole.value = '';

        if(cities.slice(-1).join("").slice(-1) == 'ь' || cities.slice(-1).join("").slice(-1) == 'ъ'){
          pole.placeholder = ('Напишите название города на ' + cities.slice(-1).join("").slice(-2, -1).toUpperCase());
        }else{
          pole.placeholder = ('Напишите название города на ' + cities.slice(-1).join("").slice(-1).toUpperCase());
        }

      }else if(cities.includes(pole.value)){
        pole.value = '';
        pole.placeholder = ('Этот город уже был!');
      }
      else{

        if(cities.slice(-1).join("").slice(-1) == 'ь' || cities.slice(-1).join("").slice(-1) == 'ъ' || cities.slice(-1).join("").slice(-1) == 'ы'){
          pole.placeholder = ('Напишите название города на ' + cities.slice(-1).join("").slice(-2, -1).toUpperCase());
          console.log(cities.slice(-1).join("").slice(-1));
          if(cities.slice(-1).join("").slice(-2, -1).toUpperCase() == pole.value.slice(0, 1).toUpperCase()){
            cities.push(pole.value);
            pole.value = '';
            pole.placeholder = ('Напишите название города на ' + cities.slice(-1).join("").slice(-1).toUpperCase());
          }
        }else{
          if(cities.slice(-1).join("").slice(-1).toUpperCase() == pole.value.slice(0, 1).toUpperCase()){
            cities.push(pole.value);
            pole.value = '';
            pole.placeholder = ('Напишите название города на ' + cities.slice(-1).join("").slice(-1).toUpperCase());

            if(cities.slice(-1).join("").slice(-1) == 'ь' || cities.slice(-1).join("").slice(-1) == 'ъ'){
              pole.placeholder = ('Напишите название города на ' + cities.slice(-1).join("").slice(-2, -1).toUpperCase());
            }
          }
        }
      }
      for(let i of robot){
        if(cities.includes(i)){
          pole.value = '';
          pole.placeholder = ('Этот город уже был!');
        }
        else{

          if(cities.slice(-1).join("").slice(-1) == 'ь' || cities.slice(-1).join("").slice(-1) == 'ъ' || cities.slice(-1).join("").slice(-1) == 'ы'){
            if(i.slice(0, 1).toUpperCase() == cities.slice(-1).join("").slice(-2, -1).toUpperCase()){
              cities.push(i);

              pole.placeholder = (i + ', напишите название города на ' + i.slice(-1).toUpperCase());
              break;
            }

          }else{
            if(i.slice(0, 1).toUpperCase() == cities.slice(-1).join("").slice(-1).toUpperCase()){
              cities.push(i);

              pole.placeholder = (i + ', напишите название города на ' + cities.slice(-1).join("").slice(-1).toUpperCase());

              if(i.slice(-1) == 'ь' || i.slice(-1) == 'ъ' || i.slice(-1) == 'ы'){
                pole.placeholder = (i + ', напишите название города на ' + cities.slice(-1).join("").slice(-2, -1).toUpperCase());

              }
              break;
            }
          }
        }
      }
    }else{
      pole.value = '';
      pole.placeholder = 'Неверно написан город, ' + 'Напишите название города на' + cities.slice(-1).join("").slice(-1).toUpperCase();
    }

    console.log(cities);
  }
});

// // чеклист
let checklist = document.querySelector('#checklist');
let list = document.querySelector('#list');

checklist.addEventListener('keypress', function(event) {
	if (event.key == 'Enter') {
    let li = document.createElement('li');

    let task = document.createElement('span');
		task.classList.add('task');
		task.textContent = this.value;
    task.addEventListener('dblclick', function() {
      let input = document.createElement('input');
      input.value = task.textContent;
      task.textContent = '';
      task.appendChild(input);

      input.addEventListener('keypress', function(e){
        if(e.key == 'Enter'){
          task.textContent = input.value;
          input.remove();
        }
      });

    });
		li.appendChild(task);

		let remove = document.createElement('span');
		remove.classList.add('remove');
		remove.textContent = 'удалить';
    remove.addEventListener('click', function(e) {
      li.remove();
    });
		li.appendChild(remove);

		let mark = document.createElement('span');
		mark.classList.add('mark');
		mark.textContent = 'сделано';
    mark.addEventListener('click', function() {

      task.classList.add('done');
    });
		li.appendChild(mark);

    list.appendChild(li);
    checklist.value = '';
	}
});
 
// // заметки

let saveText = document.querySelector('#saveText');
let textBook = document.querySelector('#textBook');
let create = document.querySelector('#create');
let zametki = document.querySelector('#zametki');

let texts = [];
let i = 0;

let rejim = document.createElement('p');
rejim.textContent = 'Режии создания';
create.append(rejim);
saveText.addEventListener('click', function(e){
  let mode = saveText.dataset.mode;


  if (mode == 'create') {
    texts.push(textBook.value);       

    let li = document.createElement('li');                  

    li.setAttribute('data-key', i);   

    let open = document.createElement('span');
    open.textContent = 'Запись ' + (i);


    let remove = document.createElement('span');
    remove.textContent = 'X';

    li.appendChild(open);                                    
    li.appendChild(remove);                                    
    zametki.appendChild(li);                                    

    open.addEventListener('click', function(e){   
      textBook.value = texts[li.dataset.key];

      for(let item of zametki.children){
        if(item.hasAttribute('class','active')){
          item.classList.remove('active');
        }
      }
      li.classList.add('active');

      saveText.setAttribute('data-key', li.dataset.key);
      saveText.setAttribute('data-mode', 'update');

      rejim.textContent = 'Режии редактирования';



    });
    remove.addEventListener('click', function(){
      textBook.value = '';
      delete texts[li.dataset.key];
      li.remove();
      saveText.setAttribute('data-mode', 'create');
      rejim.textContent = 'Запись успешно удалена Режии создания';
      console.log(texts);
    });
    rejim.textContent = 'Режии создания';
    textBook.value = '';
	}

	if (mode == 'update') {
		let key = this.dataset.key;
		console.log(key);
    texts[key] = textBook.value;
	}
  console.log(texts);
  i++;
});

create.addEventListener('click', function(){
  saveText.removeAttribute('data-key', li.dataset.key - 1);
  saveText.setAttribute('data-mode', 'create');
  textBook.value = '';

  rejim.textContent  = 'Режии создания';

});

// // калькулятор
let name   = document.querySelector('#name');
let price  = document.querySelector('#price');
let kolvo = document.querySelector('#kolvo');
let add    = document.querySelector('#add');
let tablica  = document.querySelector('#tablica');
let total  = document.querySelector('#total');

add.addEventListener('click', function() {
	let tr = document.createElement('tr');

  allowEdit(createCell(tr, name.value, 'name'));
  allowEdit(createCell(tr, price.value, 'price'));
  allowEdit(createCell(tr, kolvo.value, 'kolvo'));
	createCell(tr, price.value * kolvo.value, 'cost');
	createCell(tr, 'удалить', 'remove').addEventListener('click', function() {

    tr.remove();
    recountTotal(); 
  });

	tablica.appendChild(tr);
  recountTotal(); 
});

function createCell(tr, value, name) {
  td = document.createElement('td');
  td.textContent = value;
  td.classList.add(name);
  return tr.appendChild(td);
} 

function recountTotal() {
	let costs = tablica.querySelectorAll('.cost');

	if (costs) {
    let sum = 0;
    for(let i of costs){
      console.log(i);
      sum += +i.textContent;
    }
    total.textContent = sum;
	}
}

function allowEdit(td) {
  td.addEventListener('dblclick', function() {
		let text = td.textContent
		td.textContent = '';

		let input = document.createElement('input');
		input.value = text;
		input.focus();
		td.appendChild(input);

		input.addEventListener('keydown', function(event) {
			if (event.key == 'Enter') {
				td.textContent = this.value;

				if (td.classList.contains('price') || td.classList.contains('kolvo')) {
					let priceTr = td.parentElement.querySelector('.price').textContent;
					let kolvoTr = td.parentElement.querySelector('.kolvo').textContent;
					let costTr = td.parentElement.querySelector('.cost');

          costTr.textContent = +kolvoTr * +priceTr;

          recountTotal(); 
				}
			}
		});
	});
}

// // тесты

let dataRight = document.querySelectorAll('[data-right]');
let testBtn = document.querySelector('.testBtn');

let answers = [
	'4',
	'4',
	'1',
];



testBtn.addEventListener('click',function(){

  for(let i in answers){
    if(dataRight[i].value == answers[i]){
      dataRight[i].setAttribute('class', 'right');
    }else{
      dataRight[i].setAttribute('class', 'wrong');
    }
  }



});


let questions = [
	'2 + 2 =',
	'2 * 2 =',
	'2 / 2 ='
];

let test2 = document.querySelector('#test2');
let testBtn2 = document.querySelector('#testBtn2');

for(let i of questions){
  let div = document.createElement('div');

  let p = document.createElement('p');
  p.textContent = i;

  let input = document.createElement('input');

  div.appendChild(p);
  div.appendChild(input);

  test2.appendChild(div);
}

testBtn2.addEventListener('click', function(){
  check(test2.querySelectorAll('input'));
});

function check(input){
  for(let i in answers){
    if(input[i].value == answers[i]){
      input[i].setAttribute('class', 'right');
    }else{
      input[i].setAttribute('class', 'wrong');
    }
  }
}

// // слайдеры
let textsSlider = ['lol', 'kek', 'cheburek'];
let leftSlider = document.querySelector('#left');
let rightSlider = document.querySelector('#right');
let slider = document.querySelector('#slider');



let o = 0; 

left.addEventListener('click', function(e) {
  e.preventDefault();
  slider.textContent = textsSlider[o--];

  if(o <= 0){
    o = 0;
  }
});

right.addEventListener('click', function(e) {
  e.preventDefault();
  slider.textContent = textsSlider[o++];



  if(o >= 2){
    o = 2;
  }
});

