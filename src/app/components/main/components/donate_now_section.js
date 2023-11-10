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
        <div className="flex flex-col gap-8 justify-center items-center bg-red-50 w-full p-4 md:w-7/12 rounded-lg overflow-hidden">
            <h1 className="text-3xl font-bold text-black">Donation Form</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="flex flex-row justify-between items-center gap-4">
                    <label className="text-sm font-semibold">
                        How much would you like to donate?
                    </label>
                    <input
                        type="number"
                        value={amount}
                        onChange={handleAmountChange}
                        className="rounded-lg outline-0 p-4 border border-slate-100 text-sm text-slate-800 w-20"
                    />
                </div>

                <div className="flex flex-row justify-between items-center gap-4">
                    <label className="text-sm font-semibold">
                        Donation type:
                    </label>
                    <select
                        value={donationType}
                        onChange={handleDonationTypeChange}
                        className="rounded-lg outline-0 p-4 border border-slate-100 text-sm text-slate-800"
                    >
                        <option value="one-time">One-time</option>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold">
                        Personal information:
                    </label>

                    <input
                        type="text"
                        placeholder="First name"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        className="rounded-lg outline-0 p-4 border border-slate-100 text-sm text-slate-800"
                    />

                    <input
                        type="text"
                        placeholder="Last name"
                        value={lastName}
                        onChange={handleLastNameChange}
                        className="rounded-lg outline-0 p-4 border border-slate-100 text-sm text-slate-800"
                    />

                    <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={handleEmailChange}
                        className="rounded-lg outline-0 p-4 border border-slate-100 text-sm text-slate-800 "
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold">
                        Payment method:
                    </label>

                    <select
                        value={paymentMethod}
                        onChange={handlePaymentMethodChange}
                        className="rounded-lg outline-0 p-4 border border-slate-100 text-sm text-slate-800"
                    >
                        <option value="credit-card">Credit card</option>
                        <option value="paypal">PayPal</option>
                        <option value="bank-transfer">Bank transfer</option>
                    </select>
                </div>
                <div className="flex flex-row justify-between items-center gap-4">
                <div className="flex flex-col justify-start items-start gap-1">
                    <h2 className="text-sm font-bold text-slate-800">
                        Total Donations
                    </h2>
                    <h4 className="text-xl font-extrabold text-red-600">
                        ${amount}
                    </h4>
                </div>
                    <Button
                        color="red-600"
                        text="Donate"
                        href="#submit"
                        type="button"
                    />
                </div>
            </form>
        </div>
    );
};

export default DonateNowFormSection;
