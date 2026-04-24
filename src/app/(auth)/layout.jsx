import Navber from '@/components/shared/Navber';

const Authlayout = ({children}) => {
    return (
        <>
          <Navber/>
          {children}  
        </>
    );
};

export default Authlayout;