import React, { useState, Suspense } from "react";
import Highlight from "./Highlight";
import Components from "./Components";
import "./App.css";

const page1 = {
  title: "Page 1",
  sections: [
    {
      id: "qwr1",
      component: "Cover",
      props: {
        head: "Welcome on Page 1",
        byline: "Just one of these pages"
      }
    },
    {
      id: "2tew",
      component: "Copy",
      props: {
        content: "Lorem ipsum dolor sit amet."
      }
    }
  ]
};

const page2 = {
  title: "Page 2",
  sections: [
    {
      id: "3erq",
      component: "Copy",
      props: {
        content: "This page renders a different set of components."
      }
    },
    {
      id: "4qwr",
      component: "Channels",
      props: {
        children: [
          {
            id: "5trw",
            component: "Twitter",
            props: {
              handle: "example.com",
              key: "twitter"
            }
          },
          {
            id: "6tyu",
            component: "Link",
            props: {
              subscribeUrl: "https://google.com",
              key: "link"
            }
          }
        ]
      }
    }
  ]
};

/**
 * Renders components based on data in the
 * {@code root} prop.
 */
function Section({ root }) {
  return <section className="section-component">{Components(root)}</section>;
}

/**
 * Renders a page defined by its JSON
 * structure.
 *
 * See {@code page1} and {@code page2} const at
 * the top.
 */
function DynamicPage({ page }) {
  return (
    <div className="dynamicpage-component">
      {page.sections.map(s => (
        <Section key={s.id} root={s} />
      ))}
    </div>
  );
}

function App() {
  const [curPage, setCurPage] = useState(page1);

  return (
    <div className="app-component">
      <nav className="app-nav">
        <button onClick={ev => setCurPage(page1)}>Page 1</button>
        <button onClick={ev => setCurPage(page2)}>Page 2</button>
      </nav>
      <p>
        Current Page: <b>{curPage.title}</b>
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicPage page={curPage} />
      </Suspense>
      <Highlight code={curPage} />
    </div>
  );
}

export default App;
