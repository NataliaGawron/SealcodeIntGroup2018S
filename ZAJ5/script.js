    var kotki = [{
        imie: "Rufus",
        poziom_slodkosci: 5,
        obraz: {
            url: "https://i.ytimg.com/vi/FHH6hIc2GyE/0.jpg",
            rozmiar: "M"
        }
    }, {
        imie: "Maciuś",
        poziom_slodkosci: 4,
        obraz: {
            url: "https://boygeniusreport.files.wordpress.com/2016/05/scared-surprised-cat-face.jpg?quality=98&strip=all&w=782",
            rozmiar: "M"
        }
    }, {
        imie: "Ruzia",
        poziom_slodkosci: 8,
        obraz: {
            url: "https://i.pinimg.com/originals/5b/73/82/5b7382c685073fcebdac0e522af3883a.jpg",
            rozmiar: "L"
        }
    }, {
        imie: "Sebastian",
        poziom_slodkosci: 9,
        obraz: {
            url: "https://vallaura.files.wordpress.com/2015/12/sweet-cat-prayering-image.jpg",
            rozmiar: "L"
        }
    }, {
        imie: "Kajetan",
        poziom_slodkosci: 10,
        obraz: {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQomCRsvcTur_mvHS_aQbnITpo_4O4W_0kFpkNsRj_HuIEJFcLu",
            rozmiar: "M"
        }
    }, {
        imie: "Isia",
        poziom_slodkosci: 9,
        obraz: {
            url: "http://wlpapers.com/images/closeup-sweet-cat-photo-1.jpg",
            rozmiar: "M"
        }
    }]

    function Wyswietl(e) {
        return function() {
            alert(kotki[e].imie + ", " + kotki[e].poziom_slodkosci);
        }
    }
    window.onload = function() {
        var kotydiv = document.getElementById("koty");
        for (var i = 0; i < kotki.length; i++) {
            var div = document.createElement("div");
            div.innerHTML = "<img src='" + kotki[i].obraz.url + "'>";
            div.addEventListener('click', Wyswietl(i));
            kotydiv.appendChild(div);
        }
    };
