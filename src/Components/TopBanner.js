import React from 'react';
import "./TopBanner.css"

const TopBanner = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 banner-pic">
                    <h2 className="banner-title">Bootcamp Quality at 1/10 of the Cost</h2>
                   <br/>
                    <p>Udacity is the world’s fastest, most efficient way to master the skills tech <br/>companies want. 100% online, part-time and self-paced</p>
                    
                    <button className="btn btn-info">Learn More</button>
                    <br/><br/>
                    <p>Industry leading programs built and recognized by top companies <br/>worldwide</p>
                    <br/>

                    <ul>
                        <li className="logo-pic">
                            <img src="//www.udacity.com/assets/iridium/images/shared/partners/logo-white-google.svg" alt="Google"/>
                        </li>
                        <li className="logo-pic">
                            <img src="//www.udacity.com/assets/iridium/images/homepage/shared/partners-list/logo-white-aws.svg" alt="Amazon AWS"/>
                        </li>
                        <li className="logo-pic">
                            <img src="//www.udacity.com/assets/iridium/images/shared/partners/logo-white-att.svg" alt="AT&amp;T"/>
                        </li>
                        <li className="logo-pic">
                            <img src="//www.udacity.com/assets/iridium/images/homepage/shared/partners-list/logo-white-ibm.svg" alt="IBM"/>
                        </li>
                        <li className="logo-pic">
                            <img src="//www.udacity.com/assets/iridium/images/shared/partners/logo-white-lyft.svg" alt="lyft"/>
                        </li>
                    </ul>

                </div>
                <div className="col-md-4">
                        <h4 className="banner-title">Only at Udacity: <strong>Job-Ready Skills</strong></h4>
                        <table className="tiledoff">
                            <tr>
                                <th></th>
                                <th className="color-blue">UDACITY</th>
                                <th className="color-gray">OTHERS</th>
                            </tr>
                            <tr>
                                <td className="color-lightgreen">Learn by doing</td>
                                <td className="color-blue">✅</td>
                                <td className="color-gray">❌</td>
                            </tr>
                            <tr>
                                <td className="color-lightgreen">Practitioner-level skills</td>
                                <td className="color-blue">✅</td>
                                <td className="color-gray">❌</td>
                            </tr>
                            <tr>
                                <td className="color-lightgreen">Job-focused content</td>
                                <td className="color-blue">✅</td>
                                <td className="color-gray">❌</td>
                            </tr>
                            <tr>
                                <td className="color-lightgreen">Real human help</td>
                                <td className="color-blue">✅</td>
                                <td className="color-gray">❌</td>
                            </tr>
                            <tr>
                                <td className="color-lightgreen">Personalized code reviews</td>
                                <td className="color-blue">✅</td>
                                <td className="color-gray">❌</td>
                            </tr>
                            <tr>
                                <td className="color-lightgreen">Real-life projects</td>
                                <td className="color-blue">✅</td>
                                <td className="color-gray">❌</td>
                            </tr>
                        </table> 
                </div>

                        
            </div>
        </div>
            
    );
};

export default TopBanner;