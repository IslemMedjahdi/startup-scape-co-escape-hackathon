import React from 'react';
import { RoughNotation } from 'react-rough-notation';

type RegisterSideBarProps = {
    currentStepIndex: number;
    goTo: (index: number) => void;
};

const RegisterSideBar = ({ currentStepIndex, goTo }: RegisterSideBarProps) => {
    return (
        <div className="absolute -top-20 left-0 w-full md:w-[25%] md:relative md:top-0 md:left-0">
            <nav className="py-5 text-slate-200 bg-slate-800 h-full rounded-md border border-slate-700 md:p-5">
                <ul className="flex justify-center gap-2 md:flex-col">
                    <li className="flex flex-col items-start font-medium">
                        <span className="hidden text-slate-500 uppercase text-sm md:flex">
                            step 1
                        </span>
                        <button
                            tabIndex={0}
                            onClick={() => goTo(0)}
                            className={`text-sm ${
                                currentStepIndex === 0 ? 'text-[#ffe666]' : 'text-white'
                            } md:text-base`}
                        >
                            <RoughNotation
                                type="underline"
                                show={currentStepIndex === 0}
                                color="#ffe666"
                            >
                                Founder Info
                            </RoughNotation>
                        </button>
                    </li>
                    <li className="flex flex-col items-start font-medium">
                        <span className="hidden text-slate-500 uppercase text-sm md:flex">
                            step 2
                        </span>
                        <button
                            tabIndex={0}
                            onClick={() => goTo(1)}
                            className={`text-sm ${
                                currentStepIndex === 1 ? 'text-[#bd284d]' : 'text-white'
                            } md:text-base`}
                        >
                            <RoughNotation
                                type="underline"
                                show={currentStepIndex === 1}
                                color="#bd284d"
                            >
                                Company Info
                            </RoughNotation>
                        </button>
                    </li>
                    <li className="flex flex-col items-start font-medium">
                        <span className="hidden text-slate-500 uppercase text-sm md:flex">
                            step 3
                        </span>
                        <button
                            tabIndex={0}
                            onClick={() => goTo(2)}
                            className={`text-sm ${
                                currentStepIndex === 2 ? 'text-[#E7B8FF]' : 'text-white'
                            } md:text-base`}
                        >
                            <RoughNotation
                                type="underline"
                                show={currentStepIndex === 2}
                                color="#E7B8FF"
                            >
                                Social Media
                            </RoughNotation>
                        </button>
                    </li>
                    <li className="flex flex-col items-start font-medium">
                        <span className="hidden text-slate-500 uppercase text-sm md:flex">
                            step 4
                        </span>
                        <button
                            tabIndex={0}
                            onClick={() => goTo(3)}
                            className={`text-sm ${
                                currentStepIndex === 3 ? 'text-[#6fe79f]' : 'text-white'
                            } md:text-base`}
                        >
                            <RoughNotation
                                type="underline"
                                show={currentStepIndex === 3}
                                color="#6fe79f"
                            >
                                Summary
                            </RoughNotation>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default RegisterSideBar;
