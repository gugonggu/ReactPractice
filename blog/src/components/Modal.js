const Modal = (props) => {
    return (
        <div className="modal">
            {/* <Title /> */}
            <h1>{props.title}</h1>
            <Date />
            <Detail />
        </div>
    );
};

// function Title() {
//     return <h4>제목</h4>;
// }

function Date() {
    return <p>날짜</p>;
}

function Detail() {
    return <p>상세내용</p>;
}

export default Modal;
