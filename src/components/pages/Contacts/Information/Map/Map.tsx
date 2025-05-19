import classes from './Map.module.scss';
import map from './../../../../../assets/contacts/map.png';

export const Map: React.FC = () => {
    return (
        <>
            <div className={classes.map}>
                <img src={map} alt="" />
            </div>
        </>
    );
};
