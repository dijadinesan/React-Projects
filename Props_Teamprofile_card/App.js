import './App.css';
import './ProfileCard';
import ProfileCard from './ProfileCard';

function App() {
  return (
   <div className='profile'>
    
        <ProfileCard
    name="Dija Dinesan"
    role="React Developer"
    hobby="Painting"
    image="https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"/>
    
      <ProfileCard
    name="Anandhu Vinod"
    role="Medical Representative"
    hobby="Travelling"
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIq5SjiZzvoZEvd_G5tgEpGBgvPuRn2R52AQ&s"/>
    
    <ProfileCard
    name="John Doe"
    role="ETL Tester"
    hobby="Gaming"
    image="https://png.pngtree.com/png-vector/20191116/ourmid/pngtree-young-service-boy-vector-download-user-icon-vector-avatar-png-image_1991056.jpg"/>
      </div>   
    
  );
}

export default App;
