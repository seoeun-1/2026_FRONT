function 등록함수( ){
    let title=document.querySelector('.title').value;
    let content=document.querySelector('.content').value;
    let password=document.querySelector('.password').value;

    let obj={title,content,password}
    let boardList = JSON.parse(localStorage.getItem('boardList'))
    if(boardList == null){boardList=[]}
    
    let no=boardList.length == 0 ? 1 : boardList[boardList.length-1].no+1;
    obj.no = no
    boardList.push(obj)
    localStorage.setItem('boardList',JSON.stringify(boardList))
    location.href = 'list.html'
}