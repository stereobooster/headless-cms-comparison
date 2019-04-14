const {FirebaseCredential} = require("canner-credential");
const {MemoryDataSource} = require('@gqlify/server');

exports.cms = {
  logo: {
    src: "https://cdn.canner.io/images/logo/logo-word-white.png",
    width: "140px",
    height: "50px",
    href: "#",
    backgroundColor: "#6ba4be"
  },
  style: {
    sidebarTheme: "dark",
    navbarTheme: "light",
    navbarStyle: {
      lineHeight: "50px",
      height: "50px"
    },
    navbarMenuStyle: {
      lineHeight: "50px"
    },
    sidebarMenuStyle: {
      height: 'calc(100% - 50px)',
      background: '#4c6574'
    },
    sidebarStyle: {
      width: "200px",
    },
    theme: {
      "primary-color": "#f19b90",
      "btn-primary-bg": "#f19b90",

      "menu-dark-item-active-bg": "#415663",
      "menu-dark-bg": "#415663",
      "menu-dark-color": "#eee",

      // common
      "border-radius-base": "3px",

      // header
      "layout-header-background": "#fff",

      // body
      "layout-body-background": "#ecf2f6"
    }
  },
  sidebarMenu: [{
    title: "Posts",
    pathname: "posts",
    icon: "read"
  }, {
    title: "Categories",
    pathname: "categories",
    icon: "tag"
  }],
}

exports.graphql = {
  dataSources: {
    // "default" environment is the required in dataSources
    "default": []
  
    /* See https://www.canner.io/docs/credential-firebase.html to learn how to get */
    // "default": [new FirebaseCredential(require("./cert.json"))],
    
    /* See https://www.canner.io/docs/credential-prisma.html to learn how to get prisma configuration files */
    // "default": [new PrismaCredential("path to yaml")],
    
    /* for PREMIUM plan, you can use more than one env */
    // "test": [new FirebaseCredential(require("path to cert.json"))]
  }
}
