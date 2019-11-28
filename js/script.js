$('#formUploadImg').on('submit', function (e) {
    e.preventDefault();
    let formData = new FormData($(this)[0]);
    formData.append("action", "uploadImgCert")
    $.ajax({
        url: "ajax/ajax.certify.php",
        type: "post",
        dataType: "json",
        data: formData,
        processData: false, //Not to process data
        contentType: false, //Not to set contentType
        beforeSend: function () {
            console.log('Load Start')
            $('.wrapper-pop').addClass('pop-active');
        },
        success: function (data) {
            console.log(data);
            if (data.message == "OK") {

                $.confirm({
                    title: 'สำเร็จ',
                    content: 'อัพโหลดรูปภาพสำเร็จ',
                    theme: 'modern',
                    icon: 'fa fa-check',
                    type: 'green',
                    typeAnimated: true,
                    buttons: {
                        tryAgain: {
                            text: 'ตกลง',
                            btnClass: 'btn-green',
                            action: function () {
                                location.reload();
                            }
                        }
                    }
                });
            }

        },
        xhr: function () {
            var xhr = new window.XMLHttpRequest();
            xhr.upload.addEventListener("progress", function (evt) {
                if (evt.lengthComputable) {
                    var pct = (evt.loaded / evt.total) * 100;
                    console.log('p1 => ' + pct.toPrecision(3))
                    $('.loadper').text(`${parseInt(pct)} %`)
                }
            }, false);

            xhr.addEventListener("progress", function (evt) {
                if (evt.lengthComputable) {
                    var pct = (evt.loaded / evt.total) * 100;
                    console.log('p2 => ' + pct.toPrecision(3))
                }
            }, false);

            return xhr;
        },
        complete: function () {
            console.log('Load End')
            $('.wrapper-pop').removeClass('pop-active');

        }
    });
})

$('#img-handle-upload-image').on('click', function (e) {
    e.preventDefault();
    $('#inputFileImg').click();
})

$('#inputFileImg').on('change', function (e) {
    $('.showFileNameImg').text($(this).val())
    readURL('#img-handle-upload-image', this);
});


//อ่านไฟล์รูปภาพ แบบ Preview
function readURL(_name, input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        console.log('xx')
        reader.onload = function (e) {
            $(_name).attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}