import * as React from "react"
import { useState } from 'react';
import { Link, useStaticQuery, graphql } from "gatsby"

const Header = () => {
const { site } = useStaticQuery(
    graphql`
        query {
            site {
                siteMetadata {
                    phone
                }
            }
        }
    `
)
const [openNav, setOpenNav] = useState(false);

return (
    <>
    <header>
        <div className="container">
        <div className="header">
            <div className="header__left">
                <Link to={`/`} className="header__logo">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={150}
                    height={39}
                    viewBox="0 0 150 39"
                    fill="none"
                    >
                    <path
                        d="M0.000244141 38.6433H10.3851C17.1154 38.6433 18.809 33.7403 18.809 26.2524C18.809 21.6614 17.873 18.2296 14.4408 17.3383C17.0704 16.6252 18.3633 14.3522 18.3633 10.7863V9.09269C18.3633 2.85267 15.9566 0.356851 10.3851 0.356851H0.000244141L0.000244141 38.6433ZM7.48817 31.8685V20.77H8.91436C10.6971 20.77 11.2319 22.1071 11.2319 24.2914V29.0607C11.2319 30.9325 10.2514 31.913 8.24584 31.913L7.48817 31.8685ZM7.48817 14.7533V6.24032H9.09263C10.2068 6.24032 10.7417 6.86428 10.7417 8.11219V11.9455C10.7417 13.5054 10.4742 14.7533 9.04806 14.7533H7.48817ZM20.9933 38.6433H28.3921V0.356851H20.9933V38.6433ZM39.3568 38.9998C42.2092 38.9998 44.3043 37.8411 45.6859 35.4344L46.9784 38.6433H50.0541V16.3578H40.6938V22.9543H42.744V28.4367C42.744 30.5314 42.3429 31.9576 40.7384 31.9576C39.1339 31.9576 38.7328 30.5314 38.7328 28.4367V9.89492C38.7328 8.46874 39.1339 7.04255 40.9167 7.04255C42.3429 7.04255 42.6548 8.29046 42.6548 9.93995V13.3717H50.1428C50.1428 4.81414 48.3155 0.000305176 40.5601 0.000305176C34.3201 0.000305176 31.1558 3.65536 31.1558 10.7422V27.2334C31.1558 35.1224 33.8299 39.0003 39.3568 39.0003V38.9998Z"
                        fill="#128EFA"
                    />
                    <path
                        d="M53.0845 38.6434H60.617V23.4893H63.7368C70.0659 23.4893 71.7149 18.9875 71.7149 11.9898C71.7149 4.76927 69.5757 0.357006 63.2019 0.357006H53.0845V38.6434ZM60.617 16.5808V7.31012H61.4638C63.7813 7.31012 64.1379 8.95914 64.1379 11.8565C64.1379 14.9763 63.8705 16.5812 61.0627 16.5812H60.617V16.5808ZM74.1221 38.6434H81.8774V21.1713C83.883 21.1713 84.7744 21.3941 84.7744 23.6671V38.643H92.3069V24.1574C92.3069 21.1267 91.4601 19.1653 89.0529 18.675C91.9499 17.6945 92.8417 15.2428 92.8417 11.0534C92.8417 4.59053 91.772 0.356546 85.8886 0.356546H74.1216V38.643L74.1221 38.6434ZM81.922 14.5306V7.44382H83.7047C84.9972 7.44382 85.3537 8.06778 85.3537 11.0543C85.3537 13.4164 84.7744 14.5311 83.7493 14.5311H81.922V14.5306ZM104.519 39C110.626 39 113.968 35.1667 113.968 28.2136V9.98375C113.968 3.43176 110.714 0 104.519 0C98.324 0 95.0705 3.43222 95.0705 9.98375V28.2136C95.0705 35.1667 98.4132 39 104.519 39ZM102.737 28.6151V9.93964C102.737 7.97818 103.361 7.04225 104.653 7.04225C105.767 7.04225 106.347 7.93361 106.347 9.85005V28.5701C106.347 30.8876 105.767 31.9573 104.609 31.9573C103.227 31.9573 102.737 31.0214 102.737 28.6147V28.6151ZM117.044 38.6434H124.755V21.2609H131.975V13.9067H124.755V7.80037H132.376V0.357006H117.044V38.6434Z"
                        fill="#001E40"
                    />
                    <path
                        d="M135.129 21.3712H139.177V0.427307H135.129V21.3712ZM142.663 21.3712H146.857V4.4504H149.344V0.427307H140.176V4.4504H142.663V21.3712H142.663Z"
                        fill="#128EFA"
                    />
                    </svg>
                </Link>
            </div>
            <div className="header__right">
                <a href="tel:{site.siteMetadata?.phone}" className="header__phone btn">{site.siteMetadata?.phone}</a>
                <button className="header__menu" onClick={() => setOpenNav( true )}>
                    <svg
                    width={40}
                    height={39}
                    viewBox="0 0 40 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <rect
                        x="1.34424"
                        y={1}
                        width={37}
                        height={37}
                        rx="18.5"
                        stroke="#1B1B1B"
                        strokeWidth={2}
                    />
                    <line
                        y1={-1}
                        x2={21}
                        y2={-1}
                        transform="matrix(1 0 0 -1 9.34424 15)"
                        stroke="#1B1B1B"
                        strokeWidth={2}
                    />
                    <line
                        x1="9.34424"
                        y1={23}
                        x2="30.3442"
                        y2={23}
                        stroke="#1B1B1B"
                        strokeWidth={2}
                    />
                    </svg>
                </button>
            </div>
        </div>
        </div>
    </header>
    <nav className={`${openNav ? "nav-open" : ""}`}>
        <div className="container">
        <div className="nav__header">
            <Link to={`/`} className="nav__logo">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={150}
                    height={39}
                    viewBox="0 0 150 39"
                    fill="none"
                >
                    <path
                    d="M0.000244141 38.6434H10.3851C17.1154 38.6434 18.809 33.7404 18.809 26.2525C18.809 21.6615 17.873 18.2297 14.4408 17.3383C17.0704 16.6252 18.3633 14.3523 18.3633 10.7863V9.09275C18.3633 2.85274 15.9566 0.356912 10.3851 0.356912H0.000244141L0.000244141 38.6434ZM7.48817 31.8685V20.7701H8.91436C10.6971 20.7701 11.2319 22.1071 11.2319 24.2915V29.0607C11.2319 30.9326 10.2514 31.9131 8.24584 31.9131L7.48817 31.8685ZM7.48817 14.7534V6.24038H9.09263C10.2068 6.24038 10.7417 6.86434 10.7417 8.11225V11.9456C10.7417 13.5055 10.4742 14.7534 9.04806 14.7534H7.48817ZM20.9933 38.6434H28.3921V0.356912H20.9933V38.6434ZM39.3568 38.9999C42.2092 38.9999 44.3043 37.8411 45.6859 35.4344L46.9784 38.6434H50.0541V16.3578H40.6938V22.9544H42.744V28.4368C42.744 30.5315 42.3429 31.9577 40.7384 31.9577C39.1339 31.9577 38.7328 30.5315 38.7328 28.4368V9.89498C38.7328 8.4688 39.1339 7.04261 40.9167 7.04261C42.3429 7.04261 42.6548 8.29052 42.6548 9.94001V13.3718H50.1428C50.1428 4.8142 48.3155 0.000366211 40.5601 0.000366211C34.3201 0.000366211 31.1558 3.65542 31.1558 10.7422V27.2334C31.1558 35.1225 33.8299 39.0004 39.3568 39.0004V38.9999Z"
                    fill="white"
                    />
                    <path
                    d="M53.0845 38.6434H60.617V23.4893H63.7368C70.0659 23.4893 71.7149 18.9875 71.7149 11.9898C71.7149 4.76927 69.5757 0.357006 63.2019 0.357006H53.0845V38.6434ZM60.617 16.5808V7.31012H61.4638C63.7813 7.31012 64.1379 8.95914 64.1379 11.8565C64.1379 14.9763 63.8705 16.5812 61.0627 16.5812H60.617V16.5808ZM74.1221 38.6434H81.8774V21.1713C83.883 21.1713 84.7744 21.3941 84.7744 23.6671V38.643H92.3069V24.1574C92.3069 21.1267 91.4601 19.1653 89.0529 18.675C91.9499 17.6945 92.8417 15.2428 92.8417 11.0534C92.8417 4.59053 91.772 0.356546 85.8886 0.356546H74.1216V38.643L74.1221 38.6434ZM81.922 14.5306V7.44382H83.7047C84.9972 7.44382 85.3537 8.06778 85.3537 11.0543C85.3537 13.4164 84.7744 14.5311 83.7493 14.5311H81.922V14.5306ZM104.519 39C110.626 39 113.968 35.1667 113.968 28.2136V9.98375C113.968 3.43176 110.714 0 104.519 0C98.324 0 95.0705 3.43222 95.0705 9.98375V28.2136C95.0705 35.1667 98.4132 39 104.519 39ZM102.737 28.6151V9.93964C102.737 7.97818 103.361 7.04225 104.653 7.04225C105.767 7.04225 106.347 7.93361 106.347 9.85005V28.5701C106.347 30.8876 105.767 31.9573 104.609 31.9573C103.227 31.9573 102.737 31.0214 102.737 28.6147V28.6151ZM117.044 38.6434H124.755V21.2609H131.975V13.9067H124.755V7.80037H132.376V0.357006H117.044V38.6434Z"
                    fill="white"
                    />
                    <path
                    d="M135.129 21.3711H139.177V0.427246H135.129V21.3711ZM142.663 21.3711H146.857V4.45034H149.344V0.427246H140.176V4.45034H142.663V21.3711H142.663Z"
                    fill="white"
                    />
                </svg>
            </Link>
            <button className="nav__close" onClick={() => setOpenNav( false )}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={28}
                    viewBox="0 0 30 28"
                    fill="none"
                >
                    <line
                    x1="1.29289"
                    y1="27.2929"
                    x2="27.2929"
                    y2="1.29289"
                    stroke="white"
                    strokeWidth={2}
                    />
                    <line
                    x1="2.70711"
                    y1="1.29289"
                    x2="28.7071"
                    y2="27.2929"
                    stroke="white"
                    strokeWidth={2}
                    />
                </svg>
            </button>
        </div>
        <div className="nav__content">
                <ul>
                <li>
                    <Link to={`/`}>Главная</Link>
                </li>
                <li>
                    <Link to={`/objects`}>Объекты</Link>
                </li>
                <li>
                    <Link to={`/blacklist`}>Черный список</Link>
                </li>
                <li>
                    <Link to={`/about`}>О компании</Link>
                </li>
                <li>
                    <Link to={`/contact`}>Связаться</Link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
    </>
)
}

export default Header