import styled from 'styled-components';
import Logo from '../assets/images/illustration-working.svg';
import Logo1 from '../assets/images/bg-shorten-mobile.svg';
import { useGlobalContext } from '../context';

const Hero = () => {
    const { shortenLink, error, refContainer, getStarted } = useGlobalContext();

    const handleSubmit = (e, link) => {
        e.preventDefault();
        shortenLink(link);
    };

    return (
        <Wrapper>
            <header className="section-header">
                <div className="icon-box">
                    <img src={Logo} alt="working" />
                </div>

                <article className="content-box">
                    <div className="title">
                        <h1>More than just shorter links</h1>
                    </div>
                    <div className="body">
                        <p>
                            Build your brand's recognition and get detailed
                            insights on how your links are performing.
                        </p>
                    </div>

                    <div className="btn-bx">
                        <button className="start-btn" onClick={getStarted}>
                            Get Started
                        </button>
                    </div>
                </article>
            </header>

            <div className="action-box">
                <div className="form-svg">
                    <img src={Logo1} alt="" />
                </div>
                <form
                    className="form"
                    onSubmit={(e) =>
                        handleSubmit(e, refContainer.current.value)
                    }
                >
                    <input
                        type="text"
                        className={`link-input ${error.show && 'link-error'}`}
                        placeholder="Shorten a link here..."
                        ref={refContainer}
                    />
                    {error.show && (
                        <p className="error">
                            <i>{error.msg}</i>
                        </p>
                    )}

                    <button type="submit">Shorten it!</button>
                </form>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .section-header {
        .icon-box {
            width: fit-content;
            padding-left: 30px;
            overflow: hidden;

            img {
                object-fit: contain;
                width: 100%;
                height: 100%;
            }
        }

        .content-box {
            .title {
                display: flex;
                justify-content: center;
                h1 {
                    text-transform: none;
                    font-weight: 700;
                    font-size: 2.3rem;
                    color: var(--clr-neutral-4);
                    text-align: center;
                    width: 80%;
                }
            }
            .body {
                padding: 0 30px;
                p {
                    text-align: center;
                    color: var(--clr-neutral-1);
                    font-weight: 500;
                }
            }
            .btn-bx {
                margin: 30px 0;
                display: flex;
                justify-content: center;
                align-items: center;

                .start-btn {
                    cursor: pointer;
                    padding: 0.75rem 2rem;
                    border-radius: 1em;
                    text-align: center;
                    color: white;
                    font-size: 1.5rem;
                    font-weight: 700;
                    border: transparent;
                    background-color: var(--clr-primary-1);
                    transition: var(--transition);
                }
                .start-btn:hover {
                    background-color: var(--clr-prim-hover);
                }
            }
        }
    }

    .action-box {
        position: relative;
        top: 5rem;
        overflow: hidden;
        background-color: var(--clr-primary-2);
        margin-right: auto;
        margin-left: auto;
        border-radius: 12px;
        width: 85%;
        background-image: url('../images/bg-shorten-mobile.svg');
        z-index: 1;

        .form-svg {
            position: absolute;
            right: 0;
            z-index: 0;
            width: fit-content;
        }
        .form {
            position: relative;
            padding: 1.5rem;
            display: grid;
            grid-template-rows: repeat(2, 1fr);
            gap: 1.6em;

            button {
                color: white;
                font-size: 16px;
                font-weight: 700;
                background-color: var(--clr-primary-1);
                cursor: pointer;
                transition: var(--transition);
            }
            button:hover {
                background-color: var(--clr-prim-hover);
            }
            input {
                outline: none;
                font-size: 1rem;
            }
            input::placeholder {
                color: var(--clr-neutral-3);
                font-size: 1rem;
            }
            & > * {
                border: transparent;
                z-index: 1;
                border-radius: 0.4em;
                padding: 1rem;
            }

            .link-error {
                outline: 2.4px solid red;
            }

            .error {
                padding: 0;
                color: red;
                position: absolute;
                top: 75px;
                left: 30px;
                animation: blink-animation 1s steps(5, start) infinite;

                @media screen and (max-width: 380px) {
                    font-size: 15px;
                }
            }

            @keyframes blink-animation {
                to {
                    visibility: hidden;
                }
            }
        }

        @media screen and (min-width: 750px) {
            width: 70%;
        }
    }

    @media screen and (min-width: 690px) {
        .action-box {
            top: 3rem;
            .form {
                grid-template-columns: repeat(2, 1fr) 20%;
                grid-template-rows: 1fr;

                input {
                    grid-column: span 2;
                }
            }
        }
    }

    @media screen and (min-width: 750px) {
        .section-header {
            padding: 1.5rem 0;
            width: 79vw;
            margin: 0 auto;
            display: grid;
            gap: 0;
            grid-template-columns: 60% 1fr;
            grid-template-rows: 300px;

            .icon-box {
                padding-left: 0;
                grid-column-start: 3;
                max-width: 380px;
                transform: scale(1.2);

                img {
                    width: 100%;
                }
            }
            .content-box {
                margin-left: 3rem;
                grid-row-start: 1;
                .title {
                    display: inline-block;
                    h1 {
                        font-size: 2.9rem;
                        text-align: left;

                        @media screen and (max-width: 800px) {
                            font-size: 2.5rem;
                        }
                    }
                }

                .body {
                    width: 80%;
                    padding: 0;
                    p {
                        text-align: left;
                        color: var(--clr-neutral-1);
                        font-weight: 500;
                    }
                }
                .btn-bx {
                    margin: 20px 0;
                    display: inline-block;
                }
            }
        }
    }
`;
export default Hero;
