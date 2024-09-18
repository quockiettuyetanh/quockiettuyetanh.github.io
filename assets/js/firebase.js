import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB29NNeQhb4hkPt5pmRA8tfBt1fOUAGt3g",
  authDomain: "quockiettuyetanhwedding.firebaseapp.com",
  databaseURL: "https://quockiettuyetanhwedding-default-rtdb.firebaseio.com",
  projectId: "quockiettuyetanhwedding",
  storageBucket: "quockiettuyetanhwedding.appspot.com",
  messagingSenderId: "1071769442607",
  appId: "1:1071769442607:web:a94a3cdeed610f3500e9da",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

window.addData = function addData(name, phone, loichuc) {
  set(ref(db, "LoiChuc/" + phone), {
    hoten: name,
    dienthoai: phone,
    loichuc: loichuc,
  })
    .then(() => {
      Swal.fire({
        title: "Thành công",
        text: "Đã gửi lời chúc đến Cô Dâu & Chú Rể",
        icon: "success",
      });

      $("#name").val("");
      $("#phone").val("");
      $("#loichuc").val("");

      $("#name").focus();

      getAllData("LoiChuc");
    })
    .catch((error) => {
      Swal.fire({
        title: "Lỗi",
        text: "Đã xảy ra lỗi khi gửi lời chúc",
        icon: "error",
      });
      console.log(error);
    });
};

function getAllData(location) {
  const dataRef = ref(db, location);

  get(dataRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log("Data retrieved:", data);

        const showLoichucElement = document.getElementById("show_loichuc");
        showLoichucElement.innerHTML = ""; // Clear previous content

        for (const key in data) {
          if (Object.hasOwnProperty.call(data, key)) {
            const item = data[key];
            const html = `
            <div class="d-flex flex-column mb-2">
            <span class="fw-bold">${item.hoten}</span>
            <p>${item.loichuc}.</p>
            </div>`;
            showLoichucElement.insertAdjacentHTML("beforeend", html);
          }
        }
      } else {
        console.log("Không data trả về");
      }
    })
    .catch((error) => {
      console.error("Lỗi:", error);
    });
}

getAllData("LoiChuc");
