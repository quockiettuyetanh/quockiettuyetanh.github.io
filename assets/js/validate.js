$(document).ready(function () {
  $("#form-container").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      phone: {
        required: true,
        number: true,
        minlength: 2,
        maxlength: 10,
      },
      loichuc: {
        required: true,
        minlength: 10,
      },
    },
    messages: {
      name: {
        required: "Vui lòng nhập họ tên.",
        minlength: "Từ 2 kí tự trở lên ạ.",
      },
      phone: {
        required: "Vui lòng nhập số điện thoại.",
        number: "Số điện thoại phải là số.",
        minlength: "Từ 2 kí tự trở lên ạ.",
        maxlength: "Không quá 10 kí tự.",
      },
      loichuc: {
        required: "Vui lòng nhập lời chúc đến cô dâu & chú rể.",
        minlength: "Từ 10 kí tự trở lên ạ.",
      },
    },
    submitHandler: function (form) {
      const name = $("#name").val();
      const phone = $("#phone").val();
      const loichuc = $("#loichuc").val();

      window.addData(name, phone, loichuc);
    },
  });

  // Prevent default form submission
  $("#form-container").on("submit", function (event) {
    event.preventDefault();
  });
});
