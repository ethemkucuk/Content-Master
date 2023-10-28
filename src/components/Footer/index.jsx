import React, { useEffect, useState } from 'react'

// Styles
import { Wrapper, Text } from './Footer.styles'

const Footer = () => {
	const [currentYear, setCurrentYear] = useState(0)

	const year = new Date().getFullYear()

	useEffect(() => {
		setCurrentYear(year)
	}, [year])

	return (
		<Wrapper>
			<Text>
				Enjoy House &copy; {currentYear} <a href='https://github.com/ethemkucuk'>Ethem Kucuk</a>
			</Text>
		</Wrapper>
	)
}

export default Footer
