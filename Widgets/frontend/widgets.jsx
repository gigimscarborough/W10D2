import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';

const tabsArray = [{title: "Kai's tab", content: "Nothing."},
                  {title: "Gigi's tab", content: "CSS is Stressful."}];
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Clock/>, root);

  ReactDOM.render(<Tabs/>, root);
});
