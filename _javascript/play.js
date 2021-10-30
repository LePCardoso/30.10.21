var meuVideo =document.getElementById("video1");
function tela_Cheia() {
    meuVideo.requestFullscreen();
    }

    function volume_mais() {
        var volume_qtde = meuVideo.volume;
        if (volume_qtde == 1) {
            alert("Volume ja esta no máximo");
        } else {
            meuVideo.volume += 0.1;
        }
    }

    function volume_menos() {
        var volume_qtde = meuVideo.volume;
        if (volume_qtde <= 0.2) {
            alert("Volume já está no mínimo");
        } else {
            meuVideo.volume -= 0.1;
        }
    }

    function volume_mue() {
        var but = document.getElementById("som");
        if (meuVideo.muted) {
            meuVideo.muted = false;
            but.innerHTML = "&nbsp;Mudo&nbsp;";
        } else {
            but.innerHTML = "&nbsp;Som&nbsp;";
            meuVideo.muted = true;
        }
    }

    var play_pause = () => {
        var but = document.getElementById("plau_pause");
        if (meuVideo.paused) {
            meuVideo.play ();
            but.innerHTML = "class='btn btn-primary'"
            but.innerHTML = "&nbsp;PAUSE&nbsp;";
        } else {
            meuVideo.pause();
            but.innerHTML = "&NBSP;PLAY&nbsp;";
        }
    }

    var changeSize = (w, h) => {
        meuVideo.width = w;
        meuVideo.height = h;
    }