const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/'

const data = {
	name: 'Chazz',
	surname: 'Mannering',
	teamId: '1',
	id: '6',
	'avatar': 'https://user-images.githubusercontent.com/33430669/106457294-0ad89880-648f-11eb-8596-eb8eae4f9b3b.jpg',
	'mugshot': 'https://user-images.githubusercontent.com/33430669/106457294-0ad89880-648f-11eb-8596-eb8eae4f9b3b.jpg',
	githubHandle: 'Chazzers',
	other: {
			sport: 'Basketbal',
			muziek: 'Jazz, Funk, Lo-fi, Rap',
			werkplek: 'Thuis'
	},
	skills: {
		html: 94,
		css: 80,
		js: 75
	}
}

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}
	
postData(`${url}/squads/1/teams/1/members/6`, data)
	.then(data => {
		console.log('put', data);
	});


async function getData() {
	const response = await fetch(`${url}/squads/1/teams/1/members`)
	.then(res => res.json())
	.then(data => {
		const me = data.filter(item => item.name === "Chazz")
		const profile = me[0]
		const img = document.getElementById('data-img')
		const name = document.getElementById('data-name')
		const skills = document.getElementById('data-skills')
		const skillsArray = {
			html: 'html',
			css: 'css',
			js: 'js'
		}
		
		img.src = profile.mugshot
		name.textContent = profile.name
		
		createBarElement('div', skills, profile.skills.html, skillsArray.html)
		createBarElement('div', skills, profile.skills.css, skillsArray.css)
		createBarElement('div', skills, profile.skills.js, skillsArray.js)
		})
	return response
}

getData()
function createBarElement(htmlTag, container, width, style) {
	const barMask = document.createElement(htmlTag)
	const bar = document.createElement('div')
	const barTextContainer = document.createElement('div')
	const text = document.createElement('p')
	text.textContent = style

	
	barMask.classList.add('bar-mask')
	bar.classList.add(style)
	bar.classList.add('bar')
	barTextContainer.classList.add('bar-text-container')

	container.appendChild(barTextContainer)
	barTextContainer.appendChild(text)
	barTextContainer.appendChild(barMask)
	barMask.appendChild(bar)

	setTimeout(() => {
		bar.style.maxWidth = width + '%'
	}, 500)
}

function createElement(htmlTag, container, content) {
	const tag = document.createElement(htmlTag)
	if(content) {
		tag.textContent = content
	}
	container.appendChild(tag)
}
// Usage: 
// const container = document.querySelector('#container')
// createElement('div', container, data.title)

function createImgElement(src, container) {
	const img = document.createElement('img')
	img.src = src
	container.appendChild(img)
}