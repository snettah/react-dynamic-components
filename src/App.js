import React, { useState, Suspense, Fragment } from "react";
import Highlight from "./Highlight";
import Components from "./Components";
// import "./App.css";
import { Container } from "@material-ui/core";

const page2 = {
  title: "Page 2",
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

const page1 = {
  title: "Page 1",
  sections: [
    {
      id: "1",
      component: "Paper",
      props: {
        elevation: 4,
        children: [
          {
            component: "Grid",
            props: {
              container: true,
              spacing: 2,
              children: [
                {
                  component: "Form",
                  props: {
                    children: [
                      {
                        component: "TextField",
                        props: {
                          placeholder: "My input",
                          name: "myinput"
                        }
                      },
                      {
                        component: "Grid",
                        props: {
                          item: true,
                          xs: 6,
                          align: "center",
                          children: {
                            component: "Button",
                            props: {
                              type: "submit",
                              children: "Send",
                              color: "primary",
                              variant: "contained"
                            }
                          }
                        }
                      },
                      {
                        component: "Grid",
                        props: {
                          item: true,
                          xs: 6,
                          align: "center",
                          children: {
                            component: "Button",
                            props: {
                              children: "Cancel",
                              color: "secondary",
                              variant: "outlined"
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              ]
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
// function Section({ root }) {
//   return <section className="section-component">{}</section>;
// }

/**
 * Renders a page defined by its JSON
 * structure.
 *
 * See {@code page1} and {@code page2} const at
 * the top.
 */
function DynamicPage({ page }) {
  console.log("page: ", page.sections.length);
  return (
    <>
      {page.sections.map(s => (
        <Fragment key={s.id}>{Components(s)}</Fragment>
      ))}
    </>
  );
}

function App() {
  const [curPage, setCurPage] = useState(page1);

  return (
    <Container maxWidth="sm">
      {/* <p>
        Current Page: <b>{curPage.title}</b>
      </p> */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* <nav className="app-nav">
        <button onClick={() => setCurPage(page1)}>Page 1</button>
        <button onClick={() => setCurPage(page2)}>Page 2</button>
      </nav> */}
        <DynamicPage page={curPage} />
      </Suspense>
      {/* <Highlight code={curPage} /> */}
    </Container>
  );
}

export default App;
