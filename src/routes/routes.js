import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Live from '~/pages/Live';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';

import HeaderOnly from '~/layouts/HeaderOnly';
import DefaultLayout from '~/layouts/DefaultLayout';
import config from '~/config';

const publibRoutes = [
    { path: config.routes.home, component: <Home />, layout: DefaultLayout },
    { path: config.routes.following, component: <Following />, layout: DefaultLayout },
    { path: config.routes.live, component: <Live />, layout: DefaultLayout },
    { path: config.routes.upload, component: <Upload />, layout: HeaderOnly },
    { path: config.routes.profile, component: <Profile />, layout: null },
];
export default publibRoutes;
