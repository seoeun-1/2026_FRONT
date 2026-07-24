// 함수 실행 안했어요.!
전체출력함수();


function 전체출력함수(){
    let tbody = document.querySelector('tbody'); // class선택자 인 경우에만 .점을 앞에 넣어요!
    let html = ''
    let boardList = JSON.parse(localStorage.getItem('boardList'))
    if(boardList == null){boardList = []}

    for( let i = 0; i < boardList.length-1; i++){
        html += `<tr>
        <td>${boardList[i].no}</td>
        <td><a href="view.html?no=${boardList[i].no}">${boardList[i].no}</a></td>
        </tr>`
    }
    tbody.innerHTML=html
}