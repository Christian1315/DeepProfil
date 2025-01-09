import { RichTextEditor } from "@vaadin/rich-text-editor";
import { useGlobalContext } from "../../../Context"
import PublicationRow from "../Friends/FriendDetailComponents/PublicationRow"
import { useRef } from "react";

const Publications = () => {
    const { publications } = useGlobalContext()

    const htmlValue = '';
    const deltaValue = '';

    const richTextEditorRef = useRef(null);

    const handleEditorChange = (event) => {
        deltaValue.value = event.detail.value;
    };

    const handleHtmlChange = (event) => {
        const value = event.target.value;
        htmlValue.value = value;
        if (richTextEditorRef.current) {
            richTextEditorRef.current.dangerouslySetHtmlValue(value);
        }
    };

    return <>
        <div className={`animate__animated animate__headShake`}>
            {/* <RichTextEditor
                style={{ height: '400px' }}
                value={deltaValue.value}
                onValueChanged={handleEditorChange}
                onHtmlValueChanged={(e) => {
                    htmlValue.value = e.detail.value;
                }}
                ref={richTextEditorRef}
            />

            <TextArea
                label="HTML Value"
                helperText="Shows the HTML representation of the edited document. You can also modify or paste HTML here to see the changes reflected in the editor above. Note that you have to leave (blur) this field in order for the editor to update."
                style={{ width: '100%' }}
                value={htmlValue.value}
                onChange={handleHtmlChange}
            /> */}
            {
                publications.map((publication) => (
                    <PublicationRow
                        key={publication.id}
                        publication={publication}
                        displayContent={true}
                    />
                ))
            }
        </div>
    </>
}

export default Publications