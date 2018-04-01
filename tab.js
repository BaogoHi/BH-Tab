
var allTab = document.querySelectorAll('.bh-tab')
var allContent = document.querySelectorAll('.bh-tab-content')
// 清理选中
var cleanContentActive = (content) => {
  content.forEach((v, i) => {
    v.classList.remove('bh-tab-content-active')
  })
}
var cleanTab = (tab) => {
  tab.forEach((v, i) => {
    v.classList.remove('bh-tab-active')
  })
}
// 遍历点击事件
allTab.forEach((tab, i) => {
  tab.onclick = () => {
    cleanContentActive(allContent)
    cleanTab(allTab)
    tab.classList.add('bh-tab-active')
    allContent[i].classList.add('bh-tab-content-active')  
  }
})

