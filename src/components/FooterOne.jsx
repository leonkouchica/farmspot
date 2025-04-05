import React from 'react'
import { Link } from 'react-router-dom'

const FooterOne = () => {
    return (
        <footer className="footer py-120">
            <img
                src="assets/images/bg/body-bottom-bg.png"
                alt="BG"
                className="body-bottom-bg"
            />
            <div className="container container-lg">
                <div className="footer-item-wrapper d-flex align-items-start flex-wrap">
                    <div className="footer-item">
                        {/* <div className="footer-item__logo">
                            <Link to="/">
                                {" "}
                                <img src="assets/images/logo/logo.png" alt="" />
                            </Link>
                        </div> */}
                        <p className="mb-24">
                            We're FarmSpot, an innovative platform where farmers and buyers meet.
                        </p>
                        <div className="flex-align gap-16 mb-16">
                            <span className="w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0">
                                <i className="ph-fill ph-map-pin" />
                            </span>
                            <span className="text-md text-gray-900 ">
                               123, Epe expressway, Lagos, Nigeria
                            </span>
                        </div>
                        <div className="flex-align gap-16 mb-16">
                            <span className="w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0">
                                <i className="ph-fill ph-phone-call" />
                            </span>
                            <div className="flex-align gap-16 flex-wrap">
                                <Link
                                    to="/tel:+00123456789"
                                    className="text-md text-gray-900 hover-text-main-600"
                                >
                                    +234 123 456 789
                                </Link>
                                <span className="text-md text-main-600 ">or</span>
                                <Link
                                    to="/tel:+00987654012"
                                    className="text-md text-gray-900 hover-text-main-600"
                                >
                                    +234 987 654 012
                                </Link>
                            </div>
                        </div>
                        <div className="flex-align gap-16 mb-16">
                            <span className="w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0">
                                <i className="ph-fill ph-envelope" />
                            </span>
                            <Link
                                to="/mailto:support24@marketpro.com"
                                className="text-md text-gray-900 hover-text-main-600"
                            >
                                support@farmspot.com
                            </Link>
                        </div>
                    </div>
                    <div className="footer-item">
                        <h6 className="footer-item__title">Information</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Become a Farmer
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Our Farmers
                                </Link>
                            </li>
                            {/* <li className="">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Community
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h6 className="footer-item__title">Customer Support</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Help Center
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link
                                    to="/contact"
                                    className="text-gray-600 hover-text-main-600"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Report Abuse
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Submit and Dispute
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Policies &amp; Rules
                                </Link>
                            </li>
                            <li className="">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Online Shopping
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h6 className="footer-item__title">My Account</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    My Account
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Order History
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Shoping Cart
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Compare
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Help Ticket
                                </Link>
                            </li>
                            <li className="">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Wishlist
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h6 className="footer-item__title">Daily Farm Produce</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Vegetables
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                   Yams
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Cassava
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                   Corn & Millet
                                </Link>
                            </li>
                            {/* <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Bread &amp; Bakery
                                </Link>
                            </li>
                            <li className="">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Pantry Staples
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default FooterOne