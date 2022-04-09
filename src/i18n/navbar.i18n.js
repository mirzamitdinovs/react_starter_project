const GET_LANG_DATA = (lang) => {
	const data = {
		uz: {
			home: 'Bosh sahifa',
			about: 'Biz haqimizda',
			services: 'Xizmatlar',
			contact: "Biz bilan bog'lanish",
			gallery: 'Gallereya',
			service1: 'Service 1',
			service2: 'Service 2',
			service3: 'Service 3',
		},
		ru: {
			home: 'Главная',
			about: 'О нас',
			services: 'Услуги',
			contact: 'Связаться с нами',
			gallery: 'Галерея',
			service1: 'Service 1',
			service2: 'Service 2',
			service3: 'Service 3',
		},
		en: {
			home: 'Home',
			about: 'About Us',
			services: 'Services',
			contact: 'Contact Us',
			gallery: 'Gallery',
			service1: 'Service 1',
			service2: 'Service 2',
			service3: 'Service 3',
		},
	};
	return data[lang] || data.ru;
};

export default GET_LANG_DATA;
