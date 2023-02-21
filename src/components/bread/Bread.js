import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Bread = ({ pathname, state }) => {
  const navigate = useNavigate();
  const bread = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb style={{ marginLeft: "1rem" }}>
      {bread.map((item, index, arr) => {
        if (item.includes("-")) {
          return (
            <Breadcrumb.Item
              key={index}
              active={index === arr.length - 1}
              onClick={() =>
                navigate(
                  (() => {
                    const help = [...bread];
                    help.splice(index + 1);
                    console.log(help);
                    return help.join("/");
                  })()
                )
              }
            >
              {item.split("-")[1]}
            </Breadcrumb.Item>
          );
        }
        return (
          <Breadcrumb.Item
            key={index}
            active={index === arr.length - 1}
            onClick={() =>
              navigate(
                (() => {
                  const help = [...bread];
                  help.splice(index + 1);
                  console.log(help);
                  return help.join("/");
                })()
              )
            }
          >
            {item}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default Bread;
