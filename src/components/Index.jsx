import Login from "./Login"

function Index() {
    return (
        <>
            <div className="row" id="home-content">
                <div className="col-md-12">
                    <div className="container">
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-md-6">
                                <Login />
                            </div>
                            <div className="col-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Index
