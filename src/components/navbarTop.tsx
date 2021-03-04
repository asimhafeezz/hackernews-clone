import {
	FacebookIcon,
	LinkedinIcon,
	SignalsIcon,
	TwitterIcon,
	YoutubeIcon,
	EmailIcon,
	SearchIcon,
	MenuIcon,
} from '../icons'

export const NavbarTop: React.FC = () => {
	return (
		<div className='navbarTop'>
			<section className='content'>
				<section className='upper-section'>
					<section className='content-container'>
						<section className='content'>
							<p>Follow us</p>
							<FacebookIcon />
							<TwitterIcon />
							<LinkedinIcon />
							<YoutubeIcon />
							<SignalsIcon />
						</section>
					</section>
				</section>
				<section className='lower-section'>
					<h1>The Hacker News</h1>
					<section className='button-section'>
						<button>
							<EmailIcon />
							<p>Subscribe to Newsletter</p>
						</button>
					</section>
					<section className='icons-container'>
						<section className='icons'>
							<SearchIcon />
							<MenuIcon />
						</section>
					</section>
				</section>
				<section className='lower-nav-lists'>
					<section className='nav-items'>
						<ul>
							<li>Home</li>
							<li>Data Breaches</li>
							<li>Cyber Attacks</li>
							<li>Vulnerabilities</li>
							<li>Malware</li>
							<li>Offers</li>
							<li>Contact</li>
						</ul>
						<section className='icons'>
							<SearchIcon />
							<MenuIcon />
						</section>
					</section>
				</section>
			</section>
		</div>
	)
}
