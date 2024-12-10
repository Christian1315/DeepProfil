
const ManageInvitation = () => {

    return <>
        <div className="modal animate__animated animate__bounceIn" id="manageInvitationModal" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header shadow shadow-sm">
                        <h6>Valider une invitation</h6>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-sm bg-blue text-white w-50 mx-5"><i className="bi bi-check-circle text-white  mx-2" title="Valider l'invitation"></i> <span className="text-white">Accepter </span> </button>
                            <button className="btn btn-sm btn-light text-danger w-50 mx-5"><i className="bi bi-check-circle text-danger" title="Rejeter l'invitation"></i> <span className="text-danger"> Rejeter</span> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ManageInvitation