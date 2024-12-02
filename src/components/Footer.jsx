const Footer = () => {
    return <>
        <div className="container-fluid shadow shadow-sm">
            <div className="row  bg-light" id="footer">
                <div className="col-md-12 px-0 mx-0">
                    <p className="text-center">© Copyright <b className="text-blue">{new Date().getFullYear()} </b>  - Réalisé par -- <b className="text-blue">CodeForChrist </b> </p >
                </div >
            </div >
        </div >
    </>
}

export default Footer