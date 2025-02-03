window.addEventListener("DOMContentLoaded", () => {

	//* ========< Burger start >=====================================================
	const burgerIcon = document.querySelector('.menu-header__burger'),
		menuHeader = document.querySelector('.menu-header__body'),
		menuWrapper = document.querySelector('.menu-header__wrapper'),
		menuHeaderLinks = document.querySelectorAll('.menu-header__link');

	function toggleBurgerClass() {
		burgerIcon.classList.toggle('active');
		menuHeader.classList.toggle('active');
		menuWrapper.classList.toggle('active');
		document.body.classList.toggle('lock');
	}
	function hideBurger() {
		burgerIcon.classList.remove('active');
		menuHeader.classList.remove('active');
		menuWrapper.classList.remove('active');
		document.body.classList.remove('lock');
	}

	burgerIcon.addEventListener('click', function () {
		toggleBurgerClass();
	});

	menuWrapper.addEventListener('click', (event) => {
		if (event.target === menuWrapper && menuHeader.classList.contains('active')) {
			toggleBurgerClass();
		}
	});

	menuHeaderLinks.forEach(link => {
		link.addEventListener('click', hideBurger);
	})

	//* ========< Burger end >=====================================================


	//* ========< Формирование карточек start >====================================
	const pets = [
		{
			"name": "Jennifer",
			"img": "img/pets/pets-jennifer.png",
			"type": "Dog",
			"breed": "Labrador",
			"description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
			"age": "2 months",
			"inoculations": [
				"none"
			],
			"diseases": [
				"none"
			],
			"parasites": [
				"none"
			]
		},
		{
			"name": "Sophia",
			"img": "img/pets/pets-sophia.png",
			"type": "Dog",
			"breed": "Shih tzu",
			"description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
			"age": "1 month",
			"inoculations": [
				"parvovirus"
			],
			"diseases": [
				"none"
			],
			"parasites": [
				"none"
			]
		},
		{
			"name": "Woody",
			"img": "img/pets/pets-woody.png",
			"type": "Dog",
			"breed": "Golden Retriever",
			"description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
			"age": "3 years 6 months",
			"inoculations": [
				"adenovirus",
				" distemper"
			],
			"diseases": [
				"right back leg mobility reduced"
			],
			"parasites": [
				"none"
			]
		},
		{
			"name": "Scarlett",
			"img": "img/pets/pets-scarlet.png",
			"type": "Dog",
			"breed": "Jack Russell Terrier",
			"description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
			"age": "3 months",
			"inoculations": [
				"parainfluenza"
			],
			"diseases": [
				"none"
			],
			"parasites": [
				"none"
			]
		},
		{
			"name": "Katrine",
			"img": "img/pets/pets-katrine.png",
			"type": "Cat",
			"breed": "British Shorthair",
			"description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
			"age": "6 months",
			"inoculations": [
				"panleukopenia"
			],
			"diseases": [
				"none"
			],
			"parasites": [
				"none"
			]
		},
		{
			"name": "Timmy",
			"img": "img/pets/pets-timmy.png",
			"type": "Cat",
			"breed": "British Shorthair",
			"description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
			"age": "2 years 3 months",
			"inoculations": [
				"calicivirus",
				"viral rhinotracheitis"
			],
			"diseases": [
				"kidney stones"
			],
			"parasites": [
				"none"
			]
		},
		{
			"name": "Freddie",
			"img": "img/pets/pets-freddie.png",
			"type": "Cat",
			"breed": "British Shorthair",
			"description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
			"age": "2 months",
			"inoculations": [
				"rabies"
			],
			"diseases": [
				"none"
			],
			"parasites": [
				"none"
			]
		},
		{
			"name": "Charly",
			"img": "img/pets/pets-charly.png",
			"type": "Dog",
			"breed": "Jack Russell Terrier",
			"description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
			"age": "8 years",
			"inoculations": [
				"bordetella bronchiseptica",
				" leptospirosis"
			],
			"diseases": [
				"deafness",
				"blindness"
			],
			"parasites": [
				"lice",
				"fleas"
			]
		}
	];

	//Функция создания карточки питомца
	function createCardPet(data) {
		const card = document.createElement('div');
		card.classList.add('card-pet');
		card.innerHTML = `
					<div class="card-pet__image">
						<img src="${data.img}" alt="${data.type}">
					</div>
					<div class="card-pet__text">
						<div class="card-pet__name">${data.name}</div>
						<a href="#!" class="card-pet__button btn btn--white">Learn more</a>
					</div>
			`;
		return card;
	}

	//* ========< Формирование карточек end >======================================

	//* ========< Slider-pets start >=============================================
	const btnPrev = document.querySelector('.slider-our-friends__control--left'),
		btnNext = document.querySelector('.slider-our-friends__control--right'),
		sliderCarousel = document.querySelector('.slider-our-friends__carousel'),

		cardsContainerCenter = document.querySelector('#cards-container-center'),
		cardsContainerLeft = document.querySelector('#cards-container-left'),
		cardsContainerRight = document.querySelector('#cards-container-right');

	//*Создание массива карточек
	const cardsOfPet = new Array();

	for (let i = 0; i < pets.length; i++) {
		let card = createCardPet(pets[i]);
		card.setAttribute('data-card', `pet-${i + 1}`);
		cardsOfPet.push(card);
	}
	if (document.body.classList.contains('page-main')) {
		//* Заполнение контейнера карточками
		let cardsInContainer;
		let shownCards = new Array();


		//Заполняем центральный контейнер

		function addCenterCard(cardsInContainer) {

			while (shownCards.length < cardsInContainer) {
				let num = randomNum(0, cardsOfPet.length);
				if (!shownCards.includes(cardsOfPet[num])) {
					shownCards.push(cardsOfPet[num]);
				}
			}
			shownCards.forEach(item => {
				cardsContainerCenter.append(item);
			});

			openPopup(shownCards);
		}

		cardsInContainer = 3;
		addCenterCard(cardsInContainer);


		function randomNum(min, max) {
			return Math.floor(Math.random() * (max - min) + min);
		}

		function getCardsToDisplay() {
			let cardsToDisplay = new Array();

			while (cardsToDisplay.length < cardsInContainer) {
				let num = randomNum(0, cardsOfPet.length);
				if (!shownCards.includes(cardsOfPet[num]) && !cardsToDisplay.includes(cardsOfPet[num])) {
					cardsToDisplay.push(cardsOfPet[num]);
				}
			}
			return cardsToDisplay;
		}

		//*События кнопок
		function sliderMoveRight() {

			let rightContainer = cardsContainerRight;

			while (rightContainer.firstElementChild) {
				rightContainer.firstElementChild.remove();
			}

			let cardsToDisplay = getCardsToDisplay();
			shownCards = new Array(...cardsToDisplay);

			cardsToDisplay.forEach(i => {
				rightContainer.append(i);
			});

			sliderCarousel.classList.add('slider-move-left');
			removeEventFromBtn();
		}

		function sliderMoveLeft() {

			let leftContainer = cardsContainerLeft;

			while (leftContainer.firstElementChild) {
				leftContainer.firstElementChild.remove();
			}

			let cardsToDisplay = getCardsToDisplay();
			shownCards = new Array(...cardsToDisplay);

			cardsToDisplay.forEach(i => {
				leftContainer.append(i);
			});
			sliderCarousel.classList.add('slider-move-right');
			removeEventFromBtn();
		}
		console.log(Boolean(cardsContainerRight.firstElementChild));
		function removeEventFromBtn() {
			btnPrev.removeEventListener('click', sliderMoveLeft);
			btnNext.removeEventListener('click', sliderMoveRight);
		}

		btnPrev.addEventListener('click', sliderMoveLeft);
		btnNext.addEventListener('click', sliderMoveRight);

		//*Перелистывание слайдера
		sliderCarousel.addEventListener('animationend', (event) => {
			if (event.animationName === 'moveLeft' || event.animationName === 'moveLeft-2'
				|| event.animationName === 'moveLeft-1') {
				sliderCarousel.classList.remove('slider-move-left');

				const rightContainer = cardsContainerRight.innerHTML;

				cardsContainerCenter.innerHTML = rightContainer;


				openPopup(cardsContainerCenter.querySelectorAll('.card-pet'))
			} else {
				sliderCarousel.classList.remove('slider-move-right');

				const leftContainer = cardsContainerLeft.innerHTML;

				cardsContainerCenter.innerHTML = leftContainer;

				openPopup(cardsContainerCenter.querySelectorAll('.card-pet'))
			}
			btnPrev.addEventListener('click', sliderMoveLeft);
			btnNext.addEventListener('click', sliderMoveRight);
		});

		//* ========< Slider-pets end >=================================================
	}


	//* ========< Pagination on 'pets' start >======================================
	if (document.body.classList.contains('page-pets')) {
		const gallery = document.querySelector('.gallery-pets'),
			galleryWrapper = document.querySelector('.gallery-pets__wrapper'),
			counterPages = document.querySelector('.slider-control--counter'),
			arrowNext = document.querySelector('.slider-control--next'),
			arrowNextEnd = document.querySelector('.slider-control--next-end'),
			arrowPrev = document.querySelector('.slider-control--prev'),
			arrowPrevStart = document.querySelector('.slider-control--prev-start');

		let numberOfPage = 6;

		//Создаём массив на 48 карточек
		const cardsForGallery = new Array();

		//Aлгоритм сортировки Фишера-Йейтса
		for (let i = 0; i < numberOfPage; i++) {
			const setCards = new Array();
			for (let j = 0; j < pets.length; j++) {
				let card = createCardPet(pets[j]);
				card.setAttribute('data-card', `pet-${j + 1}`);
				setCards.push(card);
			}
			mixArray(setCards);
			cardsForGallery.push(setCards);
		}

		//Функция перемешивания массива
		function mixArray(array) {
			let m = array.length, t, i;
			while (m) {
				i = Math.floor(Math.random() * m--);
				t = array[m];
				array[m] = array[i];
				array[i] = t;
			}
			return array;
		}

		//Функция создания страницы с карточками
		function createGalleryPage(data) {
			const galleryOfCards = document.createElement('div');
			galleryOfCards.classList.add('gallery-pets__cards');

			mixArray(data);

			data.forEach(i => {
				galleryOfCards.append(i);
			});

			openPopup(galleryOfCards.querySelectorAll('.card-pet'));

			return galleryOfCards;
		}

		//Создание массива страниц
		const pages = new Array();

		for (let i = 0; i < numberOfPage; i++) {
			let page = createGalleryPage(cardsForGallery[i]);
			pages.push(page);
		}

		//? =====================================================================
		let pageIndex = 1;

		counterPages.innerHTML = `<span>${pageIndex}</span>`;
		arrowPrev.classList.add('slider-control--inactive');
		arrowPrevStart.classList.add('slider-control--inactive');

		pageShow(pageIndex);

		function pageShow(index) {
			galleryWrapper.innerHTML = '';
			galleryWrapper.append(pages[index - 1]);
		}

		function changeIndex(n) {
			pageShow(pageIndex += n);
		}

		arrowNext.addEventListener('click', () => {
			changeIndex(+1);
			counterPages.textContent = `${pageIndex}`;
			if (pageIndex == numberOfPage) {
				arrowNext.classList.add('slider-control--inactive');
				arrowNextEnd.classList.add('slider-control--inactive');
			}
			if (pageIndex > 1 && pageIndex < numberOfPage) {
				arrowPrev.classList.remove('slider-control--inactive');
				arrowPrevStart.classList.remove('slider-control--inactive');
			}

		});
		arrowPrev.addEventListener('click', () => {
			changeIndex(-1);
			counterPages.textContent = `${pageIndex}`;
			if (pageIndex == 1) {
				arrowPrev.classList.add('slider-control--inactive');
				arrowPrevStart.classList.add('slider-control--inactive');
			}
			if (pageIndex < numberOfPage) {
				arrowNext.classList.remove('slider-control--inactive');
				arrowNextEnd.classList.remove('slider-control--inactive');
			}
		});
		arrowNextEnd.addEventListener('click', () => {
			changeIndex(-pageIndex + numberOfPage);
			counterPages.textContent = `${pageIndex}`;
			if (pageIndex == numberOfPage) {
				arrowNext.classList.add('slider-control--inactive');
				arrowNextEnd.classList.add('slider-control--inactive');
				arrowPrev.classList.remove('slider-control--inactive');
				arrowPrevStart.classList.remove('slider-control--inactive');
			}
		});
		arrowPrevStart.addEventListener('click', () => {
			changeIndex(-pageIndex + 1);
			counterPages.textContent = `${pageIndex}`;
			arrowNext.classList.remove('slider-control--inactive');
			arrowNextEnd.classList.remove('slider-control--inactive');
			arrowPrev.classList.add('slider-control--inactive');
			arrowPrevStart.classList.add('slider-control--inactive');
		});
	}


	//* ========< Pagination on 'pets' end >========================================

	//* ========< POPUP start >=====================================================

	function createPopup(data) {
		const element = document.createElement('div');
		element.classList.add('popup');
		element.innerHTML = `
					<div class="popup__body">
						<div class="popup__card card-popup">
							<div class="card-popup__close slider-control">
								<img src="img/icons/cross.svg" alt="cross">
							</div>
							<div class="card-popup__image">
								<img src="${data.img}" alt="${data.type}">
							</div>
							<div class="card-popup__content">
								<h3 class="card-popup__title">${data.name}</h3>
								<div class="card-popup__sub-title">${data.type} - ${data.breed}</div>
								<div class="card-popup__text">${data.description}</div>
								<ul class="card-popup__description descr-popup">
									<li class="descr-popup__age"><span>Age:</span>${data.age}</li>
									<li class="descr-popup__inoculations"><span>Inoculations:</span>${data.inoculations}</li>
									<li class="descr-popup__diseases"><span>Diseases:</span>${data.diseases}</li>
									<li class="descr-popup__parasites"><span>Parasites:</span>${data.parasites}</li>
								</ul>
							</div>
						</div>
					</div>
				`;
		return element;
	}

	const popups = new Array();

	for (let i = 0; i < pets.length; i++) {
		let popup = createPopup(pets[i]);
		popup.setAttribute('data-popup', `pet-${i + 1}`);
		popups.push(popup);
	}

	//Открытие попапа

	function openPopup(items) {
		items.forEach(card => {
			card.addEventListener('click', () => {
				let cardName = card.getAttribute('data-card');

				popups.forEach(popup => {
					let popupName = popup.getAttribute('data-popup');

					if (cardName == popupName) {
						document.querySelector('.wrapper').append(popup);
						popup.classList.add('popup-show');
						document.body.classList.toggle('lock');
					}
				});

				// Закрытие попапа
				const popupClose = document.querySelector('.card-popup__close'),
					popup = document.querySelector('.popup'),
					popupBody = document.querySelector('.popup__body');

				function closePopup() {
					if (document.querySelector('.popup')) {
						document.querySelector('.popup').remove();
						document.body.classList.toggle('lock');
					}
				}

				popupClose.addEventListener('click', () => {
					closePopup();
				});

				//Закрытие по клику на подложке
				popup.addEventListener('click', (event) => {
					if (event.target === popupBody) {
						closePopup();
					}
				});
				//Закрытие по Esc
				document.addEventListener('keydown', (event) => {
					if (event.code === 'Escape' && popup.classList.contains('popup-show')) {
						closePopup();
					}
				});
			});
		});
	}
	//* ========< POPUP end >======================================================

});


