'use strict';
(function () {

    var data = [
        {
            id: 'box1',
            title: 'First box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['highlighted', 'special-header', 'important']
	},
        {
            id: 'box2',
            title: 'Second box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['special-header', 'important']
	},
        {
            id: 'box3',
            title: 'Third box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['highlighted', 'important']
	},
        {
            id: 'box4',
            title: 'Fourth box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['highlighted']
	},
        {
            id: 'box5',
            title: 'Fifth box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: []
	},
];

    //create objects
    const createBox = (value) => {
        const box = document.createElement("div");
        const header = document.createElement("header");
        const content = document.createElement('p');
        box.className = 'box ';
        box.id = value.id;
        header.innerHTML = value.title;
        content.innerHTML = value.content;
        box.appendChild(header);
        box.appendChild(content);
        container.appendChild(box);


        for (let cat of value.categories) {
            box.classList += `${cat} `;
        }
    }

    const container = document.querySelector("#page-wrapper");
    for (let value of data) {
        createBox(value);
    }

})();
