// Вывести по знаку зодиака, диапазон дат и сам гороскоп. Используя многомерный массив и переменную. Done!
var zodiac = 'Овен',
horoscope = {
	'Овен' : {	 
           dates : '21 марта - 21 апреля', 
		   wishes : 'good',
	    },
	'Телец' : {	 
           dates : '21 апреля - 20 мая',
		   wishes : 'good',
		},
	'Близнецы' : {	 
           dates : '21 маяа - 21 июня',
		   wishes : 'good',
	    },
	'Рак' : {	 
           dates : '22 июня - 22 июля',
		   wishes : 'good',
	    },
	'Лев' : {	 
           dates : '23 июля - 23 августа',
		   wishes : 'good',
	    },
	'Дева' : {	 
           dates : '24 августа - 23 сентября',
		   wishes : 'good',
	    },
	'Весы' : {	 
           dates : '	24 сентября - 23 октября',
		   wishes : 'good',
	    },
	'Скорпион' : {	 
           dates : '24 октября - 22 ноября',
		   wishes : 'good',
	    },
	'Стрелец' : {	 
           dates : '23 ноября - 21 декабря',
		   wishes : 'good',
	    },
	'Козерог' : {	 
           dates : '22 декабря - 20 января',
		   wishes : 'good',
	    },
	'Водолей' : {	 
           dates : '21 января - 18 февраля',
		   wishes : 'good',
	    },
	'Рыбы' : {	 
           dates : '19 февраля - 20 марта',
		   wishes : 'good',
	}};
console.log( zodiac + ': ' + horoscope['Овен'].dates + ';\n'+'Гороскоп: ' + horoscope['Овен'].wishes + '!');


// Вывести товары дороже 2000грн в многомерном массиве. Done!
var products = [
{	 
           equipment : 'kettle',
		   price : 1500
 },
{
	       equipment : 'microwave',
		   price : 2500
 },
 {	 
           equipment : 'fridge',
		   price : 3500
  }],
result = '';
	 for (var key in products)	{
		 if (products[key].price > 2000) {
		     result += products[key].equipment + ' - ' + products[key].price + ' uah;\n';
 }}	 
	 console.log('Товары дороже 2000 грн: ', result);
	 
	 
 // Вывести с многомерного массива сотрудников только женщин. Done!
var result = '', 
 colleagues = {
'col1' :{	 
           name : 'Vasyl',
		   born : '1988',
		   gender : 'male'
 },
'col2' :{
	       name : 'Kat',
		   born : '1990',
		   gender : 'female'
 },
'col3' :{
	       name : 'Sasha',
		   born : '1986',
 		   gender : 'male'
 }};
 for (var id in colleagues){
	 if (colleagues[id].gender == 'female') {
		 result += colleagues[id].name + '';
 }}
 console.log('Все женщины сотрудники: ', result+';');
 