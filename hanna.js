                window.setInterval(function () {
                var el, time, translatedTime;

                el = document.getElementById('timedisplay');

                time = new Date;

                translatedTime = time.toLocaleDateString() + ' ' +                  time.toLocaleTimeString();

                el.innerHTML = translatedTime ;
}, 600)