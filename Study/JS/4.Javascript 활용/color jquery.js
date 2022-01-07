var Links = {
    setColor: function(color) {
    //     var alist = document.querySelectorAll('a');
    // var i = 0;
    // while (i < alist.length){
    //     alist[i].style.color = color;
    //     i++
    // }
    $('a').css('color', color);
}
}
var Body = { 
    setColor: function(color) {
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor: function(color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}
function nightDayHandler(self){
    var target = document.querySelector('body');
    if (self.value === 'night'){   // 함수의 this는 전역객체를 가리키므로 매개변수 self, this를 넣어줘야함
        target.style.backgroundColor = 'black';
        target.style.color = 'white';
        self.value = 'day';

        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length){
            alist[i].style.color = 'powderblue';
            i++
        }
    } else {
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        self.value = 'night';

        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length){
            alist[i].style.color = 'blue';
            i++
        }
    }
}