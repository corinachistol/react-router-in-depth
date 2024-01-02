import {Outlet} from 'react-router-dom';

const CarrerLayout = () => {
    return ( 
        <div className="careers-layout">
            <h2>Careers</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, exercitationem.</p>

            <Outlet/>
        </div>
     );
}
 
export default CarrerLayout;