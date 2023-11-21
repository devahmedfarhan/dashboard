import React from 'react'
import AppContent from './AppContent';
import DashHeader from '../Compoments/DashHeader/DashHeader';
import DashSidebar from '../Compoments/DashSidebar/DashSidebar';

const Layout = () => {
    return (
        <>
            <div className="main_wrap">
                <DashSidebar />

                <div className="right_panel">
                    <DashHeader />

                    <div className="content">
                        <div class="d-flex row analyse flex-wrap">
                            <AppContent />
                            {/* <div className="col">
                                <div class="card">
                                    <div className="d-flex align-items-center mb-2 day_exp pb-2">
                                        <h6 className="mb-0">Expences</h6>
                                        <span className="sm_box ms-auto">Today</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <h4 className="mb-0">
                                            $ 5660.00 <span>Compared to $5240 yesterday</span>
                                        </h4>
                                        <span className="ms-auto status">↑ 2.5%</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <h5 className="mb-0 d-flex">
                                            Last week expences<span className="ms-auto">$22658.00</span>
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div class="card">
                                    <div className="d-flex align-items-center mb-2 day_exp pb-2">
                                        <h6 className="mb-0">Expences</h6>
                                        <span className="sm_box ms-auto">Today</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <h4 className="mb-0">
                                            $ 5660.00 <span>Compared to $5240 yesterday</span>
                                        </h4>
                                        <span className="ms-auto status">↑ 2.5%</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <h5 className="mb-0 d-flex">
                                            Last week expences<span className="ms-auto">$22658.00</span>
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div class="card">
                                    <div className="d-flex align-items-center mb-2 day_exp pb-2">
                                        <h6 className="mb-0">Expences</h6>
                                        <span className="sm_box ms-auto">Today</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <h4 className="mb-0">
                                            $ 5660.00 <span>Compared to $5240 yesterday</span>
                                        </h4>
                                        <span className="ms-auto status">↑ 2.5%</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <h5 className="mb-0 d-flex">
                                            Last week expences<span className="ms-auto">$22658.00</span>
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div class="card">
                                    <div className="d-flex align-items-center mb-2 day_exp pb-2">
                                        <h6 className="mb-0">Expences</h6>
                                        <span className="sm_box ms-auto">Today</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <h4 className="mb-0">
                                            $ 5660.00 <span>Compared to $5240 yesterday</span>
                                        </h4>
                                        <span className="ms-auto status">↑ 2.5%</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <h5 className="mb-0 d-flex">
                                            Last week expences<span className="ms-auto">$22658.00</span>
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div class="card">
                                    <div className="d-flex align-items-center mb-2 day_exp pb-2">
                                        <h6 className="mb-0">Expences</h6>
                                        <span className="sm_box ms-auto">Today</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <h4 className="mb-0">
                                            $ 5660.00 <span>Compared to $5240 yesterday</span>
                                        </h4>
                                        <span className="ms-auto status">↑ 2.5%</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <h5 className="mb-0 d-flex">
                                            Last week expences<span className="ms-auto">$22658.00</span>
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div class="card">
                                    <div className="d-flex align-items-center mb-2 day_exp pb-2">
                                        <h6 className="mb-0">Expences</h6>
                                        <span className="sm_box ms-auto">Today</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <h4 className="mb-0">
                                            $ 5660.00 <span>Compared to $5240 yesterday</span>
                                        </h4>
                                        <span className="ms-auto status">↑ 2.5%</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <h5 className="mb-0 d-flex">
                                            Last week expences<span className="ms-auto">$22658.00</span>
                                        </h5>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Layout;