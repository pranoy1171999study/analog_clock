 setInterval(()=>{
            var d=new Date();
            var h=d.getHours();
            var m=d.getMinutes();
            var s=d.getSeconds();
            var meridian="";
            if(h>=12) meridian=" pm";
                else meridian=" am";
            h=h%12;

            h1.innerHTML = h+":";
            m1.innerHTML = m+":";
            s1.innerHTML = s+meridian;

            hRotate=30*h+m/2;
            mRotate=6*m;
            sRotate=6*s;

            hour.style.transform="rotate("+hRotate+"deg)";
            minute.style.transform="rotate("+mRotate+"deg)";
            second.style.transform="rotate("+sRotate+"deg)";   
        },1000);
        
