import styled from 'styled-components';
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa';
import { BsPinterest } from 'react-icons/bs';

const Footer = () => {
    return (
        <Wrapper>
            <div className="section-center">
                <div className="section-header">
                    <h1 className="title">Shortly</h1>
                </div>

                <div className="body">
                    <div className="subsection">
                        <div className="header">
                            <h3>Features</h3>
                        </div>

                        <ul className="links">
                            <li>
                                <a href="#">Link Shortening</a>
                            </li>
                            <li>
                                <a href="#">Branded Links</a>
                            </li>
                            <li>
                                <a href="#">Analytics</a>
                            </li>
                        </ul>
                    </div>
                    <div className="subsection">
                        <div className="header">
                            <h3>Resources</h3>
                        </div>

                        <ul className="links">
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Developers</a>
                            </li>
                            <li>
                                <a href="#">Support</a>
                            </li>
                        </ul>
                    </div>
                    <div className="subsection">
                        <div className="header">
                            <h3>Company</h3>
                        </div>

                        <ul className="links">
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Our team</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className="social-icons">
                        <button type="button">
                            <FaFacebookSquare />
                        </button>
                        <button>
                            <FaTwitter />
                        </button>
                        <button>
                            <BsPinterest />
                        </button>
                        <button>
                            <FaInstagram />
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.footer`
    background-color: var(--clr-neutral-4);
    padding: 2rem 0;

    .section-center {
        color: white;

        @media screen and (min-width: 690px) {
            display: grid;
            grid-template-columns: 30% 90%;
        }
        a {
            color: white;
        }

        .section-header {
            margin-bottom: 20px;
            h1 {
                text-align: center;
            }
        }

        .body {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, 1fr);
            justify-items: center;
            grid-row-gap: 1em;

            @media screen and (min-width: 690px) {
                width: 70%;
                grid-template-columns: repeat(4, 1fr);
                grid-template-rows: 1fr;
            }

            .subsection {
                .header {
                    margin-bottom: 10px;
                    h3 {
                        text-align: center;
                        @media (min-width: 690px) {
                            text-align: left;
                        }
                    }
                }

                .links {
                    li {
                        text-align: center;
                        margin-bottom: 9px;

                        @media screen and (min-width: 690px) {
                            text-align: left;
                        }

                        a {
                            font-size: 0.8rem;
                            transition: var(--transition);
                        }
                        a:hover {
                            color: var(--clr-primary-1);
                        }
                    }
                }
            }

            .social-icons {
                margin-top: 20px;
                width: 200px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                @media (min-width: 690px) {
                    width: 100%;
                    margin-top: 0;
                    align-items: flex-start;
                }

                button {
                    cursor: pointer;
                    border: transparent;
                    background: transparent;
                    color: white;
                    font-size: 1.5rem;
                    transition: var(--transition);
                }

                button:hover {
                    color: var(--clr-primary-1);
                }
            }
        }
    }
`;
export default Footer;
