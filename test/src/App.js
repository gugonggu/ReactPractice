import "./App.css";
import { useState } from "react";

function App() {
    let [글제목, 글제목변경] = useState([
        { title: "남자코트 추천", date: "2월 17일" },
        { title: "강남우동맛집", date: "2월 17일" },
        { title: "파이썬 독학", date: "2월 17일" },
    ]);
    let [따봉, 따따봉] = useState([0, 0, 0]);

    return (
        <div className="App">
            <div className="black-nav">
                <h4>블로그임</h4>
            </div>

            <button
                onClick={() => {
                    글제목[0].title = "여자코트 추천";
                    글제목변경([...글제목]);
                }}
            >
                수정하기
            </button>

            {글제목.map(function (a, i) {
                return (
                    <div className="list" key={i}>
                        <h4>
                            {글제목[i].title}
                            <span
                                onClick={() => {
                                    const list = [...따봉];
                                    list[i]++;
                                    따따봉(list);
                                }}
                            >
                                😀{따봉[i]}
                            </span>
                        </h4>
                        <p>{글제목[i].date} 발행</p>
                        <span
                            onClick={() => {
                                const ary = [...글제목];
                                ary.splice(i, 1);
                                글제목변경(ary);
                            }}
                        >
                            ❌
                        </span>
                    </div>
                );
            })}
            <Modal />
            <textarea id="textarea"></textarea>
            <button
                onClick={() => {
                    const textarea = document.getElementById("textarea");
                    if (textarea.value === "") {
                        return;
                    }
                    const ary = [...글제목];
                    const date = new Date();
                    const now = `${date.getMonth() + 1}월 ${date.getDate()}일`;
                    const pushValue = {
                        title: textarea.value,
                        date: now,
                    };
                    ary.push(pushValue);
                    따봉.push(0);
                    textarea.value = "";
                    글제목변경(ary);
                }}
            >
                업로드
            </button>
        </div>
    );
}

function Modal() {
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    );
}

export default App;
