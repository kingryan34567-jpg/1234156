// Code.gs
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var subject = "📩 新的報名表單提交";

    // ✅ HTML 內容（可以用 <p>、<b>、顏色 等）
    var htmlBody = `
      <h2>🎉 新的報名資料</h2>
      <p><b>姓名：</b>${data.name}</p>
      <p><b>學號：</b>${data.stu}</p>
      <p><b>電話：</b>${data.phone}</p>
      <p><b>Email：</b>${data.email}</p>
      <p><b>飲食偏好：</b>${data.meal}</p>
      <p><b>備註：</b>${data.note}</p>
      <hr>
      <p style="color:gray;font-size:12px;">這封信由報名系統自動發送。</p>
    `;

    // ✅ 純文字版本（備用，用於不支援 HTML 的郵件用戶端）
    var textBody =
      "姓名：" + data.name + "\n" +
      "學號：" + data.stu + "\n" +
      "電話：" + data.phone + "\n" +
      "Email：" + data.email + "\n" +
      "飲食偏好：" + data.meal + "\n" +
      "備註：" + data.note + "\n\n" +
      "這封信由報名系統自動發送。";

    // ✅ 寄信（支援 HTML 格式）
    MailApp.sendEmail({
      to: "kingryan34567@gmail.com", // ← 改成你要接收的 Gmail
      subject: subject,
      htmlBody: htmlBody,
      body: textBody
    });

    // ✅ 回傳成功訊息
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    // ❌ 錯誤處理
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
