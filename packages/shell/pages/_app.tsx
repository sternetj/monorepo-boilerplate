import App, { Container } from "next/app";
import React from "react";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props as any;
    return (
      <Container>
          <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
