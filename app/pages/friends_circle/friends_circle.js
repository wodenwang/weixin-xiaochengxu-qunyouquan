Page({
    onLoad : function(){
        //获取当前用户头像图片
        this.setData({
            avatarUrl : wx.getStorageSync('AVATARURL')
        })
    },
    data : {
        currentId : null,
        modalHidden: true,
        list : [
            {
                anchor : wx.getStorageSync('AVATARURL'), 
                name : 'Tony',
                context : '我们提供了一种新的开放能力',
                pic : [
                    '../../img/item-1.jpg',
                    '../../img/item-2.jpg'
                ],
                myself : true,
                ctrlShow : false 
            },
            {
                anchor : '../../img/touxiang-2.jpg',  
                name : 'jevon',
                context : '为什么我眼里常含泪水，因为我爱这土地爱的深沉。听闻国家欠的水泥地已经修好了，家族兄弟们喜出望外纷纷来此斗舞',
                pic : [
                    '../../img/img.png',
                    '../../img/img.png',
                    '../../img/img.png',
                    '../../img/img.png',
                    '../../img/img.png',
                    '../../img/img.png',
                    '../../img/img.png',
                    '../../img/img.png',
                    '../../img/img.png'
                ],
                ctrlShow : false                  
            },
            {
                anchor : '../../img/icon-qun.jpg',  
                name : 'helen',
                context : '搬完了一天的砖，杀马特内部的斗舞solo赛又要拉开帷幕了',
                pic : [
                    '../../img/img.png'
                ],
                ctrlShow : false                  
            }
        ]
    },
    viewTurn : function(){
        // wx.navigateTo({
        //    url : '../detail/detail'     
        // });
    },
    ctrlHidden : function(){
        var list = this.data.list;
        for(var i=0;i<list.length;i++){
            list[i].ctrlShow = false;
        }
        this.setData({
            list : list
        })
    },
    ctrlShow : function(event){
        var currentId = event.currentTarget.id,
            list = this.data.list;   
            
        for(var i=0;i<list.length;i++){
            if(currentId != i){
                list[i].ctrlShow = false;
            }
        }  

        list[currentId].ctrlShow = !list[currentId].ctrlShow;
        
        this.setData({
            list : list
        })   
    },
    modalTap : function(){
        this.setData({
            modalHidden : false
        })
    },
    modalChange : function(){
        this.setData({
            modalHidden : true
        })
    },
    delteItem : function(event){
       var currentId = event.currentTarget.id,
           list = this.data.list;
       list.splice(currentId,1);
       this.setData({
           list : list,
           modalHidden : true
       })    
    }
})