import { useEffect, useState } from 'react'

interface useHackerNewsAPII {
	data: dataI[]
}

interface dataI {
	by?: string
	descendants?: number
	id?: number
	score?: number
	time?: any
	title?: string
	type?: string
}

export const useHackerNewsAPI = (): useHackerNewsAPII => {
	const [data, setData] = useState<dataI[]>([])

	useEffect(() => {
		fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
			.then(res => res.json())
			.then((resData: []) => {
				const new10Stories = resData.slice(0, 10)
				console.log({ new10Stories })
				const comingStories: dataI[] = []
				new10Stories.forEach(storyID => {
					fetch(`https://hacker-news.firebaseio.com/v0/item/${storyID}.json`)
						.then(res => res.json())
						.then(resData2 => comingStories.push(resData2))
				})
				setData(comingStories)
			})
	}, [])

	return {
		data,
	}
}
