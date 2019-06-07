import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`

export const Container = styled.div`
	flex: 1;
	display: flex;
`

export const Content = styled.section`
	display: flex;
	flex-direction: column;
	flex: 1;

	background: linear-gradient(to bottom, #414141 5%, #181818 100%), transparent;
	background-size: 100% 250px, 100%;
	background-repeat: no-repeat;
	background-position: top;
	padding: 0 20px;
`
