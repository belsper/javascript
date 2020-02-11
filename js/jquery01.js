$(document).ready(function() {
    // jquery 효과

    // hide/show/toggle : jquery에서 미리 만들어 놓은 CSS 효과
    // hide() : 지정한 html 태그를 숨김(display : none 과 같음)
        // $(선택자).hide(속도, 콜백함수)
            // 속도는 총 동작 시간으로 계산됨
            // 1/1000 초로 계산함
    // show() : 숨겨진 html 태그를 보여줌
        // $(선택자).show(속도, 콜백함수)
    // toggle() : hide()/show()의 기능을 돌아가며 실행
    // $(선택자).toggle(속도, 콜백함수)
    
    $("#btnHide").on("click", function() {
        // $("#div01p").hide(); // 기본 사용
        // $("#div01p").hide(300); // 실행 속도 추가
        $("#div01p").hide(300, function() { // 콜백함수사용
            alert("hide() 가 실행되었습니다.");
        });
    });

    $("#btnShow").on("click", function() {
        // $("#div01p").show();
        // $("#div01p").show(300);
        $("#div01p").show(300, function() {
            alert("show() 가 실행되었습니다.");
        });
    });

    $("#btnToggle").on("click", function() {
        // $("#div01p").toggle();
        // $("#div01p").toggle(300);
        $("#div01p").toggle(300, function() {
            alert("toggle() 가 실행되었습니다.");
        });
    });

    // 슬라이드 효과
    // slideDown() : 지정한 html 요소를 아래로 슬라이드 함
        // $(선택자).slideDown(속도, 콜백);
        // 속도는 slow, fast, 숫자(1/1000 초)로 입력
    // slideUp() : 지정한 html 요소를 위로 슬라이드 함
    // slideToggle() : 지정한 html 요소를 아래로/위로 슬라이드를 돌아가며 동작
    $("#div02flip1").on("click", function() {
        // $("#div02panel1").slideDown(); // 기본 형식
        // $("#div02panel1").slideDown("slow"); // 시간입력 방식
        //콜백함수 사용
        $("#div02panel1").slideDown("fast", function() {
            alert("slideDown() 실행 후 콜백함수 동작");
        });
    });

    $("#div02flip2").on("click", function() {
        // $("#div02panel2").slideUp();
        // $("#div02panel2").slideUp("fast"); // 시간입력 방식
        //콜백함수 사용
        $("#div02panel2").slideUp(500, function() {
            alert("slideUp() 실행 후 콜백함수 동작");
        });
    });

    $("#div02flip3").on("click", function() {
        // $("#div02panel3").slideToggle();
        // $("#div02panel3").slideToggle(1000); // 시간입력 방식
        //콜백함수 사용
        $("#div02panel3").slideToggle(300, function() {
            alert("slideToggle() 실행 후 콜백함수 동작");
        });
    });

    // 애니메이션 효과
    // animate() : 사용자 정의 애니매이션을 작성할 수 있음
    // $(선택자).animate({옵션}, 속도, 콜백);
        // 옵션 : CSS 속성을 입력, object 형을 사용하기 때문에 CSS 속성을 여러개 동시에 사용할 수 있음
            // 컬러 관련 CSS 속성은 jQuery.Color 플러그인을 추가 설치해야 함
            // 현재 적용된 값에 증가/감소 값을 넣어서 상대값으로 표현이 가능함
        // 속도 : 1/1000 초로 계산
        // 콜백 : animate()가 실행된 이후 동작할 작업
        // 애니메이션을 연속 여러개 실행할 수 있음
            // animate()를 여러개 입력 시 입력된 순서에 따라 차례대로 실행 됨

    $("#div03btn1").on("click", function() {
        // $("#div03div").animate({left: "250px"}); // 기본형
        // $("#div03div").animate({left: "500px"}, 2000);
        // $("#div03div").animate({left: "500px"}, 2000, function() {
        //     alert("animate() 사용");
        // });
        // 여러가지 옵션 동시에 적용하기
        // $("#div03div").animate({
        //     left: "500px",
        //     height: "400px",
        //     width: "400px",
        //     backgroundColor: jQuery.Color("red")
        // });
        // 상대값 적용하기
        // $("#div03div").animate({left: "+=250px"});

        // 애니메이션 효과 연속으로 주기1
        // $("#div03div").animate({left: "500px"});
        // $("#div03div").animate({width: "400px"});
        // $("#div03div").animate({height: "400px"});
        // $("#div03div").animate({backgroundColor: jQuery.Color("red")});

        // 애니메이션 효과 연속으로 주기2
        var div = $("#div03div");
        div.animate({left: "500px"});
        div.animate({width: "400px"});
        div.animate({height: "400px"});
        div.animate({backgroundColor: jQuery.Color("red")});

        // jquery chaining 을 사용한 방식
        // div.animate({left: "500px"}).animate({width: "400px"}).animate({height: "400px"}).animate({backgroundColor: jQuery.Color("red")});

    });

    // jquery 애니메이션 효과 멈추기
    // stop() : 애니메이션이나 제이쿼리 효과를 끝나기 전에 중지시킴
        // $(선택자).stop(stopAll, goToEnd)
        // stopAll : 기본값 false, 연속된 효과가 있을 경우 모두 중지
        // goToEnd : 기본값 false, 해당 효과의 끝으로 이동
        // 애니메이션 효과를 여러개 사용했을 경우 stop() 기본형을 사용 시 현재 동작중인 애니메이션 효과만 중지시킴
        // 나머지 애니메이션이 바로 자동으로 시작됨

    $("#div04btn1").on("click", function() {
        $("#div04panel").stop();
    });

    $("#div04btn2").on("click", function() {
        $("#div04div1").stop();
    });

    $("#div04btn3").on("click", function() {
        $("#div04div2").stop();
    });

    $("#div04flip").on("click", function() {
        $("#div04panel").slideDown(5000);
    });

    $("#div04div1").on("click", function() {
        $("#div04div1").fadeOut(5000);
    });

    $("#div04div2").on("click", function() {
        $("#div04div2").animate({left: "500px"}, 5000);
    });


    $("#div04btn4").on("click", function() {
        // $("#div04div3").stop(); // 기본형
        // $("#div04div3").stop(false, true); // stopAll : false, goToEnd : true // 애니메이션 효과의 끝부분으로 이동함
        $("#div04div3").stop(true, false); // stopAll : true, goToEnd : false // 애니메이션이 여러개 있을 경우 모두 정지
    });

    $("#div04div3").on("click", function() {
        // $("#div04div3").animate({left: "500px"}, 5000);
        var div = $("#div04div3");
        div.animate({left: "500px"}, 5000);
        div.animate({height: "400px"}, 5000);
        div.animate({width: "400px"}, 5000);
    });

    // 제이쿼리 콜백함수
    // 제이쿼리 함수를 사용 시 해당 함수가 완전히 실행 완료가 된 후 자동으로 호출되는 함수

    $("#div05btn1").on("click", function() {
        $("#div05 > h3").hide("slow");
        alert("콜백함수 미사용");
    });

    $("#div05btn2").on("click", function() {
        $("#div05 > h3").hide("slow", function() {
            alert("콜백함수 사용");
        });
    });

    // 제이쿼리 체인
    // 제이쿼리 함수 사용 시 여러개의 함수를 한번에 연결해서 입력하는 방식
    // 제이쿼리 체인 기능을 사용 시 선택자를 통해서 2번 이상 같은 html 요소를 찾을 필요가 없음
    // $(선택자).함수1().함수2().함수3()....

    $("#div06btn").on("click", function() {
        // $("#div06 > h3").css("color", "red").slideUp(2000).slideDown(2000).fadeOut(2000).fadeIn(2000);
        $("#div06 > h3")
        .css("color", "red")
        .slideUp(2000)
        .slideDown(2000)
        .fadeOut(2000)
        .fadeIn(2000);
    });
});