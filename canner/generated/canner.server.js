/** Firebase required packages
 * 
 * https://www.cannercms.com/docs/data-source-firebase
 * const {FirebaseDataSource} = require('@gqlify/firebase');
 * const admin = require('firebase-admin');
 * const cert = require('./cert.json');
 */

/** Firestore required packages
 * https://www.cannercms.com/docs/data-source-firestore
 * const {FirestoreDataSource} = require('@gqlify/firestore);
 * const admin = require('firebase-admin');
 * const cert = require('./cert.json');
 */


exports.common = {
  hostname: 'http://localhost:3000',
  // cannerSchemaPath?: string;
  // cookieKeys?: string[];
  // public?: boolean;
  // clientId?: string;
  // clientSecret?: string;
}

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
  // find more icons https://ant.design/components/icon/
  sidebarMenu: [{
    title: "Posts",
    pathname: "posts",
    icon: "read"
  }, {
    title: "Categories",
    pathname: "categories",
    icon: "tag"
  }],
  // hostname?: string;
  // staticsPath?: string;
  // clientBundledDir?: string;

  // /**
  //  * OIDC config
  //  * If `oidc` is null, all oidc features will be disabled
  //  */
  // oidc?: {
  //   // issuer
  //   // via Discovery
  //   discoveryUrl?: string;
  //   // manually
  //   issuer?: string;
  //   authorizationEndpoint?: string;
  //   tokenEndpoint?: string;
  //   userinfoEndpoint?: string;
  //   jwksUri?: string;

  //   // client
  //   clientId?: string;
  //   clientSecret?: string;

  //   // What attribute of claim should we use as username
  //   usernameClaim?: string;
  //   // Additional scopes we ask in authorization
  //   additionalScopes?: string[];
  //   // Whether we should force SSO to kill session as well or not during logout process
  //   forceSsoLogout?: boolean;
  //   // Customize SSO provider's logout procedure
  //   ssoLogout?: (ctx: Context) => Promise<any>;
  // } | null;

  // /**
  //  * Fully auth customizable middleware
  //  */
  // beforeRenderCms?: (ctx: Context, next: () => Promise<any>) => Promise<void>;
  // authCallback?: (ctx: Context, next: () => Promise<any>) => Promise<void>;
  // logout?: (ctx: Context, next: () => Promise<any>) => Promise<void>;

  // /**
  //  * Cookie
  //  */
  // cookieKeys?: string[];
}

exports.graphql = {
  dataSources: {
    // the keys below is correspoing the `name` of `dataSource` property in your schema.
    // eg:
    //   <array keyName="posts" dataSource={{
    //     name: 'memory'
    //   }}
    // Notice that the memory dataSource is the default dataSource, you don't have to add it here. 
    // 
    // firebase: args => new FirebaseDataSource({
    //   config: {
    //     credential: admin.credential.cert(cert),
    //     databaseURL: `https://${cert.project_id}.firebaseio.com`, 
    //   },
    //   path: args.key
    // }),
    // firestore: args => new FirebaseDataSource({
    //   config: {
    //     credential: admin.credential.cert(cert),
    //     databaseURL: `https://${cert.project_id}.firebaseio.com`, 
    //   },
    //   collection: args.key
    // })
  }
}

exports.auth = {
  // mountPath?: string;
  accounts: [{
    username: 'canner',
    password: 'canner',
  }]
}
