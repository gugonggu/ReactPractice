const Nav = ({ topics }) => {
    const list = [];
    for (let i = 0; i < topics.length; i++) {
        let v = topics[i];
        list.push(
            <li>
                <a href={"/read/" + v.id}>{v.title}</a>
            </li>
        );
    }
    return (
        <div>
            <ol>{list}</ol>
        </div>
    );
};
export default Nav;
