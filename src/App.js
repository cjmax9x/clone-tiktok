import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import publibRoutes from '~/routes/routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publibRoutes.map((item, index) => {
                        let Layout;
                        if (item.layout) {
                            Layout = item.layout;
                        } else if (item.layout == null) {
                            Layout = Fragment;
                        }
                        return <Route key={index} path={item.path} element={<Layout>{item.component}</Layout>} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
