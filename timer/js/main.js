$(document).ready(function() {
	initTimer(); //Включаем таймер
});

function initTimer() {
	var endDate = new Date(2019, 0, 1, 0, 0, 0, 0); //Дата до которой таймер работает
	var currentDate = new Date(); //Текущая дата
	var seconds = (endDate - currentDate)/1000; //получаем время в секундах до окончания 
	if (seconds > 0) {
		var days = seconds / 86400;
		var hours = ((days - Math.floor(days))*24);
		var minutes = ((hours - Math.floor(hours))*60);
		seconds = ((minutes - Math.floor(minutes))*60);
		var milseconds = ((seconds - Math.floor(seconds))*1000);
		days = Math.floor(days);
		hours = Math.floor(hours);
		minutes = Math.floor(minutes);
		seconds = Math.floor(seconds);
		milseconds = Math.floor(milseconds);
		
		setTimePage(days,hours,minutes,seconds,milseconds);
		
		function secOut() {
				if (seconds == 0) {
					if (minutes == 0) {
						if (hours == 0) {
							if (days == 0) {
								showMessage(timerId);
							} else {
								days--;
								hours = 23;
								minutes = 59;
								seconds = 59;
								
							}
						} else {
							hours--;
							minutes = 59;
							seconds = 59;
							
						}
					} else {
						minutes--;
						seconds = 59;
						
						
					}
				} else {
					seconds--;
					
				}
				
			setTimePage(days,hours,minutes,seconds,milseconds);
		}
		timerId = setInterval(secOut, 1000);
	} else {
		alert("Ошибка даты");
	}
}

function setTimePage(d,h,m,s,ms) {
	if (d == 1 || d == 21 || d == 31) {
		$('.days_head').html('день');
	}
	if (d == 2 || d == 3 || d == 4 || d == 22 || d == 23 || d == 24) {
		$('.days_head').html('дня');
	}
	if (d == 0 || d == 5 || d == 6 || d == 7 || d == 8 || d == 10 || d == 11 || d == 12 || d == 13 || d == 15 || d == 16 || d == 17 || d == 18 || d == 19  || d == 20 || d == 25 || d == 26 || d == 27 || d == 28 || d == 29 || d == 30) {
		$('.days_head').html('дней');
	}
	if (h == 1 || h == 21) {
		$('.hours_head').html('час');
	}
	if (h == 2 || h == 3 || h ==4 || h == 22 || h == 23 || h == 24) {
		$('.hours_head').html('часа');
	}
	if (h == 0 || h == 5 || h == 6 || h == 7 || h == 8 || h == 9 || h == 10 || h == 11 || h == 12 || h == 13 || h == 14 || h == 15 || h == 16 || h == 17 || h == 18 || h == 19 || h == 20) {
		$('.hours_head').html('часов');
	}
	if (m == 1 || m == 21 || m == 31 || m == 41 || m == 51) {
		$('.minutes_head').html('минута');
	}
	if (m == 2 || m == 3 || m == 4 || m == 22 || m == 23 || m == 24 || m == 32 || m == 33 || m == 34 || m == 42 || m == 43 || m == 44 || m == 52 || m == 53 || m == 54) {
		$('.minutes_head').html('минуты');
	}
	if (m == 0 || m == 5 || m == 6 || m == 7 || m == 8 || m == 9 || m == 10 || m == 11 || m == 12 || m == 13 || m == 13 || m == 14 || m == 15 || m == 16 || m == 17 || m == 18 || m == 19 || m == 20 || m == 25 || m == 26 || m == 27 || m == 28 || m == 29 || m == 30 || m == 35 || m == 36 || m == 37 || m == 38 || m == 39 || m == 40 || m == 45 || m == 46 || m == 47 || m == 48 || m == 49 || m == 50 || m == 55 || m == 56 || m == 57 || m == 58 || m == 59 || m == 60) {
		$('.minutes_head').html('минут');
	}
	if (s == 1 || s == 21 || s == 31 || s == 41 || s == 51) {
		$('.seconds_head').html('секунда');
	}
	if (s == 0 || s == 5 || s == 6 || s == 7 || s == 8 || s == 9 || s == 10 || s == 11 || s == 12 || s == 13 || s == 13 || s == 14 || s == 15 || s == 16 || s == 17 || s == 18 || s == 19 || s == 20 || s == 25 || s == 26 || s == 27 || s == 28 || s == 29 || s == 30 || s == 35 || s == 36 || s == 37 || s == 38 || s == 39 || s == 40 || s == 45 || s == 46 || s == 47 || s == 48 || s == 49 || s == 50 || s == 55 || s == 56 || s == 57 || s == 58 || s == 59 || s == 60) {
		$('.seconds_head').html('секунд');
	}
	if (s == 2 || s == 3 || s == 4 || s == 22 || s == 23 || s == 24 || s == 32 || s == 33 || s == 34 || s == 42 || s == 43 || s == 44 || s == 52 || s == 53 || s == 54) {
		$('.seconds_head').html('секунды');
	}
	$('.days_count').html(d);
	$('.hours_count').html(h);
	$('.minutes_count').html(m);
	$('.seconds_count').html(s);
	
}

function showMessage(timerId) {
	alert("Время истекло");
	clearInterval(timerId);
}
