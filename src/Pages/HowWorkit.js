import React from 'react'
import GetAppIcon from '@material-ui/icons/GetApp';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import WorkApi from '../Api/WorkApi'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const HowWorkit = () => {
    const [Data, NewData] = useState(WorkApi);
    console.log(Data)
    return (
        <>
            <section>
                <div className='container'>
                    <div className='row '>
                        {Data.map((curElem) => {
                            return (
                                <>
                                    <div className="col-4 g-2 ">
                                        <div className="card-body justify-content-center text-center">
                                            <GetAppIcon></GetAppIcon>
                                            <br />
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <h4>Download the app</h4><br />
                                            <NavLink to="/HowWorkit" className="btn btn-outline-primary">Click to more</NavLink>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
export default HowWorkit
