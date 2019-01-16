var apiURL = 'https://api.github.com/users/';
var demo = new Vue({
  el: '#demo',
  data: {
    account:'a3660980',
    repos: null
  },

  created: function () {
    this.fetchData()
  },

  watch: {
    account: 'fetchData'
  },
  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', apiURL + self.account + '/repos')
      xhr.onload = function () {
        self.repos = JSON.parse(xhr.responseText)
      }
      xhr.send()
    }
  }
})