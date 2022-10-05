import React, { Component } from "react"
import ResponsiveModal from "./ResponsiveModal"

export default function Credits({
    changeModal = () => {},
    responsiveModal = [],
}) {
    const publicSrc = `${process.env.PUBLIC_URL}/logos`;
    const logo_dreal = `${publicSrc}/dreal.png`;
    const logo_fondationfr = `${publicSrc}/fondationfr.png`;
    const logo_logoCNRS = `${publicSrc}/logoCNRS.jpg`;
    const logo_labexmer = `${publicSrc}/labexmer.png`;
    const logo_cerema = `${publicSrc}/logo-cerema.jpg`;
    const logo_isblue = `${publicSrc}/logo-isblue.jpg`;
    const logo_ubo = `${publicSrc}/ubo.png`;
    const logo_iuem = `${publicSrc}/iuem.png`;

    return (
        <>
            <ResponsiveModal
                size="lg"
                change={() => changeModal("credits")}
                title={<>Crédits</>}
                backdrop
                className=""
                visible={responsiveModal.includes("credits")}
                body={<>
                    <div className="credits-licence">
                        <div className="licence-text">Application conçue et développée à l'Institut Universitaire Européen de la Mer dans le cadre des projets <a href="https://www-iuem.univ-brest.fr/pops/projects/osirisc-vers-un-observatoire-integre-des-risques-cotiers-d-erosion-submersion"> OSIRISC et OSIRISC+</a> , avec le soutien de la Fondation de France et la DREAL Bretagne et mise à disposition selon les termes de la <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/"> Licence Creative Commons Attribution - Pas d’Utilisation Commerciale - Partage dans les Mêmes Conditions 4.0 International.</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, © <a href="https://carto.com/attribution">CARTO</a>
                        </div>
                        <a rel="license" className="licence-logo" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
                        <img alt="Licence Creative Commons" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
                        </a>
                        <div style={{marginTop: "1em"}}>
                        <p className="credits-terms"> Réalisation co-financée par </p>
                        <a target="_blank" rel="noopener noreferrer" href="http://www.bretagne.developpement-durable.gouv.fr/">
                            <img height="70px" src={logo_dreal} alt="logo DREAL Bretagne" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.fondationdefrance.org/">
                            <img height="70px" src={logo_fondationfr} alt="logo Fondation de France"/>
                        </a>
                        </div>
                        <div style={{marginTop: "1em"}}>
                        <p className="credits-terms"> Partenaires du projet </p>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.univ-brest.fr/">
                            <img height="70px" src={logo_ubo} alt="logo UBO"/>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www-iuem.univ-brest.fr/">
                            <img height="70px" src={logo_iuem} alt="logo IUEM" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.cnrs.fr/">
                            <img height="70px" src={logo_logoCNRS} alt="logo CNRS" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.labexmer.eu">
                            <img height="70px" src={logo_labexmer} alt="logo Labex Mer" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.labexmer.eu/fr/isblue">
                            <img height="70px" src={logo_isblue} alt="logo ISblue" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.cerema.fr/fr">
                            <img height="70px" src={logo_cerema} alt="logo Cerema" />
                        </a>
                        </div>
                    </div>
                </>}
            />
        </>
    )
}
