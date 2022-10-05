import React, { Component } from 'react';
import logo_dreal from '../data/img/dreal.png';
import logo_fondationfr from '../data/img/fondationfr.png';
import logo_logoCNRS from '../data/img/logoCNRS.jpg';
import logo_labexmer from '../data/img/labexmer.png';
import logo_iuem from '../data/img/iuem.png';
import logo_ubo from '../data/img/ubo.png';
import logo_isblue from '../data/img/logo-isblue.jpg';
import logo_cerema from '../data/img/logo-cerema.jpg';


export default function Footer({responsiveModal, changeModal}) {
	return(
		<>
			<ResponsiveModal
                size="sm"
                change={() => changeModal("credits")}
				title={(<><i className="far fa-chart-bar"></i>Indice</>)}
				backdrop
                className="d-lg-none"
                visible={responsiveModal.includes("indices")}
                body={(<><i className="far fa-chart-bar"></i>Hello</>)}
            />
		</>
	)
}




