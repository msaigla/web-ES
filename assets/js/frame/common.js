const wnd = remote.getCurrentWindow();


document.addEventListener('DOMContentLoaded', () => {
    let btnMin = document.querySelector('.btn-min'),
        btnMax = document.querySelector('.btn-max'),
        btnClose = document.querySelector('.btn-closed');
    let iconBtnMAx = btnMax.children[0];
    
    btnMin.addEventListener('click', () => {
        wnd.minimize();
    });

    btnMax.addEventListener('click', () => {
        if (!wnd.isMaximized()) {
            wnd.maximize();
            iconBtnMAx.classList.remove('fa-window-maximize');
            iconBtnMAx.classList.add('fa-window-restore');
        } else {
            wnd.unmaximize();
            iconBtnMAx.classList.remove('fa-window-restore');
            iconBtnMAx.classList.add('fa-window-maximize');
        }
    });

    btnClose.addEventListener('click', () => {
        wnd.close();
    });
});

window.addEventListener('resize', () => {
    let btnMax = document.querySelector('.btn-max'),
        iconBtnMAx = btnMax.children[0];
    
    if (wnd.isMaximized()) {
        wnd.maximize();
        iconBtnMAx.classList.remove('fa-window-maximize');
        iconBtnMAx.classList.add('fa-window-restore');
    } else {
        wnd.unmaximize();
        iconBtnMAx.classList.remove('fa-window-restore');
        iconBtnMAx.classList.add('fa-window-maximize');
    }
});

window.dispatchEvent(new Event('resize'));