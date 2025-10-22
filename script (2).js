// Code.gs
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var subject = "📩 新的報名表單提交";
    var body =
      <p><b>姓名：</b>${data.name}</p>
    <p><b>學號：</b>${data.stu}</p>
    <p><b>電話：</b>${data.phone}</p>
    <p><b>Email：</b>${data.email}</p>
    <p><b>飲食偏好：</b>${data.meal}</p>
    <p><b>備註：</b>${data.note}</p>
      "這封信由報名系統自動發送。";

    // 🚨 改成你自己的 Gmail 地址
    MailApp.sendEmail("kingryan34567@gmail.com", subject, body);

    return ContentService
      .createTextOutput(JSON.stringify({status: "success"}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({status: "error", message: err}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
