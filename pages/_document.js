import Document, { Html, Head, Main, NextScript } from "next/document";
import { Fragment } from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fa">
        <Head />
        <body>
          {/* for import some html code in all pages in projex for example modal */}
          <div id="overlays"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
