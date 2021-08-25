import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <h1>React TS Webpack Template</h1>
        </Route>
        <Route path="*">
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </Router>
  )
}
