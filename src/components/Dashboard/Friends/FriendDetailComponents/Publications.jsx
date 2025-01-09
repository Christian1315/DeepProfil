import { useGlobalContext } from "../../../../Context"
import PublicationRow from "./PublicationRow"

const Publications = () => {
    const { publications} = useGlobalContext()

    return <>
        <div className={`animate__animated animate__headShake`}>
            {
                publications.map((publication) => (
                    <PublicationRow
                        key={publication.id}
                        publication={publication}
                        displayContent={false}
                    />
                ))
            }
        </div>
    </>
}

export default Publications