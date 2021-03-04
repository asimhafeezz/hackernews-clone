import { RightArrowIcon } from '../icons'

export const NewsLetter: React.FC = () => {
	return (
		<div className='news-letter'>
			<section className='content'>
				<h1>Cybersecurity Newsletter — Stay Informed</h1>
				<p>
					Sign up for cybersecurity newsletter and get latest news updates
					delivered straight to your inbox daily.
				</p>
				<section className='email-section'>
					<input placeholder='Enter your email address' />
					<section className='button-section'>
						<button>
							<RightArrowIcon />
						</button>
					</section>
				</section>
			</section>
		</div>
	)
}
