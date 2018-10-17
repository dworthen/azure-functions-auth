var User = {
  view: function(vnode) {
    return m("li", vnode.attrs.name);
  }
};

var Users = {
  view: function(vnode) {
    return m(
      "ul",
      [].concat(vnode.attrs.users).map(function(user) {
        return m(User, { name: user.Name });
      })
    );
  }
};

var Home = {
  users: [],
  oninit: function(vnode) {
    m.request({
      method: "GET",
      url: "https://dworthentestfunctionapp1.azurewebsites.net/api/users"
    })
      .then(function(results) {
        vnode.state.users = results;
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  view: function(vnode) {
    return m("main", [
      m("h1", "Azure Auth Funtions with mithril"),
      m(Users, { users: vnode.state.users })
    ]);
  }
};

m.mount(document.getElementById("app"), Home);
