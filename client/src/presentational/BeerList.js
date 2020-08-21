import React, { useEffect, useContext, useState } from "react";
import { BeerContext } from "../context/beers/BeerContext";
import {
  Loader,
  List,
  ListItem,
  ListButton,
  ListItemContent,
} from "../components";
import ChevronIcon from "../assets/chevron-down.svg";

export function BeerList() {
  const {
    beers,
    isLoading,
    error,
    showCount,
    fetchBeersFromPastWeek,
    removeBeer,
    increaseCount,
  } = useContext(BeerContext);

  const [openEvent, setOpenEvent] = useState(null);

  useEffect(() => {
    fetchBeersFromPastWeek();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Closes open event if beers are added/removed
  useEffect(() => {
    setOpenEvent(null);
  }, [beers]);

  // Should only show if we don't already have any fetched beers,
  // else there's a different loading animation
  if (isLoading && !beers) {
    return (
      <>
        <h2>History</h2>
        <p>Loading...</p>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h2>History</h2>
        <p>{error}</p>
      </>
    );
  }

  return (
    <div>
      <h2>History</h2>
      {/* // Only renders list if length is greater than zero. Else it renders a "no history" message */}
      {beers && (
        <>
          {beers.length === 0 && <p>No history yet</p>}
          <List
            // Hide list if there's no events
            style={
              beers.length >= 1 ? { display: "block" } : { display: "none" }
            }
          >
            {isLoading && <Loader key="loader" />}
            {beers.slice(0, showCount).map((beers, i) => (
              <ListItem
                key={beers._id}
                onClick={() => {
                  openEvent === i ? setOpenEvent(null) : setOpenEvent(i);
                }}
              >
                <ListItemContent
                  open={openEvent === i}
                  amount={beers.amount}
                  timestamp={beers.createdAt}
                  comment={beers.comment}
                  handleDelete={() => {
                    if (!isLoading) removeBeer(beers);
                  }}
                />
              </ListItem>
            ))}
            {beers && beers.length > showCount && (
              <ListButton
                key="list-btn"
                onClick={(e) => {
                  setOpenEvent(null);
                  increaseCount();
                }}
              >
                Show more
                <img src={ChevronIcon} alt="Arrow down" />
              </ListButton>
            )}
          </List>
          {/* <p style={{ textAlign: "center" }}>Show more
              font-size: 1.4rem;
    padding: 0.7rem 1.4rem;
    width: fit-content;
    margin: 0 auto;
    color: #2576f7;
    cursor: pointer;
    border-radius: 4px;
    font-weight: 500;
          
          </p> */}
        </>
      )}
    </div>
  );
}
