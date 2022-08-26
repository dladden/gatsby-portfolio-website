const React = require("react")
const Layout = require("./src/components/Layout").default
//

//wrap function provided by gatsby with two elements to pass:
//elements and props.
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
