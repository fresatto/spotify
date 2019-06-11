import React from 'react'
import { Container, Spinner } from './styles'
import LoadingIncon from '../../assets/images/loading.svg'

const Loading = () => (
	<Container>
		<Spinner src={LoadingIncon} alt="Loading" />
	</Container>
)

export default Loading
