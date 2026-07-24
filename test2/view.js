조회함수(); // 함수 실행 빠졌어요.!
function 조회함수(){
    let title = document.querySelector('.title');
    let content = document.querySelector('.content');

    let html1 = ''
    let html2 = ''

    let no = new URLSearchParams(location.search).get('no')
    let boardList = JSON.parse(localStorage.getItem('boardList'))
    if(boardList == null){boardList = []}
    for( let i = 0; i < boardList.length-1; i++){
        if(boardList[i].no == no){ // 
            html1 += boardList[i].title
            html2 += boardList[i].content
            break;
        }
    }
    // 출력이 빠졌어요.
    title.innerHTML = html1;
    content.innerHTML = html2;
}

function 삭제함수(){
    let no = new URLSearchParams(location.search).get('no')

    let boardList = JSON.parse(localStorage.getItem('boardList'))
    if(boardList == null){boardList = []}
    for( let i = 0; i <=boardList.length-1; i++){
        if(boardList[i].no == no){
            let confirmPwd = prompt('비밀번호 입력')
            if( boardList[i].password == confirmPwd){
                boardList.splice(i, 1)
                alert('삭제 성공')
                
                localStorage.setItem('boardList',JSON.stringify(boardList))
                location.href = 'list.html'
                return
            }
        }
    }

}