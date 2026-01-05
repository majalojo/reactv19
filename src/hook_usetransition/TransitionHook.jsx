import { useState, useTransition, Activity } from "react";
import { Tabs, Tab } from "react-bootstrap";

const TransitionHook = () => {
  const [defaultTabKey, setDefaultTabKey] = useState("home");
  const [, startTransition] = useTransition();
  const [data, setData] = useState(null);

  const delay = async (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  async function fetchData() {
    await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setData(data.products[0].title));
  }

  function handleTabChange(key) {
    setDefaultTabKey(key);
    startTransition(async () => {
      if (key === "profile") {
        await delay(5000);
        await fetchData();
      }
    });
  }

  return (
    <div>
      <Tabs
        activeKey={defaultTabKey}
        onSelect={handleTabChange}
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          Tab content for Home
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <Activity>
            <div>{data}</div>
          </Activity>
        </Tab>
        <Tab eventKey="contact" title="Contact">
          Tab content for Contact
        </Tab>
      </Tabs>
    </div>
  );
};

export default TransitionHook;
