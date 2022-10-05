import React from 'react'
import MethodeBox from './MethodeBox'
import ResponsiveModal from './ResponsiveModal'

const MetaBox = ({ setRef, refIndic, territoire, responsiveModal, changeModal }) => {
	const getIndiceUi = () => {
		return (
			<MethodeBox refIndic = {refIndic} setRef = {setRef} territoire = {territoire}/>
		)
	}
	if (!refIndic[setRef]) return null
	return(
		<>
			<div className="data-container d-none d-lg-block">
				{getIndiceUi()}
			</div>
			<ResponsiveModal
                size="sm"
                change={() => changeModal("indices")}
				title={(<><i className="far fa-chart-bar"></i>Indice</>)}
				backdrop
                className="d-lg-none"
                visible={responsiveModal.includes("indices")}
                body={(<MethodeBox refIndic = {refIndic} setRef = {setRef} territoire = {territoire}/>)}
            />
		</>
	)
}

export default MetaBox


