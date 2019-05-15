import Link from "next/link";
import * as React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>About Page</h1>
        <Link href="/">
          <a>Go Home</a>
        </Link>
      </div>
    );
  }
}
