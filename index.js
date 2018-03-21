const nodemailer = require("nodemailer")


var transporter = nodemailer.createTransport({ 
  service: 'qq',  
  auth: {  
    user: '1367511704@qq.com',  
    pass: 'xiqmllaisotdidhc' //授权码,通过QQ获取  
  
  }  
  });  
  var mailOptions = {  
    from: '1367511704@qq.com', // 发送者  
    to: '2850765256@qq.com', // 接受者,可以同时发送多个,以逗号隔开  
    subject: '测试', // 标题  
    //text: 'Hello world', // 文本  
    html: `<h2>nodemailer基本使用:</h2><h3>  
    <a href="http://blog.csdn.net/zzwwjjdj1/article/details/51878392">  
    http://blog.csdn.net/zzwwjjdj1/article/details/51878392</a></h3>`   
  };  
  
  transporter.sendMail(mailOptions, function (err, info) {  
    if (err) {  
      console.log(err);  
      return;  
    }  
  
    console.log('发送成功');  
  });