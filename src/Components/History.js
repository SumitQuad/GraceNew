import React from 'react';
import "../App.css";
import Rotate from 'react-reveal/Rotate';

function History() {
    return (
        <>
            <section className="history-section">
                <div className="container">
                    <div className="history-title"><span>History</span>
                        <h3>History is Boring! But numbers aren't!</h3>
                        <p>DuckTale IT Services Pvt. Ltd. is a young, ambitious and trusted global technology service company. We are providing a wide range of Development and Marketing Services, Team includes Quality Analysts, Experienced programmers and creative Graphical Engineers.</p>
                    </div>
                    <div className="row history">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-history-box bg-history">
                                <Rotate top left>
                                    <h3>50+</h3>
                                    <p>Happy Clients.</p>
                                </Rotate>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-history-box bg-history">
                                <Rotate top left>
                                    <h3>100+</h3>
                                    <p>Projects Completed.</p>
                                </Rotate>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-history-box bg-history">
                                <Rotate top left>
                                    <h3>30+</h3>
                                    <p>Team Members.</p>
                                </Rotate>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-history-box bg-history">
                                <Rotate top left>
                                    <h3>100+</h3>
                                    <p>Positive Reviews.</p>
                                </Rotate>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default History
