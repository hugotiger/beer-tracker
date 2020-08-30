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

function Headline({ children }) {
  return (
    <>
      <h2>
        History{" "}
        <span
          style={{
            opacity: 0.5,
            fontWeight: 400,
            fontSize: 14,
            marginLeft: "auto",
          }}
        >
          (past 30 days)
        </span>
      </h2>
      {children}
    </>
  );
}

export function BeerList() {
  const {
    beers,
    isLoading,
    error,
    showCount,
    fetchBeersFromPast30Days,
    removeBeers,
    increaseCount,
  } = useContext(BeerContext);

  const [openEvent, setOpenEvent] = useState(null);

  useEffect(() => {
    fetchBeersFromPast30Days();
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
      <Headline>
        <p>Loading...</p>
      </Headline>
    );
  }

  if (error) {
    return (
      <Headline>
        <p>{error}</p>
      </Headline>
    );
  }

  return (
    <div>
      <Headline></Headline>
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
                    if (!isLoading) removeBeers(beers);
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
        </>
      )}
    </div>
  );
}
