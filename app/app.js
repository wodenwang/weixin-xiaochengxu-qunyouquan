//app.js
App({
   //初始化小程序
   onLaunch : function(){
       console.log('小程序开始了！！！！');
       this.getUserInfo();
   },
   onShow : function(){
       console.log('小程序准备显示了！！！！');
   },
   getUserInfo : function(res){
      
       wx.login({
          success : function(res){
             
              wx.getUserInfo({
                 success : function(res){
                      console.log('获取用户信息：'+JSON.stringify(res.userInfo));
                      //存储用户名
                      wx.setStorageSync('USERNAME',res.userInfo.nickName);
                      //存储用户头像
                      wx.setStorageSync('AVATARURL',res.userInfo.avatarUrl);
                 }
              })
          } 
       })              
   }   
})