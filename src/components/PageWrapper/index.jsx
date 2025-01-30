import { useLocation } from "react-router-dom";
import { useEffect, Fragment } from "react";
import PropTypes from 'prop-types';

function PageWrapper({children}) {
    const location = useLocation();

    useEffect(() => {
        const rootElement = document.getElementById('root');
        const shouldHaveBackground = ['/', '/stories', '/allcharacters', '/flash', '/about'].includes(location.pathname);
        rootElement.className = shouldHaveBackground ? 'with-background' : '';
    }, [location]);

    return <Fragment>{children}</Fragment>;
};
PageWrapper.propTypes = {
    children: PropTypes.node.isRequired
};

export default PageWrapper;