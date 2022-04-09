import { useAppContext } from 'contexts/AppContext';
import GET_LANG_DATA from 'i18n/navbar.i18n';
import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
	const { state, dispatch } = useAppContext();
	const lang = state.lang;
	const i18n = GET_LANG_DATA(state.lang);
	console.log('state: ', state);
	// const lang = localStorage.getItem('lang') || 'ru';
	const nav_data = [
		{
			title: i18n.home,
			link: '/',
		},
		{
			title: i18n.about,
			link: '/about',
		},
		{
			title: i18n.services,
			link: '/services',
			children: [
				{
					title: i18n.service1,
					link: '/services/1',
				},
				{
					title: i18n.service2,
					link: '/services/2',
				},
				{
					title: i18n.service3,
					link: '/services/3',
				},
			],
		},
		{
			title: i18n.gallery,
			link: '/gallery',
		},
		{
			title: i18n.contact,
			link: '/contact',
		},
	];

	// const CHANGE_LANG = (newLang) => {
	// 	if (lang !== newLang) {
	// 		localStorage.setItem('lang', newLang);
	// 		window.location.reload();
	// 	}
	// };

	const CHANGE_LANG = (newLang) => {
		if (lang !== newLang) {
			dispatch({
				type: 'change_language',
				value: newLang,
			});
		}
	};

	console.log('i18n: ', i18n);
	return (
		<div className='site-header header-v2'>
			<div className='flat-top'>
				<div className='container'>
					<div className='row'>
						<div className='flat-wrapper'>
							<div className='custom-info'>
								<span>Have any questions?</span>
								<span>
									<i className='fa fa-reply' />
									themesflat@gmail.com
								</span>
								<span>
									<i className='fa fa-map-marker' />
									66 Nicholson St Buffalo New York US
								</span>
								<span>
									<i className='fa fa-phone' />+ 012 222 989899
								</span>
							</div>
							<div className='social-links'>
								<a href='#'>
									<i className='fa fa-twitter' />
								</a>
								<a href='#'>
									<i className='fa fa-facebook-official' />
								</a>
								<a href='#'>
									<i className='fa fa-google-plus' />
								</a>
								<a href='#'>
									<i className='fa fa-pinterest' />
								</a>
							</div>
						</div>
						{/* /.flat-wrapper */}
					</div>
					{/* /.row */}
				</div>
				{/* /.container */}
			</div>
			{/* /.flat-top */}
			<header id='header' className='header'>
				<div className='header-wrap'>
					<div id='logo' className='logo'>
						<Link to='/'>
							<img src='images/logo.png' alt='images' />
						</Link>
					</div>
					{/* /.logo */}
					<div className='btn-menu'>
						<span />
					</div>
					{/* //mobile menu button */}
					<div className='nav-wrap'>
						<nav id='mainnav' className='mainnav'>
							<div className='menu-extra'>
								<ul>
									<li className='shopping-cart' style={{ cursor: 'pointer' }}>
										<a
											style={{
												display: 'flex',
												alignItems: 'center',
												color: '#32BFC0',
											}}
										>
											<i
												className='fa fa-language'
												style={{
													fontSize: '24px',
													marginRight: '5px',
												}}
											/>
											<p>
												<b>{lang.toUpperCase()}</b>
											</p>
										</a>
										<div class='subcart'>
											<div className='widget_shopping_cart_content'>
												<ul
													className='cart_list product_list_widget'
													style={{
														display: 'flex',
														flexDirection: 'column',
														alignItems: 'center',
													}}
												>
													{['UZ', 'RU', 'EN'].map((item, index) => (
														<li
															key={index}
															className='mini_cart_item'
															style={{
																width: '50px',
																color:
																	item.toLowerCase() === lang ? '#32BFC0' : '',
															}}
															onClick={() => CHANGE_LANG(item.toLowerCase())}
														>
															{item}
														</li>
													))}
												</ul>
											</div>
										</div>
									</li>
								</ul>
							</div>
							{/* /.menu-extra */}
							<ul className='menu'>
								{nav_data?.map((item, index) => (
									<li key={index}>
										<Link to={item.link}>{item.title}</Link>
										{item.children && (
											<ul className='submenu'>
												{item?.children?.map((child, index) => (
													<li key={index}>
														<Link to={child.link}>{child.title}</Link>
													</li>
												))}
											</ul>
										)}
										{/* /.submenu */}
									</li>
								))}
							</ul>
							{/* /.menu */}
						</nav>
						{/* /.mainnav */}
					</div>
					{/* /.nav-wrap */}
				</div>
				{/* /.header-wrap */}
			</header>
			{/* /.header */}
		</div>
	);
};

export default Navbar;
