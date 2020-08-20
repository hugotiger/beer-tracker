import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/globalState/GlobalState";
import { Button, TextField } from "../components";

export function AddEvent() {
  const [amount, setAmount] = useState(1);
  const [comment, setComment] = useState("");
  const { addEvent, isLoading, error } = useContext(GlobalContext);

  function handleSubmit(e) {
    e.preventDefault();
    addEvent({ amount: +amount, comment });
    setComment("");
  }

  return (
    <div>
      <h2>Add beers</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          type="number"
          name="amount"
          label="Number of beers"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          inputMode="numeric"
          min="1"
          max="99"
          placeholder="Be honest..."
          required
        />
        <TextField
          type="text"
          name="comment"
          label="Comment (optional)"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          minLength={1}
          maxLength={35}
          autoComplete="off"
          placeholder="How was it?" // TODO: Bättre
        />
        <Button
          type="submit"
          disabled={isLoading || error}
          whileTap={{ scale: isLoading ? 1 : 0.98 }}
        >
          Bottoms up!
        </Button>
      </form>
    </div>
  );
}
