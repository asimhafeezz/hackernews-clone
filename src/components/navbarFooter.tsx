import React from 'react'
import {
	FacebookIcon,
	LinkedinIcon,
	TwitterIcon,
	YoutubeIcon,
	InstagramIcon,
	SignalsIcon,
	EmailIcon,
} from '../icons'

export const NavbarFooter: React.FC = () => {
	return (
		<div className='navbar-footer'>
			<section className='follow-us'>
				<h2>Follow us</h2>
				<section className='social-icons'>
					<section className='twitter'>
						<section className='twitter-icon-container'>
							<TwitterIcon />
						</section>
						<p>650,000 Followers</p>
					</section>
					<section className='facebook'>
						<section className='facebook-icon-container'>
							<FacebookIcon />
						</section>
						<p>650,000 Followers</p>
					</section>
					<section className='linkedin'>
						<section className='linkedin-icon-container'>
							<LinkedinIcon />
						</section>
						<p>650,000 Followers</p>
					</section>
					<section className='youtube'>
						<section className='youtube-icon-container'>
							<YoutubeIcon />
						</section>
						<p>650,000 Followers</p>
					</section>
					<section className='instagram'>
						<section className='instagram-icon-container'>
							<InstagramIcon />
						</section>
						<p>650,000 Followers</p>
					</section>
				</section>
			</section>

			<section className='links'>
				<section className='aboutus'>
					<ul>
						<li>About us</li>
						<li>Advertising</li>
						<li>Editorial Team</li>
						<li>Contact</li>
					</ul>
				</section>
				<section className='pages'>
					<ul>
						<li>Pages</li>
						<li>Advertising</li>
						<li>Editorial Team</li>
						<li>Contact</li>
						<li>Editorial Team</li>
					</ul>
				</section>
				<section className='deals'>
					<ul>
						<li>Deals</li>
						<li>Advertising</li>
						<li>Editorial Team</li>
						<li>Contact</li>
						<li>Advertising</li>
					</ul>
				</section>
				<section className='buttons'>
					<button>
						<SignalsIcon /> <p>RSS Feeds</p>
					</button>
					<button>
						<EmailIcon /> <p>Contact us</p>
					</button>
					<button>
						<SignalsIcon /> <p>Telegram Channel</p>
					</button>
				</section>
			</section>

			<hr />
			<p className='bottom-text'>
				© The Hacker News, 2019. All Rights Reserved.
			</p>
		</div>
	)
}
