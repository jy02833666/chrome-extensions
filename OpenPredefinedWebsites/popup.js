document.getElementById('openWebsites').addEventListener('click', function() {
    var websites = ['https://www.youtube.com', 'https://www.iyf.tv/list?star=&page=1&pageSize=32&cid=0,1,6&year=-1&language=-1&region=-1&status=-1&orderBy=1&desc=true', 'https://www.bilibili.com'];
  
    websites.forEach(function(url) {
      chrome.tabs.create({ url: url });
    });
  });
  