import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return ZZZ === buttonCategory;
    });

    setArr(newArr);
  };

  // Helper function to handle the toggle state of the text
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpanded = (item) => {
    setExpandedItem(expandedItem === item ? null : item);
  };

  return (
    <main className="flex">
      <section className="flex left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>

        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick("bootstrap");
          }}
          className={currentActive === "bootstrap" ? "active" : null}
        >
          Bootstrap
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          Reactjs
        </button>
        <button
          onClick={() => {
            handleClick("next");
          }}
          className={currentActive === "next" ? "active" : null}
        >
          React & NextJs
        </button>
      </section>

      <section className="flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            const isExpanded = expandedItem === item;

            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="card"
              >
                <img width={266} src={item.imgPath} alt="" className="port_img" />

                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">
                    {isExpanded ? item.subTitle : item.subTitle.substring(0, 140)}
                    {item.subTitle.length > 60 && !isExpanded && '...'}
                  </p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <div className="icon-link"></div>
                      <Link to="https://github.com/ibrahim-shebl">
                        <div className="icon-github"></div>
                      </Link>
                    </div>

                    <button className="link flex" onClick={() => toggleExpanded(item)}>
                      {isExpanded ? 'less' : 'more'}
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </button>
                  </div>
                  <div className="pro-btn">
                    <a href={item.url} className="btn">view</a>
                    <a href={item.source} className="btn">Github</a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
