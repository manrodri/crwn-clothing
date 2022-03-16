import './homepage-styles.scss';

import Directory from '../../components/directory/directory.component';

const HomePage = () => {
    return (
        <div class="App">
            <div className="homepage">
                <Directory />
            </div>
        </div>

    );
};

export default HomePage;