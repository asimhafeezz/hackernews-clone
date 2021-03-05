import { NewsCard, NewsCardPopular } from '.'

export const NewsGrid: React.FC = () => {
	return (
		<div className='news-grid'>
			<section className='left-section'>
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
			</section>
			<section className='right-section'>
				<h1>Popular This Week</h1>
				<NewsCardPopular />
				<NewsCardPopular />
				<NewsCardPopular />
				<NewsCardPopular />
				<NewsCardPopular />
				<NewsCardPopular />
			</section>
		</div>
	)
}
