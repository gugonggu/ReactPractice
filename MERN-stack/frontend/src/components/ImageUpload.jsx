import { Form } from "react-bootstrap";
import axios from "axios";

function ImageUpload({ setImage }) {
    const fileUpload = (e) => {
        let formData = new FormData();
        formData.append("file", e.target.files[0]);
        axios.post("/api/post/image/upload", formData).then((res) => {
            setImage(res.data.filePath);
        });
    };

    return (
        <div>
            <Form.Control
                type="file"
                className="shadow-none"
                accept="image/*"
                onChange={(e) => fileUpload(e)}
            />
        </div>
    );
}

export default ImageUpload;
