<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>四系迎新報名表</title>
  <style>
    body { font-family:"Microsoft JhengHei", sans-serif; background:#fafafa; margin:40px; }
    form { background:#fff; padding:20px; border-radius:10px; box-shadow:0 0 10px #ccc; width:500px; margin:auto; }
    label { display:block; margin-top:10px; font-weight:bold; }
    input, select, textarea { width:100%; padding:8px; margin-top:4px; }
    input[type=submit] { width:auto; background:#4CAF50; color:white; border:none; border-radius:5px; cursor:pointer; padding:10px 20px; margin-top:20px; }
  </style>
</head>
<body>
  <h2 style="text-align:center;">四系迎新報名表</h2>
  <form id="hw2Form">
    <label>姓名</label>
    <input type="text" name="name" required>

    <label>學號</label>
    <input type="text" name="stu" required>

    <label>電話</label>
    <input type="text" name="phone" required>

    <label>Email</label>
    <input type="email" name="email" required>

    <label>系所（可多選）</label>
    <select name="dept[]" multiple required>
      <option value="資管系">資管系</option>
      <option value="資工系">資工系</option>
      <option value="電機系">電機系</option>
      <option value="電子系">電子系</option>
    </select>

    <label>是否住宿</label>
    <select name="stay" required>
      <option value="">請選擇</option>
      <option value="是">是</option>
      <option value="否">否</option>
    </select>

    <label>飲食習慣</label>
    <select name="meal">
      <option value="葷食">葷食</option>
      <option value="素食">素食</option>
    </select>

    <label>備註</label>
    <textarea name="note" rows="4"></textarea>

    <input type="submit" value="送出報名">
  </form>

  <!-- EmailJS SDK -->
  <script src="https://cdn.emailjs.com/email.min.js"></script>
  <script src="script.js"></script>
</body>
<script>
// 初始化 EmailJS
emailjs.init("e93ru.42jo4xk7"); // 放你的 Public Key

const form = document.getElementById("hw2Form");

form.addEventListener("submit", function(e){
  e.preventDefault();

  // 寄送表單資料到 Gmail
  emailjs.sendForm("service_abc123", "template_xyz456", this)
    .then(() => {
      alert("✅ 郵件已寄出到 Gmail！");
      form.reset();
    })
    .catch((err) => {
      console.error(err);
      alert("❌ 郵件寄送失敗：" + JSON.stringify(err));
    });
});
</script>
</html>
