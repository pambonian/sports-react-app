import { render, screen } from '@testing-library/react';
import Inbox from './Inbox'

test('renders dashboard tag', () => {
  render(<Inbox />);
  const spanElement = screen.getByText(/Sent Mail/i);
  expect(spanElement).toBeInTheDocument();
});

test('renders customers tag', () => {
  render(<Inbox />);
  const spanElement = screen.getByText(/Folders/i);
  expect(spanElement).toBeInTheDocument();
});

test('renders authentication tag', () => {
  render(<Inbox />);
  const spanElement = screen.getByText(/Compose/i);
  expect(spanElement).toBeInTheDocument();
});

test('renders payments tag', () => {
  render(<Inbox />);
  const spanElement = screen.getByText(/Starred/i);
  expect(spanElement).toBeInTheDocument();
});

test('renders transfers tag', () => {
  render(<Inbox />);
  const spanElement = screen.getByText(/Logout/i);
  expect(spanElement).toBeInTheDocument();
});
  
test('renders balance tag', () => {
  render(<Inbox />);
  const spanElement = screen.getByText(/Account/i);
  expect(spanElement).toBeInTheDocument();
});
  
test('renders questions tag', () => {
  render(<Inbox />);
  const spanElement = screen.getByText(/Profile/i);
  expect(spanElement).toBeInTheDocument();
}); 
  
