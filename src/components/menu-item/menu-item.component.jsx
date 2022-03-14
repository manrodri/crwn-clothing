import './menu-item.styles.scss';

const MenuItem = (props) => {
    const { title, imageUrl, size } = props;
    return (
        <div className={`${size} menu-item`}>
            <div style={{
                backgroundImage: `url (${imageUrl})`
            }} className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};

export default MenuItem;