import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	margin-top: 110px;
	color: #fff;
`

export const Title = styled.h1`
	font-size: 40px;
`

export const List = styled.div`
	margin-top: 20px;
	display: flex;
`

export const Playlist = styled(Link)`
	display: flex;
	flex-direction: column;
	margin-left: 20px;
	width: 250px;
	text-decoration: none;
	transition: 0.5 ease-in-out;
	color: #fff;

	img {
		height: 250px;
	}

	strong {
		font-size: 13px;
		margin-top: 10px;
	}

	p {
		line-height: 22px;
		margin-top: 5px;
		font-size: 13px;
		color: #b3b3b3;
	}

	&:first-child {
		margin-left: 0;
	}

	:hover {
		img {
			opacity: 0.4;
		}
	}
`
