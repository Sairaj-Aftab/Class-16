
const click_me = document.querySelector('.slider a');
const po_modal = document.querySelector('.post-modal');
const po_alert = document.querySelector('.post-alert');
const po_alert_close = document.querySelector('.post-alert .close');
const po_alert_keep = document.querySelector('.post-alert .button #keep');
const po_alert_dis = document.querySelector('.post-alert .button #dis');
const po_modal_close = document.querySelector('.post-modal .close');
const po_modal_content = document.querySelector('.post-modal .content');

click_me.addEventListener('click', function () {
    po_modal.classList.add('active');
    po_modal_content.classList.add('active');
})
po_modal_close.addEventListener('click', function () {
    po_alert.style.display = `flex`;
})
po_alert_close.addEventListener('click', function () {
    po_alert.style.display = `none`;
})
po_alert_keep.addEventListener('click', function () {
    po_alert.style.display = `none`;
})
po_alert_dis.addEventListener('click', function () {
    po_modal.classList.remove('active');
    po_alert.style.display = `none`;
})
po_modal.addEventListener('click', function (e) {
    if (e.target == this) {
        po_modal.classList.remove('active');
        po_modal_content.classList.remove('active');
    }
})

// ---------Accordion----------------//
const acc_header = document.querySelectorAll('.accordion .header');

acc_header.forEach(data => {
    data.addEventListener('click', function (e) {
        
            data.classList.toggle('active');
            if (data.classList.contains('active')) {
                data.nextElementSibling.style.height = data.nextElementSibling.scrollHeight + `px`;
            } else {
                data.nextElementSibling.style.height = `0px`;
            }

            acc_header.forEach(data => {
                if(data != this) {
                    data.classList.remove('active');

                    if(data != data.classList.contains('active')) {
                        data.nextElementSibling.style.height = `0px`;
                    }
                }

                
            })
    })
})