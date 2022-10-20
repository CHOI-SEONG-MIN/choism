//바닐라
if(true){
    const $baseball = document.querySelectorAll('.baseball');
    const $lightbox = document.querySelector('.lightbox');
    const $shadow = document.querySelector('.shadow');
    const $btnClse = document.querySelector('.clse');

    $baseball.forEach(function($baseball){
        $baseball.addEventListener('click', function(evt){
            evt.preventDefault();

            //이번에 클릭한 baseball의 href 값을 추출
            const imgSrc = this.getAttribute('href');

            //이번에 클릭한 baseball의 직계자식 img의 alt 값을 추출
            const imgAlt = this.firstElementChild.getAttribute('alt');
            
            //$lightbox의 자식 img에 src, alt 속성값을 변환
            $lightbox.firstElementChild.setAttribute('src',imgSrc);
            $lightbox.children[0].setAttribute('alt',imgAlt);

            $shadow.style.display = 'block';
        });
    });

    $btnClse.addEventListener('click', function(){
        $shadow.style.display = 'none';
    });

    $shadow.addEventListener('click', function(){
        this.style.display = 'none';
    });

    $lightbox.addEventListener('click', function(evt){
        evt.stopPropagation();//이벤트 전파 중지
    });

    //ESC키를 이용한 닫기
    document.addEventListener('keyup', function(evt){
        console.log(`현재 눌린 키번호는 ${evt.which}`);
        if(evt.which === 27){
            $shadow.style.display = 'none';
        }
    });
}

//제이쿼리
if(true){
    const $baseball = $('.baseball');
    const $lightbox = $('.lightbox');
    const $shadow = $('.shadow');

    $baseball.on('click', function(evt){
        evt.preventDefault();

        const imgSrc = $(this).attr('href');
        const imgAlt = $(this).children('img').attr('alt');

        
        $lightbox.children('img').attr({
            src : imgSrc,
            alt : imgAlt
        });
        
        $shadow.show();

        $('button.clse').on('click', function(){
            $shadow.hide();
        });
    });

    $shadow.on('click', function(){
        $(this).hide();
    });

    $lightbox.on('click', function(evt){
        evt.stopPropagation();
    });

    $(document).on('keyup', function(evt){
        if(evt.which === 27){
            $shadow.hide();
        }
    });
}