var User = {
  view: function(vnode) {
    return m("li", vnode.attrs.name);
  }
};

var Users = {
  view: function(vnode) {
    return m(
      "ul",
      vnode.attrs.users.map(function(user) {
        return m(User, { name: user.Name });
      })
    );
  }
};

var Login = {
  view: function(vnode) {
    return m("div.g-signin2", { "data-onsuccess": "onSignIn" });
  }
};

var Home = {
  users: [],
  oninit: function(vnode) {
    m.request({
      method: "GET",
      url: "https://dworthentestfunctionapp1.azurewebsites.net/api/users",
      withCredentials: false
    })
      .then(function(results) {
        vnode.state.users = results;
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  view: function(vnode) {
    console.log(vnode.state.users);
    return m("main", [
      m("h1", "Azure Auth Funtions with mithril"),
      m(Login),
      m(Users, { users: vnode.state.users })
    ]);
  }
};

m.mount(document.getElementById("app"), Home);
