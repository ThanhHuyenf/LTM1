function search(n) {
    localStorage.search = document.getElementById('inputSearch').value.toLowerCase();
    var temp = ''
    switch (n) {
        case 1:
            temp = '../'
            break;
        case 2:
            temp = '../../'
        default:
            break;
    }
    location.href = temp + 'search.html';
}

function loadItem() {
    document.getElementsByClassName('list')[0].innerHTML = '';
    var s = localStorage.search
    var dem = 0;
    list = [
        ["Asus ZenBook Duo 14 UX482EG-KA166T", "zenbook/duo14ux482eg-ka166t", "zenbook/Duo14UX482EG-KA166T/1.png"],
        ["Asus ZenBook Flip 13 UX363EA-HP130T", "zenbook/flip13ux363ea-hp130t", "zenbook/flip13ux363ea-hp130t/1.png"],
        ["Asus ZenBook Pro Duo 14 UX581GV-H2029T", "zenbook/pro_duo_ux581", "zenbook/produoux581gv-h2029t/1.jpg"],
        ["Asus ZenBook S13 UX392FA-AB002T", "zenbook/s13_ux392", "zenbook/s13ux392fa-ab002t/1.jpg"],
        ["Asus VivoBook Flip 14 TM420IA-EC031T", "vivobook/vivobook_flip_tm420ia-ec031t", "vivobook/vivobook_flip/tm420ia-ec031t/0.jpg"],
        ["Asus VivoBook S15 S533JQ-BQ024T", "vivobook/vivobook_s15_s533jq-bq024t", "vivobook/vivobook_s/s533jq-bq024t/0.jpg"],
        ["Asus VivoBook A415EA-eb558T GOLD", "vivobook/vivobook_a415ea-eb558t_gold", "vivobook/vivobook/a415ea-eb558t/0.jpg"],
        ["Asus Gaming ROG Zephyrus G14 GA401QC-HZ032T", "rog/ga401qc-hz032t", "rog/ga401qc-hz032t/1.jpg"]
    ]
    for (let i = 0; i < list.length; i++) {
        if (list[i][0].toLowerCase().search(s) != -1) {
            dem++;
            x = '<div class="item"><a href="laptop/' + list[i][1] + '.html"><img src="img/' + list[i][2] + '" width="100px"><div style="margin-bottom: 20px;margin-left:10px;">' + list[i][0] + '</div></a></div>';
            document.getElementsByClassName('list')[0].innerHTML += x;
        }
    }
    if (dem == 0) {
        for (let i = 0; i < list.length; i++) {
            temp = list[i][0].toLowerCase().split('').sort().join('');
            if (temp.search(s) != -1) {
                dem++;
                document.getElementsByClassName('list')[0].innerHTML += '<div class="item"><a href="laptop/' + list[i][1] + '.html"><img src="img/' + list[i][2] + '" width="100px"><div style="margin-bottom: 20px;margin-left:10px;">' + list[i][0] + '</div></a></div>'
            }
        }
    }
    document.getElementById('total-search').innerHTML = dem;
    document.getElementById('keyword').innerHTML = "'" + s + "'";
}