console.log("API_Crous - nodejs running ..")

var data = [];

module.exports = {
getRepas: function () {
  const rp = require('request-promise');
  const $ = require('cheerio');
  const url = 'http://www.crous-lille.fr/restaurant/r-u-chatillon-lille-centre/';
  content = ''
  var tab = []

  rp(url)
    .then(function(html) {
      content =($('.content.clearfix', html).text());
      tab = content.split('\n');
      tab.splice(0, 2);
      tab.splice(1, tab.length - 1);
      str = tab[0];
      var ret = [];
      ret = str.split(/(?=[A-Z])/);
      data = ret;
      console.log('Call getRepas function');
      return ret
    })
    .catch(function(err) {
      return undefined
    });
},
getData : function () {
  return data;
}
}