import type { Component } from "solid-js";
import { lazy } from "solid-js";
import { Router, Routes, Route, Link } from "solid-app-router";
import styles from "./App.module.css";

const IndexPage = lazy(() => import("./pages/Index"));
const CatsPage = lazy(() => import("./pages/Cats"));
const CounterPage = lazy(() => import("./pages/Counter"));

const App: Component = () => {
  return (
    <Router>
      <div class={styles.App}>
        <div class={styles.nav}>
          <Link href="/">Todo Page</Link>
          <Link href="/cats">Cats Page </Link>
          <Link href="/counter">Counter Page </Link>
        </div>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/cats" element={<CatsPage />} />
          <Route path="/counter" element={<CounterPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
