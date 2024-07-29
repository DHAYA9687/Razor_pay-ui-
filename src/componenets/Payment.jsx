import React, { useState } from "react";
import { toast } from "react-toastify";
const Payment = () => {
  const [amount, setAmount] = useState("");
  const pay = {
    textAlign: "center",
    color: "blue",
  };
  const handleclick = () => {
    if (amount === "") {
      toast.error("Enter valid Amount");
    } else {
      var options = {
        key: "rzp_test_dwqgWjT46AsveD",
        key_secret: "Bf1uonE9Xsk38ZRVMtPQ5ddC",
        amount: amount * 100,
        currency: "INR",
        name: "Donation",
        description: "Donate for a cause",
        image: "https://cdn.razorpay.com/logos/BUVwvgaqVByGp2_large.png",
        handler: function (response) {
          toast.success(response.razorpay_payment_id);
          toast.success("payment successfull!!!");
        },
        prefill: {
          name: "Dhaya S",
          email: "sekarsekar5017@gmail.com",
          contact: "6369474748",
        },
        notes: {
          address: "Chennai",
        },
        theme: {
          color: "#800020",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };

  return (
    <div style={pay}>
      <h1>RAZORPAY GATEWAY Integration using React </h1>
      <input
        type="text"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={handleclick}> pay now</button>
    </div>
  );
};

export default Payment;
