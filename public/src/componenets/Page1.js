// Andreas Benckert

import React, { useState } from "react";
// import staffs from "./api";
import Section from "./Staff/Section";
import Form from "./Staff/Form";
import List from "./Staff/List";

const appTitle = "Staff Members";

const list = [
  { title: "Test #1", surname: "Bob1" },
  { title: "Test #2", surname: "Bob2" },
  { title: "Test #3", surname: "Bob3" },
];

const Page1 = () => {
  /* useEffect(() => {
    async function fetchData() {
      const { data } = await staffs.get("/staffs");
      setContacts(data);
    }
    fetchData();
  }, []); */

  const [openForm, setOpenForm] = useState(false);
  const [staffList, setStaffList] = useState(list);

  //item can it be several??? Check tomorrow
  const addStaff = (item) => {
    setStaffList((oldList) => [...oldList, item]);
  };

  return (
    <div className="ui container center aligned">
      <Section>
        <h1>{appTitle}</h1>
      </Section>
      <div className="ui grid">
        <div className="right floated left aligned five wide column">
          <button
            onClick={() => setOpenForm(!openForm)}
            className="ui button circular icon"
          >
            Add a new <br />
            staff member
          </button>
        </div>
      </div>
      <Section>{openForm && <Form addStaff={addStaff} />}</Section>
      <Section>
        <List list={staffList} />
      </Section>
    </div>
  );
};

export default Page1;
