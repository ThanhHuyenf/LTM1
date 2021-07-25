const parentContainer = document.querySelector('.description');

parentContainer.addEventListener('click', event => {

    const current = event.target;

    const isReadMoreBtn = current.className.includes('btn-readmore');

    if (!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.readmoreText');

    currentText.classList.toggle('readmoreText-show');

    document.querySelector('.content').classList.toggle('expanded');

    current.textContent = current.textContent.includes('Đọc thêm') ? "Rút gọn" : "Đọc thêm";

})