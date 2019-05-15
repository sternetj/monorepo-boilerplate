import Link from "next/link";
import * as React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link href="/about">
          <a>Go to About Page</a>
        </Link>
      </div>
    );
  }
}
