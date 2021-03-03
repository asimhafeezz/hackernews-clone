import { CalenderIcon, UserProfileIcon } from '../icons'

export const NewsCard: React.FC = () => {
	return (
		<div className='news-card'>
			<img src='/news-image.jpg' alt='newimage' />
			<section className='text-content'>
				<h1>
					Hackers Now Hiding ObliqueRAT Payload in Images to Evade Detection
				</h1>
				<section className='user-date-content'>
					<section className='date'>
						<CalenderIcon />
						<p>March 03, 2021</p>
					</section>
					<section className='user'>
						<UserProfileIcon />
						<p>The Hacker News</p>
					</section>
				</section>
				<p>
					Cybercriminals are now deploying remote access Trojans (RATs) under
					the guise of seemingly innocuous images hosted on infected websites
				</p>
			</section>
		</div>
	)
}
