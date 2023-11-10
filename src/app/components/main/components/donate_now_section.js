"use client";
import React, { useState } from "react";
import Button from "../../button";
const DonateNowFormSection = () => {
    const [amount, setAmount] = useState(50);
    const [donationType, setDonationType] = useState("one-time");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("credit-card");

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleDonationTypeChange = (event) => {
        setDonationType(event.target.value);
    };

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="flex flex-col justify-center items-center bg-red-50 w-full p-4 md:w-7/12 rounded-lg overflow-hidden">
            <h1 className="text-3xl font-bold mb-10 text-black">
                Donation Form
            </h1>

            <form onSubmit={handleSubmit}>
                <div className="flex flex-row justify-between items-center mb-5">
                    <label className="mr-5">
                        How much would you like to donate?
                    </label>
                    <input
                        type="number"
                        value={amount}
                        onChange={handleAmountChange}
                        className="border rounded p-2 w-16"
                    />
                </div>

                <div className="flex flex-row justify-between items-center mb-5">
                    <label className="mr-5">Donation type:</label>
                    <select
                        value={donationType}
                        onChange={handleDonationTypeChange}
                        className="border rounded p-2"
                    >
                        <option value="one-time">One-time</option>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                    </select>
                </div>

                <div className="flex flex-col mb-5">
                    <label className="mb-2">Personal information:</label>

                    <input
                        type="text"
                        placeholder="First name"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        className="border rounded p-2"
                    />

                    <input
                        type="text"
                        placeholder="Last name"
                        value={lastName}
                        onChange={handleLastNameChange}
                        className="border rounded p-2 mt-2"
                    />

                    <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={handleEmailChange}
                        className="border rounded p-2 mt-2"
                    />
                </div>

                <div className="flex flex-col mb-5">
                    <label className="mb-2">Payment method:</label>

                    <select
                        value={paymentMethod}
                        onChange={handlePaymentMethodChange}
                        className="border rounded p-2"
                    >
                        <option value="credit-card">Credit card</option>
                        <option value="paypal">PayPal</option>
                        <option value="bank-transfer">Bank transfer</option>
                    </select>
                </div>

                <Button color="red-600" text="Donate" href="#submit" type="button" />
            </form>
        </div>
    );
};

export default DonateNowFormSection;
