import React from 'react';
import DashHeader from '../Compoments/DashHeader/DashHeader';
import DashSidebar from '../Compoments/DashSidebar/DashSidebar';
import AppContent from './AppContent';


const Layout = () => {
    return (
        <>
            <div className="main_wrap">
                <DashSidebar />

                <div className="right_panel">
                    <DashHeader />

                    <div className="content">
                        <div class="">
                            <div className='layoutWrapper'>
                                <AppContent />


                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Layout;