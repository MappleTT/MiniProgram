Page({
  onTap:function (event) {
  
    // wx.navigateTo({
    //   url: '../posts/post',
    // }) 

    // wx.redirectTo({
    //   url: '../posts/post',
    // })
    wx.switchTab({
      url: "../posts/post"
    })
  }
})