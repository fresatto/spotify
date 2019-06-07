import React from 'react'
import { Container, Search, User } from './styles'

import { FiSearch } from 'react-icons/fi'

const Header = () => (
	<Container>
		<Search>
			<input type="text" />
		</Search>
		<User>
			<img
				src="https://avatars0.githubusercontent.com/u/14132711?v=4"
				alt="Avatar"
			/>
			Gabriel Fresatto
		</User>
	</Container>
)

export default Header
