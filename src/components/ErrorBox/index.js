import React from 'react'
import { Container } from './styles'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Creators as ErrorActions } from '../../store/ducks/error'

import CloseIcon from '../../assets/images/close.svg'

const ErrorBox = ({ error: { message, visible }, hideError }) =>
	visible && (
		<Container>
			<p>{message}</p>
			<button onClick={hideError}>
				<img src={CloseIcon} alt="Fechar" />
			</button>
		</Container>
	)

const mapStateToProps = state => ({
	error: state.error,
})

const mapDispatchToProps = dispatch =>
	bindActionCreators(ErrorActions, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ErrorBox)
