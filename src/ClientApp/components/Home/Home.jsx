import React from 'react';
import { RouteComponentProps } from 'react-router';

export default class Home extends React.Component {
    render() {
        return <div>
            <h1>Hello, world!</h1>
            <p>Welcome to your new single-page application, built with:</p>
            <ul>
                <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
                <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
                <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>
            </ul>
            <p>To help you get started, we've also set up:</p>
            <ul>
                <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
                <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>
                <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, rebuilt React components will be injected directly into your running application, preserving its live state.</li>
            </ul>
            <p>There are demonstrations of some typical tasks:</p>
            <ul>
                <li><strong>Fetching data from server</strong> in ClientApp/components/FetchData.jsx.</li>
                <li><strong>Managing state on client</strong> in ClientApp/components/Counter.jsx.</li>
                <li><strong>Reveal presentation slides</strong> in wwwroot/slides/index.html.
                    You will need it to prepare your final presentation</li>
            </ul>
        </div>;
    }
}
