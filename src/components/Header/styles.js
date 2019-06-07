import styled from 'styled-components'
import SearchIcon from '../../assets/images/search.svg'

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 10px 0 0;
`

export const Search = styled.div`
	display: flex;
	align-items: center;
	border-radius: 12px;
	height: 24px;
	width: 175px;
	padding: 6px 7px 6px 26px;
	background: #fff url(${SearchIcon}) no-repeat 7px center;

	input {
		flex: 1;
		font-size: 12px;
		color: #121212;
		border: 0;
	}
`

export const User = styled.div`
	display: flex;
	align-items: center;
	color: #c9c9c9;
	font-weight: 600;
	font-size: 13px;

	img {
		width: 27px;
		height: 27px;
		border-radius: 50%;
		align-self: center;
		margin-right: 5px;
	}
`
