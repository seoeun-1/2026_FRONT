
function 전체출력함수() {
    let tbody = document.querySelector('tbody');
    let html = '';

    let boardList = JSON.parse(localStorage.getItem('boardList'));

    if (boardList == null) { boardList = [];}
    for (let i = 0; i < boardList.length; i++) {
        html += `
        <tr>
            <td>${boardList[i].no}</td>
            <td>
                <a href="view.html?no=${boardList[i].no}">
                    ${boardList[i].title}
                </a>
            </td>
        </tr>`;
    }

    tbody.innerHTML = html;
}

