import React from 'react'

// Styles
import { Wrapper, Content, Logo } from './Navbar.styles'

const Navbar = () => {
	return (
		<Wrapper>
			<Content>
				<Logo src='/images/troll-face.png' />
				<h1>Content Master</h1>
			</Content>
		</Wrapper>
	)
}

export default Navbar
