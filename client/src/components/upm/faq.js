import React, { Component } from 'react';

class Faq extends Component {
    render() {
        return (
            
            <div className="faq">
                <div className="faq__l1">

                    <div className="faq__title">
                        FAQ SUPPORT
                    </div>

                    <div className="faq__all_btns">
                    <div>
                    <button className="faq__btn_anchor">
                        <a  className="a_black a_black:hover"
                            href="#about">ABOUT</a></button>
                    </div>
                    <div>
                    <button className="faq__btn_anchor">
                        <a  className="a_black a_black:hover"
                            href="#use">USE</a></button>
                    </div>
                    <div>
                    <button className="faq__btn_anchor">
                        <a  className="a_black a_black:hover"
                            href="#account">ACCOUNT</a></button>
                    </div>
                    </div>


                    <p id="about"
                        className="faq__subtitles">
                        ABOUT
                    </p>

                    <p className="faq__question">
                    What is UPOSH|ME ?
                    </p>

                    <p className="faq__answer">
                    The app will give you the access to the digital features so you can't miss the good luxury deals or benefits linked to all your fidelity accounts.
                    Find more about UPOSH|ME 
                    <a  className="a_black a_black:hover"
                        href= "/concept"> <u> here</u></a>.
                    </p>

                    <p  id="use"
                        className="faq__subtitles">
                        USE
                    </p>
                    
                    <p className="faq__question">
                    How can I add my favorite brands to UPOSH|ME ?
                    </p>

                    <p className="faq__answer">
                    1. Log in into your account.
                    <br></br>
                    2. Click on "My brands" in the top right corner of the screen.
                    <br></br>
                    3. Type the name of your favorite brand's provider in the search field or scroll through the list.
                    <br></br>
                    If you can't find the brand you would like to include in the list, you can still add it to UPOSH|ME by choosing to add it as "Other card".
                    </p>

                    <p className="faq__question">
                    How can I add a brand that isn't listed in UPOSH|ME ?
                    </p>

                    <p className="faq__answer">
                    If you can't find your brand's provider in the default list of stores, you can easily add your brand to UPOSH|ME by choosing to add it as "Other Card".
                    <br></br>
                    You will find the option to add a card as "Other Card" directly below the Most Added Brands" if you are in the list or you can click on "+" if you are already in the your "My pending brands" page.
                    </p>

                    <p className="faq__question">
                    How can I delete a favorite brand in UPOSH|ME ?
                    </p>

                    <p className="faq__answer">
                    1. Log in into your account
                    <br></br>
                    2. Click on "My brands" in the top right corner of the screen.
                    <br></br>
                    3. Click on the brand that you would like to remove from UPOSH|ME.
                    <br></br>
                    4. Click on "delete brand" in the bottom of all your brand's features.
                    </p>

                    <p  id="account"
                        className="faq__subtitles">
                        ACCOUNT
                    </p>

                    <p className="faq__question">
                    Why should I register my UPOSH|ME account?
                    </p>

                    <p className="faq__answer">
                    With a registered UPOSH|ME account you will always be able to find your favorite brands and access to your fidelity features anytime, anywhere from all of your devices.
                    Moreover, synchronizing multiples luxury brands fidelity program is only possible with a registered UPOSH|ME account.
                    </p>

                    <p className="faq__question">
                    Why should I complete my profile in my UPOSH|ME account?
                    </p>

                    <p className="faq__answer">
                    With a completed profile UPOSH|ME account you can benefits from personalized fidelity advantages from your favorite brands. Therefore, to ensure the security of your information, you can choose which data you want to send on UPOSH|ME.
                    It will determine the return level of personalized customer service from your favorite brands.
                    </p>

                    <p className="faq__question">
                    How can I complete my profile ?
                    </p>

                    <p className="faq__answer">
                    1. Log in into your account
                    2. Click on "Profile" in the top right corner of the screen
                    3. Click on "Complete my profile"
                    4. Enter your informations
                    5. Validate clicking on "Submit.
                    </p>

                    <p className="faq__question">
                    Can I change the password for my UPOSH|ME account?
                    </p>

                    <p className="faq__answer">
                    Yes, you can change the password anytime you want following this steps :
                    1. Log in into your account
                    2. Click on "Profile" in the top right corner of the screen
                    3. Click on "Connexion settings"
                    4. Enter your new password in the "New Password" field.
                    5. Validate clicking on "Change password".
                    </p>

                    <p className="faq__question">
                    I want to cancel my UPOSH|ME account. How can I do that?
                    </p>

                    <p className="faq__answer">
                    1. Log in into your account
                    2. Click on "Profile" in the top right corner of the screen.
                    3. Click on "Delete account".
                    Be careful, you will lose the entire list of your favorite brands as well as the personalized synchronization with it.
                    </p>


            </div>
            
            <button className="faq__btn_topofpage">
                    <a  className="faq__btn_a a_black a_black:hover"
                        href="#">
                        <p className="faq__btn_a">
                        Top of Page
                        </p></a></button>
                        


                
            </div>
        );
    }
}

export default Faq;