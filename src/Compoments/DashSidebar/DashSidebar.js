import React from 'react'
import { Link } from 'react-router-dom'

const DashSidebar = () => {
    return (
        <>
            <div className="left_sidebar">
                <div className="d-flex align-items-center profile_img">
                    <img src="../images/user.jpg" alt="" />
                    <h6 className="mb-0">Farhan Ahmed</h6>
                </div>

                <nav className="sidebar_nav">
                    <ul>
                        <li>
                            <Link class="active" to="/dashboard/tabledata">
                                <img src="../images/dashboard.svg" alt="" /> Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/profile">
                                <img src="../images/profile.svg" alt="" /> Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/job">
                                <img src="../images/job.svg" alt="" /> Job
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/onboarding">
                                <img src="../images/onboarding.svg" alt="" /> Onboarding
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/payroll">
                                <img src="../images/payroll.svg" alt="" /> Payroll
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </>
    )
}

export default DashSidebar