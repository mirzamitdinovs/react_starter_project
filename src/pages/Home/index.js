import Navbar from 'components/Navbar';
import React from 'react';

const HomePage = () => {
	return (
		<div className='header-sticky page-loading'>
			{/* <div className='loading-overlay'></div> */}
			{/* Boxed */}
			<div className='boxed'>
				<Navbar />
				{/* /.site-header */}
				{/* Slider */}
				<div className='tp-banner-container'>
					<div className='tp-banner'>
						<ul>
							<li
								data-transition='random-static'
								data-slotamount={7}
								data-masterspeed={1000}
								data-saveperformance='on'
							>
								<img src='images/slides/1.jpg' alt='slider-image' />
								<div
									className='tp-caption sfl title-slide center'
									data-x={40}
									data-y={100}
									data-speed={1000}
									data-start={1000}
									data-easing='Power3.easeInOut'
								>
									Standard sea freight
									<br />
									services
								</div>
								<div
									className='tp-caption sfr desc-slide center'
									data-x={40}
									data-y={240}
									data-speed={1000}
									data-start={1500}
									data-easing='Power3.easeInOut'
								>
									If low costs matter for your shipment, try our sea freight
									<br />
									services.
								</div>
								<div
									className='tp-caption sfl flat-button-slider bg-button-slider-32bfc0'
									data-x={40}
									data-y={370}
									data-speed={1000}
									data-start={2000}
									data-easing='Power3.easeInOut'
								>
									<a href='#'>Read more</a>&nbsp;&nbsp;&nbsp;&nbsp;
									<i className='fa fa-chevron-right' />
								</div>
								<div
									className='tp-caption sfr flat-button-slider'
									data-x={225}
									data-y={370}
									data-speed={1000}
									data-start={2000}
									data-easing='Power3.easeInOut'
								>
									<a href='#'>Contact us</a>&nbsp;&nbsp;&nbsp;&nbsp;
									<i className='fa fa-chevron-right' />
								</div>
							</li>
							<li
								data-transition='random-static'
								data-slotamount={7}
								data-masterspeed={1000}
								data-saveperformance='on'
							>
								<img src='images/slides/2.jpg' alt='slider-image' />
								<div
									className='tp-caption sfl title-slide center'
									data-x={40}
									data-y={100}
									data-speed={1000}
									data-start={1000}
									data-easing='Power3.easeInOut'
								>
									International road
									<br />
									transport
								</div>
								<div
									className='tp-caption sfr desc-slide center'
									data-x={40}
									data-y={240}
									data-speed={1000}
									data-start={1500}
									data-easing='Power3.easeInOut'
								>
									The road transport industry is the backbone of strong
									<br />
									economies and dynamic societies.
								</div>
								<div
									className='tp-caption sfl flat-button-slider bg-button-slider-32bfc0'
									data-x={40}
									data-y={370}
									data-speed={1000}
									data-start={2000}
									data-easing='Power3.easeInOut'
								>
									<a href='#'>Read more</a>&nbsp;&nbsp;&nbsp;&nbsp;
									<i className='fa fa-chevron-right' />
								</div>
								<div
									className='tp-caption sfr flat-button-slider'
									data-x={225}
									data-y={370}
									data-speed={1000}
									data-start={2000}
									data-easing='Power3.easeInOut'
								>
									<a href='#'>Contact us</a>&nbsp;&nbsp;&nbsp;&nbsp;
									<i className='fa fa-chevron-right' />
								</div>
							</li>
							<li
								data-transition='slidedown'
								data-slotamount={7}
								data-masterspeed={1000}
								data-saveperformance='on'
							>
								<img src='images/slides/3.jpg' alt='slider-image' />
								<div
									className='tp-caption sfl title-slide center'
									data-x={40}
									data-y={100}
									data-speed={1000}
									data-start={1000}
									data-easing='Power3.easeInOut'
								>
									Warehousing and
									<br />
									storage
								</div>
								<div
									className='tp-caption sfr desc-slide center'
									data-x={40}
									data-y={240}
									data-speed={1000}
									data-start={1500}
									data-easing='Power3.easeInOut'
								>
									Warehouse services can be offered as a single service or
									<br />
									combined with transportation.
								</div>
								<div
									className='tp-caption sfl flat-button-slider bg-button-slider-32bfc0'
									data-x={40}
									data-y={370}
									data-speed={1000}
									data-start={2000}
									data-easing='Power3.easeInOut'
								>
									<a href='#'>Read more</a>&nbsp;&nbsp;&nbsp;&nbsp;
									<i className='fa fa-chevron-right' />
								</div>
								<div
									className='tp-caption sfr flat-button-slider'
									data-x={225}
									data-y={370}
									data-speed={1000}
									data-start={2000}
									data-easing='Power3.easeInOut'
								>
									<a href='#'>Contact us</a>&nbsp;&nbsp;&nbsp;&nbsp;
									<i className='fa fa-chevron-right' />
								</div>
							</li>
						</ul>
					</div>
				</div>
				{/* Promobox */}
				<div className='flat-row bg-scheme pad-top0px pad-bottom0px'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-12'>
								<div className='promobox style1 style2 clearfix'>
									<h5 className='promobox-title'>
										We are honored to be a leading and reliable partner in the
										field of multimodal transport in US
									</h5>
									<a className='button black sm' href='contact.html'>
										contact us
										<i className='fa fa-chevron-right' />
									</a>
								</div>
							</div>
							{/* /.col-md-12 */}
						</div>
						{/* /.row */}
					</div>
					{/* /.container */}
				</div>
				{/* /.flat-row */}
				{/* Flat imagebox */}
				<div className='flat-row parallax-style parallax1'>
					<div className='overlay bg-scheme1' />
					<div className='container'>
						<div className='row'>
							<div className='flat-wrapper'>
								<div className='flat-imagebox clearfix'>
									<div className='flat-item item-three-column'>
										<div className='imagebox'>
											<div className='box-wrapper'>
												<div className='box-image'>
													<img src='images/imagebox/1.jpg' alt='images' />
												</div>
												<div className='box-header'>
													<h5 className='box-title'>
														<a href='services-detail.html'>
															Why choose canava transport ?
														</a>
													</h5>
												</div>
												<div className='box-content'>
													<div className='box-desc'>
														At Canava Transport, we know time is of the essence.
														We have used our legacy Truckload service in the
														Mid-Atlantic and Midwest regions to shape what our
														company is today.
													</div>
													<div className='box-button'>
														<a className='button bg-scheme3' href='about.html'>
															read more <i className='fa fa-chevron-right' />
														</a>
													</div>
												</div>
											</div>
										</div>
										{/* /.imagebox */}
									</div>
									{/* /.item-three-column */}
									<div className='flat-item item-three-column'>
										<div className='imagebox'>
											<div className='box-wrapper'>
												<div className='box-image'>
													<img src='images/imagebox/2.jpg' alt='images' />
												</div>
												<div className='box-header'>
													<h5 className='box-title'>
														<a href='services-detail-v1.html'>
															Are you optimising your warehouse space ?
														</a>
													</h5>
												</div>
												<div className='box-content'>
													<div className='box-desc'>
														Warehousing, Storage and 3PL services offered by the
														Canava group have become an integral part of our
														client’s requirements. As our clients continued to
														demand increased savings and efficiencies in their
														businesses.
													</div>
													<div className='box-button'>
														<a className='button bg-scheme3' href='about.html'>
															read more <i className='fa fa-chevron-right' />
														</a>
													</div>
												</div>
											</div>
										</div>
										{/* /.imagebox */}
									</div>
									{/* /.item-three-column */}
									<div className='flat-item item-three-column'>
										<div className='imagebox'>
											<div className='box-wrapper'>
												<div className='box-image'>
													<img src='images/imagebox/3.jpg' alt='images' />
												</div>
												<div className='box-header'>
													<h5 className='box-title'>
														<a href='services-detail-v2.html'>
															The gallery of canava transport
														</a>
													</h5>
												</div>
												<div className='box-content'>
													<div className='box-desc'>
														Some images highlighting our warehouse, transport,
														Cargo and logistics expertise.
													</div>
													<div className='box-button'>
														<a className='button bg-scheme3' href='about.html'>
															read more <i className='fa fa-chevron-right' />
														</a>
													</div>
												</div>
											</div>
										</div>
										{/* /.imagebox */}
									</div>
									{/* /.item-three-column */}
								</div>
								{/* /.flat-imagebox */}
							</div>
							{/* /.flat-wrapper */}
						</div>
						{/* /.row */}
					</div>
					{/* /.container */}
				</div>
				{/* /.flat-row */}
				{/* Flat iconbox style */}
				<div className='flat-row pad-top60px pad-bottom10px'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-12'>
								<h2 className='flat-title-section style'>
									What we <span className='scheme'>offer.</span>
								</h2>
							</div>
							{/* /.col-md-12 */}
						</div>
						{/* /.row */}
						<div className='flat-divider d40px' />
						<div className='row'>
							<div className='flat-wrapper'>
								<div className='flat-iconbox-style clearfix'>
									<div className='flat-item item-three-column'>
										<div className='iconbox style1'>
											<div className='box-header'>
												<div className='box-icon'>
													<i className='fa fa-dropbox' />
												</div>
												<h5 className='box-title'>Packaged goods transport</h5>
											</div>
											<div className='box-content'>
												Focuses on the packaging requirements of goods in
												transit, in particular for items traveling overland by
												road or rail.
											</div>
										</div>
									</div>
									{/* /.item-three-column */}
									<div className='flat-item item-three-column'>
										<div className='iconbox style1'>
											<div className='box-header'>
												<div className='box-icon'>
													<i className='fa fa-truck' />
												</div>
												<h5 className='box-title'>Multimodal transport</h5>
											</div>
											<div className='box-content'>
												Combined rail road transport is particularly well suited
												to the shipping of hazardous goods since it reduces
												risk.
											</div>
										</div>
									</div>
									{/* /.item-three-column */}
									<div className='flat-item item-three-column'>
										<div className='iconbox style1'>
											<div className='box-header'>
												<div className='box-icon'>
													<i className='fa fa-cube' />
												</div>
												<h5 className='box-title'>Warehousing and storage</h5>
											</div>
											<div className='box-content'>
												Canava is able to offer heated or unheated warehouse
												solutions both for short-term and for long-term storage.
											</div>
										</div>
									</div>
									{/* /.item-three-column */}
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='flat-wrapper'>
								<div className='flat-iconbox-style clearfix'>
									<div className='flat-item item-three-column'>
										<div className='iconbox style1'>
											<div className='box-header'>
												<div className='box-icon'>
													<i className='fa fa-mail-forward' />
												</div>
												<h5 className='box-title'>Forwarding services</h5>
											</div>
											<div className='box-content'>
												With our extensive network, we will find a competitive
												and efficient solution to your next assignment.
											</div>
										</div>
									</div>
									{/* /.item-three-column */}
									<div className='flat-item item-three-column'>
										<div className='iconbox style1'>
											<div className='box-header'>
												<div className='box-icon'>
													<i className='fa fa-plane' />
												</div>
												<h5 className='box-title'>Sea and air freight</h5>
											</div>
											<div className='box-content'>
												By using a combination of sea and air freight, you bring
												added flexibility to your supply chain.
											</div>
										</div>
									</div>
									{/* /.item-three-column */}
									<div className='flat-item item-three-column'>
										<div className='iconbox style1'>
											<div className='box-header'>
												<div className='box-icon'>
													<i className='fa fa-globe' />
												</div>
												<h5 className='box-title'>Logistics solutions</h5>
											</div>
											<div className='box-content'>
												Smart and sustainable business requires the skills of
												logistics experts who are able to think ahead.
											</div>
										</div>
									</div>
									{/* /.item-three-column */}
								</div>
								{/* /.flat-iconbox-style */}
							</div>
							{/* /.flat-wrapper */}
						</div>
						{/* /.row */}
					</div>
					{/* /.container */}
				</div>
				{/* /.flat-row */}
				<div className='flat-row parallax parallax4 pad-top120px pad-bottom120px'>
					<div className='overlay bg-scheme1' />
					<div className='container'>
						<div className='row'>
							<div className='col-md-12'>
								<div className='make-quote'>
									<h1 className='title'>
										From around the corner to
										<br />
										around the globe.
									</h1>
									<h5 className='desc'>
										We will take care of your cargo or your passenger and
										deliver them safe and on time.
									</h5>
									<div className='group-btn'>
										<a className='button lg' href='#'>
											make a quote <i className='fa fa-chevron-right' />
										</a>
										<a className='button lg outline style1' href='contact.html'>
											contact us <i className='fa fa-chevron-right' />
										</a>
									</div>
								</div>
								{/* /.make-quote */}
							</div>
							{/* /.col-md-12 */}
						</div>
						{/* /.row */}
					</div>
					{/* /.container */}
				</div>
				{/* /.flat-row */}
				{/* Promobox */}
				<div className='flat-row bg-scheme1 pad-top0px pad-bottom0px'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-12'>
								<div className='promobox style1 style2 clearfix'>
									<h5 className='promobox-title'>
										Contact us now to get quote for all your global shipping and
										cargo need.
									</h5>
									<a className='button black sm' href='contact.html'>
										contact us
										<i className='fa fa-chevron-right' />
									</a>
								</div>
							</div>
							{/* /.col-md-12 */}
						</div>
						{/* /.row */}
					</div>
					{/* /.container */}
				</div>
				{/* /.flat-row */}
				<div className='flat-row blog-shortcode blog-home pad-top60px pad-bottom0px'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-12'>
								<h2 className='flat-title-section style mag-bottom0px'>
									Latest <span className='scheme'>news.</span>
								</h2>
							</div>
							{/* /.col-md-12 */}
						</div>
						{/* /.row */}
						<div className='row'>
							<div className='content-wrap'>
								<div className='main-content'>
									<div className='main-content-wrap'>
										<div className='content-inner clearfix'>
											<article className='flat-item item-three-column blog-post'>
												<div className='entry-wrapper'>
													<div className='entry-cover'>
														<a href='blog-single.html'>
															<img src='images/blog/b1.jpg' alt='images' />
														</a>
													</div>
													{/* /.entry-cover */}
													<div className='entry-header'>
														<div className='entry-header-content'>
															<h4 className='entry-time'>
																<span className='entry-day'>25</span>
																<span className='entry-month'>Mar</span>
															</h4>
															<h4 className='entry-title'>
																<a href='blog-single.html'>
																	Raising productivity &amp; morale in the
																	warehouse
																</a>
															</h4>
														</div>
														{/* /.entry-header-content */}
													</div>
													{/* /.entry-header */}
													<div className='entry-content'>
														<p>
															It’s a well-known fact that happy and motivated
															workers produce better results. A recent study
															found that happier workers were 12% ...
														</p>
													</div>
													{/* /.entry-content */}
													<div className='entry-footer'>
														<div className='entry-meta'>
															<i className='fa fa-user' />
															<span className='entry-author'>
																<a href='#'>admin</a>
															</span>
															<i className='fa fa-folder-open' />
															<span className='entry-categories'>
																<a href='#'>Warehouse</a>
															</span>
															<i className='fa fa-comment' />
															<span className='entry-comments-link'>
																<a href='#'>0 Comment</a>
															</span>
														</div>
													</div>
												</div>
												{/* /.entry-wrapper */}
											</article>
											{/* /.blog-post */}
											<article className='flat-item item-three-column blog-post'>
												<div className='entry-wrapper'>
													<div className='entry-cover'>
														<a href='blog-single.html'>
															<img src='images/blog/b2.jpg' alt='images' />
														</a>
													</div>
													{/* /.entry-cover */}
													<div className='entry-header'>
														<div className='entry-header-content'>
															<h4 className='entry-time'>
																<span className='entry-day'>25</span>
																<span className='entry-month'>Mar</span>
															</h4>
															<h4 className='entry-title'>
																<a href='blog-single.html'>
																	Seafield logistics goes into administration
																</a>
															</h4>
														</div>
														{/* /.entry-header-content */}
													</div>
													{/* /.entry-header */}
													<div className='entry-content'>
														<p>
															Seafield Logistics has gone into administration
															and two of its operational units have been sold.
															David Riley, Les Ross and Joe ...
														</p>
													</div>
													{/* /.entry-content */}
													<div className='entry-footer'>
														<div className='entry-meta'>
															<i className='fa fa-user' />
															<span className='entry-author'>
																<a href='#'>admin</a>
															</span>
															<i className='fa fa-folder-open' />
															<span className='entry-categories'>
																<a href='#'>Jobs</a>
															</span>
															<i className='fa fa-comment' />
															<span className='entry-comments-link'>
																<a href='#'>0 Comment</a>
															</span>
														</div>
													</div>
												</div>
												{/* /.entry-wrapper */}
											</article>
											{/* /.blog-post */}
											<article className='flat-item item-three-column blog-post'>
												<div className='entry-wrapper'>
													<div className='entry-cover'>
														<a href='blog-single.html'>
															<img src='images/blog/b3.jpg' alt='images' />
														</a>
													</div>
													{/* /.entry-cover */}
													<div className='entry-header'>
														<div className='entry-header-content'>
															<h4 className='entry-time'>
																<span className='entry-day'>25</span>
																<span className='entry-month'>Mar</span>
															</h4>
															<h4 className='entry-title'>
																<a href='blog-single.html'>
																	Transport managers grow scarce
																</a>
															</h4>
														</div>
														{/* /.entry-header-content */}
													</div>
													{/* /.entry-header */}
													<div className='entry-content'>
														<p>
															Welcome to the Logistics Job Shop Newsletter; your
															need-to-know digest and analysis of the events of
															the past fortnight in the roa...
														</p>
													</div>
													{/* /.entry-content */}
													<div className='entry-footer'>
														<div className='entry-meta'>
															<i className='fa fa-user' />
															<span className='entry-author'>
																<a href='#'>admin</a>
															</span>
															<i className='fa fa-folder-open' />
															<span className='entry-categories'>
																<a href='#'>Transport</a>
															</span>
															<i className='fa fa-comment' />
															<span className='entry-comments-link'>
																<a href='#'>0 Comment</a>
															</span>
														</div>
													</div>
												</div>
												{/* /.entry-wrapper */}
											</article>
											{/* /.blog-post */}
										</div>
										{/* /.content-inner */}
									</div>
									{/* /.main-content-wrap */}
								</div>
								{/* /.main-content */}
							</div>
							{/* /.content-wrap  */}
						</div>
						{/* /.row */}
					</div>
					{/* /.container */}
				</div>
				{/* /.flat-row */}
				<div className='flat-row pad-bottom70px bg-f2f4f8'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-12'>
								<h2 className='flat-title-section style w90 mag-bottom0px'>
									What clients <span className='scheme'>say.</span>
								</h2>
							</div>
							{/* /.col-md-12 */}
						</div>
						{/* /.row */}
						<div className='flat-divider d48px' />
						<div className='row'>
							<div className='col-md-12'>
								<div className='flat-testimonial-owl'>
									<div className='flat-testimonial'>
										<div className='testimonial-meta'>
											<div className='testimonial-image'>
												<img src='images/testimonials/star.png' alt='images' />
											</div>
											<div className='testimonial-author'>
												<strong className='author-name'>SaNora Anderson</strong>
												<div className='author-info' />
											</div>
										</div>
										<div className='testimonial-content'>
											<blockquote>
												Canava is great to work with. They have many locations,
												competitive rates, and their staff is excellent will go
												above and beyond for their partners. I look forward to
												working with them in the future. <br />
												Thank you!
											</blockquote>
										</div>
									</div>
									{/* /.testimonial */}
									<div className='flat-testimonial'>
										<div className='testimonial-meta'>
											<div className='testimonial-image'>
												<img src='images/testimonials/star.png' alt='images' />
											</div>
											<div className='testimonial-author'>
												<strong className='author-name'>
													MATTIAS NUFFER JANSEN
												</strong>
												<div className='author-info' />
											</div>
										</div>
										<div className='testimonial-content'>
											<blockquote>
												Thank you for delivering the chairs to us so quickly.
												Your delivery guys were most helpful and courteous. You
												have been a pleasure to deal with and we will not
												hesitate to use your services again or recommend you.
											</blockquote>
										</div>
									</div>
									{/* /.testimonial */}
									<div className='flat-testimonial'>
										<div className='testimonial-meta'>
											<div className='testimonial-image'>
												<img src='images/testimonials/star.png' alt='images' />
											</div>
											<div className='testimonial-author'>
												<strong className='author-name'>
													L M GARRINGTON (MRS)
												</strong>
												<div className='author-info' />
											</div>
										</div>
										<div className='testimonial-content'>
											<blockquote>
												We have always found them to be highly professional and
												reliable, and have assisted us in delivering a high
												standard service to our customers. Canava have been a
												valuable supplier to Truflo and continue to be so.
											</blockquote>
										</div>
									</div>
									{/* /.testimonial */}
									<div className='flat-testimonial'>
										<div className='testimonial-meta'>
											<div className='testimonial-image'>
												<img src='images/testimonials/star.png' alt='images' />
											</div>
											<div className='testimonial-author'>
												<strong className='author-name'>Kenvil Miland</strong>
												<div className='author-info' />
											</div>
										</div>
										<div className='testimonial-content'>
											<blockquote>
												We are very happy with service. The dispatchers are
												professional and responsive. There are no obstacles, and
												Lance has been a good problem solver for us, like when
												we had a tough time finding containers for overseas
												deliveries.
											</blockquote>
										</div>
									</div>
									{/* /.testimonial */}
									<div className='flat-testimonial'>
										<div className='testimonial-meta'>
											<div className='testimonial-image'>
												<img src='images/testimonials/star.png' alt='images' />
											</div>
											<div className='testimonial-author'>
												<strong className='author-name'>Mikel Henson</strong>
												<div className='author-info' />
											</div>
										</div>
										<div className='testimonial-content'>
											<blockquote>
												In a commodity business like trucking, GW really stands
												out because of its customer service. They come out to
												discuss our needs, give us fast and accurate quotes, and
												get me a truck when they say they will. That makes it a
												relationship.
											</blockquote>
										</div>
									</div>
									{/* /.testimonial */}
								</div>
								{/* /.flat-testimonial */}
							</div>
							{/* /.col-md-12 */}
						</div>
						{/* /.row */}
					</div>
					{/* /.container */}
				</div>
				{/* /.flat-row */}
				{/* Promobox */}
				<div className='flat-row bg-scheme pad-top20px pad-bottom20px'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-2'>
								<div className='clients-image style'>
									<div className='item-img'>
										<img src='images/client/c1.png' alt='images' />
									</div>
									<p className='tooltip'>Laurentides</p>
								</div>
							</div>
							{/* /.col-md-2 */}
							<div className='col-md-2'>
								<div className='clients-image style'>
									<div className='item-img'>
										<img src='images/client/c2.png' alt='images' />
									</div>
									<p className='tooltip'>Veolia</p>
								</div>
							</div>
							{/* /.col-md-2 */}
							<div className='col-md-2'>
								<div className='clients-image style'>
									<div className='item-img'>
										<img src='images/client/c3.png' alt='images' />
									</div>
									<p className='tooltip'>Plane Business</p>
								</div>
							</div>
							{/* /.col-md-2 */}
							<div className='col-md-2'>
								<div className='clients-image style'>
									<div className='item-img'>
										<img src='images/client/c4.png' alt='images' />
									</div>
									<p className='tooltip'>Arrow GLS</p>
								</div>
							</div>
							{/* /.col-md-2 */}
							<div className='col-md-2'>
								<div className='clients-image style'>
									<div className='item-img'>
										<img src='images/client/c5.png' alt='images' />
									</div>
									<p className='tooltip'>MWR Transport</p>
								</div>
							</div>
							{/* /.col-md-2 */}
							<div className='col-md-2'>
								<div className='clients-image style'>
									<div className='item-img'>
										<img src='images/client/c6.png' alt='images' />
									</div>
									<p className='tooltip'>Bradbell</p>
								</div>
							</div>
							{/* /.col-md-2 */}
						</div>
						{/* /.row */}
					</div>
					{/* /.container */}
				</div>
				{/* /.flat-row */}
				{/* Map */}
				<div className='flat-row pad-top0px pad-bottom0px'>
					<div id='flat-map' />
				</div>
				{/* /.flat-row */}
				<div className='flat-row pad-top65px pad-bottom80px'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-8 col-md-offset-2'>
								<h2 className='flat-title-section title-center'>
									Request a quick quote.
								</h2>
								<p className='text-center'>
									Fill out the form to get your quote within the hour. We
									guaranty safe and timley
									<br />
									product delivery either for your personal travel or your
									products.
								</p>
								<div className='flat-divider d20px' />
								<form
									id='contactform'
									method='post'
									action='./contact/contact-process.php'
								>
									<div className='row'>
										<div className='col-md-6'>
											<p>
												<input
													name='author'
													type='text'
													defaultValue
													placeholder='Location'
													required='required'
												/>
											</p>
											<p>
												<input
													id='email'
													name='email'
													type='email'
													defaultValue
													placeholder='To Destination'
													required='required'
												/>
											</p>
											<p>
												<select className='wpcf7-form-control wpcf7-select'>
													<option value='Cargo'>Cargo</option>
													<option value='Person'>Person</option>
												</select>
											</p>
											<p>
												<input
													id='phone'
													name='phone'
													type='text'
													defaultValue
													placeholder='Phone Number'
													required='required'
												/>
											</p>
										</div>
										{/* /.col-md-6 */}
										<div className='col-md-6'>
											<p>
												<textarea
													name='comment'
													placeholder='Comment'
													required='required'
													defaultValue={''}
												/>
											</p>
											<span className='form-submit'>
												<input
													name='submit'
													type='submit'
													id='submit'
													className='submit'
													defaultValue='Get a quote'
												/>
											</span>
										</div>
										{/* /.col-md-6 */}
									</div>
									{/* /.row */}
								</form>
							</div>
							{/* /.col-md-8 */}
						</div>
						{/* /.row */}
					</div>
					{/* /.container */}
				</div>
				{/* /.flat-row */}
				{/* Footer */}
				<footer className='footer'>
					<div className='content-bottom-widgets'>
						<div className='container'>
							<div className='row'>
								<div className='flat-wrapper'>
									<div className='ft-wrapper clearfix'>
										<div className='footer-50'>
											<div className='row'>
												<div className='col-md-4'>
													<div className='counter'>
														<div className='counter-image'>
															<i className='fa fa-building-o' />
														</div>
														<div
															className='numb-count'
															data-to={23}
															data-speed={3000}
															data-waypoint-active='yes'
														>
															23
														</div>
														<div className='counter-title'>
															Offices worldwide
														</div>
													</div>
												</div>
												{/* /.col-md-4 */}
												<div className='col-md-4'>
													<div className='counter ft-style1'>
														<div className='counter-image'>
															<i className='fa fa-group' />
														</div>
														<div
															className='numb-count'
															data-to={14}
															data-speed={3000}
															data-waypoint-active='yes'
														>
															14
														</div>
														<div className='counter-title'>
															Hardworking people
														</div>
													</div>
												</div>
												{/* /.col-md-4 */}
												<div className='col-md-4'>
													<div className='counter ft-style2'>
														<div className='counter-image'>
															<i className='fa fa-globe' />
														</div>
														<div
															className='numb-count'
															data-to={15}
															data-speed={3000}
															data-waypoint-active='yes'
														>
															15
														</div>
														<div className='counter-title'>
															Countries covered
														</div>
													</div>
												</div>
												{/* /.col-md-4 */}
											</div>
											{/* /.row */}
										</div>
										{/* /.footer-50 */}
										<div className='footer-50'>
											<div className='subscribe-form'>
												<div className='row'>
													<div className='col-md-8'>
														<input
															type='email'
															name='EMAIL'
															placeholder='Your email address'
															required
														/>
													</div>
													{/* /.col-md-8 */}
													<div className='col-md-4'>
														<input type='submit' defaultValue='Subscribe' />
													</div>
													{/* /.col-md-4 */}
												</div>
												{/* /.row */}
											</div>
											{/* /.subscribe-form */}
										</div>
										{/* /.footer-50 */}
									</div>
									{/* /.ft-wrapper */}
								</div>
								{/* /.flat-wrapper */}
							</div>
							{/* /.row */}
						</div>
						{/* /.container */}
					</div>
					{/* /.footer-widgets */}
					<div className='footer-widgets'>
						<div className='container'>
							<div className='row'>
								<div className='col-md-3'>
									<div className='widge widget_text'>
										<div className='textwidget'>
											<h2>
												canava - business, transport, logistic &amp; warehouse.
											</h2>
										</div>
									</div>
									{/* /.widget_text */}
								</div>
								{/* /.col-md-3 */}
								<div className='col-md-3'>
									<div className='widget widget_recent_entries'>
										<h4 className='widget-title'>Recent News</h4>
										<ul>
											<li>
												<a href='blog-single.html'>
													Raising productivity &amp; morale in the warehouse
												</a>
												<span className='post-date'>March 25, 2016</span>
											</li>
											<li>
												<a href='blog-single.html'>
													Seafield logistics goes into administration
												</a>
												<span className='post-date'>March 25, 2016</span>
											</li>
										</ul>
									</div>
									{/* /.widget_recent_entries */}
								</div>
								{/* /.col-md-3 */}
								<div className='col-md-3'>
									<div className='widget widget_nav_menu'>
										<h3 className='widget-title'>Information</h3>
										<div className='menu-footer-menu-container'>
											<ul className='menu-footer-menu'>
												<li>
													<a href='#'>Home</a>
												</li>
												<li>
													<a href='#'>Shop</a>
												</li>
												<li>
													<a href='#'>About us</a>
												</li>
												<li>
													<a href='#'>Checkout</a>
												</li>
												<li>
													<a href='#'>Services</a>
												</li>
												<li>
													<a href='#'>My Account</a>
												</li>
												<li>
													<a href='#'>Contact us</a>
												</li>
												<li>
													<a href='#'>News</a>
												</li>
												<li>
													<a href='#'>Cart</a>
												</li>
												<li>
													<a href='#'>Gallery</a>
												</li>
												<li>
													<a href='#'>Careers</a>
												</li>
												<li>
													<a href='#'>FAQ</a>
												</li>
												<li>
													<a href='#'>Partners</a>
												</li>
												<li>
													<a href='#'>History</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
								{/* /.col-md-3 */}
								<div className='col-md-3'>
									<div className='widget widget_text information'>
										<h3 className='widget-title'>Contact Us</h3>
										<div className='textwidget'>
											<p>
												<strong>
													66 Nicholson Street Buffalo New York US 14214
												</strong>
											</p>
											<p>
												<i className='fa fa-phone' /> 001-123-456-7890
												<br />
												<i className='fa fa-envelope' />
												themesflat@gmail.com
											</p>
											<p>
												<i className='fa fa-phone' /> 007-123-456-7890
												<br />
												<i className='fa fa-envelope' />
												themesflat@gmail.com
											</p>
										</div>
									</div>
								</div>
								{/* /.col-md-3 */}
							</div>
							{/* /.row */}
						</div>
						{/* /.container */}
					</div>
					{/* /.footer-content */}
					<div className='footer-content'>
						<div className='container'>
							<div className='row'>
								<div className='flat-wrapper'>
									<div className='ft-wrap clearfix'>
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
										<div className='copyright'>
											<div className='copyright-content'>
												Copyright © 2016 Canava. Theme by{' '}
												<a href='#'>Themesflat.</a>
											</div>
										</div>
									</div>
									{/* /.ft-wrap */}
								</div>
								{/* /.flat-wrapper */}
							</div>
							{/* /.row */}
						</div>
						{/* /.container */}
					</div>
					{/* /.footer-content */}
				</footer>
				{/* Go Top */}
				<a className='go-top'>
					<i className='fa fa-chevron-up' />
				</a>
			</div>
			{/* Javascript */}
			{/* Revolution Slider */}
		</div>
	);
};

export default HomePage;
