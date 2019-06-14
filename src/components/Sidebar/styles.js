import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.aside`
	/* -80px (Altura do footer - Player) */
	height: 100%;
	width: 200px;
	background: #121212;
	color: #b3b3b3;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const Group = styled.div`
	padding: 0 20px;
	display: flex;
	flex-direction: column;
`

export const GroupTitle = styled.h2`
	text-transform: uppercase;
	color: inherit;
	font-weight: 300;
	font-size: 11px;
	letter-spacing: 1.11px;
	line-height: 22px;
`

export const GroupItem = styled.h4`
	font-weight: bold;
	font-size: 13px;
	line-height: 32px;
	cursor: default;

	:hover {
		color: #fff;
	}
`

export const LinkGroupItem = styled(Link)`
	font-weight: bold;
	font-size: 13px;
	line-height: 32px;
	cursor: default;
	text-decoration: none;
	color: inherit;

	:hover {
		color: #fff;
	}
`

export const NewPlayList = styled.button`
	display: flex;
	align-items: center;
	padding: 15px 25px;
	font-weight: 400;
	font-size: 13px;
	color: #b3b3b3;
	background: transparent;
	border: none;
	border-top: 1px solid #282828;

	img {
		margin-right: 10px;
	}

	&:hover {
		color: #fff;
	}
`
