function 개별조회함수(){
    let title=document.querySelector('.title')
    let content=document.querySelector('.content')

    let html1 =''
    let html2 =''

    let no = new URLSearchParams(location.search).get('no')

    let boardList = JSON.parse(localStorage.getItem('boardList'))
    if(boardList == null){boardList=[]}
    for(let i = 0; i< boardList.length-1; i++){
        if(boardList[i].no == no){
            html1 += boardList[i].title
            html2 += boardList[i].content
            break;
        }
    }
}

function 삭제함수(){
     let no = new URLSearchParams(location.search).get('no')

     let boardList = JSON.parse(localStorage.getItem('boardList'))
    if(boardList == null){boardList=[]}
    for(let i = 0; i< boardList.length-1; i++){
        if(boardList[i].no == no){
            let confirmPwd
            break;
        }
    }


}