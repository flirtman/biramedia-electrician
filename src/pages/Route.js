import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Services = lazy(() => import('./Services'));
const AirConditioning = lazy(() => import('./Services/AirConditioning'));
const Heating = lazy(() => import('./Services/Heating'));
const AirQuality = lazy(() => import('./Services/AirQuality'));
const WaterHeaters = lazy(() => import('./Services/WaterHeaters'));
const CommercialServices = lazy(() => import('./Services/CommercialServices'));
const Gallery = lazy(() => import('./Gallery'));
const FAQ = lazy(() => import('./FAQ'));
const GetAQuote = lazy(() => import('./GetAQuote'));
const Contact = lazy(() => import('./Contacts'));

const App = (props) => (
    <Router basename="/electrician">
        <Suspense fallback={
            <div id="loading-screen">Loading...</div>
        }>
            <Switch>
                <Route exact path={`/`} component={Home}/>
                <Route path={`/about`} component={About}/>
                <Route path={`/services`} component={Services}/>
                    <Route path={`/service/air-conditioning`} component={AirConditioning}/>
                    <Route path={`/service/heating`} component={Heating}/>
                    <Route path={`/service/air-quality`} component={AirQuality}/>
                    <Route path={`/service/water-heaters`} component={WaterHeaters}/>
                    <Route path={`/service/commercial-services`} component={CommercialServices}/>
                <Route path={`/gallery`} component={Gallery}/>
                <Route path={`/faq`} component={FAQ}/>
                <Route path={`/get-a-quote`} component={GetAQuote}/>
                <Route path={`/contact`} component={Contact}/>
            </Switch>
        </Suspense>
    </Router>
);

export default App;
