function changesStyleRegion(regionSelector) {
    const region = document.querySelector(regionSelector);
    const defolt = document.querySelectorAll('.defolt');

    // ОТСЛЕЖИВАЕМ КЛИК ПО КАРТЕ, ЕСЛИ ВНЕ КАРТЫ СБРАСЫВАЕМ СТИЛИ

    document.addEventListener('click', (event) => {
        const clickedElement = event.target;
        const svg = clickedElement.closest('.map-svg');
        
        if (!svg) {
            const cleanWind = document.querySelector('.map-svg .clean-wind');
            const cleanAdr = document.querySelector('.map-svg .clean-adr');
            const foreignObject = document.querySelector('.map-svg foreignObject');
            defolt.forEach((reg) => {
                reg.style.fill = '';
                reg.style.stroke = '';
            });
          
            if (cleanWind) {
                cleanWind.remove();
                cleanAdr.remove();
                foreignObject.remove();
            }
        }
    });



    region.addEventListener('click', function() {

        const svg = document.querySelector('.map-svg');
        const cleanWind = svg.querySelector('.clean-wind');
        const cleanAdr = svg.querySelector('.clean-adr');
        const foreignObject = svg.querySelector('foreignObject');

        defolt.forEach((reg) => {
            reg.style.fill = '';
            reg.style.stroke = '';
            if (svg) {
                if (cleanWind) {
                  cleanWind.remove();
                  cleanAdr.remove();
                  foreignObject.remove();
                }
            }
        });

        //ФИЛЬТ ПО ОБЛАСТЯМ ГДЕ ВОЙНА

        if (region.id === 'crimea' || region.id === 'donetsk' || region.id === 'luhansk'){
            region.style.fill = '#8d2626d1';
        } else {
            region.style.fill = '#2F5015';
            //region.style.stroke = '#F80303';
        }


        //ДЕЛАЕМ СИНХРОННОЕ ИЗМЕНЕНИЕ СТИЛЕЙ КРЫМА И СЕВАТОПОЛЯ
        const crimea = document.querySelector('#crimea');
        const sevastpol = document.querySelector('#sevastpol');
        const crimeaColor = window.getComputedStyle(crimea).fill;

        if (crimeaColor === 'rgb(141, 38, 38)') {
            sevastpol.style.fill = '#8d2626d1';
        } else if (crimeaColor === 'rgb(255, 208, 130)') {
            sevastpol.style.fill = '#FFD082';
        }
        //ДЕЛАЕМ СИНХРОННОЕ ИЗМЕНЕНИЕ СТИЛЕЙ КИЕВА И ОБЛАСТИ 
        const kyiv = document.querySelector('#kyiv');
        const kyivCity = document.querySelector('#kyiv-city');
        const kyivColor = window.getComputedStyle(kyiv).fill;

        if (kyivColor === 'rgb(47, 80, 21)') {
            kyivCity.style.fill = '#2F5015';
        } else if (kyivColor === 'rgb(248, 3, 3)') {
            kyivCity.style.fill = '#F80303';
        } else {
            kyivCity.style.fill = '';
        }



        //ДИНАМИЧЕСКОЕ ДОБАВЛЕНИЕ ОКОН В ВЕРСТКУ БЕЗ БД
        if (region.id === 'crimea') {
            const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectElement.setAttribute('id', 'crimea-wind');
            rectElement.setAttribute('class', 'clean-wind');
            rectElement.setAttribute('x', '370');
            rectElement.setAttribute('y', '350');
            rectElement.setAttribute('width', '200');
            rectElement.setAttribute('height', '60');
            rectElement.setAttribute('rx', '15');
            rectElement.setAttribute('stroke-width', '2');
            rectElement.setAttribute('stroke', '#FFD082');
            rectElement.setAttribute('fill', 'white');
            svg.appendChild(rectElement);

        
            const foreignObjectElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            foreignObjectElement.setAttribute('class', 'clean-wind');
            foreignObjectElement.setAttribute('x', '400');
            foreignObjectElement.setAttribute('y', '370');
            foreignObjectElement.setAttribute('width', '150');
            foreignObjectElement.setAttribute('height', '30');
        
            const h6Element = document.createElement('h6');
            h6Element.id = 'crimea-adr';
            h6Element.setAttribute('class', 'clean-adr');
            h6Element.textContent = 'Крым - це Україна!';
            
            foreignObjectElement.appendChild(h6Element);
            
            svg.appendChild(rectElement);
            svg.appendChild(foreignObjectElement);
        } else if (region.id === 'donetsk') {
            const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectElement.id = 'donetsk-wind';
            rectElement.setAttribute('class', 'clean-wind');
            rectElement.setAttribute('x', '410');
            rectElement.setAttribute('y', '240');
            rectElement.setAttribute('width', '200');
            rectElement.setAttribute('height', '60');
            rectElement.setAttribute('rx', '15');
            rectElement.setAttribute('stroke-width', '2');
            rectElement.setAttribute('stroke', '#FFD082');
            rectElement.setAttribute('fill', 'white');
            
            const foreignObjectElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            foreignObjectElement.setAttribute('x', '440');
            foreignObjectElement.setAttribute('y', '260');
            foreignObjectElement.setAttribute('width', '150');
            foreignObjectElement.setAttribute('height', '30');
            
            const h6Element = document.createElement('h6');
            h6Element.id = 'donetsk-adr';
            h6Element.setAttribute('class', 'clean-adr');
            h6Element.textContent = 'Донецьк - це Україна!';
            
            foreignObjectElement.appendChild(h6Element);
            
            svg.appendChild(rectElement);
            svg.appendChild(foreignObjectElement);
        } else if (region.id === 'luhansk') {
            const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectElement.id = 'luhansk-wind';
            rectElement.setAttribute('class', 'clean-wind');
            rectElement.setAttribute('x', '410');
            rectElement.setAttribute('y', '170');
            rectElement.setAttribute('width', '200');
            rectElement.setAttribute('height', '60');
            rectElement.setAttribute('rx', '15');
            rectElement.setAttribute('stroke-width', '2');
            rectElement.setAttribute('stroke', '#FFD082');
            rectElement.setAttribute('fill', 'white');

            const foreignObjectElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            foreignObjectElement.setAttribute('x', '440');
            foreignObjectElement.setAttribute('y', '190');
            foreignObjectElement.setAttribute('width', '150');
            foreignObjectElement.setAttribute('height', '30');

            const h6Element = document.createElement('h6');
            h6Element.id = 'luhansk-adr';
            h6Element.setAttribute('class', 'clean-adr');
            h6Element.textContent = 'Луганськ - це Україна!';

            foreignObjectElement.appendChild(h6Element);

            svg.appendChild(rectElement);
            svg.appendChild(foreignObjectElement);

        } else if (region.id === 'volyn') {
            const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectElement.id = 'volyn-wind';
            rectElement.setAttribute('class', 'clean-wind');
            rectElement.setAttribute('x', '110');
            rectElement.setAttribute('y', '50');
            rectElement.setAttribute('width', '200');
            rectElement.setAttribute('height', '60');
            rectElement.setAttribute('rx', '15');
            rectElement.setAttribute('stroke-width', '2');
            rectElement.setAttribute('stroke', '#FFD082');
            rectElement.setAttribute('fill', 'white');

            const foreignObjectElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            foreignObjectElement.setAttribute('x', '130');
            foreignObjectElement.setAttribute('y', '65');
            foreignObjectElement.setAttribute('width', '150');
            foreignObjectElement.setAttribute('height', '30');

            const h6Element = document.createElement('h6');
            h6Element.id = 'volyn-adr';
            h6Element.setAttribute('class', 'clean-adr');
            h6Element.innerHTML = 'г.Луцк <br> ул.Промишленная, 18а';

            foreignObjectElement.appendChild(h6Element);

            const svgElement = document.querySelector('.map-svg');
            svgElement.appendChild(rectElement);
            svgElement.appendChild(foreignObjectElement);

        } else if (region.id === 'lviv') {
            const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectElement.id = 'lviv-wind';
            rectElement.setAttribute('class', 'clean-wind');
            rectElement.setAttribute('x', '70');
            rectElement.setAttribute('y', '110');
            rectElement.setAttribute('width', '200');
            rectElement.setAttribute('height', '60');
            rectElement.setAttribute('rx', '15');
            rectElement.setAttribute('stroke-width', '2');
            rectElement.setAttribute('stroke', '#FFD082');
            rectElement.setAttribute('fill', 'white');

            const foreignObjectElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            foreignObjectElement.setAttribute('x', '90');
            foreignObjectElement.setAttribute('y', '125');
            foreignObjectElement.setAttribute('width', '150');
            foreignObjectElement.setAttribute('height', '30');

            const h6Element = document.createElement('h6');
            h6Element.id = 'lviv-adr';
            h6Element.setAttribute('class', 'clean-adr');
            h6Element.innerHTML = 'г.Львов <br> ул.Промишленная, 18а';

            foreignObjectElement.appendChild(h6Element);

            const svgElement = document.querySelector('.map-svg');
            svgElement.appendChild(rectElement);
            svgElement.appendChild(foreignObjectElement);

        } else if (region.id === 'transcarpathia') {
            const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectElement.id = 'transcarpathia-wind';
            rectElement.setAttribute('class', 'clean-wind');
            rectElement.setAttribute('x', '40');
            rectElement.setAttribute('y', '180');
            rectElement.setAttribute('width', '200');
            rectElement.setAttribute('height', '60');
            rectElement.setAttribute('rx', '15');
            rectElement.setAttribute('stroke-width', '2');
            rectElement.setAttribute('stroke', '#FFD082');
            rectElement.setAttribute('fill', 'white');

            const foreignObjectElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            foreignObjectElement.setAttribute('x', '60');
            foreignObjectElement.setAttribute('y', '195');
            foreignObjectElement.setAttribute('width', '150');
            foreignObjectElement.setAttribute('height', '30');

            const h6Element = document.createElement('h6');
            h6Element.id = 'transcarpathia-adr';
            h6Element.setAttribute('class', 'clean-adr');
            h6Element.innerHTML = 'г.Ужгород <br> ул.Промишленная, 18а';

            foreignObjectElement.appendChild(h6Element);

            const svgElement = document.querySelector('.map-svg');
            svgElement.appendChild(rectElement);
            svgElement.appendChild(foreignObjectElement);

        } else if (region.id === 'ivano-Frankivsk') {
            const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectElement.id = 'ivano-Frankivsk-wind';
            rectElement.setAttribute('class', 'clean-wind');
            rectElement.setAttribute('x', '85');
            rectElement.setAttribute('y', '180');
            rectElement.setAttribute('width', '200');
            rectElement.setAttribute('height', '60');
            rectElement.setAttribute('rx', '15');
            rectElement.setAttribute('stroke-width', '2');
            rectElement.setAttribute('stroke', '#FFD082');
            rectElement.setAttribute('fill', 'white');

            const foreignObjectElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            foreignObjectElement.setAttribute('x', '105');
            foreignObjectElement.setAttribute('y', '195');
            foreignObjectElement.setAttribute('width', '150');
            foreignObjectElement.setAttribute('height', '30');

            const h6Element = document.createElement('h6');
            h6Element.id = 'ivano-Frankivsk-adr';
            h6Element.setAttribute('class', 'clean-adr');
            h6Element.innerHTML = 'г.Ивано-Франковск <br> ул.Промишленная, 18а';

            foreignObjectElement.appendChild(h6Element);

            const svgElement = document.querySelector('.map-svg');
            svgElement.appendChild(rectElement);
            svgElement.appendChild(foreignObjectElement);

        } else if (region.id === 'ternopil') {
            const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectElement.id = 'ternopil-wind';
            rectElement.setAttribute('class', 'clean-wind');
            rectElement.setAttribute('x', '130');
            rectElement.setAttribute('y', '130');
            rectElement.setAttribute('width', '200');
            rectElement.setAttribute('height', '60');
            rectElement.setAttribute('rx', '15');
            rectElement.setAttribute('stroke-width', '2');
            rectElement.setAttribute('stroke', '#FFD082');
            rectElement.setAttribute('fill', 'white');

            const foreignObjectElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            foreignObjectElement.setAttribute('x', '150');
            foreignObjectElement.setAttribute('y', '145');
            foreignObjectElement.setAttribute('width', '150');
            foreignObjectElement.setAttribute('height', '30');

            const h6Element = document.createElement('h6');
            h6Element.id = 'ternopil-adr';
            h6Element.setAttribute('class', 'clean-adr');
            h6Element.innerHTML = 'г.Тернополь <br> ул.Промишленная, 18а';

            foreignObjectElement.appendChild(h6Element);

            const svgElement = document.querySelector('.map-svg');
            svgElement.appendChild(rectElement);
            svgElement.appendChild(foreignObjectElement);

        } else if (region.id === 'chernivtsi') {
            const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectElement.id = 'chernivtsi-wind';
            rectElement.setAttribute('class', 'clean-wind');
            rectElement.setAttribute('x', '150');
            rectElement.setAttribute('y', '180');
            rectElement.setAttribute('width', '200');
            rectElement.setAttribute('height', '60');
            rectElement.setAttribute('rx', '15');
            rectElement.setAttribute('stroke-width', '2');
            rectElement.setAttribute('stroke', '#FFD082');
            rectElement.setAttribute('fill', 'white');

            const foreignObjectElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            foreignObjectElement.setAttribute('x', '170');
            foreignObjectElement.setAttribute('y', '195');
            foreignObjectElement.setAttribute('width', '150');
            foreignObjectElement.setAttribute('height', '30');

            const h6Element = document.createElement('h6');
            h6Element.id = 'chernivtsi-adr';
            h6Element.setAttribute('class', 'clean-adr');
            h6Element.innerHTML = 'г.Черновцы <br> ул.Промишленная, 18а';

            foreignObjectElement.appendChild(h6Element);

            const svgElement = document.querySelector('.map-svg');
            svgElement.appendChild(rectElement);
            svgElement.appendChild(foreignObjectElement);

        } else if (region.id === 'rivne') {
            const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectElement.id = 'rivne-wind';
            rectElement.setAttribute('class', 'clean-wind');
            rectElement.setAttribute('x', '160');
            rectElement.setAttribute('y', '60');
            rectElement.setAttribute('width', '200');
            rectElement.setAttribute('height', '60');
            rectElement.setAttribute('rx', '15');
            rectElement.setAttribute('stroke-width', '2');
            rectElement.setAttribute('stroke', '#FFD082');
            rectElement.setAttribute('fill', 'white');

            const foreignObjectElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            foreignObjectElement.setAttribute('x', '180');
            foreignObjectElement.setAttribute('y', '75');
            foreignObjectElement.setAttribute('width', '150');
            foreignObjectElement.setAttribute('height', '30');

            const h6Element = document.createElement('h6');
            h6Element.id = 'rivne-adr';
            h6Element.setAttribute('class', 'clean-adr');
            h6Element.innerHTML = 'г.Ровно <br> ул.Промишленная, 18а';

            foreignObjectElement.appendChild(h6Element);

            const svgElement = document.querySelector('.map-svg');
            svgElement.appendChild(rectElement);
            svgElement.appendChild(foreignObjectElement);

        } else if (region.id === 'khmelnytskyy') {
            const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectElement.id = 'khmelnytskyy-wind';
            rectElement.setAttribute('class', 'clean-wind');
            rectElement.setAttribute('x', '180');
            rectElement.setAttribute('y', '140');
            rectElement.setAttribute('width', '200');
            rectElement.setAttribute('height', '60');
            rectElement.setAttribute('rx', '15');
            rectElement.setAttribute('stroke-width', '2');
            rectElement.setAttribute('stroke', '#FFD082');
            rectElement.setAttribute('fill', 'white');

            const foreignObjectElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            foreignObjectElement.setAttribute('x', '200');
            foreignObjectElement.setAttribute('y', '155');
            foreignObjectElement.setAttribute('width', '150');
            foreignObjectElement.setAttribute('height', '30');

            const h6Element = document.createElement('h6');
            h6Element.id = 'khmelnytskyy-adr';
            h6Element.setAttribute('class', 'clean-adr');
            h6Element.innerHTML = 'г.Хмельницкий <br> ул.Промишленная, 18а';

            foreignObjectElement.appendChild(h6Element);

            const svgElement = document.querySelector('.map-svg');
            svgElement.appendChild(rectElement);
            svgElement.appendChild(foreignObjectElement);

        } else if (region.id === 'zhytomyr') {
            const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectElement.id = 'zhytomyr-wind';
            rectElement.setAttribute('class', 'clean-wind');
            rectElement.setAttribute('x', '240');
            rectElement.setAttribute('y', '70');
            rectElement.setAttribute('width', '200');
            rectElement.setAttribute('height', '60');
            rectElement.setAttribute('rx', '15');
            rectElement.setAttribute('stroke-width', '2');
            rectElement.setAttribute('stroke', '#FFD082');
            rectElement.setAttribute('fill', 'white');

            const foreignObjectElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            foreignObjectElement.setAttribute('x', '260');
            foreignObjectElement.setAttribute('y', '85');
            foreignObjectElement.setAttribute('width', '150');
            foreignObjectElement.setAttribute('height', '30');

            const h6Element = document.createElement('h6');
            h6Element.id = 'zhytomyr-adr';
            h6Element.setAttribute('class', 'clean-adr');
            h6Element.innerHTML = 'г.Житомир <br> ул.Промишленная, 18а';

            foreignObjectElement.appendChild(h6Element);

            const svgElement = document.querySelector('.map-svg');
            svgElement.appendChild(rectElement);
            svgElement.appendChild(foreignObjectElement);

        } else if (region.id === 'vinnytsya') {
            const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectElement.id = 'vinnytsya-wind';
            rectElement.setAttribute('class', 'clean-wind');
            rectElement.setAttribute('x', '240');
            rectElement.setAttribute('y', '150');
            rectElement.setAttribute('width', '200');
            rectElement.setAttribute('height', '60');
            rectElement.setAttribute('rx', '15');
            rectElement.setAttribute('stroke-width', '2');
            rectElement.setAttribute('stroke', '#FFD082');
            rectElement.setAttribute('fill', 'white');

            const foreignObjectElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            foreignObjectElement.setAttribute('x', '260');
            foreignObjectElement.setAttribute('y', '165');
            foreignObjectElement.setAttribute('width', '165');
            foreignObjectElement.setAttribute('height', '30');

            const h6Element = document.createElement('h6');
            h6Element.id = 'vinnytsya-adr';
            h6Element.setAttribute('class', 'clean-adr');
            h6Element.innerHTML = 'г.Винница <br> ул.Промишленная, 18а';

            foreignObjectElement.appendChild(h6Element);

            const svgElement = document.querySelector('.map-svg');
            svgElement.appendChild(rectElement);
            svgElement.appendChild(foreignObjectElement);

        } else if (region.id === 'kyiv') {
            const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectElement.id = 'kyiv-wind';
            rectElement.setAttribute('class', 'clean-wind');
            rectElement.setAttribute('x', '290');
            rectElement.setAttribute('y', '70');
            rectElement.setAttribute('width', '200');
            rectElement.setAttribute('height', '60');
            rectElement.setAttribute('rx', '15');
            rectElement.setAttribute('stroke-width', '2');
            rectElement.setAttribute('stroke', '#FFD082');
            rectElement.setAttribute('fill', 'white');

            const foreignObjectElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            foreignObjectElement.setAttribute('x', '310');
            foreignObjectElement.setAttribute('y', '85');
            foreignObjectElement.setAttribute('width', '150');
            foreignObjectElement.setAttribute('height', '30');

            const h6Element = document.createElement('h6');
            h6Element.id = 'kyiv-adr';
            h6Element.setAttribute('class', 'clean-adr');
            h6Element.innerHTML = 'г.Киев <br> ул.Промишленная, 18а';

            foreignObjectElement.appendChild(h6Element);

            const svgElement = document.querySelector('.map-svg');
            svgElement.appendChild(rectElement);
            svgElement.appendChild(foreignObjectElement);

        } else if (region.id === 'cherkasy') {
            const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectElement.id = 'cherkasy-wind';
            rectElement.setAttribute('class', 'clean-wind');
            rectElement.setAttribute('x', '290');
            rectElement.setAttribute('y', '170');
            rectElement.setAttribute('width', '200');
            rectElement.setAttribute('height', '60');
            rectElement.setAttribute('rx', '15');
            rectElement.setAttribute('stroke-width', '2');
            rectElement.setAttribute('stroke', '#FFD082');
            rectElement.setAttribute('fill', 'white');

            const foreignObjectElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            foreignObjectElement.setAttribute('x', '310');
            foreignObjectElement.setAttribute('y', '185');
            foreignObjectElement.setAttribute('width', '150');
            foreignObjectElement.setAttribute('height', '30');

            const h6Element = document.createElement('h6');
            h6Element.id = 'cherkasy-adr';
            h6Element.setAttribute('class', 'clean-adr');
            h6Element.innerHTML = 'г.Черкассы <br> ул.Промишленная, 18а';

            foreignObjectElement.appendChild(h6Element);

            const svgElement = document.querySelector('.map-svg');
            svgElement.appendChild(rectElement);
            svgElement.appendChild(foreignObjectElement);

        } else if (region.id === 'kirovohrad') {
            const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectElement.id = 'kirovohrad-wind';
            rectElement.setAttribute('class', 'clean-wind');
            rectElement.setAttribute('x', '290');
            rectElement.setAttribute('y', '220');
            rectElement.setAttribute('width', '200');
            rectElement.setAttribute('height', '60');
            rectElement.setAttribute('rx', '15');
            rectElement.setAttribute('stroke-width', '2');
            rectElement.setAttribute('stroke', '#FFD082');
            rectElement.setAttribute('fill', 'white');

            const foreignObjectElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            foreignObjectElement.setAttribute('x', '310');
            foreignObjectElement.setAttribute('y', '235');
            foreignObjectElement.setAttribute('width', '150');
            foreignObjectElement.setAttribute('height', '30');

            const h6Element = document.createElement('h6');
            h6Element.id = 'kirovohrad-adr';
            h6Element.setAttribute('class', 'clean-adr');
            h6Element.innerHTML = 'г.Кропивницкий <br> ул.Промишленная, 18а';

            foreignObjectElement.appendChild(h6Element);

            const svgElement = document.querySelector('.map-svg');
            svgElement.appendChild(rectElement);
            svgElement.appendChild(foreignObjectElement);

        } else if (region.id === 'odessa') {
            const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectElement.id = 'odessa-wind';
            rectElement.setAttribute('class', 'clean-wind');
            rectElement.setAttribute('x', '270');
            rectElement.setAttribute('y', '300');
            rectElement.setAttribute('width', '200');
            rectElement.setAttribute('height', '60');
            rectElement.setAttribute('rx', '15');
            rectElement.setAttribute('stroke-width', '2');
            rectElement.setAttribute('stroke', '#FFD082');
            rectElement.setAttribute('fill', 'white');

            const foreignObjectElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            foreignObjectElement.setAttribute('x', '290');
            foreignObjectElement.setAttribute('y', '315');
            foreignObjectElement.setAttribute('width', '150');
            foreignObjectElement.setAttribute('height', '30');

            const h6Element = document.createElement('h6');
            h6Element.id = 'odessa-adr';
            h6Element.setAttribute('class', 'clean-adr');
            h6Element.innerHTML = 'г.Одесса <br> ул.Промишленная, 18а';

            foreignObjectElement.appendChild(h6Element);

            const svgElement = document.querySelector('.map-svg');
            svgElement.appendChild(rectElement);
            svgElement.appendChild(foreignObjectElement);

        } else if (region.id === 'mykolayiv') {
            const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectElement.id = 'mykolayiv-wind';
            rectElement.setAttribute('class', 'clean-wind');
            rectElement.setAttribute('x', '340');
            rectElement.setAttribute('y', '250');
            rectElement.setAttribute('width', '200');
            rectElement.setAttribute('height', '60');
            rectElement.setAttribute('rx', '15');
            rectElement.setAttribute('stroke-width', '2');
            rectElement.setAttribute('stroke', '#FFD082');
            rectElement.setAttribute('fill', 'white');

            const foreignObjectElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            foreignObjectElement.setAttribute('x', '360');
            foreignObjectElement.setAttribute('y', '265');
            foreignObjectElement.setAttribute('width', '150');
            foreignObjectElement.setAttribute('height', '30');

            const h6Element = document.createElement('h6');
            h6Element.id = 'mykolayiv-adr';
            h6Element.setAttribute('class', 'clean-adr');
            h6Element.innerHTML = 'г.Николаев <br> ул.Промишленная, 18а';

            foreignObjectElement.appendChild(h6Element);

            const svgElement = document.querySelector('.map-svg');
            svgElement.appendChild(rectElement);
            svgElement.appendChild(foreignObjectElement);

        } else if (region.id === 'kherson') {
            const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectElement.id = 'kherson-wind';
            rectElement.setAttribute('class', 'clean-wind');
            rectElement.setAttribute('x', '360');
            rectElement.setAttribute('y', '310');
            rectElement.setAttribute('width', '200');
            rectElement.setAttribute('height', '60');
            rectElement.setAttribute('rx', '15');
            rectElement.setAttribute('stroke-width', '2');
            rectElement.setAttribute('stroke', '#FFD082');
            rectElement.setAttribute('fill', 'white');

            const foreignObjectElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            foreignObjectElement.setAttribute('x', '380');
            foreignObjectElement.setAttribute('y', '325');
            foreignObjectElement.setAttribute('width', '150');
            foreignObjectElement.setAttribute('height', '30');

            const h6Element = document.createElement('h6');
            h6Element.id = 'kherson-adr';
            h6Element.setAttribute('class', 'clean-adr');
            h6Element.innerHTML = 'г.Херсон <br> ул.Промишленная, 18а';

            foreignObjectElement.appendChild(h6Element);

            const svgElement = document.querySelector('.map-svg');
            svgElement.appendChild(rectElement);
            svgElement.appendChild(foreignObjectElement);

        } else if (region.id === 'zaporizhzhya') {
            const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectElement.id = 'zaporizhzhya-wind';
            rectElement.setAttribute('class', 'clean-wind');
            rectElement.setAttribute('x', '400');
            rectElement.setAttribute('y', '280');
            rectElement.setAttribute('width', '200');
            rectElement.setAttribute('height', '60');
            rectElement.setAttribute('rx', '15');
            rectElement.setAttribute('stroke-width', '2');
            rectElement.setAttribute('stroke', '#FFD082');
            rectElement.setAttribute('fill', 'white');

            const foreignObjectElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            foreignObjectElement.setAttribute('x', '420');
            foreignObjectElement.setAttribute('y', '295');
            foreignObjectElement.setAttribute('width', '150');
            foreignObjectElement.setAttribute('height', '30');

            const h6Element = document.createElement('h6');
            h6Element.id = 'zaporizhzhya-adr';
            h6Element.setAttribute('class', 'clean-adr');
            h6Element.innerHTML = 'г.Запорожье <br> ул.Промишленная, 18а';

            foreignObjectElement.appendChild(h6Element);

            const svgElement = document.querySelector('.map-svg');
            svgElement.appendChild(rectElement);
            svgElement.appendChild(foreignObjectElement);

        } else if (region.id === 'dnipropetrovsk') {
            const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectElement.id = 'dnipropetrovsk-wind';
            rectElement.setAttribute('class', 'clean-wind');
            rectElement.setAttribute('x', '370');
            rectElement.setAttribute('y', '230');
            rectElement.setAttribute('width', '200');
            rectElement.setAttribute('height', '60');
            rectElement.setAttribute('rx', '15');
            rectElement.setAttribute('stroke-width', '2');
            rectElement.setAttribute('stroke', '#FFD082');
            rectElement.setAttribute('fill', 'white');

            const foreignObjectElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            foreignObjectElement.setAttribute('x', '390');
            foreignObjectElement.setAttribute('y', '245');
            foreignObjectElement.setAttribute('width', '150');
            foreignObjectElement.setAttribute('height', '30');

            const h6Element = document.createElement('h6');
            h6Element.id = 'dnipropetrovsk-adr';
            h6Element.setAttribute('class', 'clean-adr');
            h6Element.innerHTML = 'г.Днепр <br> ул.Промишленная, 18а';

            foreignObjectElement.appendChild(h6Element);

            const svgElement = document.querySelector('.map-svg');
            svgElement.appendChild(rectElement);
            svgElement.appendChild(foreignObjectElement);

        } else if (region.id === 'poltava') {
            const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectElement.id = 'poltava-wind';
            rectElement.setAttribute('class', 'clean-wind');
            rectElement.setAttribute('x', '360');
            rectElement.setAttribute('y', '170');
            rectElement.setAttribute('width', '200');
            rectElement.setAttribute('height', '60');
            rectElement.setAttribute('rx', '15');
            rectElement.setAttribute('stroke-width', '2');
            rectElement.setAttribute('stroke', '#FFD082');
            rectElement.setAttribute('fill', 'white');

            const foreignObjectElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            foreignObjectElement.setAttribute('x', '380');
            foreignObjectElement.setAttribute('y', '185');
            foreignObjectElement.setAttribute('width', '150');
            foreignObjectElement.setAttribute('height', '30');

            const h6Element = document.createElement('h6');
            h6Element.id = 'poltava-adr';
            h6Element.setAttribute('class', 'clean-adr');
            h6Element.innerHTML = 'г.Полтава <br> ул.Промишленная, 18а';

            foreignObjectElement.appendChild(h6Element);

            const svgElement = document.querySelector('.map-svg');
            svgElement.appendChild(rectElement);
            svgElement.appendChild(foreignObjectElement);

        } else if (region.id === 'chernihiv') {
            const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectElement.id = 'chernihiv-wind';
            rectElement.setAttribute('class', 'clean-wind');
            rectElement.setAttribute('x', '320');
            rectElement.setAttribute('y', '80');
            rectElement.setAttribute('width', '200');
            rectElement.setAttribute('height', '60');
            rectElement.setAttribute('rx', '15');
            rectElement.setAttribute('stroke-width', '2');
            rectElement.setAttribute('stroke', '#FFD082');
            rectElement.setAttribute('fill', 'white');

            const foreignObjectElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            foreignObjectElement.setAttribute('x', '340');
            foreignObjectElement.setAttribute('y', '95');
            foreignObjectElement.setAttribute('width', '150');
            foreignObjectElement.setAttribute('height', '30');

            const h6Element = document.createElement('h6');
            h6Element.id = 'chernihiv-adr';
            h6Element.setAttribute('class', 'clean-adr');
            h6Element.innerHTML = 'г.Чернигов <br> ул.Промишленная, 18а';

            foreignObjectElement.appendChild(h6Element);

            const svgElement = document.querySelector('.map-svg');
            svgElement.appendChild(rectElement);
            svgElement.appendChild(foreignObjectElement);

        } else if (region.id === 'kharkiv') {
            const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectElement.id = 'kharkiv-wind';
            rectElement.setAttribute('class', 'clean-wind');
            rectElement.setAttribute('x', '410');
            rectElement.setAttribute('y', '175');
            rectElement.setAttribute('width', '200');
            rectElement.setAttribute('height', '60');
            rectElement.setAttribute('rx', '15');
            rectElement.setAttribute('stroke-width', '2');
            rectElement.setAttribute('stroke', '#FFD082');
            rectElement.setAttribute('fill', 'white');

            const foreignObjectElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            foreignObjectElement.setAttribute('x', '430');
            foreignObjectElement.setAttribute('y', '190');
            foreignObjectElement.setAttribute('width', '150');
            foreignObjectElement.setAttribute('height', '30');

            const h6Element = document.createElement('h6');
            h6Element.id = 'kharkiv-adr';
            h6Element.setAttribute('class', 'clean-adr');
            h6Element.innerHTML = 'г.Харьков <br> ул.Промишленная, 18а';

            foreignObjectElement.appendChild(h6Element);

            const svgElement = document.querySelector('.map-svg');
            svgElement.appendChild(rectElement);
            svgElement.appendChild(foreignObjectElement);

        } else if (region.id === 'sumy') {
            const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectElement.id = 'sumy-wind';
            rectElement.setAttribute('class', 'clean-wind');
            rectElement.setAttribute('x', '380');
            rectElement.setAttribute('y', '90');
            rectElement.setAttribute('width', '200');
            rectElement.setAttribute('height', '60');
            rectElement.setAttribute('rx', '15');
            rectElement.setAttribute('stroke-width', '2');
            rectElement.setAttribute('stroke', '#FFD082');
            rectElement.setAttribute('fill', 'white');

            const foreignObjectElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            foreignObjectElement.setAttribute('x', '400');
            foreignObjectElement.setAttribute('y', '105');
            foreignObjectElement.setAttribute('width', '150');
            foreignObjectElement.setAttribute('height', '30');

            const h6Element = document.createElement('h6');
            h6Element.id = 'sumy-adr';
            h6Element.setAttribute('class', 'clean-adr');
            h6Element.innerHTML = 'г.Сумы <br> ул.Промишленная, 18а';

            foreignObjectElement.appendChild(h6Element);

            const svgElement = document.querySelector('.map-svg');
            svgElement.appendChild(rectElement);
            svgElement.appendChild(foreignObjectElement);

        }

    });
}

changesStyleRegion("#donetsk");
changesStyleRegion("#luhansk");
changesStyleRegion("#crimea");
changesStyleRegion("#cherkasy");
changesStyleRegion("#zaporizhzhya");
changesStyleRegion("#chernihiv");
changesStyleRegion("#chernivtsi");
changesStyleRegion("#dnipropetrovsk");
changesStyleRegion("#ivano-Frankivsk");
changesStyleRegion("#kharkiv");
changesStyleRegion("#khmelnytskyy");
changesStyleRegion("#kherson");
changesStyleRegion("#kyiv");
changesStyleRegion("#kirovohrad");
changesStyleRegion("#lviv");
changesStyleRegion("#mykolayiv");
changesStyleRegion("#odessa");
changesStyleRegion("#poltava");
changesStyleRegion("#rivne");
changesStyleRegion("#sumy");
changesStyleRegion("#ternopil");
changesStyleRegion("#transcarpathia");
changesStyleRegion("#vinnytsya");
changesStyleRegion("#volyn");
changesStyleRegion("#zhytomyr");