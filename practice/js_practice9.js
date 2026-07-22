let staff = [{scode: 1, sname: '김민준', pcode: 1 ,cimage: 'https://placehold.co/100', tcode: 1},
             {scode: 2, sname: '이서연', pcode: 2 , image: 'https://placehold.co/100',tcode: 2},
             {scode: 3, sname: '박도윤', pcode:3, image: 'https://placehold.co/100', tcode: 3}];

let vacation = [{ vcode: 1, scode: 1, vstart: '2026-07-25', vend: '2026-07-27', vstory: '병원 진료'},
                {vcode: 2, scode: 2, vstart: '2026-08-01', vend: '2026-08-02', vstory: '여름 휴가'}];
let finalstaff = 3;

totalPrint();
function totalPrint() {

    let staffSelect = document.querySelector('.staffSelect');
    let optionHtml = `<option value="disabled" selected disabled> 휴가 신청 사원을 선택하세요 </option>`;

    for (let index = 0; index < staff.length; index++) {

        let staffInfo = staff[index];

        optionHtml += `
            <option value="${staffInfo.scode}">
                ${staffInfo.sname}
            </option>
        `;
    }

    staffSelect.innerHTML = optionHtml;
    let vacationList = document.querySelector('#vacationList');
    let html = '';

    for (let index = 0; index < vacation.length; index++) {

        let vacationInfo = vacation[index];
        let staffName = '';

        for (let staffIndex = 0; staffIndex < staff.length; staffIndex++) {

            if (staff[staffIndex].scode == vacationInfo.scode) {
                staffName = staff[staffIndex].sname;
                break;
            }
        }

        html += `
            <div class="vacationItem">

                <div class="vacationContent">
                    <h3>${staffName}</h3>
                    <p>
                        ${vacationInfo.vstart}
                        ~
                        ${vacationInfo.vend}
                    </p>
                    <p>
                        사유: ${vacationInfo.vstory}
                    </p>
                </div>

                <div class="vacationButtonArea">
                    <button
                        type="button"
                        class="cancelBtn"
                        onclick="vacationDelete(${vacationInfo.vcode})">
                        신청취소
                    </button>
                </div>
            </div>
        `;
    }

    if (vacation.length == 0) {

        html = `
            <div class="emptyMessage">
                등록된 휴가 신청 내역이 없습니다.
            </div>
        `;
    }
    vacationList.innerHTML = html;
}

function vacationAdd() {
    let scode = document.querySelector('.staffSelect').value;
    let vstart = document.querySelector('.startDate').value;
    let vend = document.querySelector('.endDate').value;
    let vstory = document.querySelector('.reason').value.trim();

    if (scode == 'disabled' || scode == '') {
        alert('휴가를 신청할 사원을 선택해주세요.');
        return;
    }
    if (vstart == '') {
        alert('휴가 시작일을 선택해주세요.');
        return;
    }
    if (vend == '') {
        alert('휴가 종료일을 선택해주세요.');
        return;
    }
    if (vstory == '') {
        alert('휴가 사유를 입력해주세요.');
        return;
    }
    
    let object = {
        vcode: finalVcode + 1,
        scode: Number(scode),
        vstart: vstart,
        vend: vend,
        vstory: vstory
    };

    vacation.push(object);
    finalVcode++;

    alert('휴가 신청이 완료되었습니다.');
    document.querySelector('.staffSelect').value = 'disabled';
    document.querySelector('.startDate').value = '';
    document.querySelector('.endDate').value = '';
    document.querySelector('.reason').value = '';
    totalPrint();
}

let finalVcode = 2;
function vacationDelete(vcode) {
    for (let index = 0; index < vacation.length; index++) {
        if (vacation[index].vcode == vcode) {
            vacation.splice(index, 1);
            alert('휴가 신청이 취소되었습니다.');
            totalPrint();
            return;
        }
    }
}