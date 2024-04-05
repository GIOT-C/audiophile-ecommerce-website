import { useState } from "react";
import styles from "../Styles/FormComponent.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { MainContext } from "../../App";

type Inputs = {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  eMoneyNumber: string;
  eMoneyPin: string;
};

function FormComponent() {
  const context = useContext(MainContext);
  const [selectedOption, setSelectedOption] = useState<string>("optionOne");

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const emailValidationRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = () => {
    if (
      errors.name &&
      errors.email &&
      errors.phoneNumber &&
      errors.address &&
      errors.zipCode &&
      errors.city &&
      errors.country &&
      errors.eMoneyNumber &&
      errors.eMoneyPin
    ) {
      context?.setStateOfFinishedOrder(false);
    } else {
      context?.setStateOfFinishedOrder(true);
    }
  };

  return (
    <>
      <div className={styles.parentContainer}>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h5 className={styles.headerText}>BILLING DETAILS</h5>
            <div className={styles.billingDeatailsContainer}>
              <div>
                <div className={styles.labelContainer}>
                  <label
                    htmlFor="name"
                    className={
                      errors.name?.message
                        ? styles.labelForInvalidFormat
                        : styles.labelForCorrectFormat
                    }
                  >
                    Name
                  </label>
                  {errors.name?.message && (
                    <span className={styles.errorMessages}>
                      {errors.name?.message}
                    </span>
                  )}
                </div>

                <input
                  type="text"
                  id="name"
                  placeholder="Giorgi Otarashvili"
                  className={`${styles.formInput} ${
                    errors.name?.message
                      ? styles.inputForInvalidFormat
                      : styles.inputForCorrectFormat
                  }`}
                  {...register("name", {
                    required: "This field is required",
                    minLength: { message: "Minimum length is 3", value: 3 },
                    pattern: {
                      value: /^[A-Za-z ]+$/i,
                      message: "Enter only letters",
                    },
                  })}
                />
              </div>

              <div>
                <div className={styles.labelContainer}>
                  <label
                    htmlFor="email"
                    className={
                      errors.email?.message
                        ? styles.labelForInvalidFormat
                        : styles.labelForCorrectFormat
                    }
                  >
                    Email address
                  </label>
                  {errors.email?.message && (
                    <span className={styles.errorMessages}>
                      {errors.email?.message}
                    </span>
                  )}
                </div>
                <input
                  type="email"
                  id="email"
                  placeholder="Giootarashvili77@gmail.com"
                  className={`${styles.formInput} ${
                    errors.email?.message
                      ? styles.inputForInvalidFormat
                      : styles.inputForCorrectFormat
                  }`}
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: emailValidationRegex,

                      message: "Not a valid email",
                    },
                  })}
                />
              </div>

              <div>
                <div className={styles.labelContainer}>
                  <label
                    htmlFor="phoneNumber"
                    className={
                      errors.phoneNumber?.message
                        ? styles.labelForInvalidFormat
                        : styles.labelForCorrectFormat
                    }
                  >
                    Phone Number
                  </label>
                  {errors.phoneNumber?.message && (
                    <span className={styles.errorMessages}>
                      {errors.phoneNumber?.message}
                    </span>
                  )}
                </div>
                <input
                  type="number"
                  id="phoneNumber"
                  placeholder="+995511410903"
                  className={`${styles.formInput} ${
                    errors.phoneNumber?.message
                      ? styles.inputForInvalidFormat
                      : styles.inputForCorrectFormat
                  }`}
                  {...register("phoneNumber", {
                    required: "This field is required",
                    minLength: { message: "Not a valid number", value: 7 },
                  })}
                />
              </div>
            </div>

            <div className={styles.shippingInfoContainer}>
              <h5 className={styles.headerText}>SHIPPING INFO</h5>

              <div className={styles.addressInputContainer}>
                <div className={styles.labelContainer}>
                  <label
                    htmlFor="phoneNumber"
                    className={
                      errors.address?.message
                        ? styles.labelForInvalidFormat
                        : styles.labelForCorrectFormat
                    }
                  >
                    Address
                  </label>
                  {errors.address?.message && (
                    <span className={styles.errorMessages}>
                      {errors.address?.message}
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  id="address"
                  placeholder="Paliashvili 24"
                  className={`${styles.formInput} ${
                    errors.address?.message
                      ? styles.inputForInvalidFormat
                      : styles.inputForCorrectFormat
                  }`}
                  {...register("address", {
                    required: "This field is required",
                    minLength: { message: "Not a valid address", value: 10 },
                  })}
                />
              </div>

              <div className={styles.shippingDeatailsContainer}>
                <div>
                  <div className={styles.labelContainer}>
                    <label
                      htmlFor="zipCode"
                      className={
                        errors.zipCode?.message
                          ? styles.labelForInvalidFormat
                          : styles.labelForCorrectFormat
                      }
                    >
                      ZIP code
                    </label>
                    {errors.zipCode?.message && (
                      <span className={styles.errorMessages}>
                        {errors.zipCode?.message}
                      </span>
                    )}
                  </div>

                  <input
                    type="number"
                    id="zipCode"
                    placeholder="1234"
                    className={`${styles.formInput} ${
                      errors.zipCode?.message
                        ? styles.inputForInvalidFormat
                        : styles.inputForCorrectFormat
                    }`}
                    {...register("zipCode", {
                      required: "This field is required",
                      minLength: {
                        message: "Must be at least 4 digits long",
                        value: 4,
                      },
                    })}
                  />
                </div>

                <div>
                  <div className={styles.labelContainer}>
                    <label
                      htmlFor="city"
                      className={
                        errors.city?.message
                          ? styles.labelForInvalidFormat
                          : styles.labelForCorrectFormat
                      }
                    >
                      City
                    </label>
                    {errors.city?.message && (
                      <span className={styles.errorMessages}>
                        {errors.city?.message}
                      </span>
                    )}
                  </div>
                  <input
                    type="text"
                    id="city"
                    placeholder="Tbilisi"
                    className={`${styles.formInput} ${
                      errors.city?.message
                        ? styles.inputForInvalidFormat
                        : styles.inputForCorrectFormat
                    }`}
                    {...register("city", {
                      required: "This field is required",
                      minLength: {
                        message: "City name is too short",
                        value: 3,
                      },
                      pattern: {
                        value: /^[A-Za-z ]+$/i,
                        message: "Enter only letters",
                      },
                    })}
                  />
                </div>

                <div>
                  <div className={styles.labelContainer}>
                    <label
                      htmlFor="country"
                      className={
                        errors.country?.message
                          ? styles.labelForInvalidFormat
                          : styles.labelForCorrectFormat
                      }
                    >
                      Country
                    </label>
                    {errors.country?.message && (
                      <span className={styles.errorMessages}>
                        {errors.country?.message}
                      </span>
                    )}
                  </div>
                  <input
                    type="text"
                    id="country"
                    placeholder="Georgia"
                    className={`${styles.formInput} ${
                      errors.country?.message
                        ? styles.inputForInvalidFormat
                        : styles.inputForCorrectFormat
                    }`}
                    {...register("country", {
                      required: "This field is required",
                      minLength: {
                        message: "Country name is too short",
                        value: 4,
                      },
                      pattern: {
                        value: /^[A-Za-z ]+$/i,
                        message: "Enter only letters",
                      },
                    })}
                  />
                </div>
              </div>
            </div>

            <div className={styles.paymentMethodContainer}>
              <h5 className={styles.headerText}>PAYMENT DETAILS</h5>

              <div className={styles.paymentMethod}>
                <div className={styles.textContainer}>
                  <p>Payment method</p>
                </div>

                <div className={styles.choiceContainer}>
                  <div
                    className={`${styles.choiceButton} 
                 ${
                   selectedOption === "optionOne"
                     ? styles.selectedChoiceButton
                     : ""
                 }`}
                    onClick={() => handleOptionChange("optionOne")}
                  >
                    <div className={styles.radioButton}>
                      <div className={styles.outerCircle}>
                        {selectedOption === "optionOne" ? (
                          <div className={styles.innerCircle}></div>
                        ) : (
                          ""
                        )}
                      </div>
                      <p
                        className={`${styles.paymentMethodName}
                      ${
                        selectedOption === "optionOne"
                          ? styles.selectedPaymentMethodName
                          : ""
                      }
                      `}
                      >
                        e-Money
                      </p>
                    </div>
                  </div>

                  <div
                    className={`${styles.choiceButton} 
                 ${
                   selectedOption === "optionTwo"
                     ? styles.selectedChoiceButton
                     : ""
                 }
                 `}
                    onClick={() => handleOptionChange("optionTwo")}
                  >
                    <div className={styles.radioButton}>
                      <div className={styles.outerCircle}>
                        {selectedOption === "optionTwo" ? (
                          <div className={styles.innerCircle}></div>
                        ) : (
                          ""
                        )}
                      </div>
                      <p
                        className={`${styles.paymentMethodName}
                      ${
                        selectedOption === "optionTwo"
                          ? styles.selectedPaymentMethodName
                          : ""
                      }
                      `}
                      >
                        Cash on Delivery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {selectedOption === "optionOne" ? (
                  <div className={styles.eMoneyForm}>
                    <div>
                      <div className={styles.labelContainer}>
                        <label
                          htmlFor="e-MoneyNumber"
                          className={
                            errors.eMoneyNumber?.message
                              ? styles.labelForInvalidFormat
                              : styles.labelForCorrectFormat
                          }
                        >
                          e-Money Number
                        </label>
                        {errors.eMoneyNumber?.message && (
                          <span className={styles.errorMessages}>
                            {errors.eMoneyNumber?.message}
                          </span>
                        )}
                      </div>

                      <input
                        type="number"
                        id="e-MoneyNumber"
                        placeholder="123456789"
                        className={`${styles.formInput} ${
                          errors.eMoneyNumber?.message
                            ? styles.inputForInvalidFormat
                            : styles.inputForCorrectFormat
                        }`}
                        {...register("eMoneyNumber", {
                          required: "This field is required",
                          minLength: {
                            message: "number is too short",
                            value: 9,
                          },
                          maxLength: {
                            message: "e-money number is too long",
                            value: 9,
                          },
                        })}
                      />
                    </div>

                    <div>
                      <div className={styles.labelContainer}>
                        <label
                          htmlFor="e-MoneyPin"
                          className={
                            errors.eMoneyPin?.message
                              ? styles.labelForInvalidFormat
                              : styles.labelForCorrectFormat
                          }
                        >
                          e-Money Pin
                        </label>
                        {errors.eMoneyPin?.message && (
                          <span className={styles.errorMessages}>
                            {errors.eMoneyPin?.message}
                          </span>
                        )}
                      </div>

                      <input
                        type="number"
                        id="e-MoneyPin"
                        placeholder="1234"
                        className={`${styles.formInput} ${
                          errors.eMoneyPin?.message
                            ? styles.inputForInvalidFormat
                            : styles.inputForCorrectFormat
                        }`}
                        {...register("eMoneyPin", {
                          required: "This field is required",
                          minLength: {
                            message: "e-Money PIN is too short",
                            value: 4,
                          },
                          maxLength: {
                            message: "e-Money PIN is too long",
                            value: 4,
                          },
                        })}
                      />
                    </div>
                  </div>
                ) : (
                  <div className={styles.cashMethod}>
                    <FontAwesomeIcon
                      icon={faHandHoldingDollar}
                      className={styles.faHandHoldingDollar}
                    />
                    <p>
                      The ‘Cash on Delivery’ option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </p>
                  </div>
                )}
              </div>
            </div>
            {context?.quantityOfProductInCart &&
            context?.quantityOfProductInCart > 0 ? (
              <button type="submit" className={styles.button}>
                CONTINUE & PAY
              </button>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default FormComponent;
