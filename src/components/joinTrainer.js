import React from "react";
import { useEffect, useState } from "react";
import Input from "./Input";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, useNavigate } from "react-router-dom";
import Popup from "./popup";
import axiosapi from "../config/axios";
function JoinTrainer() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Join Us";
  });

  const navigator = useNavigate();
  const [showTerms, setShowTerms] = useState(false);
  let style = {
    opacity: showTerms ? "0.5" : "0",
    zIndex: showTerms ? "99": "-1",
  };
  const [showError, setShowError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [inputValue, setInputValue] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    phone: 0,
    city: "",
    address: "",
    cin: "",
    level: "",
    file: null,
  });
  console.log("test inputvalue", inputValue);
  const handleInputChange = (event) => {
    let name = event.target.name;
    setInputValue({
      ...inputValue,
      [name]: event.target.value,
    });
  };
  const handleOutsideClick = () => {
    setShowTerms(false);
  };
  const googlesign = async () => {
    if (!showError) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 5000);
      return;
    }
    try {
      // navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const signup = () => {
    if (!showError) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 5000);
      return;
    }
    const formData = new FormData();
    formData.append("fullName", inputValue.fullName);
    formData.append("userName", inputValue.userName);
    formData.append("email", inputValue.email);
    formData.append("password", inputValue.password);
    formData.append("phone", inputValue.phone);
    formData.append("city", inputValue.city);
    formData.append("address", inputValue.address);
    formData.append("file", inputValue.file);
    formData.append("role", "Trainer");
    formData.append("cin", inputValue.cin);
    axiosapi
      .post("http://localhost:5000/users", formData)
      .then((res) => {
        console.log(res.data.data, "res ******");
        alert("Trainer " + res.data.user.userName + " created successfully");
        navigator("/login");
      })
      .catch((error) => {
        console.log("error ", error);
        alert("Error creating new user : " + error.response.data.message);
      });
  };

  return (
    <div className="xl:max-h-[100vh] xl:overflow-hidden">
      {showPopup && <Popup />}
      <OutsideClickHandler onOutsideClick={handleOutsideClick}>
        {showTerms && (
          <div
            className={
              "z-[" +
              (showTerms ? "100" : "-1") +
              "] absolute left-1/2 top-1/2 h-[50vh] w-[50vw] -translate-x-1/2 -translate-y-1/2 overflow-y-scroll rounded-xl bg-white px-5 py-6 drop-shadow-2xl"
            }
          >
            <p className="text-xl">
              Terms of Use These Terms of Use are effective as of December
              10,2021. These Terms of Service (“Terms”) govern your use of the
              free and paid services, software and websites (the “Service”)
              provided by H2M Group, SARL. DBA HUBIO STUDY (“HUBIOSTUDY”, “we”,
              “our”, etc.), and any data, text, files, information, usernames,
              images, graphics, photos, profiles, audio and video clips, sounds,
              musical works, works of authorship, applications, links, created
              tasks and associated information, text, files and other content or
              materials (together, the “Content”) uploaded, downloaded, or
              appearing on our websites or applications. Our Privacy Policy
              explains the way we collect and use your information. By using the
              Service, you agree to be bound by these Terms and our Privacy
              Policy. If you’re using our Service on behalf of an organization
              or entity (“Organization”), then you are agreeing to these Terms
              on behalf of that Organization and you represent and warrant that
              you have the authority to bind the Organization to these Terms. In
              that case, “you” and “your” refers to that Organization. Our Terms
              and Privacy Policy affect your legal rights and obligations. If
              you do not agree to be bound by all of these, do not access or use
              our Service. ARBITRATION NOTICE: UNLESS YOU OPT-OUT AND EXCEPT FOR
              CERTAIN TYPES OF DISPUTES DESCRIBED IN THE ARBITRATION SECTION
              BELOW, YOU AGREE THAT DISPUTES BETWEEN YOU AND US WILL BE RESOLVED
              BY BINDING, INDIVIDUAL ARBITRATION AND YOU WAIVE YOUR RIGHT TO
              PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.
              Your User Account and Content You must provide accurate
              information when you create your HUBIOSTUDY account. You are
              responsible for safeguarding the password and for all activities
              that occur under your account. You should notify us immediately if
              you become aware of any breach of security or unauthorized use of
              your account. You may never use another user’s account without
              permission. You may not disassemble, decompile, or reverse
              engineer the Service or attempt or assist anyone else to do so,
              unless such restriction is prohibited by law. Your account must be
              registered by a human. Accounts registered by "bots" or other
              automated methods are not permitted. Additionally, you must be 13
              years of age or older. You may not use the Service for any illegal
              or unauthorized purpose. You agree to comply with all laws, rules,
              and regulations (for example, federal, state, local and
              provincial) applicable to your use of the Service and your Content
              (defined below), including but not limited to, copyright laws. In
              the event you have a paid account, fees are non-refundable except
              as required by law or in the event that you cancel your account
              during the 30-day money back guarantee period. You will pay all
              applicable fees when due and, if such fees are being paid via
              credit card or other electronic means, you authorize us to charge
              such fees using your selected payment method. By default, customer
              accounts are set to auto-renew and we may automatically charge you
              for such renewal on or after the renewal date associated with your
              account unless you have cancelled the Service prior to its renewal
              date. We may revise fee rates for the Service from time to time
              and will provide you with email notice of any changes in fees at
              least thirty (30) days prior to your Service renewal date. You are
              responsible for providing complete and accurate billing
              information to Hubiostudy. We may suspend or terminate your use of
              the Service if fees become past due. You are responsible for all
              taxes (excluding taxes on our net income), and we will charge tax
              if required to do so by law. If you require the use of a purchase
              order or purchase order number, you (a) must provide the purchase
              order number at the time of purchase; and (b) agree that any terms
              and conditions on your purchase order will not apply and are null
              and void. For paid accounts, we provide a satisfaction guarantee
              for all services. If you aren't satisfied for any reason, simply
              contact us within 30 days, and we'll be happy to issue a full
              refund. Kindly note, however, that we reserve the right to revoke
              refund privileges (on an individual basis) if we determine abuse
              of this policy has occurred. Your Use of Our Service You must not
              change, modify, adapt, or alter the Service or change, modify, or
              alter another website so as to falsely imply that it is associated
              with the Service or with us. You must not access our private API
              by means other than those expressly permitted by us. You must not
              interfere or disrupt the Service or servers or networks connected
              to the Service, including by transmitting any worms, viruses,
              spyware, malware, or any other code of a destructive or disruptive
              nature. You may not inject content or code or otherwise alter or
              interfere with the way any our page is rendered or displayed in a
              user's browser or device. You must not attempt to restrict another
              user from using or enjoying the Service and you must not encourage
              or facilitate violations of these Terms or any of our other terms.
              As part of the Service, we may provide downloadable client
              software (the “Software”) for your use in connection with the
              Service. This Software may update automatically and if such
              Software is designed for use on a specific mobile or desktop
              operating system, then a compatible system is required for use. So
              long as you comply with these Terms, we grant you a limited,
              nonexclusive, nontransferable, revocable license to use the
              Software, solely to access the Service; provided, however, that
              this license does not constitute a sale of the Software or any
              copy thereof, and as between you and us, we retain all right,
              title and interest in the Software. You agree that you will not
              copy, reproduce, republish, frame, download, transmit, modify,
              display, reverse engineer, sell, or participate in any sale of,
              rent, lease, loan, assign, distribute, license, sublicense, or
              exploit in any way, in whole or in part, Our Content, the Services
              or any related software, except as expressly stated in these
              Terms. Violation of these Terms may, in our sole discretion,
              result in termination of your account. Furthermore, we reserve the
              right to investigate and prosecute violations of any of these
              Terms to the fullest extent of the law. We may involve and
              cooperate with law enforcement authorities in prosecuting Users
              who violate the Terms. You acknowledge that we have no obligation
              to prescreen or monitor your access to or use of our Service or
              any information, materials or other content provided or made
              available through our Service, but has the right to do so. You
              hereby agree that we may, in the exercise of our sole discretion,
              remove or delete any data, accounts or other content that violates
              these Terms or that is otherwise objectionable. If you elect to
              utilize any third party application in connection with your use of
              the Service, by doing so you are consenting to your Content being
              shared with such third party application. To understand how such
              third party application provider utilizes your Content and other
              information, you should review their privacy policy. General
              Conditions We may suspend or terminate your account(s) or cease
              providing you with all or part of our Services at any time without
              liability to you for any reason, including, but not limited to, if
              we reasonably believe: (i) you have violated these Terms, (ii) you
              create risk or possible legal exposure for us; (iii) you have a
              free account that has not had any activity (replies or logins) for
              sixty (60) days, or trial accounts without a payment method thirty
              (30) days after expiration, or (iv) our provision of our Services
              to you is no longer commercially viable. We will make reasonable
              efforts to notify you through our Service, the next time you
              attempt to access your account, or by an email address or phone
              number you have provided us (if applicable). If we terminate your
              access to the Service, your Content and all other data will no
              longer be accessible through your account. Upon termination, all
              licenses and other rights granted to you in these Terms will
              immediately cease. We reserve the right, in our sole discretion,
              to change these Terms and/or our Services offered from time to
              time (“Updated Terms”). Unless we make a change for legal or
              administrative reasons, we will provide reasonable advance notice
              before the Updated Terms become effective. You agree that we may
              notify you of the Updated Terms by posting them on the Service,
              and that your use of the Service after the effective date of the
              Updated Terms (or engaging in such other conduct as we may
              reasonably specify) constitutes your agreement to the Updated
              Terms. Therefore, you should review these Terms and any Updated
              Terms before using the Service. The Updated Terms will be
              effective as of the time of posting, or such later date as may be
              specified in the Updated Terms, and will apply to your use of the
              Service from that point forward. These Terms will govern any
              disputes arising before the effective date of the Updated
              Terms.[a] We reserve the right to refuse access to the Service to
              anyone for any reason at any time. You hereby authorize us,
              directly or through third parties, to make any inquiries we
              consider necessary to validate your identity and/or authenticate
              your identity and account information. This may include asking you
              for further information and/or documentation about your account
              usage or identity, or requiring you to take steps to confirm
              ownership of your email address, wireless/cellular telephone
              number or financial instruments, and verifying your information
              against third party databases or through other sources. This
              process is for internal verification purposes. You further
              understand that we may charge a fee for this verification process.
              We may, but have no obligation to, remove, edit, block, and/or
              monitor Content or accounts containing Content that we determine
              in our sole discretion violates these Terms. You …
            </p>
          </div>
        )}
      </OutsideClickHandler>
      {showTerms && (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
          alt=""
          className="absolute right-0 top-0 h-[200vh] w-[100vw] xl:h-[100vh]"
          style={style}
        />
      )}
      <div className="flex flex-row-reverse  xl:max-h-[100vh] xl:overflow-hidden ">
        <img
          src="https://hubio-dev.web.app/Ellipse%201%20copie.7a4f3b9a.webp"
          alt=""
          className="absolute -top-[50%] right-[0%] z-[-1] w-[50vw] opacity-30"
        />
        <div className="mx-auto mt-10 flex w-[95%] flex-col items-center space-y-16 xl:min-w-[50vw] xl:space-y-7">
          <div className="mx-auto flex w-[90%] items-center justify-between ">
            <div className="flex max-w-[75%] flex-col items-center space-x-5 sm:flex-row">
              <p className="mx-2 text-center text-xs text-[rgba(65,49,49,.742)] sm:text-base">
                You already have an account ?
              </p>
              <Link
                to="/login"
                className="text-center text-xs font-semibold text-[rgba(237,20,90,.9)] sm:text-base"
              >
                Login
              </Link>
            </div>
          </div>
          <button
            onClick={googlesign}
            className="flex items-center justify-between rounded-full border bg-white px-5 py-3 drop-shadow-2xl sm:px-6 sm:py-4"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt=""
              className="mr-2 w-[3vw] min-w-[15px] max-w-[25px]"
            />
            Sign Up With Google
          </button>
          <div className="flex w-[90%] items-center">
            <div className="mr-auto h-[0.1vh] w-[33%] bg-black"></div>
            <h1 className="mx-0 w-[30%] text-center text-xs sm:text-base md:text-lg">
              or Sign Up with Email
            </h1>
            <div className="ml-auto h-[0.1vh] w-[33%] bg-black"></div>
          </div>
          <div className="flex w-[100%] flex-col items-center">
            <form className="flex w-[90%] flex-col items-center space-y-10 md:flex-row md:items-start md:justify-between md:space-y-0">
              <div className="flex flex-col items-center space-y-10 font-light text-gray-700 md:w-[45%] xl:space-y-1">
                <Input
                  title="First Name"
                  name="fullName"
                  type="text"
                  func={(e) => handleInputChange(e)}
                  info={inputValue}
                  isConfirmPass={false}
                />
                <Input
                  title="Last Name"
                  name="userName"
                  type="text"
                  func={(e) => handleInputChange(e)}
                  info={inputValue}
                  isConfirmPass={false}
                />
                <Input
                  title="Birth Date"
                  name="File"
                  type="file"
                  func={(e) => {
                    setInputValue((prev) => ({
                      ...prev,
                      file: e.target.files[0],
                    }));
                  }}
                  info={inputValue}
                  isConfirmPass={false}
                />
                <Input
                  title="City"
                  name="city"
                  type="text"
                  func={(e) => handleInputChange(e)}
                  info={inputValue}
                  isConfirmPass={false}
                />
                <Input
                  title="CIN"
                  name="cin"
                  type="text"
                  func={(e) => handleInputChange(e)}
                  info={inputValue}
                  isConfirmPass={false}
                />
              </div>
              <div className="flex flex-col items-center space-y-10 font-light text-gray-700 md:w-[45%] xl:space-y-5">
                <Input
                  title="Email"
                  name="email"
                  type="email"
                  func={(e) => handleInputChange(e)}
                  info={inputValue}
                  isConfirmPass={false}
                />
                <Input
                  title="Password"
                  name="password"
                  type="password"
                  func={(e) => handleInputChange(e)}
                  info={inputValue}
                  isConfirmPass={false}
                />
                {/* <Input
                  title="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  func={(e) => handleInputChange(e)}
                  info={inputValue}
                  isConfirm
                  Pass={true}
                /> */}
                <Input
                  title="Phone"
                  name="phone"
                  type="number"
                  func={(e) => handleInputChange(e)}
                  info={inputValue}
                  isConfirmPass={false}
                />
                <Input
                  title="Address"
                  name="address"
                  type="text"
                  func={(e) => handleInputChange(e)}
                  info={inputValue}
                  isConfirmPass={false}
                />
                <button
                  type="submit"
                  onClick={signup}
                  className="rounded-2xl bg-[#ff254c] px-20 py-3 text-xl text-white drop-shadow-2xl hover:bg-[rgba(237,20,90,.8)] xl:mt-0"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="mx-auto flex w-[90%] items-center justify-center space-x-3 md:justify-start">
              <input
                type="checkbox"
                className="h-4 w-4"
                onClick={() => setShowError((prev) => !prev)}
              />
              <h3>
                I accept the
                <span
                  className="ml-1 cursor-pointer text-[rgba(237,20,90,.8)]"
                  onClick={() => {
                    setShowTerms(!showTerms);
                  }}
                >
                  Terms and Conditions
                </span>
              </h3>
            </div>
          </div>
        </div>
        <img
          src="https://hubio-dev.web.app/motivation-2.767392eb.webp"
          alt=""
          className="hidden xl:mr-auto xl:inline-block xl:h-min xl:w-[45vw]"
        />
      </div>
    </div>
  );
}

export default JoinTrainer;
