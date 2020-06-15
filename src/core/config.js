let config = {};
// 客户端版本号
config.ClientVersion = 'beta 0.0.0.1';
// 调试模式(0:非调试|1:本地调试|2:线上调试)
config.Debug = 1;
// web站点根目录(chatroom:正式站点|chatroom_test:测试站点)
config.webDir = ['/wll/', '/', '/chatroom_test/'];
// 验证登录 - 服务器地址
config.LoginServer = 'http://login.lexun.com/login/touch/encryptlogin.php';
// 上传图片地址
config.UploadUrl = 'http://up.lexun.com/UploadFileWS/upload.aspx';
// 接口地址
config.requestRul = ['production', 'http://192.168.0.113:8084/api/'];

module.exports = config;