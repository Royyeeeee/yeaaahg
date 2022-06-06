     JS 

    Result
    Skip Results Iframe

 //logics
        let click_Count = 0;
        Counto = 0;
        let up_one = 0;
        //VIEW COUNT LIVE
        let Views = 0;
        let view_Display = document.getElementById("Views");
        view_Display.innerHTML = Math.round(localStorage.View);
        let total_Views = 0;
        total_Views_Display = document.getElementById("TV");
        total_Views_Display.innerHTML = "Total Views: " + Math.round(localStorage.total_View);
        high_View = 20;
        if (localStorage.high_Views) {
            localStorage.high_Views = Number(200)
        } else {
            localStorage.high_Views = 0;
        }
        if(localStorage.up_one){
            localStorage.up_one = Number(localStorage.up_one);
        } else {
            localStorage.up_one = 0;
        }
        //SUB COUNT LIVE
        sub_Display = document.getElementById("Subscribers");
        sub_Display.innerHTML = localStorage.Subs;
        //SHOP
        one = document.getElementById("one")
        if(localStorage.camera_Price){
            localStorage.camera_Price = Number(localStorage.camera_Price);
            if(localStorage.up_one > 0) {
            one.innerHTML = "Price: " + Math.round(localStorage.camera_Price) + " Views";
            } else {
                one.innerHTML = "Price: " + 100 + " Views"
            }
        } else {
            localStorage.camera_Price = 0;
        }
        let headset_Price = 270;
        let gtx_Price = 1590;
   
        function addCoins() {
            localStorage.get(localStorage.Coin);
            localStorage.Coin = Number(localStorage.Coin) + 1;
        }
        function video_Made() {
            click_Count++;
            if (click_Count == 1) {
                Counto = 0;
                Count = Math.floor(Math.random() * (localStorage.high_Views - 10 + 1) + 10);
                let Start_Video = setInterval(function() {
                    Counto++
                    if (localStorage.Subs) {
                        let y = Math.floor(Math.random() * (20 - 1 + 1) + 1)
                        if (y == 5) {
                            localStorage.Subs = Number(localStorage.Subs) + 1;
                            Subz = Number(localStorage.Subs);
                        }
                    } else {
                        localStorage.Subs = 0;
                    }
                    if (localStorage.total_View) {
                        localStorage.total_View = Number(localStorage.total_View) + 1;
                        total_Views = Number(localStorage.total_View);
                    } else {
                        localStorage.total_View = 0;
                    }
                    if (localStorage.View) {
                        localStorage.View = Number(localStorage.View) + 1;
                        Views = Number(localStorage.View);
                    } else {
                        localStorage.View = 0;
                    }
                    total_Views_Display.innerHTML = "Total Views: " + localStorage.total_View;
                    view_Display.innerHTML = Math.round(localStorage.View);
                    sub_Display.innerHTML = localStorage.Subs;
                    if (Counto == Count) {
                        click_Count = 0;
                        clearInterval(Start_Video)
                    }
                }, 70)
            } else {}
        }
        function upgrade_Camera() {
            if(localStorage.up_one > 0){
            if(localStorage.View >= Math.round(localStorage.camera_Price)){
                alert("You upgraded your Camera!")
                localStorage.View = Number(localStorage.View)-localStorage.camera_Price
                localStorage.high_Views = Number(localStorage.high_Views) * 1.7
                localStorage.camera_Price = Number(localStorage.camera_Price) * 1.6
                one.innerHTML = "Price: " + Math.round(localStorage.camera_Price) + " Views"
                total_Views_Display.innerHTML = Math.round(localStorage.View)
                view_Display.innerHTML = Math.round(localStorage.View);
            } else {
                alert("You don't have enough for this purchase!")
            }
        } else {
            if(localStorage.View >= 100){
                alert("You upgraded your Camera!")
                localStorage.View = Number(localStorage.View)-100;
                localStorage.up_one = Number(localStorage.up_one) + 1;
                localStorage.View = Number(localStorage.View)-localStorage.camera_Price
                localStorage.high_Views = Number(localStorage.high_Views) + 200
                localStorage.camera_Price = Number(localStorage.camera_Price) + 260;
                one.innerHTML = "Price: " + Math.round(localStorage.camera_Price) + " Views"
                total_Views_Display.innerHTML = Math.round(localStorage.View)
                view_Display.innerHTML = Math.round(localStorage.View);
            } else{
                alert("You don't have enough for this purchase!")
            }
        }
        }

