// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import Hello from '../components/Hello';

const renderApp = (Component) => {
  ReactDOM.render(
    <Component name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
}
document.addEventListener('DOMContentLoaded', () => {
  renderApp(Hello);
})

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('../components/Hello', () => {
    const NextHello = require('../components/Hello').default;
    renderApp(NextHello);
  });
}