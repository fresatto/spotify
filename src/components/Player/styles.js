import styled from 'styled-components'

export const Container = styled.div`
	height: 72px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #282828;
	padding: 12px;
`
export const Current = styled.div`
	display: flex;
	align-items: center;
	width: 220px;

	img {
		width: 48px;
		height: 48px;
	}

	div {
		margin-left: 12px;
		display: flex;
		flex-direction: column;

		span {
			font-size: 13px;
			color: #fff;
		}

		small {
			font-size: 11px;
			color: #b3b3b3;
			margin-top: 5px;
		}
	}
`

export const Controls = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 400px;
`

export const CurrentMusicControls = styled.div`
	display: flex;
	margin-bottom: 5px;

	button {
		background: transparent;
		border: none;
	}

	img {
		margin-right: 15px;
	}
`

export const Volume = styled.div`
	display: flex;
	align-items: center;
	width: 100px;
	margin-right: 20px;

	img {
		margin-right: 5px;
	}
`

export const Time = styled.div`
	display: flex;
	width: 440px;
	align-items: center;

	span {
		font-size: 10px;
		color: #899299 !important;
	}

	span:first-child {
		margin-right: 10px;
	}
	span:last-child {
		margin-left: 10px;
	}
`
