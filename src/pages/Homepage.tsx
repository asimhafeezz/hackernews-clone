import { NavbarFooter, NavbarTop, NewsGrid, NewsLetter } from '../components'

export const HomePage: React.FC = () => (
	<main>
		<NavbarTop />
		<NewsGrid />
		<NewsLetter />
		<NavbarFooter />
	</main>
)
