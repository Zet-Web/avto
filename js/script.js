/* Adding blocks, transform blocks, only for correct display */
$(document).ready(function() {
  	var set_slide = function(selector, slide) {
      	$(selector).each(function() {
      		var position = slide*400+300;
      		var block = $(this);
      		var shift = function() {
      			block.css('background-position', '0 '+position+'px');
      			position -= 100;
      		}
      		setTimeout(shift, 60);
      		setTimeout(shift, 120);
      		setTimeout(shift, 180);
      		setTimeout(shift, 240);
      	});
  	}
  	
  	var time = new Date();
	var target_time = new Date(time.getFullYear(), time.getMonth(), time.getDate());
	target_time = target_time.valueOf()+1000*60*60*24;
	
	
    
	var tick = function(init) {
    	if (init == undefined) {
    		init = false;
    	}
    	var current_time = new Date();
    	current_time = current_time.valueOf();
    	if (current_time > target_time) {
    	  	var time = new Date();
    		target_time = new Date(time.getFullYear(), time.getMonth(), time.getDate());
    		target_time = target_time.valueOf()+1000*60*60*24;    		
    	}
    	var time_diff = Math.floor((target_time - current_time)/1000);	
    	var second_2 = time_diff % 10; time_diff = Math.floor(time_diff/10);
    	var second_1 = time_diff % 6; time_diff = Math.floor(time_diff/6);
    	var minute_2 = time_diff % 10; time_diff = Math.floor(time_diff/10);
    	var minute_1 = time_diff % 6; time_diff = Math.floor(time_diff/6);
    	var hour_2 = Math.floor(time_diff/10);
    	var hour_1 = time_diff % 10;
      	set_slide('div.secondPlay', second_2);
      	if ((second_2 == 9) || init) {set_slide('div.second6Play', second_1);
      	if ((second_1 == 5) || init) {set_slide('div.minutePlay', minute_2);
      	if ((minute_2 == 9) || init) {set_slide('div.minute6Play', minute_1);
      	if ((minute_1 == 5) || init) {set_slide('div.hourPlay', hour_1);
      	if ((hour_2 == 9) || init) {set_slide('div.hour2Play', hour_2);}}}}}
      }
    tick(true);
	setInterval(tick, 1000);
	
});
