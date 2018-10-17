var Component = {
  view: function(vnode) {
    return m("main", [m("h1", "Azure Auth Funtions with mithril")]);
  }
};

m.mount(document.getElementById("app"), Component);
