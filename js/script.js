let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product => {
    product.onclick = () => {
        preveiwContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
    };
});

const $fileInput = $('.file-input');
const $droparea = $('.file-drop-area');
const $delete = $('.item-delete');

$fileInput.on('dragenter focus click', function() {
    $droparea.addClass('is-active');
});

$fileInput.on('dragleave blur drop', function() {
    $droparea.removeClass('is-active');
});

$fileInput.on('change', function() {
    let filesCount = $(this)[0].files.length;
    let $textContainer = $(this).prev();

    if (filesCount === 1) {
        let fileName = $(this).val().split('\\').pop();
        $textContainer.text(fileName);
        $('.item-delete').css('display', 'inline-block');
    } else if (filesCount === 0) {
        $textContainer.text('or drop files here');
        $('.item-delete').css('display', 'none');
    } else {
        $textContainer.text(filesCount + ' files selected');
        $('.item-delete').css('display', 'inline-block');
    }
});

$delete.on('click', function() {
    $('.file-input').val(null);
    $('.file-msg').text('or drop files here');
    $('.item-delete').css('display', 'none');
});