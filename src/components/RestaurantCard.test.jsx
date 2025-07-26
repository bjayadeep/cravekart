/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import RestaurantCard from "./RestaurantCard";
import resInfo from "../mocks/resCardMock.json"; 


it("should render RestaurantCard component with props Data",()=>{
    
    render(<RestaurantCard restaurant={{ info: resInfo }}/>)

    expect(screen.getByText("Tasty Biryani")).toBeInTheDocument();
    expect(screen.getByText("Biryani, Indian")).toBeInTheDocument();
    expect(screen.getByText(/4.2/)).toBeInTheDocument();
});

